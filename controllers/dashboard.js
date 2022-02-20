const Empresa = require('../models/empresa')



const totGeral = ({ Empresa }, req, res) => {
    Empresa.countDocuments({}, (err, docs) => {
      if(err){
        console.log(err)
      }else{
        return res.render('dashboards/index', { empresas: docs})
      }
    
  })
}

const totBetim = ({ Empresa }, req, res) => {
  Empresa.countDocuments({cidade: 'Betim'}, (err, betim) => {
    if(err){
      console.log(err)
    }else{
      return res.render('dashboards/totalbetim', { empresas: betim })
    }  
  })
}

const totBeloHorizonte = ({ Empresa }, req, res) => {
  Empresa.countDocuments({cidade: 'Belo Horizonte'}, (err, docs) => {
    if(err){
      console.log(err)
    }else{
      return res.render('dashboards/totalbh', { empresas: docs })
    }  
  })
}

const totContagem = ({ Empresa }, req, res) => {
  Empresa.countDocuments({cidade: 'Contagem'}, (err, docs) => {
    if(err){
      console.log(err)
    }else{
      return res.render('dashboards/totalcontagem', { empresas: docs })
    }  
  })
}

const totEsmeraldas = ({ Empresa }, req, res) => {
  
  //let busca = Empresa.find({cidade: 'Esmeraldas'})
  
  Empresa.countDocuments({cidade: 'Esmeraldas'}, (err, docs) => {
    if(err){
      console.log(err)
    }else{
      return res.render('dashboards/totalesmeraldas', { empresas: docs })
    }  
  })
}

const totNovaLima = ({ Empresa }, req, res) => {
  Empresa.countDocuments({cidade: 'Nova Lima'}, (err, novalima) => {
    if(err){
      console.log(err)
    }else{
      return res.render('dashboards/totalnovalima', { empresas: novalima })
    }  
  })
}


module.exports = {
  totGeral, totBetim, totBeloHorizonte, totContagem, totEsmeraldas, totNovaLima
}