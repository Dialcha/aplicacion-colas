// Comando para establecer la conexión

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se ha perdido la conexión al servidor');
});

socket.on('estadoActual', (data) => {
    label.text(data.actual),
        console.log(data)
});

//on 'estadoActual', cuando se reciba el objeto con la propiedad actual, colocar ese valor en la pagina web

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});