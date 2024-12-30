
const btnLogar = document.querySelector("#logar");

btnLogar.addEventListener("click", () => {
  entrar();
});


function entrar() {
    let email = document.querySelector("#email");
    let senha = document.querySelector( "#senha" );

    const msgError = document.querySelector(".msg-error");

    let listaUser = []

    let userValid = {
        email: null,
        senha: null,
    }

    listaUser = JSON.parse(localStorage.getItem("listaUser"))

    listaUser?.forEach(item => {
        if (email.value === item.emailCad && senha.value === item.senhaCad) {
          userValid = {
            email: item.emailCad,
            senha: item.senhaCad,
            telefone: item.telefoneCad
          };
        }
    });

    if (email.value == userValid.email && senha.value == userValid.senha) {
      window.location.href = "../pages/pre-jogo.html";

      let mathRandon = Math.random().toString(16).substring(2);
      let token = mathRandon + mathRandon;

      localStorage.setItem("token", token);
      localStorage.setItem("userLogado", JSON.stringify(userValid));
    } else {
        msgError.setAttribute("style", "opacity: 1;");
    }
}
