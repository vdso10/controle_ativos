
const labels = [
  { id: 'Betim', name: 'Betim' },
  { id: 'Belo Horizonte', name: 'Belo Horioznte' },
  { id: 'Contagem', name: 'Contagem' },
  { id: 'Esmeraldas', name: 'Esmeraldas' },
  { id: 'Nova Lima', name: 'Nova Lima' },
]

const index = ({ Empresa }, req, res) => {
    Empresa.find({}, (err, docs) => {
    res.render('empresas/index', { empresas: docs })
  })
}

const novaProcess = async ({ Empresa }, req, res) => {
  const empresa = new Empresa(req.body)
    try {
      await empresa.save()
      res.redirect('/empresas')
    } catch (e) {
      console.log(Object.keys(e.errors))
      res.render('empresas/nova', {
        errors: Object.keys(e.errors)
    })      
  }
}



const novaForm = (req, res) => {
  res.render('empresas/nova', { errors: [] })
}


const excluir = async ({ Empresa }, req, res) => {
  await Empresa.deleteOne({
    _id: req.params.id
  }, (err) =>{
    res.redirect('/empresas')
  })  
}

const editarProcess = async ({ Empresa }, req, res) => {
  const empresa = await Empresa.findOne({ _id: req.params.id })
  empresa.nome = req.body.nome
  empresa.cnpj = req.body.cnpj
  empresa.endereco = req.body.endereco
  empresa.bairro = req.body.bairro
  empresa.cidade = req.body.cidade
  try {
    await empresa.save()
    res.redirect('/empresas')
  } catch (e) {
    res.render('empresas/editar', { empresa, labels, errors: Object.keys(e.errors) })
  }
}

const editarForm = async ({ Empresa }, req, res) => {
  const empresa = await Empresa.findOne({ _id: req.params.id })
  res.render('empresas/editar', { empresa, labels, errors: [] })
}

const info = async ({ Empresa }, req, res) => {
  const empresa = await Empresa.findOne({ _id: req.params.id })
  res.render('empresas/info', { empresa })
}

const addComentario = async ({ Empresa }, req, res) => {
  await Empresa.updateOne({ _id: req.params.id }, { $push: { ativos: {tipo, descricao, disco_rigido, memoria, quantidade, observacao, local} = req.body} })
  res.redirect('/empresas/info/' + req.params.id)
}




module.exports = {
  index, novaProcess, novaForm, excluir, editarProcess, editarForm, info, addComentario
}