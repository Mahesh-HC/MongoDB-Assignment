const express = require('express')
const Router = express.Router()
const bookingDetailModel = require('../../Models/bookingDetailModel')
Router.get('/getTicketDetails', async (req, res) => {
    try {
        const result = await bookingDetailModel.find({})
        res.send(result)
        console.log(result)
    }
    catch (err) {
        res.send('Error')
    }
})
module.exports = Router