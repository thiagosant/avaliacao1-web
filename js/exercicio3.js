var color = prompt("Informe uma das cores a seguir AZUL, VERDE e VERMELHO:");

if (color == "azul") {
  alert("1. AZUL: #0000FF");
  document.getElementById("background").style.background = "#0000FF";
}
else if (color == "verde") {
  alert("2. VERDE: #00FF00");
  document.getElementById("background").style.background = "#00FF00";
}
else if (color == "vermelho") {
  alert("3. VERMELHO: #FF0000");
  document.getElementById("background").style.background = "#FF0000";
}
else {
  alert("Cor Invalida");
}