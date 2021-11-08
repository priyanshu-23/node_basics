const express = require('express');
const app = express();

app.locals.appdata = require('./data.json');

const routes = require('./routes');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('default');
});

app.get ('/home',(req, res) => {
    res.render('home');
})

app.get('/:name?', routes.names);

app.get('/arr', routes.arr);




app.get('/:paramOne/:paramTwo', (req, res) => {
    var paramOne = req.params.paramOne;
    var paramTwo = req.params.paramTwo;
    res.send(`${paramOne} ${paramTwo}`);
});

const server = app.listen(3000, ()=>{
    console.log('listening on port 3000');
});
