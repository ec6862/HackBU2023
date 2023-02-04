// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let map;
let service;
let infowindow;
var input;

function search(){
  input = document.getElementById("searchInput").value;

}

function initMap() {
  const sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 15,
  }); //place map into html


}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}

window.initMap = initMap;