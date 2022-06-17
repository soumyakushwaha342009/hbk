var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var bottom, bottomImg, obsBottom1, obsBottom2, obsBottom3
var bottomObsGroup

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

bottomImg1 = loadImage("assets/obsBottom1.png")
bottomImg2 = loadImage("assets/obsBottom2.png")
bottomImg3 = loadImage("assets/obsBottom3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

bottomObsGroup = new Group()


}

function obstacleImages(){
if (World.frameCount% 80===0){
bottom1 = createSprite(width,height-50,40,38);
bottom1.addImage(bottomImg1)
bottom1.scale = random(0.1,0.25)
bottom1.velocityX = -3

var rand = Math.round(random(1,3))
switch(rand){
case 1: bottom1.addImage(bottomImg1);
break;
case 2: bottom1.addImage(bottomImg2);
break;
case 3: bottom1.addImage(bottomImg3);
break;
default: break;
}

bottom1.lifetime = 200
 
balloon.depth = bottom1.depth+1

bottomObsGroup.add(bottom1)
}



}



function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY+0.2;
   
           //spawning bottom obstacles
           obstacleImages()
        drawSprites();

        
}
