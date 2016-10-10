"use strict";

const socket = io()


socket.on("connection", function (data){
  // console.log("youre user ID is:", data.id);
  // console.log(data.userNumber);
})
////////this is recieving data from the socket on the server
socket.on("message", function (data){
  console.log(data.msg);
  //////this is emmiting data back to the server
  // socket.emit('my other event', { my: 'data' });
  //////////////////////////////////////////////
})

socket.on('disconnect', () => console.log('Socket disconnected'))
///////////////////////////////
// socket.on("disconnect", function (socket){
//   console.log(s);
// })

// drawing board
