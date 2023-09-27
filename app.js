const express = require('express');
//pozwala na konwertowanie body requestu
const bodyParser = require('body-parser');

const app = express();

//bodyParser rejestruje middleware który ma w sobie next więc pozwala 
//na korzystanie z kolejnych middlewarów ale przez niego przechodzi 
//request co pozwala na parsowanie body. Nie wszystkich rodzajów 
//oczywiście ale podstawowe ogarnia, dla plików będzie potrzebny inny parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    console.log('In the another middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>');
});

//zamiast use, który odpala middleware na każdy request ta metoda
//uruchomi middleware tylko dla metody POST
app.post('/product', (req, res, next) => {
    console.log(req.body);
    //kolejna fajna funkcja do przekierowywania zamiast 
    //res.setHeader('Location', '/);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('In the another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
