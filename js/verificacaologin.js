if (localStorage.getItem("token") === null) {
  alert("Você precisa estar logado para acessar esta página");
  window.location = "login.html";
}
