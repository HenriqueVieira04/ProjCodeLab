// window.var1=0;
// window.var2=0;
///////////////////////////////////////////////////////////////////////////////////////////////////////
const Conteudo = document.getElementById('listamove');
const elementosSalvos = localStorage.getItem('meusElementos');
if (elementosSalvos) {
    Conteudo.innerHTML = elementosSalvos;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function formatarNumero(numero) {
    return parseFloat(numero.replace(',', '.')).toFixed(2).replace('.', ',');
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('atualizarBtn3').addEventListener('click', function() {
    window.var2 = 1;/////////////////////////////////////
    addlistamove();
    
});
document.getElementById('atualizarBtn4').addEventListener('click', function() {
    limpa();
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
function addlistamove() {
    
    var Conteudo = document.getElementById('listamove');
    var prg = document.createElement('div');
    
    if(parseFloat(document.getElementById('valorInput3').value.trim())>=0)
        prg.textContent = formatarNumero(document.getElementById('valorInput3').value.trim())  + " R$";

    if(parseFloat(document.getElementById('valorInput3').value.trim())<0)
        prg.textContent = formatarNumero(document.getElementById('valorInput3').value.trim()).replace('-', '')  + " R$";

    prg.style.width = "75vw";
    prg.style.borderBottom = "2px solid #A1A1A1";
    prg.style.paddingBottom = "5px";
    prg.style.paddingTop = "5px";

    
    if(document.getElementById('tipo').value == 0){
        prg.style.color ="blue";
        prg.textContent = prg.textContent + " Entrada";
    }

    if(document.getElementById('tipo').value == 1){
        prg.style.color ="red";
        prg.textContent = prg.textContent + " Saída";
    }

    // window.var1 = window.var1 + parseFloat(document.getElementById('valorInput3').value.trim());

    if (prg.textContent !== ''){
        Conteudo.appendChild(prg);
        document.getElementById('valorInput3').value = '';
        localStorage.setItem('meusElementos', Conteudo.innerHTML);
    } 
    
    else {
        alert('Por favor, insira um valor no campo de entrada.');
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function limpa(){
    localStorage.clear('meusElementos');
    Conteudo.innerHTML = '';
}




