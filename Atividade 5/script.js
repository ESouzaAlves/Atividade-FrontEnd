const inputTexto = document.getElementById("texto");

const button = document.getElementById('botao')

button.onclick = () => {
    //alert(`Digitei: ${inputTexto.value}`);
    alert('Digitei:' + inputTexto.value);
};

const inputSenha = document.getElementById("senha")

const button1 = document.getElementById('botao1')

button1.onclick = () => {
    alert(`A Senha é: ${inputSenha.value}`)
};