const express = require("express");
const router = express.Router();
const indexController = require("../controllers/");

// Ruta para iniciar sesión

router.get("/:id",indexController.detalleProduct)


module.exports = router;