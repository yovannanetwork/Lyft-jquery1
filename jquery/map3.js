$(document).ready(init);

function init(){
	requestCarrera();
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
	$('.final').text(_final.final);
}