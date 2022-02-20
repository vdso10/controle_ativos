const express = require('express')
const dashboardController = require('../controllers/dashboard')

const router = express.Router()

const Empresa = require('../models/empresa')

const models = {
    Empresa
}


router.get('/', dashboardController.totGeral.bind(null, models))

router.get('/totalbetim', dashboardController.totBetim.bind(null, models))
router.get('/totalbh', dashboardController.totBeloHorizonte.bind(null, models))
router.get('/totalcontagem', dashboardController.totContagem.bind(null, models))
router.get('/totalesmeraldas', dashboardController.totEsmeraldas)
router.get('/totalnovalima', dashboardController.totNovaLima.bind(null, models))




module.exports = router