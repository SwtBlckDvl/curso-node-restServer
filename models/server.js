const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares: funciones que siempre se van a ejecutar cuando levantemos
        // nuestro servidor
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    // Método Middlewares
    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y Parseo del body
        this.app.use(express.json());

        // Directorio Público
        this.app.use(express.static('public'));
    }

    // Método routes/rutas
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    // Método listed
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        });
    }
}

module.exports = Server;