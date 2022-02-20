const express = require('express');
const path = require('path');
const app = express()
const bodyParser = require('body-parser')
const pages = require ('./routes/pages')
const empresas = require('./routes/empresas')
const dashboard = require('./routes/dashboard')
const contEmpresas = require('./models/empresa')

const port = process.env.PORT || 3000
const mongo = process.env.MONGODB || 'mongodb://localhost/controle_ativos'

const mongoose = require('mongoose');
mongoose.Promise = global.Promise


app.use(bodyParser.urlencoded({ extended: true }))

//assets
app.use(express.static('public'))

//view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', pages)
app.use('/empresas', empresas)
app.use('/dashboards', dashboard)

contEmpresas.countDocuments({}, function(err, docCount) {
  if(err){
    return err
  }
  console.log(docCount)

})



mongoose
  .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log('Listening on ' + port))
  })
  .catch(e => {
    console.log(e)
  })