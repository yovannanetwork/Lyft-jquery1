$(document).ready(function(){
	$('#caja-rosada').click(validateName);
	$('#name').keyup(validateName);
	$('#caja-rosada').click(validateEmail);
	$('#email').keyup(validateEmail);
	$('#caja-rosada').click(function(){
	if(validateName()&& validateEmail()&& validateCheck()){
		alert('Tiene que llenar todos los campos');
		
	}else{
		location.href = 'map.html';
	}
	})
	//$('#caja-rosada').click(validateCheck);
	//$('#check').keyup(validateCheck);
});
function validateName(){
	var valido = false;
	var name = $('#name').val();
	if(name == 0){
		$("#salida").html("Tiene que ingresar su nombre");
		$('#name').focus();
		valido = true;
	}else{
		$("#salida").hide();
		valido = false;
	}
	return valido;
}
function validateEmail(){
	var valido = false;
	var email = $('#email').val();
	var expresion = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	if(email == 0){
		$('#salida1').text("Tiene que ingresar su Email");
		valido = true;
	} else if(!expresion.test(email)){
		$("#salida1").text("Correo no valida");
		valido = true;
	}
	else{
		$("#salida1").remove();
		valido = false;
	}
	return valido;
}
/*function validateCheck(){
	var valido = false;
	var ckeck = $('#check').prop(':ckecked');
	if(!ckeck){
		$('#salida2').text("xbxbjd");
		valido = false;
	}else{
		$('#salida2').remove();
		valido = true;
	}
	return valido;
}*/