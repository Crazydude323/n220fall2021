/*

    N320 Section 35306
    Christopher Owens
    Ground Rain
    9/2/21

*/

class Instrument { //instrument class
    constructor(loudness, family, verb) {
    this.loudness = loudness;
    this.family = family;
    this.verb = verb;
    }

    play() {
        console.log(this.family + " " + this.verb + " at " + this.loudness);
    }
}

class Woodwind extends Instrument {
    constructor(loudness) {
        super(loudness, "woodwind", "doots");
    }
}

class Percussion extends Instrument {
    constructor(loudness) {
        super(loudness, "percussion", "bangs");
    }
}

class Strings extends Instrument {
    constructor(loudness) {
        super(loudness, "string", "strums");
    }
}

bandArray = [];

bandArray[0] = new Woodwind("10 decibels");

bandArray[1] = new Percussion("5 decibels");

bandArray[2] = new Strings("11 decibels");

for (let i = 0; i < bandArray.length; i++) {
    bandArray[i].play();
}