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
	$('.stimate').text(_info.estimado.moneda + _info.estimado.min); 
}