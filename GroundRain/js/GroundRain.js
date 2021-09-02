/*

    N320 Section 35306
    Christopher Owens
    Ground Rain
    9/2/21

*/

class Ground { //Ground class, includes a method to create the ground.
    constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    }

    create() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }
}

class Rain { //Rain class, includes a method to create the rain drops.
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = 10 * speed;
    }

    create() {
        if (this.speed < 4) { //this If statement it used to speed up any slow, lagging behind rain drops at the start. Only runs when they're created though.
            this.speed + 6;
        }
        circle(this.x, this.y+=this.speed, this.size);
    }
}

rainArray = []; //array to hold rain drop instances

for (let i = 0; i < 200; i++) { //creates 200 rain drop instances
    rainArray[i] = new Rain(800 * Math.random(), -100, 10, Math.random())
}

var groundBlue = 120; //sets the starting Blue value for the ground's RGB

function setup() {  // Creates the canvas

    createCanvas(800, 600);

}

function draw() {
    let bgColor = color(128); // Sets background color
    background(bgColor);

    let rainColor = color(20, 20, 200) //controls rain color, used later down in the for loop

    let groundColor = color(100,100,groundBlue); //sets ground color

    var myGround = new Ground(0, 450, 800, 150, groundColor); //creates an instance of the ground, but doesn't draw it to the canvas. That happens right at the bottom. This is kept in the draw function so that the color can be continuously updated. Also because things broke if I moved it outside of draw.

    for (let i = 0; i < rainArray.length; i++) { //draws all the rain instances to the canvas, and also continually checks the position of them using the if statement
    fill(rainColor);
    rainArray[i].create();

    if (rainArray[i].y > 450) { //if the rain is low enough, does a whole slew of things. Elaborated on below
        rainArray[i].speed = 10 * Math.random(); //Starts by re-randomizing the rain's speed, which isn't necessary per se, but stops the same patterns from constantly repeating. 
        rainArray[i].y = -500; //It then moves the rain above the canvas, as a sort of shortcut instead of creating new rain; in theory I could change the x value here to and get the same effect as creating new rain, but I think it looks nice as-is.
        groundBlue+=0.2; //Finally, makes the ground more blue.
    }
    }

    myGround.create(); //draws the ground itself. Kept at the bottom to ensure that it's only drawn after the color has been updated.
}