var BGImg,BG
var bananaImg,banana
var ground
var obstacle
var GS = "NOpLAY"
var obstacleArray = []


function preload(){
  BGImg = loadImage("RAINBOW.jpg");
  bananaImg = loadImage("BANANA.png")
}

function setup(){
  createCanvas(400,400);
  BG = createSprite(200,200,200,200);
  BG.addImage(BGImg);
  BG.scale = 0.75;
  BG.velocityX = -5;
  BG.x = BG.width/4
  ground = createSprite(50,425,50,50)
  banana = createSprite(50,350,50,50)
  banana.addImage(bananaImg)
  banana.scale = 0.5
}


function draw() {
  

  background("blue");

  
 
  if(BG.x < 150){
    BG.x = 280
  }
  if(keyDown("space") && GS == "NOpLAY") {
    banana.velocityY = -23;
    GS = "PLAY"
}
  if(banana.y < 150){
    banana.velocityY = 8
  }

  banana.collide(ground)
  if(banana.y >= 300){
    GS = "NOpLAY"
  }

  if (frameCount % 60 === 0 || frameCount % 180 === 0 ||frameCount % 300 === 0 ){
    obstacle = createSprite(400,350,10,40);
    obstacle.shapeColor = "red"
    obstacle.velocityX = -6;
    obstacle.lifetime = 100000;
    obstacleArray.push(obstacle)
  }
 
  for (i = 0; i < obstacleArray.length ; i++ ) {
    if(banana.isTouching(obstacleArray[i])) {
      GS = "END"
    } 
}

if (GS == "END"){
  BG.addImage(bananaImg)
  obstacle.velocityX = 0
  BG.velocity = 0
  BG.x = 200
  BG.y = 200
  BG.scale = 2.5
  obstacle.visible = false
}



  drawSprites();
}