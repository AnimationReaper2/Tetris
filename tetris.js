const c = document.getElementById('gameboard');
const ctx = c.getContext('2d');
const pbtn = document.getElementById('playbtn');
const rbtn = document.getElementById('resetbtn');
const rghtbtn = document.getElementById('right');
const lbtn = document.getElementById('left');
const dwnbtn = document.getElementById('down');
const rtebtn = document.getElementById('rotate');
const SQ = 20;
var score;
var gamePC;

pbtn.addEventListener('click', play);

rbtn.addEventListener('click', () => {
    location.reload();
});

rghtbtn.addEventListener('click', right);

lbtn.addEventListener('click', left);

dwnbtn.addEventListener('click', down);

rtebtn.addEventListener('click', rotate);

function play(){
    /* When play is clicked it plays the game, creating a piece, next piece and starting the pieces movement. */
    console.log('play');
    pc();
    moving();
}

function pc(){
    /* Game piece in play */
    console.log('game piece');
    gamePC = new component(10, 5, 'red', 10, 0);
}

function component(width, height, cl, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ct = ctx;
    ct.fillStyle = cl;
    ct.fillRect(this.x, this.y, this.width, this.height);
}

function right(){
    /* When either the key is pressed or the button it moves the piece to the right 1. */
    console.log('right');
}

function down(){
    /* When either the key is pressed or the button it moves the piece down 1. */
    console.log('down');
}

function left(){
    /* When either the key is pressed or the button it moves the piece to the left 1. */
    console.log('left');
}

function rotate(){
    /* When space bar is pressed or the button it rotates the piece clockwise. */
    console.log('rotate');
}

function moving(){
    /* When the game starts the piece automatically starts to fall 1 space at a time moving 1 sec at a time. */
    console.log('move');
}

function nPiece(){
    /* Shows the next piece in the display box. */
}

function score(){
    /* Keeps track of the score. */
}

function lose(){
    /* When fail show loser screen. */
}