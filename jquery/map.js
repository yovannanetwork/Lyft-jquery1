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
	rrecorrerList();
}

function rrecorrerList(){
	var liLista = $('li');
	$.each(liLista, function(){
		$(this).on('click', makeClickLis);		
	});
}
function makeClickLis(evt){
	var typeCar = $(evt.currentTarget).find('.type-car').text();
	var imgCar = $(evt.currentTarget).find('img').attr('src');
	localStorage.setItem('tipoCarro', typeCar);
	localStorage.setItem('carImagen', imgCar);
}