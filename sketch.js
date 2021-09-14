
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var top_wall;

function preload()
{
	
}

function setup() {
	createCanvas(600,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(200,390,800,20);
	top_wall = new Ground(400,340,15,80);
 top_wall1 = new Ground(525,320,15,120);
 top_wall2 = new Ground(0,180,15,400);
 top_wall3 = new Ground(600,180,15,400);
 top_wall4 = new Ground(300,0,600,10);

 btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

	var ball_options = {
		restitution: 0.95,
	  }
	  
 ball = Bodies.circle(50,50,20,ball_options);
 World.add(world,ball);  
 ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show()
  top_wall1.show()
  
  drawSprites();
 
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05});
}

