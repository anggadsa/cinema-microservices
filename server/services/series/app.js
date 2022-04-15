require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000; 
const { Series } = require(`./models`)

app.use(express.json());
app.use(express.urlencoded( {extended: true} ))

app.get(`/series`, async (req, res) => {
    const options = {
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    }
    try{
        const findAll = await Series.findAll(options);
        res.status(200).json({
            status: 'Success',
            result: findAll
        })
    } catch(err) {
        console.log(err)
    }
});

app.get('/series/:id', async (req,res) => {
   
});

app.post('/series/create', async (req, res) => {

});

app.put('/series/update', async (req, res) => {

});

app.delete('/series/delete', async (req, res) => {

});

app.listen(port, () => {
    console.log(`Server untuk service series dijalankan di port ${port}`)
})