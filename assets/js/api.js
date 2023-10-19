'use strict';

// API key for OpenWeatherMap
const api_key = "e5bffeeb5811d256c6f1079684738a77"

/**
 * Fetch data from the server using the provided URL.
 *
 * @param {string} URL - The API endpoint URL.
 * @param {function} callback - A function to handle the fetched data.
 */

export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}

// Object containing URL generation functions for OpenWeatherMap endpoints
export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}5&units=metric`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeoCode(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },

    /**
     * Generates a URL for a geo-location query.
     *
     * @param {string} query - The location query, for e.g.: "Melbourne, VIC", "New York"
     * @returns {string} The generated URL.
     */
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}