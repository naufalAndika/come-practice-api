const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    address: {
        street: {
            type: String
        },
        suite: {
            type: String
        },
        city: {
            type: String
        },
        zipcode: {
            type: String
        },
        geo: {
            lat: {
                type: Number,
                required: true
            },
            lng: {
                type: Number,
                required: true
            }
        }
    },
    phone: {
        type: String
    },
    website: {
        type: String
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User
