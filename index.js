var flock = require("flocking"),
        enviro = flock.init();
var fs = require('fs');

function chuck(filename){
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) throw err;
        var obj = JSON.parse(data);
        flock.synth(obj);
    });
}

chuck('moe.json');
chuck('curly.json');
chuck('moe.json');

/*
setTimeout( function(){
    chuck('moe.json');
}, 1000);
*/

enviro.play();
