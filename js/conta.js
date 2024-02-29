const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const userName = document.querySelector("#name-exibicao-conta");
const userEmail = document.querySelector("#endereco-email-conta");
const userPhone = document.querySelector("#phone-conta");

userName.value = userLogado.email;
userEmail.value = userLogado.email;
userPhone.value = userLogado.telefone;
