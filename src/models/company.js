const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    catchPhrase: {
        type: String,
        required: true
    },
    bs: {
        type: String
    }
}, {
    timestamps: true
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company
