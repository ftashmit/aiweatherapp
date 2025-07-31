const apiKey = '699695cb9204ded5eb370b2419951c1f'; // Replace with your OpenWeatherMap API key
const weatherIcon = document.getElementById('weather-icon');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');
const errorElement = document.getElementById('error');

// Weather emoji mapping
const weatherEmojis = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Drizzle': '🌦️',
    'Thunderstorm': '⛈️',
    'Snow': '❄️',
    'Mist': '🌫️',
    'Fog': '🌫️',
    'Haze': '🌫️'
};

// Get user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fetchWeather, showError);
    } else {
        errorElement.textContent = 'Geolocation is not supported by this browser.';
    }
}

// Fetch weather data
async function fetchWeather(position) {
    const { latitude, longitude } = position.coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Unable to fetch weather data');
        const data = await response.json();

        // Update UI
        locationElement.textContent = `${data.name}, ${data.sys.country}`;
        temperatureElement.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent = `Description: ${data.weather[0].description}`;
        humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
        windElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        // Set weather emoji
        const weatherMain = data.weather[0].main;
        weatherIcon.textContent = weatherEmojis[weatherMain] || '🌍';
    } catch (error) {
        errorElement.textContent = 'Error fetching weather data. Please try again.';
    }
}

// Handle geolocation errors
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorElement.textContent = 'Location access denied. Please allow location access.';
            break;
        case error.POSITION_UNAVAILABLE:
            errorElement.textContent = 'Location information is unavailable.';
            break;
        case error.TIMEOUT:
            errorElement.textContent = 'The request to get location timed out.';
            break;
        default:
            errorElement.textContent = 'An unknown error occurred.';
            break;
    }
}

// Initialize
getLocation();