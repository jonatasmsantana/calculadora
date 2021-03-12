
var valor;
var resultado;
function botao(num){
	valor = document.calculator.display.value +=num;	
}
function reseta(){
	document.calculator.display.value = '';
}
function calcula(){
	resultado = eval(valor);
	//document.calculator.display.value = resultado.toLocaleString("pt-br");
	document.calculator.display.value = resultado;
}