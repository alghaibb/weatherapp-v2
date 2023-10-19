'use strict';

// Importing functions from app.js
import {updateWeather, error404} from "./app.js";

// Default location coordinates for Melbourne
const defaultLocation = "#weather?Lat=-37.840935&lon=-144.946457" // Lon & lat of Melbourne

// Function to get the current location coordinates
const currentLocation = function() {
    window.navigator.geolocation.getCurrentPosition(res => {
        const {latitude, longitude} = res.coords;

        // Update weather based on current location
        updateWeather(`lat=${latitude}`, `lon=${longitude}`)
    }, err => {
        window.location.hash = defaultLocation;
    });
};

/**
 * Searches for a location based on the provided query.
 *
 * @param {string} query - The search query for the location.
 */
const searchedLocation = query => updateWeather(...query.split("&"));
// updateWeather("Lat=-37.840935", "lon=144.946457")

// Map of routes and corresponding functions
const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
]);

// Function to check and handle hash changes
const checkHash = function() {
    const requestURL = window.location.hash.slice(1);

    const [route, query] = requestURL.includes ? requestURL.split("?") : [requestURL]
                                                // Handle 404 errors
    routes.get(route) ? route.get(route)(query) : error404();
};

// Event listeners for hash changes and initial page load
window.addEventListener("hashchange", checkHash);
window.addEventListener("load", function() {
    if (window.location.hash) {
        window.location.hash = "/current-location";
    } else {
        checkHash();
    }
});