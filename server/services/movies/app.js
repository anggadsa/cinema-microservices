require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000; 
const { Movie } = require(`./models`)

app.use(express.json());
app.use(express.urlencoded( {extended: true} ))

app.get(`/movies`, async (req, res) => {

    const options = {
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    }
    try {
        const findAll = await Movie.findAll(options);
        // console.log(findAll)
        res.status(200).json({
            status: 'Success',
            result: findAll
        })
    } catch(err) {
        console.log(err.parent)
        res.status(500).json({status:'Server Error' })
    }
});

app.get('/movies/:id', async (req,res) => {
    const id = req.params.id;
    console.log(`Masuk`)
    try{
        const findOne = await Movie.findByPk(id)
        res.status(200).json({
            status: 'Success',
            result: findOne
        })
    } catch(err) {
        console.log(err)
        res.status(400).json({
            result: `Movie Id ${id} Not Found`,
        })
    }
});

app.post('/movies/create', async (req, res) => {
    const { name, duration, genre } = req.body;

    try{
        const addMovie = await Movie.create({
            name: name,
            duration: duration,
            genre: genre,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        
        res.status(201).json({
            status: `Success add new Movie`,
            result: addMovie
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: `Bad Request`,
            result: addMovie
        })
    }

});

app.listen(port, () => {
    console.log(`Server untuk service movies dijalankan di port ${port}`)
})