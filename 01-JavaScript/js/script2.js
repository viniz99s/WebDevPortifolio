function calcularMedias( notas ){
    var soma = 0;
    for(c = 0; c < notas.length; c++){
        soma += parseInt(notas[c]);
    }

    var media = soma / notas.length; 
    return media;
}

function aprovacao( notas ){

    let media = calcularMedias ( notas );

    let condicao = media >= 7 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado:' + condicao;
}

document.getElementById('formulario_01').addEventListener('submit', function( evento ){

    evento.preventDefault();
    evento.stopPropagation();

    if(this.classList.contains('erro')){
        return false;
    }

    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()){
        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)): 0;

        if(typeof numero == "number"){
            notas.push(numero);
        }
    }

    console.log(notas);

    texto = aprovacao(notas);

    document.getElementById('resultado').innerHTML = texto;
});

function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value == ""){
            document.querySelectorAll('.mensagem').innerHTML = "Verifique os campoos em vermelho."
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false
        }else{
            document.querySelector('.mensagem').innerHTML = ""
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    });
}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value.match(/[0-9]*/) && this.value >= 0)
        {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
        else
        {
            document.querySelector('.mensagem').innerHTML = "Verifique os dados.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

function validaEmail(elemento){
    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;
        if(this.value.match(emailValido))
        {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
        else
        {
            document.querySelector('.mensagem').innerHTML = "Verifique os dados.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

//Exercício valida UF
function validaUF(elemento){
    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value.match(/[a-z]2/))
        {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
        else
        {
            document.querySelector('.mensagem').innerHTML = "Verifique os dados.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');

for(let emFoco of camposObrigatorios){
    validaCampo(emFoco);
}

for(let emFoco of camposNumericos){
    validaCampoNumerico(emFoco);
}

for(let emFoco of camposEmail){
    validaCampoNumerico(emFoco);
}