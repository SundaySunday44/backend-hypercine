const { Router } = require('express');
const router = new Router();
var { obtenerFechasFuncion, obtenerHorasFuncion, getFunciones, getFuncion, createFuncion, updateFuncion, deleteFuncion, getFuncionCompleta } = require('../../Logica de negocio/controllers/funcionController');
router.get("/funciones", getFunciones);
router.get("/funcion/:id", getFuncion);
router.get("/funcion/todo/:id", getFuncionCompleta);
router.post("/funcion", createFuncion);
router.put("/funcion/:id", updateFuncion);
router.delete("/funcion/:id", deleteFuncion);
router.get('/funcion/:id_pelicula/:ciudad/:complejo', obtenerFechasFuncion);
router.get('/funcion/:id_pelicula/:ciudad/:complejo/:fecha', obtenerHorasFuncion);
module.exports = router;