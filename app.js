const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//w ten sposób express umożliwia użytkownikowi bezpośredni dostęp
//do projektu i folderu public w tym przypadku
app.use(express.static(path.join('public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
});

app.listen(3000);
