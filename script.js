const divSenhaGerada = document.getElementById("senha_gerada_id");
const btnGerarSenha = document.getElementById("btn_gerar_senha");

let senhaGerada = "";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const tamanhoDaSenha = 15;

function gerarSenha() {
  senhaGerada = "";

  for (let i = 0; i < tamanhoDaSenha; i++) {
    let indexNumeroAleatorio = Math.floor(Math.random() * numeros.length);

    let indexLetraMinusculaAleatoria = Math.floor(
      Math.random() * letrasMinusculas.length
    );

    let indexLetraMaiusculaAleatoria = Math.floor(
      Math.random() * letrasMaiusculas.length
    );

    let caractereAleatorio = Math.floor(Math.random() * 3); // 0, 1, 2

    if (caractereAleatorio === 0) {
      senhaGerada += letrasMaiusculas[indexLetraMaiusculaAleatoria];
    } else if (caractereAleatorio === 1) {
      senhaGerada += letrasMinusculas[indexLetraMinusculaAleatoria];
    } else {
      senhaGerada += numeros[indexNumeroAleatorio];
    }
  }

  divSenhaGerada.textContent = senhaGerada;
}

btnGerarSenha.addEventListener("click", gerarSenha);
