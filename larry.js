var flock = require("flocking"),
            enviro = flock.init();

flock.synth({
    synthDef: {
        id: "larry", 
        ugen: "flock.ugen.filter.biquad.bp",
        freq: {
            ugen: "flock.ugen.sin",
            freq: 0.1,
            rate: "control",
            mul: 2000, 
            add: 3000
        },
        q: 2.0,
        source: {
            ugen: "flock.ugen.impulse",
            freq: 10
        }
    }
});

enviro.play();
