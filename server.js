'use strict'

const express = require('express')
const { Server } = require('http')
const mongoose = require('mongoose')
const socketio = require('socket.io')
var path = require("path"); /////needed for html hosting 

const app = express()
const server = Server(app)
const io = socketio(server)

const PORT = process.env.PORT || 3000
const MONGODB_URL =  process.env.MONGODB_URL || 'mongodb://localhost:27017/sockets'

// app.set('view engine', 'pug')

app.use(express.static('public')) /////telling to use the public file for JS files


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/views/home.html'));
  //__dirname : It will resolve to your project folder.
});


mongoose.Promise = Promise
mongoose.connect(MONGODB_URL, () => {
  server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
})


////////////Alright, time to add some cool socket action//////////
io.on("connection", (socket) => {
  console.log("we are connected via a websocket", socket.id);
})
