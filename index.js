// app.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const path = require('path');

const app = express();

const options = {
  customCssUrl: '/custom.css',
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// Serve custom CSS
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  console.log('API documentation available at http://localhost:3000/api-docs');
});
