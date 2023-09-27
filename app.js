//pakiet pozwalający obsługiwać protokoły http
const http = require('http');
//pakiet odpowiadający za możliwość pracy z plikami
const fs = require('fs');

//utworzenie serwera
const server = http.createServer((req, res) => {

  //request jest bardzo rozbudowanym obiektem, zawiera m.in. url, metodę, headers itd.
  const url = req.url;
  const method = req.method;

  //przykład jak serwer ma odpowiadać na żądania zależnie od ścieżki oraz metody
  if (url === '/') {
    //metoda write pozwala napisać odpowiedź
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    //metoda end kończy pisanie odpowiedzi i po tym nie można już nic zapisać
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    //synchroniczny zapis do pliku o nazwie message.txt o treści DUMMY
    fs.writeFileSync('message.txt', 'DUMMY');
    //ustala kod statusu odpowiedzi
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  //metoda setHeader pozwala ustawić headery dla odpowiedzi
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

//nakazanie nasłuchiwania na porcie 3000
server.listen(3000);
