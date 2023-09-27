const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//przekazujemy ścieżki ogarniane przez router w pliku admin
app.use(adminRouter);
//przekazujemy ścieżki ogarniane przez router w pliku shop
app.use(shopRouter);

app.listen(3000);
