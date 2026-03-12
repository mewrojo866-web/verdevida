const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// TU CADENA DE CONEXIÓN REAL
const mongoURI = "mongodb+srv://mcwrojo866_db_user:UNHHOW6TTwprHmAU@cluster0.f7sbulw.mongodb.net/verdevida_db?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI)
    .then(() => console.log("🌱 Conectado a la base de datos de Verde Vida"))
    .catch(err => console.error("Error de conexión:", err));

// Esquema de Usuario con Hashing Automático
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Antes de guardar, cifra la contraseña
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const User = mongoose.model('User', userSchema);

// RUTA DE REGISTRO
app.post('/registro', async (req, res) => {
    try {
        const nuevoUsuario = new User(req.body);
        await nuevoUsuario.save();
        res.status(201).send("Usuario guardado con contraseña cifrada.");
    } catch (error) {
        res.status(400).send("Error: " + error.message);
    }
});

app.listen(3000, () => console.log("Servidor escuchando en http://localhost:3000"));