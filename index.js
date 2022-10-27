const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

    console.log('Usuário conectado!');
    //io.emit('conectado','Estou conectado!');
    
    socket.on('chat message',(obj)=>{
        console.log(obj);
    })

    socket.on('disconnect',()=>{
        console.log('Desconectado.');
    })

});

http.listen(3000, () => {

    console.log('listening on *:3000');

});