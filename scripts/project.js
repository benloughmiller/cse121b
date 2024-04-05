
        const apiKey = 'a3253131bb4e07d6dc82c841bbc05c99';

        const city = document.getElementById('city');
        const searchButton = document.getElementById('search');
        const locationElement = document.getElementById('location');
        const tempElement = document.getElementById('temp');
        const descElement = document.getElementById('desc');
        
        searchButton.addEventListener('click', () => {
            const location = city.value;
            if (location) {
                locationElement.textContent = '';
                tempElement.textContent = '';
                descElement.textContent = '';
                fetchWeather(location);
            }
        });
        
       const fetchWeather = async (location) => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;
            const response = await fetch(url)
            const data = await response.json();
            const weatherList = data;

            locationElement.textContent = weatherList.name;
            tempElement.textContent = `${Math.round(weatherList.main.temp)}°F`;
            descElement.textContent = weatherList.weather[0].description;
        }