const express = require('express')
const path = require('path');
const http = require('http');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const io =new Server(server);
app.use(express.static(path.join(__dirname, 'public')));

//socket.io
io.on('connection', (socket) => {
  socket.on("user-message",(message)=>{
    io.emit("message",message)
  })
});




app.get('/',(req,res)=>{
  res.send("/public/index.html");
})

server.listen(7000,()=> console.log(`Server Started at PORT 7000`));