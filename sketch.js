  
var ceuImg, ceu;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var fada, fadaImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  ceuImg = loadImage("ceu.jpg");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  fadaImg = loadImage("fada.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  ceu = createSprite(200,200);
  ceu.addImage("ceu",ceuImg);
  ceu.velocityY = 1;
  ceu.scale = 2.5;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  fada = createSprite(200,200,2,2);
  fada.scale = 0.13;
  fada.addImage("fada", fadaImg);
}


function draw() {
  background(255);
 if(ceu.y > 100){
      ceu.y = 50;
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        fada.x = fada.x - 3;

      // escreva o código para mover para a esquerda quando a tecla para a esquerda for pressionada
    }
    if(keyDown("right_arrow")){
  
        fada.x = fada.x + 3;

      // escreva o código para mover para a direita quando a tecla para a direita for pressionada
      
    }
    if(keyDown("space")){
  
        fada.velocityY = -10;

      // escreva o código para mover para cima quando a tecla espaço for pressionada
      
    }
  
   fada.velocityY = fada.velocityY + 0.8;
  
   
      //escreva uma condição para a torre de rolagem infinita
    
      spawnDoors();

  
//escreva um código para fazer invisibleBlockGroup (grupo de bloco invisível) colidir com o fantasma, destruir o fantasma e mudar o estado do jogo para end.
     if(climbersGroup.isTouching(fada)){
      fada.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(fada) || fada.y > 600){
      fada.destroy();
      gameState = "end";
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //adicione a função aleatória
    door.x = Math.round(random(110,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //mude a profundidade do fantasma e da porta
    
     
    fada.depth = door.depth;
    fada.depth =1;
    
    //atribuir tempo de vida para a porta, escalador e bloco invisível

    door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
    //adicione cada obstáculo ao grupo obstaclesGroup.add(obstacle); aqui os obstáculos são as portas, o escalador e o bloco invisível
    
     doorsGroup.add(door);
    invisibleBlock.debug = false;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

