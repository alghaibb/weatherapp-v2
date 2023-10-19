'use strict';

// Array of week day names
export const weekDayNames = [
   "Sunday", 
   "Monday", 
   "Tuesday", 
   "Wednesday", 
   "Thursday", 
   "Friday", 
   "Saturday"
];

// Array of month names
export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

/**
 * Converts a Unix timestamp to a formatted date string.
 * @param {number} dateUnix - The Unix timestamp of the date.
 * @param {number} timezone - The timezone offset in seconds.
 * @returns {string} A formatted date string in the format: "Weekday Day, Month".
 */

export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayNames = weekDayNames[date.getUTCDay()];
    const monthNames = monthNames[date.getUTCMonth()];

    return `${weekDayNames} ${date.getUTCDate()}, ${monthNames}`;
}

/**
 * Converts a Unix timestamp to a formatted time string.
 *
 * @param {number} timeUnix - The Unix timestamp of the time.
 * @param {number} timezone - The timezone offset in seconds.
 * @returns {string} A formatted time string in the format: "HH:MM AM/PM".
 */

export const getTime = function(timeUnix, timezone) {
     // Create a Date object using the provided timestamp and timezone offset.
    const date = new Date((timeUnix + timezone) * 1000);
    
    // Extract hours and minutes from the Date object.
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    
    // Determine whether it's AM or PM based on the hour.
    const period = hours >= 12 ? "PM" : "AM";

    // Format the time as "HH:MM AM/PM" and return it.
    return `${hours % 12 || 12}:${minutes} ${period}`;
};

/**
 * Converts a Unix timestamp to a formatted time string.
 *
 * @param {number} timeUnix - The Unix timestamp of the time.
 * @param {number} timezone - The timezone offset in seconds.
 * @returns {string} A formatted time string in the format: "HH AM/PM".
 */

export const getHours = function(timeUnix, timezone) {
    // Create a Date object using the provided timestamp and timezone offset.
   const date = new Date((timeUnix + timezone) * 1000);
   
   // Extract hours and minutes from the Date object.
   const hours = date.getUTCHours();
   
   // Determine whether it's AM or PM based on the hour.
   const period = hours >= 12 ? "PM" : "AM";

   // Format the time as "HH:MM AM/PM" and return it.
   return `${hours % 12 || 12} ${period}`;
};

/**
 * Converts meters per second (m/s) to kilometers per hour (km/h).
 * @param {number} mps - Meters per second to convert.
 * @returns {number} Equivalent speed in kilometers per hour.
 */

export const mps_to_kmh = mps => {
    const mph = mps * 3600;  // <==== 1 m/s = 3.6 km/h
    return mph / 1000
};

export const aqiText = {
    1: {
        level: "Good",
        message: "The air quality is deemed acceptable, and there is minimal to no threat from air pollution."
    },
    2: {
        level: "Fair",
        message: "The air quality is generally acceptable, although there may be a slight health concern for a very small number of individuals who are particularly sensitive to air pollution, especially regarding specific pollutants."
    },
    3: {
        level: "Moderate",
        message: "People in vulnerable groups might notice health effects, but the impact on the general public is expected to be minimal."
    },
    4: {
        level: "Poor",
        message: "Health effects may start to be noticeable for everyone, and individuals in sensitive groups could experience more severe impacts."
    },
    5: {
        level: "Very Poor",
        message: "Health advisories for emergency conditions. The entire population is at a higher risk of being impacted"
    }
};