//alert("Olá HCODE!");

var a = 10;
var b = 33;

function somar(a, b){

	return (a + a);
}

console.log(somar(2,5));
document.getElementById("btn-calcular").onclick = function(){
	
	var valorA = document.getElementById("valor-a").value;
	var valorB = document.getElementById("valor-b").value;

		console.log(parseInt(valorA) + parseInt(valorB));
}