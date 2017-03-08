$(document).ready(init);

function init(){
	requestCarrera();
	localStorageGet();
}
function requestCarrera(){
	$.ajax({
		url: 'https://clientes.geekadvice.pe/api/carrera',
		data: {type: 1}
	}).done(function(_data){
		update(_data);
		updateFinal(_data);
	});
}
function update(_name){
	$('.name').text(_name.conductor.name);
	$('.image').attr('src', _name.conductor.url);
}
function updateFinal(_final){
	$('.final').text(_final.estimado.moneda + _final.final);
}
//  recibiendo el dato de precio final
function localStorageGet(){
	var priceFinal = localStorage.getItem('stimate');
	$('.final').text(priceFinal);
}