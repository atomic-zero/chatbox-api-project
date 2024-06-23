const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); 
const app = express();

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Define your API routes here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
