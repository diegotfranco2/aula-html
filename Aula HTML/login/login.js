const botao = document.getElementById('btn-submit');
const inputEmail = document.getElementById('campoEmail');
const inputSenha = document.getElementById('campoSenha');

// console.log(botao);

botao.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(inputEmail.value);
    console.log(inputSenha.value);
})