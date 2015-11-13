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
});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}
