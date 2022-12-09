const express = require('express')
const Router = express.Router()
const bookingDetailModel = require('../../Models/bookingDetailModel')
Router.post('/ticketDetails', async (req, res) => {
    const data = req.body
    try {
        const ticketDetails = new bookingDetailModel({
            username: data.username,
            origin: data.origin,
            destination: data.destination,
            timing: data.timing,
            planeCategory: data.planeCategory,
            ticketBooked: data.ticketBooked
        })
        const result = await ticketDetails.save()
        res.send('booking success')
    }
    catch (err) {
        res.send('Error')
    }
})

module.exports = Router