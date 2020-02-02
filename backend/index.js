import express from 'express';

import hello from './src/hello';

const app = express();
const PORT = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// This interface will return information about
// which students will head to which car slots.
// An example response is like:
// { red: [123, 234], blue: [345], green: [456, 567], ...}
app.get('/studentColorMapping', (req, res) => {
  // read colors & student ids from db
  const response = { red: [123, 234], blue: [345], green: [456, 567], purple: [678], teal: [434, 641], gray: [564], black: [424], orange: [] };
  res.send(JSON.stringify(response));
});

app.post('/studentColorMapping', (req, res) => {
  // save colors&student ids into db
});

app.get('/world', (req, res) => {
  res.send("<h1>Hello from world</h1>");
})

app.listen(PORT, () =>
  console.log(`Listenting on ${PORT}.`)
);

// Interface of the back-end
// two folders in the root folder

// Think in terms of features