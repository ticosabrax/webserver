//Express
const express = require('express')
const app = express()

//HBS
const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000

//Establecer folder público
app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

//Registrar entradas por URL /, /about, /json, /data
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Edgar Sabán'
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/json', (req, res) => {
    //res.send('Hola Mundo')

    let data = {
        nombre: 'Edgar',
        email: 'edgarsaban@gmail.com',
        url: req.url
    }

    res.send(data)
})

app.get('/data', (req, res) => {
    res.send('Hola Mundo')

})

//Escuchar en el puerto
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})