const express = require('express');
const router = express.Router();
const db = require('../database');

// GET usuarios
router.get('/', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener usuarios' });
    }
    res.json(results);
  });
});

module.exports = router;
