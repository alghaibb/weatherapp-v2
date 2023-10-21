'use strict';

// API Key for OpenWeatherMap
const api_Key = "595864bfef3aa4eab4181ee9b9f3e020"

/**
 * Fetch data from the server using the provided URL.
 *
 * @param {string} URL - The API endpoint URL.
 * @param {function} callbacK - A function to handle the fetched data.
 */

export const fetchData = function (URL, callbacK) {
    fetch(`${URL}?appid=${api_Key}`)
    .then(res => res.json())
    .then(data => callbacK(data))
    .catch(error => console.error('Error:', error));
}

// Object containing URL generation functions for OpenWeatherMap endpoints
export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&`
    },
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&`
    },
    reverseGeoCode(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&`
    },

    /**
     * Generates a URL for a geo-location query.
     *
     * @param {string} query - The location query, for e.g.: "Melbourne, VIC", "New YorK"
     * @returns {string} The generated URL.
     */
    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&`
    }
}