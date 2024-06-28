const express = require('express')
const path = require('path');
const http = require('http');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const io =new Server(server);
app.use(express.static(path.join(__dirname, 'public')));

//socket.io
//handle connection
io.on('connection', (socket) => {
  socket.on("user-message",(message)=>{
    io.emit("message",message) //server to client2
  })
  //handle disconnection
socket.on('disconnect', (socket) => {
  console.log('A user connected:', socket.id);
  console.log('Disconnected from server');
});
});
 



app.get('/',(req,res)=>{
  res.send("/public/index.html");
})



server.listen(7000,()=> console.log(`Server Started at PORT 7000`));