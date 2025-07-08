const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userController = require('./controllers/usercontroller');  // controller
const userRoutes = require('./routes/userroutes');               // rutas usuario
const adminRoutes = require('./routes/adminroutes');             // rutas admin
const userModel = require('./models/user');                      // modelo usuario

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Rutas

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

