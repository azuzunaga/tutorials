var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  io.emit('chat message', 'New user');
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    io.emit('user left', 'User left');
  });
});

http.listen(3000, function() {
  console.log('Listening on http://localhost:3000');
});

/*
TODO:
- [DONE] Broadcast a message to connected users when someone connects 
  or disconnects.
- Add support for nicknames.
- Don’t send the same message to the user that sent it himself. Instead, 
  append the message directly as soon as he presses enter.
- Display user's own messages to the right, other user messages to the
  left, system messages in the middle.
- Add “{user} is typing” functionality.
- Show who’s online.
- Add private messaging.
*/
