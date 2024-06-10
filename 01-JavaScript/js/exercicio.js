let formulario_00 = document.getElementById('formulario_00');
formulario_00.addEventListener('submit', function(evento){

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
            document.querySelectorAll('.mensagem').innerHTML = "Dados incorretos."
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

        if(this.value.match(/^[0-9]*$/) && this.value >= 0)
        {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
        else
        {
            document.querySelector('.mensagem').innerHTML = "Dados incorretos.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

function validaCEP(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();

        const cepValido = /^\d5-\d3$/;  

        if (this.value.match(cepValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "Dados incorretos.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
    });
}

function validaEmail(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();

        const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

        if (this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "Dados incorretos.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
    });
}

//Exercício valida UF
function validaUF(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();

        // Expressão regular para validar dois caracteres maiúsculos
        const ufValido = /^[A-Z]{2}$/;

        if (this.value.match(ufValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "Dados incorretos.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
    });
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let campoCep = document.querySelectorAll('input.cep');
let camposEmail = document.querySelectorAll('input.email');
let campoUF = document.querySelectorAll('input.uf');

for(let emFoco of camposObrigatorios){
    validaCampo(emFoco);
}

for(let emFoco of camposNumericos){
    validaCampoNumerico(emFoco);
}

for(let emFoco of campoCep){
    validaCEP(emFoco);
}

for(let emFoco of camposEmail){
    validaEmail(emFoco);
}

for(let emFoco of campoUF){
    validaUF(emFoco);
}