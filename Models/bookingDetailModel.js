const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Aviation').then((res) => console.log('connected to Ticketdb')).catch((err) => console.log('err in connection'))
const bd = mongoose.Schema
const bdSchema = new bd({
    username: String,
    origin: String,
    destination: String,
    timing: String,
    planeCategory: String,
    ticketBooked: Boolean
})
const bookingDetailModel = mongoose.model('ticketDetails', bdSchema)
module.exports = bookingDetailModel