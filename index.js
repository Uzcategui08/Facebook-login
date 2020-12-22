const nombre = document.querySelector(".username");
const password = document.querySelector(".password");
const p = document.querySelector(".warning");

Form.addEvenListener("submit", (e) => {
  e.preventDefault();
  function checkInputs() {
    let warning = "";
    let ingresar = false;
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!regexEmail.test(username.value)) {
      warning += "El Email no es valido";
      ingresar = true;
    }
    if (password.value.length < 8) {
      warning += "La contraseña no es valida";
      entrar = true;
    }
    if (ingresar) {
      p.innerHTML = warning;
    }
    console.log(password.value);
    console.log(username.value);
  }
});
