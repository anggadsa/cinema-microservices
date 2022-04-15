require('dotenv').config();
const axios = require('axios').default;
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 
const movieUrl = process.env.URL_MOVIES;
const serieUrl = process.env.URL_SERIES;

app.use(express.json());
app.use(express.urlencoded( {extended: true} ))

app.get(`/cinema/movies`, async (req,res) => {
    try{
        const response = await axios.get(`${movieUrl}/movies`);
        // console.log(response.data)
        res.status(200).json({
            status: 'Success',
            result: response.data.result
        })
    } catch(error) {
        console.log(error)
        res.status(400).json({
            status: 'Bad Request',
        })
    }
})

app.get(`/cinema/series`, async (req,res) => {
    try{
        const response = await axios.get(`${serieUrl}/series`);
        // console.log(response.data)
        res.status(200).json({
            status: 'Success',
            result: response.data.result
        })
    } catch(error) {
        console.log(error)
        res.status(400).json({
            status: 'Bad Request',
        })
    }
})

app.listen(port, () => {
    console.log(`Server untuk Orchestrator Cinema dijalankan di port ${port}`)
})