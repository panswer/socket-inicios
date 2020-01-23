var socket = io();
/* on: escuchar */
/* Verifica coneccion con servidor */
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
/* Verifica perdida de comunicacion con servidor */
socket.on('disconnect', function() {
    console.log('Servidor no responde');
});
/* emit: emite */
/* Envia informacion */
socket.emit('enviarMensaje', {
    usuario: 'Ricardo',
    mensaje: 'Hola mundo en socket'
}, function(resp) {
    console.log('Respuesta server ', resp);
});
/* Escuchar informacion */
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});