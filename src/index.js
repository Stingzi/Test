const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars')
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); // Đường dẫn đến thư mục public

//morgan HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    // layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
    // partialsDir: path.join(__dirname, 'resources', 'views', 'partials'), // Đường dẫn đến partials
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

console.log("Views Path:", path.join(__dirname, 'resources', 'views'));
console.log("Partials Path:", path.join(__dirname, 'resources', 'views', 'partials'));

//route
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

// 127.0.0.1 - localhost

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})