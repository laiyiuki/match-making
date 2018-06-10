const express = require('express');
const logger = require('morgan');
const cors = require('cors');

// database connection
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// load routes;
const api = require('./routes');
const seed = require('./seed');

// middleware chains
app
  .use(logger('dev'))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/api', api)
  .use('/seed', seed);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
