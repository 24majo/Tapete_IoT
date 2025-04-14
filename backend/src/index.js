const express = require('express');
const app = express();
const port = 3000;

require('./database');

app.use(express.json());

// Rutas de ejemplo
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
