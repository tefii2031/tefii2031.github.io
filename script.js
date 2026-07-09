const boton = document.getElementById("mensajeBtn");

boton.addEventListener("click", () => {
  alert("¡Gracias por visitar mi presentación profesional!");
});


var map = L.map('talks-map')
.setView([9.9,-84.1],8);



L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
)
.addTo(map);



var events=[


{
name:"Space Gala - Kennedy Space Center",
lat:28.5729,
lon:-80.6490
},


{
name:"Universidad de Costa Rica",
lat:9.937,
lon:-84.051
},


{
name:"Universidad Fidélitas",
lat:9.93,
lon:-84.03
},


{
name:"Colegio de Naranjo",
lat:10.10,
lon:-84.38
},


{
    name:"Liceo León Cortés Castro - Grecia, Alajuela",
    lat:10.0758,
    lon:-84.3147
},
];

events.forEach(function(event){


L.marker([
event.lat,
event.lon

])

.addTo(map)

.bindPopup(
"<b>"+event.name+"</b>"
);


});
