// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [30.1974292, -97.6663058],
    [43.6777, -79.6248],
    [40.641766, -73.780968]
];

// Create a polyline using the line coordinates and make the line blue.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: '10, 10'
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);