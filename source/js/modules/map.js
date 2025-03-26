/* eslint-disable no-undef */
const MAP_ADDRESS = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const mapAttribution = {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const ICON_SIZIES = [52, 52];
const ICON_ANCHOR_SIZIES = [26, 52];

const map = L.map('map', {
  scrollWheelZoom: false,
  zoomControl: {
    position: 'topright',
  },
}
).setView([48.822733, 44.609915], 15);

L.tileLayer(MAP_ADDRESS, {
  mapAttribution,
}).addTo(map);

const iconDefault = L.icon({
  iconUrl: 'img/svg/main-pin.svg',
  iconSize: ICON_SIZIES,
  iconAnchor: ICON_ANCHOR_SIZIES,
});

const markerDefault = L.marker({
  lat: 48.822733,
  lng: 44.609915,
},
{
  draggable: false,
  icon: iconDefault,
});

markerDefault.addTo(map);
