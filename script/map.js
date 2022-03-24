// création de la zone interractive, avec les boutons,
// mais encore vide de tuiles
var map = L.map('map').setView(villes[0].coords, 8);

// ajout des tuiles depuis le service MapBox.com
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16,
    minZoom: 9,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZW1hcm9zIiwiYSI6ImNreHJtcm5sczIxN2QycGtvbGxidjNjbzcifQ.NgD9FRrvBfR2RWxDVrOy_A'
}).addTo(map)

// création de l'icone qui servira de marqueur
const icone = L.icon({
    iconUrl: 'assets/icones/map_rose.svg',
    iconAnchor: [18, 35,5]
})

// ajout des 100 plus grandes villes bretonnes sur la carte
var markers = []
villes.forEach(v => {
    console.log(`Ajout de l'élément ${v}`);
    markers.push(L.marker(v.coords, {icon: icone}).addTo(map))
});