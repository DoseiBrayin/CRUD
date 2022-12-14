const express = require("express");
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

//Inicializar
const app = express();

//COnfiguracion
app.set('port',process.env.PORT || 4000)
app.set('views', path.join(__dirname,'views'))
app.engine('.hbs', handlebars.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars.js')
}));
app.set('view engine', '.hbs')

//Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Variables globales
app.use((req,res,next)=>{
    next();
});

//Rutas
app.use(require('./routes'));
app.use('/links',require('./routes/links'));

//Publico
app.use(express.static(path.join(__dirname,'public')));


//Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'))
});