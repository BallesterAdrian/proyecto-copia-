const db = require('../db');

// Agregar usuario a la lista de espera
exports.addToWaitingList = (userData, callback) => {
    const { name, email, password, role } = userData;
    const query = 'INSERT INTO waiting_list (name, email, password, role) VALUES (?, ?, ?, ?)';

    db.query(query, [name, email, password, role], (err, result) => {
        if (err) {
            console.error('❌ Error al insertar en waiting_list:', err); // <-- LOG DE ERROR
        } else {
            console.log('✅ Usuario insertado correctamente:', result); // <-- LOG DE ÉXITO
        }
        callback(err, result);
    });
};

// Verificar si el email ya existe en waiting_list o users
exports.emailExists = (email, callback) => {
    const query = `
        SELECT * FROM users WHERE email = ?
        UNION
        SELECT * FROM waiting_list WHERE email = ?
    `;
    db.query(query, [email, email], (err, results) => {
        callback(err, results.length > 0);
    });
};

