var bg,bgImg;
var gun, gunImg;
var bubble, bubbleImg;
var bullet, bulletImg;

function preload(){
  
  gunImg = loadImage("assets/gun.png")

  bgImg = loadImage("assets/garden.png")

  bubbleImg = loadImage("assets/bubble.png")

  bulletImg = loadImage("assets/bullet.jpg")
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  bg = createSprite(windowWidth-800,windowHeight-300,100,100)
  bg.addImage(bgImg)
  bg.scale = 1.6
  
  gun = createSprite(displayWidth-1250, displayHeight-300, 50, 50);
  gun.addImage(gunImg)
  gun.scale = 0.2
  gun.debug = true
  gun.setCollider("rectangle",0,0,300,300)

  bullet = createSprite(gun.x, gun.y-37, 50, 50);
  bullet.addImage("Bullet", bulletImg)
  bullet.scale = 0.2

  bubbleGroup = new Group();
}

function draw() {
  background(0); 

if(keyDown("UP_ARROW")||touches.length>0){
  gun.y = gun.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 gun.y = gun.y+30
}

if(bubbleGroup.isTouching(gun)){
 

  for(var i=0;i<bubbleGroup.length;i++){     
       
   if(bubbleGroup[i].isTouching(gun)){
        bubbleGroup[i].destroy()
        } 
  }
 }
 
Bubble();

drawSprites();

}

function Bubble(){
  if(frameCount%50===0){
    bubble = createSprite(random(1300,1400),random(100,600),40,40)
    bubble.addImage(bubbleImg)
    bubble.scale = 0.2
    bubble.velocityX = -3
   
    bubble.lifetime = 500
    bubbleGroup.add(bubble)
  }

}
