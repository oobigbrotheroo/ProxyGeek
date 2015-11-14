var markersObject = {};

var greenIcon = L.icon({
    iconUrl: './img/greenIcon.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var map;

$( document ).ready(function() {
    map = L.map('map');

    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 30, attribution: osmAttrib});

    // start the map in South-East England
    map.setView(new L.LatLng(49.492239, 0.131904),9);
    map.addLayer(osm);
    
    map.locate({setView: true, maxZoom: 16});
    
    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);
});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
    
    L.marker([49.511923, 0.074566], {icon: greenIcon}).addTo(map).on('click', onClick);
    L.marker([49.501959, 0.109232], {icon: greenIcon}).addTo(map).on('click', onClick);
    L.marker([49.493911, 0.094289], {icon: greenIcon}).addTo(map).on('click', onClick);
    L.marker([49.492650, 0.124823], {icon: greenIcon}).addTo(map).on('click', onClick);
    L.marker([49.491981, 0.131561], {icon: greenIcon}).addTo(map).on('click', onClick);
}
function onLocationError(e) {
    alert(e.message);
}

function onClick(e) {
    $("#detail").toggle();
}