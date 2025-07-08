const bcrypt = require('bcrypt');
const User = require('../models/user');

// Registro de usuario
exports.registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    // Validar campos
    if (!name || !email || !password || !role) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Verificar si el email ya existe
    User.emailExists(email, async (err, exists) => {
        if (err) return res.status(500).json({ error: 'Error al verificar email.' });
        if (exists) return res.status(409).json({ error: 'El Gmail ya está en uso.' });

        try {
            // Encriptar contraseña
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insertar en lista de espera
            User.addToWaitingList({ name, email, password: hashedPassword, role }, (err, result) => {
                if (err) {
                    console.error('Error al registrar:', err);
                    return res.status(500).json({ error: 'Error al registrar.' });
                }

                res.status(201).json({ message: 'Usuario en espera de aprobación.' });
            });
        } catch (err) {
            res.status(500).json({ error: 'Error al encriptar la contraseña.' });
        }
    });
};
