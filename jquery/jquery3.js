var paises = '[{"nombre": "Afghanistan", "codigo": "+93","img":"64/Afghanistan.png"},{"nombre": "Argentina","codigo": "+54","img":"64/Argentina.png"},{"nombre":"Australia","codigo": "+61" , "img":"64/Australia.png"},'+
  '{"nombre": "Bolivia", "codigo": "+591","img":"64/Bolivia.png"},{"nombre": "Brasil","codigo": "+55","img":"64/Brazil.png"},{"nombre":"Canada","codigo": "+1" ,"img":"64/Canada.png"},'+
  '{"nombre":"China","codigo": "+86" , "img":"64/China.png"}, {"nombre": "Chile","codigo": "+56","img":"64/Chile.png"},{"nombre":"Estados Unidos","codigo":"+1","img":"64/United-States.png"},{"nombre":"Francia","codigo": "+33" , "img":"64/France.png"},'+
      '{"nombre": "Honduras","codigo": "+504","img":"64/Honduras.png"},{"nombre":"India","codigo": "+91","img":"64/India.png"},{"nombre": "Irlanda","codigo": "+353","img":"64/Ireland.png"},{"nombre":"Japon","codigo": "+81","img":"64/Japan.png"},'+
      '{"nombre":"Mexico","codigo": "+52","img":"64/Mexico.png"},{"nombre":"Puerto Rico","codigo": "+1","img":"64/Puerto-Rico.png"},'+
      '{"nombre":"Peru","codigo": "+51","img":"64/Peru.png"},{"nombre": "Polonia","codigo": "+48","img":"64/Poland.png"},{"nombre": "Rusia","codigo": "+7","img":"64/Russia.png"},'+
      '{"nombre": "Singapur","codigo": "+65","img":"64/Singapore.png"},{"nombre": "Suiza","codigo": "+41","img":"64/Switzerland.png"},{"nombre": "Tailandia","codigo": "+66","img":"64/Thailand.png"},{"nombre": "Taiwán","codigo": "+886","img":"64/Taiwan.png"},'+
      '{"nombre": "Venezuela", "codigo": "+58","img":"64/Venezuela.png"}]';

$(document).ready(init());
function init(){
	var listCountry = $('#country-list');
	var pais = $.parseJSON(paises);
	$.each(pais, function(){
		var html = '<a href="index2.html">'+
					'<li id="">'+
					'<img src="'+this['img']+'" width="30" alt="" class="flag">'+ this['nombre']+'<span class="codigo">'+this['codigo']+'</span>'+
					'</li>'+'</a>';
		listCountry.append(html);
	});
	assingEvent();
}
function assingEvent(){
	var li = $('li');
	$.each(li, function(){
		$(this).on('click', dateStorageClick);
	});
}
function dateStorageClick(evt){
	var imgPais = $(evt.currentTarget).find('.flag').attr('src');
	var codePais = $(evt.currentTarget).find('.codigo').text();
	localStorage.setItem('srcImgPais', imgPais);
	localStorage.setItem('codigo', codePais);
}