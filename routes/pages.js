const express = require("express");
const req = require("express/lib/request");

const pagesController = require('../controllers/pages')

const router = express.Router()

router.get('/', pagesController.index)
router.get('/dashboard', pagesController.dashboard)
router.get('/empresa', pagesController.index)
router.get('/empresas/nova', pagesController.nova)

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        req.logout();
        res.redirect('/')

    })
})


module.exports = router 