const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

//Express HBS engine
app.set('view engine', 'hbs');
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/parciales');
require('./hbs/helpers');

const port = process.env.PORT || 3000;
/*
app.get('/', function(req, res) {
    //res.send('Hello World')
    let salida = {
        nombre: 'Raul',
        edad: 44,
        url: req.url
    }

    res.send(salida);
});
*/
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'raúL herreRa'
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});