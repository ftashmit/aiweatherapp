# 🌤️ AIWeatherApp

AIWeatherApp is a lightweight **AI-powered weather application** built with **HTML, CSS, and JavaScript**, integrated with the **OpenWeatherMap API** for real-time weather data.  
It detects your location automatically using the **Geolocation API** and provides **current weather information** such as temperature, humidity, wind speed, and descriptive weather conditions enhanced with emoji-based visuals.

---

## ✨ Features

- 📍 **Automatic Location Detection**  
  Uses the **HTML5 Geolocation API** to fetch your current latitude and longitude.

- 🌡️ **Real-Time Weather Data**  
  Displays:
  - Temperature (°C)
  - Weather Description (Clear, Rainy, Cloudy, etc.)
  - Humidity (%)
  - Wind Speed (m/s)

- 🎨 **Responsive and Minimal UI**  
  Clean, glass-effect weather card with hover animations and mobile-friendly design.

- ⚡ **Instant Updates**  
  Fetches and updates weather data as soon as the user allows location access.

- 🌎 **Weather Emojis**  
  Visual weather representation using emojis (☀️ 🌧️ ⛅ ❄️).

---

## 🔑 APIs Used

1. **[OpenWeatherMap API](https://openweathermap.org/api)**  
   - Endpoint used:  
     ```
     https://api.openweathermap.org/data/2.5/weather
     ```
   - Required parameters:  
     - `lat` – Latitude of the user’s location  
     - `lon` – Longitude of the user’s location  
     - `appid` – Your unique OpenWeatherMap API key  
     - `units=metric` (optional for °C)

2. **[Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)** (Browser-based)  
   - Retrieves the user's current location coordinates with `navigator.geolocation.getCurrentPosition`.

---

## ⚙️ How It Works

1. The app requests **location permission** using the browser's Geolocation API.  
2. Once latitude and longitude are obtained, the app sends a **fetch request** to the **OpenWeatherMap API** with your API key.  
3. The server responds with **current weather data in JSON format**.  
4. The UI dynamically updates with:
   - City & Country
   - Temperature (in Celsius)
   - Weather Description
   - Humidity & Wind Speed
   - Emoji representation of the weather

---

## 🚀 Usage

1. Clone or download the repository.
2. Replace the placeholder API key in `script.js` with your **OpenWeatherMap API key**:
   ```js
   const apiKey = "YOUR_API_KEY_HERE";

3. Open the `index.html` file using **Live Server** (VS Code extension recommended).
4. Allow **location permissions** when prompted.
5. Enjoy real-time weather updates in your browser! 🌤️

---

### 📌 Notes

- If you get a **401 Unauthorized** error:
  - Ensure your **API key is active** in your OpenWeatherMap account.
  - Confirm you are correctly passing **lat** and **lon** values.
- The free **OpenWeatherMap tier** allows **60 API calls/minute**.  
  Exceeding this may result in temporary errors.
- For **city-based search** or **multi-day forecasts**, you can expand the app using the **OpenWeatherMap One Call API**.

---

### 📧 Contact

Created by **Ashmit Dutta**

- **GitHub:** [ftashmit](https://github.com/ftashmit)  
- **LinkedIn:** [ftashmit](https://www.linkedin.com/in/ftashmit/)  
- **Email:** [ashmitdutta@gmail.com](mailto:ashmitdutta@gmail.com)
