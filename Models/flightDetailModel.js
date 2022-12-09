const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost:27017').then((res) => console.log('connected to Flightdb')).catch((err) => console.log('err in connection'))
mongoose.connect('mongodb+srv://mahesh:parvathamma@cluster0.tibizpb.mongodb.net/?retryWrites=true&w=majority').then((res) => console.log('connected to Flightdb')).catch((err) => console.log('err in connection'))
const fd = mongoose.Schema
const fdSchema = new fd({
    flightNo: Number,
    origin: String,
    destination: String,
    timing: String,
    planeCategory: String
})
const flightDetailModel = mongoose.model('flightDetails', fdSchema)
module.exports = flightDetailModel