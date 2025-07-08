exports.approveUser = (req, res) => {
  const id = req.params.id;
  console.log('Intentando aprobar ID:', id);

  db.query('SELECT * FROM waiting_list WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error en SELECT:', err);
      return res.status(500).json({ error: 'Error en la base de datos.' });
    }

    if (result.length === 0) {
      console.log('No se encontró ningún usuario con ese ID.');
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    const user = result[0];

    db.query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [user.name, user.email, user.password, user.role],
      (err2) => {
        if (err2) {
          console.error('Error al insertar:', err2);
          return res.status(500).json({ error: 'Error al mover usuario a tabla users.' });
        }

        db.query('DELETE FROM waiting_list WHERE id = ?', [id], (err3) => {
          if (err3) {
            console.error('Error al borrar de waiting_list:', err3);
            return res.status(500).json({ error: 'Error al limpiar lista de espera.' });
          }

          res.json({ message: 'Usuario aprobado correctamente.' });
        });
      }
    );
  });
};

