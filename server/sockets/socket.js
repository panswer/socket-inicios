const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');
    /* Enviar mensaje para cliente */
    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });
    client.on('disconnect', () => {
        console.log(`Usuario no responde`);
    });
    /* Escuchar cliente */
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        /* if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN!'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL!'
            });
        } */
    });
});