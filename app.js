const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRouter);
app.use(shopRouter);

//jeżeli żadna ze ścieżek nie pasuje to dojdzie do tego middlware i zwróc page not found
app.use((req, res, next) => {
    //ponadto ustaw status odpowiedzi na 404 (not found) - w node jest statusCode
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);
