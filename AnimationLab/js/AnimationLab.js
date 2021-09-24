var titleElement = document.getElementsByClassName("title");
var blueElement = document.getElementsByClassName("bRect");
var purpleElement = document.getElementsByClassName("pRect");
var everything = null;

pPosNames = ["tl", "tm", "tr", "bl", "bm", "br"];
pRectArray = [];

document.addEventListener('DOMContentLoaded', function() {
    build();
});

function build() {
    gsap.to(titleElement, { duration: .6, delay: 1, opacity: 100});
    gsap.to(blueElement, { duration: .6, delay: 1.5, opacity: 100});
    gsap.to(purpleElement, { duration: .6, delay: 2, opacity: 100});
}

window.onload = init;

function init() {

    for (let i = 0; i < 6; i++) {
    pRectArray[i] = document.getElementById(`${pPosNames[i]}`);
    console.log(document.getElementById(`${pPosNames[i]}`));
    document.getElementById(`${pPosNames[i]}`).addEventListener("mouseover", function() {
        highlight(i);
    });
    document.getElementById(`${pPosNames[i]}`).addEventListener("mouseleave", function() {
        unhighlight(i);
    });
    document.getElementById(`${pPosNames[i]}`).addEventListener("mousedown", function() {
        exit();
    })
}

function highlight(pRectArrayNum) {
    gsap.to(pRectArray[pRectArrayNum], { duration: .6, delay: .1, height: 130, width: 260});
}

function unhighlight(pRectArrayNum) {
    gsap.to(pRectArray[pRectArrayNum], { duration: .6, delay: .1, height: 120, width: 250});
}

var everything = document.getElementById("everything");

function exit() {
    gsap.to(everything, { duration: 4, delay: .5, x: -1600});
}

}