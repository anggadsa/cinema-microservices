require('dotenv').config();
const axios = require('axios').default;
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 
const movieUrl = process.env.URL_MOVIES;
const serieUrl = process.env.URL_SERIES;

app.use(express.json());
app.use(express.urlencoded( {extended: true} ))

// SERVICES of MOVIES //
// http://localhost:4000
app.get(`/cinema/movies`, async (req,res) => {
    try{
        const response = await axios.get(`${movieUrl}/movies`);
        // console.log(response.data)
        res.status(200).json({
            status: 'Success',
            result: response.data.result
        })
    } catch(error) {
        console.log(error.stack)
        res.status(500).json({
            status: 'Server Error',
        })
    }
})

// GET by id
app.get(`/cinema/movies/:id`, async (req,res) => {
    const id = req.params.id
    try{
        const response = await axios.get(`${movieUrl}/movies/${id}`);
        // console.log(response.data)
        res.status(200).json({
            status: 'Success',
            result: response.data.result
        })
    } catch(error) {
        console.log(error.stack)
        res.status(500).json({
            status: 'Server Error',
        })
    }
})

// ADD new movies
app.post(`/cinema/movies/create`, async (req,res) => {
    const { name, duration, genre } = req.body;
    try{
        const response = await axios.post(`${movieUrl}/movies/create`, {
            name: name,
            duration: duration,
            genre: genre,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        res.status(200).json({
            status: 'Success',
            result: response.data.result
        })

    } catch(error) {
        console.log(error.stack)
        res.status(500).json({
            status: 'Server Error',
        })
    }
})

// SERVICES of SERIES //
// http://localhost:5000
app.get(`/cinema/series`, async (req,res) => {
    try{
        const response = await axios.get(`${serieUrl}/series`);
        // console.log(response.data)
        res.status(200).json({
            status: 'Success',
            result: response.data.result
        })
    } catch(error) {
        console.log(error.stack)
        res.status(500).json({
            status: 'Server Error',
        })
    }
})


app.listen(port, () => {
    console.log(`Server untuk Orchestrator Cinema dijalankan di port ${port}`)
})