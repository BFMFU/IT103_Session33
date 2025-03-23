const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

function getWeather() {
    const cityInput = document.getElementById("cityInput").value.trim();
    const weatherInfo = document.getElementById("weatherInfo");

    if (weatherData[cityInput]) {
        const data = weatherData[cityInput];
        weatherInfo.innerHTML = `
            <div class="weather-box">
                <h2>${cityInput}</h2>
                <div class="weather-icon">${data.icon}</div>
                <p><strong>${data.temperature}°C</strong> - ${data.description}</p>
                <p>Độ ẩm: ${data.humidity}%</p>
                <p>Tốc độ gió: ${data.windSpeed} km/h</p>
            </div>
        `;
    } else {
        weatherInfo.innerHTML = `<p class="error-message">Không tìm thấy dữ liệu cho thành phố này!</p>`;
    }
}
