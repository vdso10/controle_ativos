const express = require('express')
const empresasController = require('../controllers/empresas')

const router = express.Router()

const Empresa = require('../models/empresa')

const models = {
    Empresa
}


router.get('/', empresasController.index.bind(null, models))

router.get('/nova', empresasController.novaForm)
router.post('/nova', empresasController.novaProcess.bind(null, models))

router.get('/excluir/:id', empresasController.excluir.bind(null, models))

router.get('/editar/:id', empresasController.editarForm.bind(null, models))
router.post('/editar/:id', empresasController.editarProcess.bind(null, models))

router.get('/info/:id', empresasController.info.bind(null, models))
router.post('/info/:id', empresasController.addComentario.bind(null, models))



module.exports = router