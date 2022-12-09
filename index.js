const express = require('express')
const server = express()
const bp = require('body-parser')
server.use(bp.json())
const addFlightDetails = require('./Routes/flightDetails/addFlightDetails')
const getFlightDetails = require('./Routes/flightDetails/getFlightDetails')
const ticketDetails = require('./Routes/bookingDetails/ticketDetails')
const getTicketDetails = require('./Routes/bookingDetails/getTicketDetails')
server.use('/', addFlightDetails)
server.use('/', getFlightDetails)
server.use('/', ticketDetails)
server.use('/', getTicketDetails)
server.listen(5000, () => console.log('server started at port number 5000'))