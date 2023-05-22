

const socketController = (socket)=>{
    console.log('Cliente Conectado al Servidor',socket.id);

    socket.on('disconnect',()=>{
        console.log('Cliente Desconectado del Servidor');
    });

    socket.on('enviar_mensaje',(payload,callback)=>{
        const id=123456;
        callback(id);
        socket.broadcast.emit('enviar_mensaje',payload)
    });
};


export{
    socketController
}