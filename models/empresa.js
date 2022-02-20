const mongoose = require('mongoose')

const EmpresaSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cnpj: String,
    endereco: String,
    bairro: String,
    cidade: String,
    ativos: [
        {
            tipo: {
                type: String,
                required: true
            },
            descricao: {
                type: String,
                required: true
            },
            disco_rigido: {
                type: String,
            },
            memoria: {
                type: String,
            },
            quantidade: {
                type: Number,
                required: true
            },
            observacao: {
                type: String,
                required: true
            },
            local: {
                type: String,
                required: true
            }                 
        }        
    ],
    

})

const Empresa = mongoose.model('Empresa', EmpresaSchema)

module.exports = Empresa