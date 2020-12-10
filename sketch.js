var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground;
var score = 0;
var SurvivalTime = 0;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,1200,10);
  ground.velocityX = -4;
  ground.shapeColor = "green";
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  

}


function draw() {
  background("lightblue"); 
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : "+ score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time : " + SurvivalTime,100,50); 
  
 
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y>260){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  createBanana();
  createObstacles();

  drawSprites();
}

function createBanana(){
  if(World.frameCount%80 == 0){
    banana = createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(100,300));
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 120;
    bananaGroup.add(banana);   
    
  }
}

function createObstacles(){
if(World.frameCount%300 == 0){
  obstacle = createSprite(400,321,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.15;
  obstacle.velocityX = -6;
  obstacle.lifetime = 100;
  obstacleGroup.add(obstacle);
  
  }
}



