var bgImg;
var catImg1,catImg2,catImg3;
var mouseImg1,mouseImg2,mouseImg3;
var cat , mouse;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1200,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    mouse = createSprite(200,600);
    cat.addAnimation("catStanding",catImg1);
    mouse.addAnimation("mouseStanding",mouseImg1);
    cat.scale = 0.2;
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catHappy",catImg3);
    cat.changeAnimation("catHappy");
    mouse.addAnimation("mouseHappy", mouseImg3);
    mouse.changeAnimation("mouseHappy");
    cat.x = 300;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
   mouse.addAnimation("mouseTeasing", mouseImg2);
   mouse.changeAnimation("mouseTeasing");
  // mouse.frameDelay = 25;
   cat.velocityX = -5;
   cat.addAnimation("catrunning", catImg2);
   cat.changeAnimation("catrunning");
   }

}
