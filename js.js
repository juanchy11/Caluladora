function getValues(){

var num1 = document.getElementById('numero1').value;
var num2 = document.getElementById('numero2').value;

return[num1, num2];
}

function showResult(value){
	document.getElementById('resultado').innerHTML = value;

}

function suma(){
var values = getValues();
showResult(sum(values[0], values[1]));
}

function resta(){
var values = getValues();
showResult(restar(values[0], values[1]));
}

function division(){
var values = getValues();
showResult(dividir(values[0], values[1]));
}

function multiplicacion(){
var values = getValues();
showResult(multiplicar(values[0], values[1]));
}


function sum(a,b){
	return parseInt(a) + parseInt(b);

}

function restar(a,b){
	return parseInt(a) - parseInt(b);

}

function multiplicar(a,b){
	return parseInt(a) * parseInt(b);

}

function dividir(a,b){
	return parseInt(a) / parseInt(b);

}