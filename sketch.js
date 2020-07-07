var road;
var road_img;
var bgImage
var cars
var signal1,signal2
var boy

function preload(){
road_img=loadImage("onlyroad.jpg");
bgImage=loadImage("cityBackground.jpg");
cars = loadImage("cars1.png");
boy = loadImage("boy.png");
signal1=loadImage("signal1.jpg");
signal2=loadImage("signal2.jpg");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  bg= createSprite(displayWidth/2,displayHeight/2);
bg.addImage(bgImage);
bg.scale=1.5;
 road= createSprite(displayWidth/2,displayHeight-50);
road.addImage(road_img);
signal=createSprite(800,50);
signal.addImage("signal1",signal1);
signal.addImage("signal2",signal2);
boy1= createSprite(600,400);
boy1.addImage(boy);
boy1.scale=0.3;
}

function draw() {

  background("black");
   spawncars();
   textSize (30);
   fill ("black");
  text(mouseX+"_"+mouseY,600,50)
  
if(keyIsDown(DOWN_ARROW)){
  boy1.velocityY=3;
  boy1.velocityX=0;
}
if(keyIsDown(UP_ARROW)){
  boy1.velocityY=-3;
  boy1.velocityX=0;
}
if(keyIsDown(LEFT_ARROW)){
  boy1.velocityX=-3;
  boy1.velocityY=0;
}
if(keyIsDown(RIGHT_ARROW)){
  boy1.velocityX=3;
  boy1.velocityY=0;
}


  drawSprites();
  
}
function spawncars(){
  if(frameCount%500===0){
    car1= createSprite(0,displayHeight-50);
    car1.addImage(cars);
    car1.velocityX=3;
car1.scale=0.2;
  }}
 


