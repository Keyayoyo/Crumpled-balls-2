var ball,ground ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bin = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	
	var dbin = createSprite(1300,370,100,100);
	dbin.addImage(bin);
	dbin.scale = 0.8;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	ball= new Paper (200,420,50,50);
	ground = new Ground(800,500,1600,20);
	base1 = new Dustbin(1300,490,150,20);
	base2 = new Dustbin(1250,450,20,100);
	base3 = new Dustbin(1350,450,20,100);
	
}


function draw() {
  //rectMode(CENTER);
  background(255);
  Engine.update(engine);
  ball.display();
  ground.display();
  base1.display();
  base2.display();
  base3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-280})
	}
}



