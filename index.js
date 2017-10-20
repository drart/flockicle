var repl = require('repl');
var flock = require("flocking"),
        enviro = flock.init();
var fs = require('fs');

enviro.play();

var replServer = repl.start({
    prompt: "flocking |:::| ",
});

replServer.context.flock = flock;
