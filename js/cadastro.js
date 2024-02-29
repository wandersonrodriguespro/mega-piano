let email = document.querySelector("#email");
let labelEmail = document.querySelector("#label-email");
let validEmail = false;

let telefone = document.querySelector("#phone");
let labelTelefone = document.querySelector("#label-phone");
let validTelefone = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#label-senha");
let validSenha = false;

let confirmSenha = document.querySelector("#repetsenha");
let labelConfirmSenha = document.querySelector("#label-repetsenha");
let validConfirmSenha = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

let btnCadastrar = document.querySelector(".btn-pg-cadastro");

email.addEventListener("keyup", () => {
  if (email.value.length <= 13) {
    labelEmail.setAttribute("style", "color: #ef3cb5");
    labelEmail.innerHTML = "Insira seu melhor e-mail";
    validEmail = false;
  } else {
    labelEmail.setAttribute("style", "color: #fff");
    labelEmail.innerHTML = "E-mail";
    validEmail = true;
  }
});

telefone.addEventListener("keyup", () => {
  if (telefone.value.length <= 9) {
    labelTelefone.setAttribute("style", "color: #ef3cb5");
    labelTelefone.innerHTML = "Insira seu Telefone com DDD";
    validTelefone = false;
  } else {
    labelTelefone.setAttribute("style", "color: #fff");
    labelTelefone.innerHTML = "Telefone:";
    validTelefone = true;
  }
});

senha.addEventListener("keyup", () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute("style", "color: #ef3cb5");
    labelSenha.innerHTML = "Insira uma senha com no minimo 6 caracteres";
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: #fff");
    labelSenha.innerHTML = "Digite sua senha:";
    validSenha = true;
  }
});

confirmSenha.addEventListener("keyup", () => {
  if (senha.value !== confirmSenha.value) {
    labelConfirmSenha.setAttribute("style", "color: #ef3cb5");
    labelConfirmSenha.innerHTML = "As senhas não conferem";
    validConfirmSenha = false;
  } else {
    labelConfirmSenha.setAttribute("style", "color: #fff");
    labelConfirmSenha.innerHTML = "Repetir senha:";
    validConfirmSenha = true;
  }
});

btnCadastrar.addEventListener("click", function () {
    if (validEmail && validTelefone && validSenha && validConfirmSenha) {
      let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

      listaUser.push({
        emailCad: email.value,
        telefoneCad: telefone.value,
        senhaCad: senha.value,
      });

      localStorage.setItem("listaUser", JSON.stringify(listaUser));

      msgSuccess.setAttribute("style", "display: block");
      msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>";
      msgError.setAttribute("style", "display: none");
      msgError.innerHTML = "";

      setTimeout(() => {
        window.location.href = "/pages/login.html";
      }, 3000);
    } else {
      msgError.setAttribute("style", "display: block");
      msgError.innerHTML = "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>";
      msgSuccess.innerHTML = "";
      msgSuccess.setAttribute("style", "display: none");
    }
})