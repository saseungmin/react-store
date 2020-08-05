const express = require('express');
// https://github.com/typicode/json-server
const jsonServer = require('json-server');
// https://github.com/paulmillr/chokidar
const chokidar = require('chokidar');
const cors = require('cors');

const fileName = process.argv[2] || './data.js';
const port = process.argv[3] || 3500;

let router = undefined;

const app = express();

const createServer = () => {
  delete require.cache[require.resolve(fileName)];
  setTimeout(() => {
    router = jsonServer.router(
      // fileName이 .js로 끝나면
      fileName.endsWith('.js') ? require(fileName)() : fileName,
    );
  }, 100);
};

createServer();

app.use(cors());
app.use(jsonServer.bodyParser);
app.use('/api', (req, res, next) => {
  router(req, res, next);
});

chokidar.watch(fileName).on('change', () => {
  console.log('reloading web service data...');
  createServer();
  console.log('reloading web service data complete');
});

app.listen(port, () => console.log(`${port}번 포트에서 서버 실행 중`));
