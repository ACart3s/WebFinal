const email = document.getElementById("chanchito-correo");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Chanchito correos por favor!");
  } else {
    email.setCustomValidity("");
  }
});
