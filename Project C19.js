var roadImg, road;
var runningmanImg, runningman;
var gameState = "play";
var score=0;
var cone,coneImg,coneGroup;
var spawnCones;


function preload(){
  roadImg = loadImage("istockphoto-886746048-170667a.jpg");
  runningmanImg = loadImage("unnamed.png");
  coneImg = loadImage("roadblock-icon-5.jpg");
  

}




function setup() {
  createCanvas(600,400);
  
  
  road = createSprite(200,200);
  road.addImage("road",roadImg);
  road.velocityX = -1;
  
  
  

  runningman = createSprite(40,100,10,10);
  runningman.scale = 0.1;
  runningman.addImage("runningman",runningmanImg);


  
  coneGroup = new Group();

  
  
}
  

function draw() {
  
  text("Score: "+ score,30,50);
  score = score +1;

  if(gameState === "play"){

    if (road.x < 0){
      road.x = road.width/2;
    
    }
    if(keyDown("space")){
      runningman.velocityY = -5;
    }
    runningman.velocityY += 0.8;
   spawnCones();
    
    
    if(coneGroup.isTouching(runningman)){
      
      road.velocityX = 0;
      cone.velocityX = 0;
      gameState = "end";
    } 

    

    
    
    
  }

  if(gameState === "end"){
    stroke("orange");
    fill("orange");
    textSize(30);
    text("game over!",230,250);
  }

 
  

 drawSprites();
}

function spawnCones() {
  if(frameCount%60===0) {
    cone = createSprite(400,300);
    cone.scale = 0.05;
    cone.addImage("cone",coneImg);
    cone.velocityX = -1;
    coneGroup.add(cone);
  }
}