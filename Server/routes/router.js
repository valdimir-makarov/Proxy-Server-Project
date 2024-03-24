const express = require('express');
const router = express.Router();
const needle = require('needle'); // Import needle module
const { URLSearchParams } = require('url'); // Import URLSearchParams from url module
const rateLimitMiddleware = require('../ratelimiter');


// Constants
const API_BASE_KEY = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY_NAME = "appid";
const API_KEY_VALUE = "249f48ee47d195b9814284c95adb3cb8";

router.get('/add', (req, res) => {
    res.send('add comments');
});

router.get('/add2', async (req, res) => {
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...req.query, // Use req.query directly to get query parameters
        });

        const apiRes = await needle('get', `${API_BASE_KEY}?${params}`);
        const data = apiRes.body;

        if (process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST: ${API_BASE_KEY}?${params}`);
        }

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(400).send("Error fetching data from API");
    }
});


 router.get('/ratelimit',rateLimitMiddleware,(req,res)=>{

    res.send({
        success: true,
        author: "Mike Abdul",
        "title": "Creating NodeJs Rate Limiter",
        "post": "..."
      });





 })


module.exports = router;
