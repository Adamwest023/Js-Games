const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'assets/images/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
//variables to slow down animation
let gameFrame = 0;
const staggerFrames = 6``;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //  ctx.fillRect(x,50,100,100);
    // dimensions of drawImg can take up to 9 arguements(img(this is the source),
    // sx,sy,swidth,sheight(these four are the crop demensions),
    // dx,dy,dw,dh(these four are the area it fills in the canvas));
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight,
        spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if(gameFrame % staggerFrames == 0) {
        if(frameX < 6 ) frameX++;
        else frameX = 0;
    }
    gameFrame++;

    requestAnimationFrame(animate);
};

animate();
