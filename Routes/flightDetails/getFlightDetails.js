const express = require('express')
const Router = express.Router()
const flightDetailModel = require('../../Models/flightDetailModel')
Router.get('/getFlightDetails', async (req, res) => {
    try {
        const result = await flightDetailModel.find({})
        res.send(result)
        console.log(result)
    }
    catch (err) {
        res.send('Error')
    }
})
module.exports = Router