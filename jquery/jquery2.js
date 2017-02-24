$(document).ready(init);
function init(){
	var nextButton = $('#caja-rosada');
	$('#caja-rosada').click(validateNumero);
	$('#input').keyup(validateNumero);
	$('#input').keydown(validaNumber);
	$('#input').keyup(validateLenght);
	$('#caja-rosada').click(codigo);
	
 if(localStorageImg() && localStorageCode)	{
	var imgLocal = localStorage.getItem('srcsPais');
	var codeLocal = localStorage.getItem('codigo');
	$('#imgFlag').attr({'src': imgLocal});
	$('#codigo').text(codeLocal);
 }
}
function localStorageImg(){
	var ifExist = false;
	if(localStorage.getItem('srcsPais') != null){
		ifExist = true;
	}
	return ifExist;
}
function localStorageCode(){
	var ifExist = false;
	if(localStorage.getItem('codigo') != null){
		ifExist = true;
	}
	return ifExist;
}

function validaNumber(evt)
{
  if(window.event.keyCode >=48 && window.event.keyCode<=57 || window.event.keyCode ==8){ 
      return true;
	 }
  else{ 
      evt.preventDefault();
	 }
}
function validateNumero(){
	var inputNumber = $('#input').val();
	var valido = false;
	if(inputNumber == ""){
		$('#salida').html("Ingrese su numero");
		$('#input').focus();
		valido = true;
	}
	else{
		$('#salida').remove();
		valido = false;
	}
	return valido;
}
function validateLenght(){
	var inputNumber = $('#input').val();
	var salida = $('#salida');
	
	if(inputNumber.length>9){
		salida.text("Maximo 9 caracteres");
	}else{
		salida.remove();
	}
}
function codigo(){
	if(validateNumero()){
		alert("Llena el campo correctamente");
	}else{
		location.href = 'index4.html'
	}
}
