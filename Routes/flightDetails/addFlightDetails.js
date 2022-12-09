const express = require('express')
const Router = express.Router()
const flightDetailModel = require('../../Models/flightDetailModel')
Router.post('/addFlightDetails', (req, res) => {
    const data = req.body
    const flightData = new flightDetailModel({
        flightNo: data.flightNo,
        origin: data.origin,
        destination: data.destination,
        timing: data.timing,
        planeCategory: data.planeCategory
    })
    flightData.save().then((res) = res.send('flight details were added to the collection')).catch((err) => res.send('error in adding flight details'))
})
module.exports = Router