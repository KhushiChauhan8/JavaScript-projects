const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city;

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response);
			temp.innerHTML = response.temp;
			temp2.innerHTML = response.temp;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			humidity2.innerHTML = response.humidity;
			min_temp.innerHTML = response.min_temp;
			max_temp.innerHTML = response.max_temp;
			wind_speed.innerHTML = response.wind_speed;
			wind_speed2.innerHTML = response.wind_speed;
			wind_degrees.innerHTML = response.wind_degrees;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;
		})
		.catch(err => console.log(err));
};

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
});

getWeather("Delhi");

const commonPlacesData = [
	{ city: 'Shanghai', cloud_pct: 1, feels_like: 2, humidity: 3, max_temp: 4, min_temp: 5, sunrise: 6, sunset: 7, temp: 8, wind_degrees: 9, wind_speed: 10 },
	{ city: 'Boston', cloud_pct: 1, feels_like: 2, humidity: 3, max_temp: 4, min_temp: 5, sunrise: 6, sunset: 7, temp: 8, wind_degrees: 9, wind_speed: 10 },
	{ city: 'Lucknow', cloud_pct: 1, feels_like: 2, humidity: 3, max_temp: 4, min_temp: 5, sunrise: 6, sunset: 7, temp: 8, wind_degrees: 9, wind_speed: 10 },
	{ city: 'Kolkata', cloud_pct: 1, feels_like: 2, humidity: 3, max_temp: 4, min_temp: 5, sunrise: 6, sunset: 7, temp: 8, wind_degrees: 9, wind_speed: 10 }
];

const populateCommonPlacesTable = () => {
	const tableBody = document.querySelector('.table.text-center tbody');
	tableBody.innerHTML = '';

	commonPlacesData.forEach(place => {
		const row = `
			<tr>
				<th scope="row" class="text-start">${place.city}</th>
				<td>${place.cloud_pct}</td>
				<td>${place.feels_like}</td>
				<td>${place.humidity}</td>
				<td>${place.max_temp}</td>
				<td>${place.min_temp}</td>
				<td>${place.sunrise}</td>
				<td>${place.sunset}</td>
				<td>${place.temp}</td>
				<td>${place.wind_degrees}</td>
				<td>${place.wind_speed}</td>
			</tr>
		`;
		tableBody.innerHTML += row;
	});
};

populateCommonPlacesTable();
