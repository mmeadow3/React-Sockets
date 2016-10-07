"use strict";

const socket = io()
////////this is recieving data from the socket on the server
socket.on("message", function (data){
  console.log(data.msg);
})
///////////////////////////////
