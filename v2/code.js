// if(window.var1==1){
//     hey();
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////
function formatarNumero(numero) {
    return parseFloat(numero.replace(',', '.')).toFixed(2).replace('.', ',');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
var varrecaux1 = localStorage.getItem('varrec1');
if (varrecaux1 == null) varrecaux1 = 0;
document.getElementById('mnld12txt').textContent = parseFloat(varrecaux1).toFixed(2) + " R$";

var varrecaux2 = localStorage.getItem('varrec2');
if (varrecaux2 == null) varrecaux2 = 0;
document.getElementById('mnld22txt').textContent = parseFloat(varrecaux1 - varrecaux2).toFixed(2) + " R$";

atualizarEstilo();
//////////////////////////////////////////////////////////////////////////////////////////////////////

function rpp2() {
    window.location.href = "moviment.html";
}

function rpp4() {
    window.location.href = "marcacao.html";
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function atualizarEstilo() {
    var paragrafo_mnld12txt = document.getElementById('mnld12txt');
    var texto_mnld12txt = paragrafo_mnld12txt.textContent.trim();
    var numero_mnld12txt = parseFloat(texto_mnld12txt.replace(' R$', '').replace(',', '.'));

    var paragrafo_mnld22txt = document.getElementById('mnld22txt');
    var texto_mnld22txt = paragrafo_mnld22txt.textContent.trim();
    var numero_mnld22txt = parseFloat(texto_mnld22txt.replace(' R$', '').replace(',', '.'));

    if (0 <(numero_mnld22txt)) {
        paragrafo_mnld22txt.style.color = 'blue';
    } 
    
    else if (0 >(numero_mnld22txt)) {
        paragrafo_mnld22txt.style.color = 'red';
    } 
    
    else {
        paragrafo_mnld22txt.style.color = 'black';
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function atualizarValor(x, z) {
    var novoValor = document.getElementById(x).value;
    novoValor = parseFloat(novoValor.replace(',', '.'));

    if (z == 1) {
        localStorage.setItem('varrec1', novoValor);

        varrecaux1 = novoValor;

        document.getElementById('mnld12txt').textContent = formatarNumero(document.getElementById(x).value) + " R$";
        document.getElementById('mnld22txt').textContent = (novoValor - varrecaux2).toFixed(2) + " R$";
        atualizarEstilo();

        const agora = new Date();
        const mes = agora.getMonth();
        myBarChart.data.datasets[0].data[mes] = parseFloat(novoValor);
        myBarChart.update();
    } else if (z == 2) {
        localStorage.setItem('varrec2', novoValor);

        varrecaux2 = novoValor;

        document.getElementById('mnld22txt').textContent = (varrecaux1 - novoValor).toFixed(2) + " R$";
        atualizarEstilo();
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
    document.getElementById('atualizarBtn1').addEventListener('click', function() {
        if(document.getElementById('valorInput1').value == "") document.getElementById('valorInput1').value = "0";
        atualizarValor('valorInput1',1);
    });

    document.getElementById('atualizarBtn2').addEventListener('click', function() {
        if(document.getElementById('valorInput2').value == "") document.getElementById('valorInput2').value = "0";
        atualizarValor('valorInput2',2);
    });
///////////////////////////////////////////////////////////////////////////////////////////////////////
let ctx1 = document.getElementById('myChart');
let myBarChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEC'],
        datasets: [{
            label: 'SALDO',
            data: [10, 9, 12, 19, 50, 7, 0, ,0 ,0 ,0 ,0 ,0],
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(32, 171, 152, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
const agora = new Date();
const mes = agora.getMonth();
myBarChart.data.datasets[0].data[mes] = parseFloat(document.getElementById('mnld12txt').textContent.replace(' R$', '').replace(',', '.'));
myBarChart.update();
///////////////////////////////////////////////////////////////////////////////////////////////////////
var data = {
    labels: ['Alimentação', 'Lazer', 'Moradia', 'Transporte', 'Compras', 'Outro'],
    datasets: [{
        data: [1,1,1,1,1,1],
        backgroundColor: ["#F312FF", "#FF1212", "#A112FF", "#1232FF", "#12FFB8", "#E8FF12"]
    }]
};

var options = {
    responsive: true,
    title: {
        display: true,
        text: ''
    }
};

var ctx2 = document.getElementById("myPieChart").getContext('2d');
var myPieChart = new Chart(ctx2, {
    type: 'pie',
    data: data,
    options: options
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('atualizarBtn5').addEventListener('click', function() {
    let a = myPieChart.data.datasets[0].data[0] = Math.abs(parseFloat((document.getElementById('valorInput51').value.trim())));
    let b = myPieChart.data.datasets[0].data[1] = Math.abs(parseFloat((document.getElementById('valorInput52').value.trim())));
    let c = myPieChart.data.datasets[0].data[2] = Math.abs(parseFloat((document.getElementById('valorInput53').value.trim())));
    let d = myPieChart.data.datasets[0].data[3] = Math.abs(parseFloat((document.getElementById('valorInput54').value.trim())));
    let e = myPieChart.data.datasets[0].data[4] = Math.abs(parseFloat((document.getElementById('valorInput55').value.trim())));
    let f = myPieChart.data.datasets[0].data[5] = Math.abs(parseFloat((document.getElementById('valorInput56').value.trim())));
    myPieChart.update();

    if (isNaN(a)){a=0;}
    if (isNaN(b)){b=0;}
    if (isNaN(c)){c=0;}
    if (isNaN(d)){d=0;}
    if (isNaN(e)){e=0;}
    if (isNaN(f)){f=0;}

    var g = a + b + c + d + e + f;

    localStorage.setItem('varrec2', parseFloat(g));
    varrecaux2 = parseFloat(g);
    document.getElementById('mnld22txt').textContent = (varrecaux1 - varrecaux2).toFixed(2) + " R$";
    atualizarEstilo();
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
// function hey(){
        
//         var papo = window.var1;
        
//         novoValor = parseFloat(document.getElementById('mnld12txt').textContent.replace(' R$', '').replace(',', '.')) + (papo);
//         localStorage.setItem('varrec1', novoValor);
//         varrecaux1 = novoValor;

//         document.getElementById('mnld12txt').textContent = formatarNumero(parseFloat(document.getElementById('mnld12txt').textContent.replace(' R$', '').replace(',', '.')) + Math.abs(papo)) + " R$";
//         document.getElementById('mnld22txt').textContent = (novoValor - varrecaux2).toFixed(2) + " R$";
//         atualizarEstilo();

//         const agora = new Date();
//         const mes = agora.getMonth();
//         myBarChart.data.datasets[0].data[mes] = parseFloat(novoValor);
//         myBarChart.update();

//         window.var1=0;
//         window.var2=0;
// }