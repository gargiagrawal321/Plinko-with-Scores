const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var particle;
var plinkos=[];
var particles;
var divisions=[];

var divisionsHeight=300;

var score=0;
var count=0;
var gameState="start";

function setup() {
  createCanvas(600,800);
  engine=Engine.create()
  world=engine.world;
  ground=new Ground(width/2,height,width,20);

  for(var i=0; i<=width; i=i+80){
    divisions.push(new Division(i,height - divisionsHeight/2,10,divisionsHeight));
  }
   
  for (var j = 75; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,75));
  } 
  for (var j=50; j<=width; j=j+50){
    plinkos.push(new Plinko(j,175));
  } 
  for (var j=75; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  } 
  for (var j=50; j<=width; j=j+50){
    plinkos.push(new Plinko(j,375));
  } 
  
 //particles=new Particle(mouseX,50,30);

};

function draw() {
  rectMode(CENTER);
  background("pink");  
  Engine.update(engine);
if(gameState==="start")
{
  textSize(18);
  text("Score:"+score,20,40);
  fill("red");
  textSize(22);
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 100 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 200 ", 400, 550);
  text(" 200 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);


  ground.display();

  
  for (var i =0; i<divisions.length;i++){
    divisions[i].display();
  }
  
  for ( var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
  }


  if(particles!==null && particles!==undefined) {    

     particles.display();
     console.log(particles);
          
      if (particles.body.position.y>700){
        if(particles.body.position.x<300){
              score=score+500;
              particles=null;
              if (count>=5)
              {gameState="end";}
            }
            else if(particles.body.position.x<600 && particles.body.position.x>301){
              score=score+100;
              particles=null;
              if (count>=5) 
              {gameState = "end";}
            }
            else if(particles.body.position.x<900 && particles.body.position.x>691){
              score=score+200;
              particles=null;
              if (count>=5)
              { gameState="end";}
            }
          }
  }
}

  if (gameState==="end"){
    background("green");
    fill("yellow");
    textSize(100);
    text("GameOver",200,400);
  }

}

 
function mousePressed()
{
   
    particles=new Particle(mouseX,50,20);
    console.log(particles);
    count+=1;

}
