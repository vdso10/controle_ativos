const index = (req, res) => res.render('index')
const dashboard = (req, res) => res.render('dashboard')
const empresa = (req, res) => res.render('empresas')
const nova = (req, res) => res.render('empresas/nova')



module.exports = {
    index, dashboard, empresa, nova
}