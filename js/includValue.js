const inputValor = document.getElementById("input-value-deposit");
const btnValores = document.querySelectorAll(".btn-value");

btnValores.forEach((btn) => {
  btn.addEventListener("click", () => {
    const valor = btn.dataset.valor;
    inputValor.value = valor;
  });
});
