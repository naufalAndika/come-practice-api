const express = require('express')
const Company = require('../models/company')
const router = new express.Router()

router.post('/companies', async (req, res) => {
    const company = new Company(req.body)

    try {
        await company.save()
        res.status(201).send(company)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
