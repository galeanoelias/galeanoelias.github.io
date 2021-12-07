let express = require('express');
let app = express();
const PORT = 4000;
let path = require('path')

/* Middlewares */
app.use(express.static("public"));

/* Template engine */
app.set('views', 'ejs');

/* Locations */
app.set('views', path.join(__dirname, 'views'));

/* Routers */
let indexRouter = require('./routes/index');

/* Routes */
app.use('/', indexRouter);

/* Server */
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`));