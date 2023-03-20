function saludo() {
  alert("BIENVENIDO AL PROYECTO");
  console.log("BIENVENIDO AL PROYECTO");
}

document.addEventListener("onload", saludo());

document.getElementById("boton-invisible").onclick = function () {
  console.log("Ocultamos la barra de navegacion");
  if (document.getElementById("navegacion").style.display != "none") {
    document.getElementById("navegacion").style.display = "none";
  } else {
    document.getElementById("navegacion").style.display = "flex";
  }
};