const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    //__dirname zapewnia ścieżkę absolutną do folderu routes (bo w nim są ścieżki)
    // dlatego po __dirname trzeba dać '../' żeby wyjść wyżej i móc wejść do 
    //folderu równoległego views
    //metoda join z node połączy poszczególne argumenty w jedną ścieżkę
    //zależnie od systemu doda przy każdym / albo dla windows \
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;