let total = localStorage.getItem("varrec3");
if (total == null) total = 0;

input3 = document.getElementById("valorInput3");
///////////////////////////////////////////////////////////////////////////////////////////////////////
const Conteudo = document.getElementById("listamove");
const elementosSalvos = localStorage.getItem("meusElementos");
if (elementosSalvos) {
  Conteudo.innerHTML = elementosSalvos;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function formatarNumero(numero) {
  return parseFloat(numero.replace(",", ".")).toFixed(2).replace(".", ",");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("atualizarBtn3").addEventListener("click", function () {
  window.var2 = 1; /////////////////////////////////////
  addlistamove();
});
document.getElementById("atualizarBtn4").addEventListener("click", function () {
  limpa();
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
function addlistamove() {
  var Conteudo = document.getElementById("listamove");
  var prg = document.createElement("div");

  if (parseFloat(input3.value.trim()) >= 0)
    prg.textContent = formatarNumero(input3.value.trim()) + " R$";

  if (parseFloat(input3.value.trim()) < 0)
    prg.textContent =
      formatarNumero(input3.value.trim()).replace("-", "") + " R$";

  prg.style.width = "75vw";
  prg.style.borderBottom = "2px solid #A1A1A1";
  prg.style.paddingBottom = "5px";
  prg.style.paddingTop = "5px";

  if (document.getElementById("tipo").value == 0) {
    prg.style.color = "blue";
    prg.textContent = prg.textContent + " Entrada";
    total = parseFloat(total) + parseFloat(input3.value.trim());
  }

  if (document.getElementById("tipo").value == 1) {
    prg.style.color = "red";
    prg.textContent = prg.textContent + " Saída";
    total = parseFloat(total) - parseFloat(input3.value.trim());
  }

  if (prg.textContent !== "") {
    Conteudo.appendChild(prg);
    input3.value = "";
    localStorage.setItem("meusElementos", Conteudo.innerHTML);
    localStorage.setItem("varrec3", total);
  } else {
    alert("Por favor, insira um valor no campo de entrada.");
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function limpa() {
  localStorage.clear("meusElementos");
  localStorage.clear("varrec3");
  Conteudo.innerHTML = "";
}
