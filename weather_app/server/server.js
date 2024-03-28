const dotenv = require('dotenv');
dotenv.config({ path: './../.env'});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());


console.log('API_KEY:', process.env.API_KEY);

app.post('/api/weather', (req, res) => {
  const { lat, lon } = req.body;
  const API_KEY = process.env.API_KEY;
  axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(response => {
      const weatherData = response.data;
      res.json(weatherData);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      res.status(500).json({ error: 'An error occurred while fetching weather data.' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
