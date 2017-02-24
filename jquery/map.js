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
}

