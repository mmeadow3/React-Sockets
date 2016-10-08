"use strict";

const socket = io()
////////this is recieving data from the socket on the server
socket.on("message", function (data){
  console.log(data.msg);
  //////this is emmiting data back to the server
  socket.emit('my other event', { my: 'data' });
  //////////////////////////////////////////////

})
///////////////////////////////

socket.on("news", function (data){
  console.log(data);
})


// drawing board
