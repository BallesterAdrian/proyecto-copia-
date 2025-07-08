const express = require('express');
const router = express.Router();

// ✅ IMPORTAR el controlador correctamente
const adminController = require('../controllers/admincontroller');

// ✅ Ruta para aprobar un usuario (verificá que esté bien escrito)
router.post('/approve/:id', adminController.approveUser);

// Ruta de prueba simple (opcional)
router.get('/', (req, res) => {
  res.send('Ruta admin funcionando');
});

module.exports = router;
