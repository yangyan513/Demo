const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
//req获取请求相关信息如url或get、post请求，res响应信息
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
