import express from 'express';

import hello from './src/hello';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get('/hello', hello);

app.get('/world', (req, res) => {
  res.send("<h1>Hello from world</h1>");
})

app.listen(PORT, () =>
  console.log(`Running on ${PORT}.`)
);