document.querySelector("#year").textContent = new Date().getFullYear();

const map = L.map("map").setView([51.2194, 4.4025], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap",
}).addTo(map);

L.marker([51.23006, 4.41623])
  .addTo(map)
  .bindPopup("Antwerpen - regio van mijn opleiding")
  .openPopup();
