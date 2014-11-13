var Five  = require('johnny-five');
var board = new Five.Board();

board.on('ready',function() {
 (new Five.Led(13)).strobe(1000);
});

