import L from './lib/leaflet/leaflet';

const initMap = () => {
  const coords = [55.749130, 37.632403];
  const windowWidth = window.innerWidth;

  // const mapZoomLevel = 13;
  const mapZoomLevel = windowWidth > 450 ? 13 : 12;

  const myIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [60, 60]
  });

  const hoverIcon = L.icon({
    iconUrl: 'img/pin2.svg',
    iconSize: [60, 60]
  });
  let map = L.map('map', {
    scrollWheelZoom: false,
    doubleClickZoom: false,
    zoomControl: false,
    dragging: true,
    doubleClickMove: false,
  }).setView(coords, mapZoomLevel);

  // L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
  //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">©OpenStreetMap</a> contributors'
  // }).addTo(map);


  L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
    attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    accessToken: '4EjMdO55OmnFozURz988fCBllZnijoFbIHGSGW8xnWVpkwJ6xSW9KP6P6gMZj1E7'
  })
    .on('dblclick', false)
    .on('click', false)
    .addTo(map);

  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {

      L.geoJSON(data.features, {
        pointToLayer: function (feature, latLng) {
          return L.marker(latLng, {
            icon: myIcon,

          })
        },
        onEachFeature: function (feature, layer) {
          layer.bindPopup(feature.properties.title);
          layer.on("mouseover", function (e) {
            this.openPopup();
            this.setIcon(hoverIcon)
          })
          layer.on("mouseout", function (e) {
            this.closePopup();
            this.setIcon(myIcon)
          })
          layer.on('dblclick', false)
        }
      }).addTo(map);
    });

};
export default initMap;
