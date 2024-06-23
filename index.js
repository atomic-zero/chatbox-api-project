const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // Path to your swagger configuration
const fs = require('fs');
const path = require('path');

const app = express();

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Load routes dynamically
const routesDirectory = path.join(__dirname, 'routes');
fs.readdirSync(routesDirectory).forEach(file => {
  const routePath = path.join(routesDirectory, file);
  app.use('/', require(routePath));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
