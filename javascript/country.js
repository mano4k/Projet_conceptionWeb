let osvcoords = {};
osvcoords["accra"] = "5.5502111,-0.1982662";
osvcoords["key2"] = "value2";

function setupCountries() {

}

function getCountryDetails(countryName) {
    return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => response.json())
        .then(data => data[0])
        .catch(error => console.error('Error:', error));
}

function openStreetMap(lat, lng) {

}

function openStreeMapAtCapital(capital) {
    let osmBasePath = "https://www.openstreetmap.org/search?query="
    let gmBasePath = "https://www.google.com/maps/place/"

    let queryURL = gmBasePath + capital;

    window.open(queryURL, "_blank");
}

function openStreeViewAtCapital(capitalName) {
    console.log(capitalName.toLowerCase());
    let queryURL = "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint="+osvcoords[capitalName.toLowerCase()]+"&heading=ROTATION&pitch=PITCH"

    window.open(queryURL, target = "_blank");
}

