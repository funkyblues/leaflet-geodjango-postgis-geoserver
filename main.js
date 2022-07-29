const map = L.map("map").setView([27.2, 83.95], 10);

const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    "&copy: <a href='https://openstreetmap.org/copyright> OpenStreet map </a> contributors'",
});

osm.addTo(map);
