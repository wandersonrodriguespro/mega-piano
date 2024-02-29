const navRight = document.getElementById("nav-right");
const navLeft = document.getElementById("nav-left");

function toggleMenuRight(active) {
  if (active) {
    navRight.classList.add("active-right");
  } else {
    navRight.classList.remove("active-right");
  }
}

function toggleMenuLeft(active) {
  if (active) {
    navLeft.classList.add("active-left");
  } else {
    navLeft.classList.remove("active-left");
  }
}

// Mostrar Senha

const campoSenha = document.querySelector(".campo-senha");
const btnMostarSenha = document.querySelector(".btn-mostrar-senha");
const campoRepetirSenha = document.querySelector(".campo-repetir-senha");
const btnMostarRepetirSenha = document.querySelector(".btn-mostrar-repetir-senha");

btnMostarSenha.addEventListener("change", () => {
  const estadoAtualDoCampoDESenha = campoSenha.getAttribute("type") === "password" ? "text" : "password";

  campoSenha.setAttribute("type", estadoAtualDoCampoDESenha);
});

btnMostarRepetirSenha.addEventListener("change", () => {
  const estadoAtualDoCampoRepetirSenha = campoRepetirSenha.getAttribute("type") === "password" ? "text" : "password";

  campoRepetirSenha.setAttribute("type", estadoAtualDoCampoRepetirSenha);
});

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./login.html";
}
