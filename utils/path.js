const path = require('path');

//metoda dirname zwraca ścieżkę do głównego folderu
module.exports = path.dirname(require.main.filename);