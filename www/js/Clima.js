function loadWeather() {
    const apiKey = 'a5c72655d4fa61b15c0d92f1acdb6ea9'; 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dominican Republic&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weather-info');
        const description = data.weather[0].description;
        const temperature = data.main.temp;
        weatherInfo.innerHTML = `
          <h3>Temperatura: ${temperature}°C</h3>
          <p>Descripción: ${description}</p>
        `;
      })
      .catch(error => console.error('Error fetching weather:', error));
  }

  window.onload = loadWeather;