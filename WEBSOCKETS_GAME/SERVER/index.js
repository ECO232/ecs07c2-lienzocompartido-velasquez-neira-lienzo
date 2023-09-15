
const express = require ('express');
const http = require('http');
const socketIO = require ('socket.io');

const app = express();
const server = http.createServer(app);
const io =socketIO(server);

app.use(express.static('/public'));

io.on('connection', (socket) => {
    console.log ('client connected');

    socket.on('disconnect', () => {
        console.log ('client disconnected');
    })

    socket.on('send-element',(element) => {

        io.emit('element-recieved', element);
    })

    socket.on('send-cursor',(element)=>{
        io.emit('cursor-received', element)
    });
  
});

server.listen(3000,()=>{
    console.log ('Server Listening in port 3000');
})

