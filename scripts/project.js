
        const apiKey = 'a3253131bb4e07d6dc82c841bbc05c99';

        const city = document.getElementById('city');
        const searchButton = document.getElementById('search');
        const locationElement = document.getElementById('location');
        const tempElement = document.getElementById('temp');
        const descElement = document.getElementById('desc');
        const weatherArray = [];

        searchButton.addEventListener('click', async () => {
            const location = city.value;
            if (location) {
                locationElement.textContent = '';
                tempElement.textContent = '';
                descElement.textContent = '';
                await fetchWeather(location);
                displayWeather();
            }
            else {
                locationElement.textContent = 'Please enter a city.';
                tempElement.textContent = '';
                descElement.textContent = '';
            }
        }); 
        
       const fetchWeather = async (location) => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;
            const response = await fetch(url)
            const weatherList = await response.json();

            weatherArray.push({
                location: weatherList.name,
                temperature: `${Math.round(weatherList.main.temp)}°F`,
                description: weatherList.weather[0].description
            });
        }
        const displayWeather = () => {
            const weatherData = weatherArray[weatherArray.length - 1];
            locationElement.textContent = weatherData.location;
            tempElement.textContent = weatherData.temperature;
            descElement.textContent = weatherData.description;
        }

    
    
