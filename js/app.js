const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parr = document.getElementById("warnings");

form.addEventListener("submit", e => {
  e.preventDefault();
  let entrar = false;
  let warnings = "";
  let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  parr.innerHTML = "";
  if (nombre.value == "") {
    warnings += `❌ Este campo debe estar completo <br>`;
    entrar = true;
  }
  if (!validEmail.test(email.value)) {
    warnings += `❌ El mail no es válido <br>`;
    entrar = true;
  }
  if (mensaje.value == ""){
      warnings += `❌ No has escrito ningún mensaje <br>`
  }
  if (entrar) {
    parr.innerHTML = warnings;
  }else{
      parr.innerHTML = `✅ Enviado!`
  }
});

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

   value.topics = data.getAll("topics");

    console.log({ value });
  }

  const formu = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);


  