const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const path = require('path');
const fs = require('fs');

const app = express();

const options = {
  customCssUrl: '/custom.css',
};

// Function to dynamically load routes
function registerRoutes(directory) {
  fs.readdirSync(directory).forEach(file => {
    if (file.endsWith('.js')) {
      const routePath = `/${file.split('.')[0]}`;
      const router = require(path.join(directory, file));
      app.use(routePath, router);
      console.log(`Registered route: ${routePath}`);
    }
  });
}

// Register Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// Serve custom CSS
app.use(express.static(path.join(__dirname, 'public')));

// Register routes dynamically from 'routes' directory
const routesDirectory = path.join(__dirname, 'routes');
registerRoutes(routesDirectory);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('API documentation available at http://localhost:3000/api-docs');
});
