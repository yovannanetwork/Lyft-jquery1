var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.4527971, lng: -71.53307649999999},
    zoom: 14
  });
 
   var myLatLng = {lat: -16.4527971, lng: -71.53307649999999};
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Esta es tu ubicaciòn!',
		  label: "x",
		  icon: "img/carrito1.png"
        });
	requestEstimate();
	localStorageGet();
	localStoragePrice();
}
function requestEstimate(){
	$.ajax({
		url: 'https://clientes.geekadvice.pe/api/estimado?tipo=1',
		data: {type: 1}
	}).success(function(_data){
		update(_data);
	});
}
function update(_info){
	$('.stimate').text(_info.estimado.moneda + _info.estimado.min + ' - '+ _info.estimado.moneda + _info.estimado.max); 
}
//   almacenando el nombre del tipo de auto y la imagen
function localStorageGet(){
	var typeLocal = localStorage.getItem('tipoCarro');
	var imgLocal = localStorage.getItem('carImagen');
	$('#tipo-carro').text(typeLocal);
	$('#img-carro').attr({'src':imgLocal});
}
function localStoragePrice(){
	$('#get-price').click(function(){
		var estimadoPrecio = $('.stimate');
		localStorage.setItem('estimado', estimadoPrecio);
	});
}
 