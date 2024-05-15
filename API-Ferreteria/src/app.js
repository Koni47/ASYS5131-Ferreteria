// Enrutado para algunas funciones en sus respectivos archivos de rutas
const LanguageRoutes = require('./routes/recetas.routes');
const productosRoutes = require('./routes/productos.routes');
const usuariosRoutes = require('./routes/usuarios.routes');
const pedidosRoutes = require('./routes/pedidos.routes');
// Dependencias que deben estar instaladas
const express = require('express')
const morgan = require('morgan')

// linkeo a variables, para que la url de swagger sea dinamica
// const getServerUrl = () => {
//     const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
//     const host = process.env.HOST || 'localhost';
//     const port = process.env.PORT || 3000;
//     return `${protocol}://${host}:${port}`;
//   };

  // Inicializa Swagger-jsdoc
// Inicializa
const router = express(); //ejecuta express
const cors = require('cors')
// settings
router.set("port", 3000);
router.use(morgan("dev"));
router.use(cors(
    // { origin: [getServerUrl(),] } no descomentar si está en production
));
router.use(express.json());
// routes
router.use("/", LanguageRoutes)
router.use("/", productosRoutes)
router.use("/", usuariosRoutes)
router.use("/", pedidosRoutes)
module.exports = router