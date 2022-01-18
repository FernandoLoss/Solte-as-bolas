
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle=60;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	var planeOptions = {

		isStatic:true,

	}

	var rotatorOptions = {

		isStatic:true,

	}

	var groundOptions = {

		isStatic:true,

	}

	var ball_options = {
		restitution: 0.95,
		frictionAir:0.01
	  }

	//Crie os Corpos aqui.

	ground = Bodies.rectangle(250,500,1000,20,groundOptions);
	World.add(world,ground);

	ground2 = Bodies.rectangle(1,500,20,1000,groundOptions);
	World.add(world,ground2);

	ground3 = Bodies.rectangle(520,500,20,1000,groundOptions);
	World.add(world,ground3);

	block1 = Bodies.rectangle(100,200,100,10,planeOptions);
	World.add(world,block1);

	block2 = Bodies.rectangle(400,200,100,10,planeOptions);
	World.add(world,block2);

	block3 = Bodies.rectangle(100,400,100,10,planeOptions);
	World.add(world,block3);

	block4 = Bodies.rectangle(400,400,100,10,planeOptions);
	World.add(world,block4);

	block5 = Bodies.rectangle(250,300,100,10,planeOptions);
	World.add(world,block5);

	rotator = Bodies.rectangle(250,100,200,10,rotatorOptions);
	World.add(world,rotator);

	ball1 = Bodies.circle(250,10,20,ball_options);
	World.add(world,ball1);

	ball2 = Bodies.circle(250,10,20,ball_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(250,10,20,ball_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(250,10,20,ball_options);
	World.add(world,ball4);

	ball5 = Bodies.circle(250,10,20,ball_options);
	World.add(world,ball5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGreen");

  Engine.update(engine);

  Matter.Body.rotate(rotator, angle)
  
  push();
    translate(rotator.position.x,rotator.position.y)
    rotate(angle);
    rect(0,0,90,10);
    angle+=15
  pop();

  
  drawSprites();

  ellipse(ball1.position.x,ball1.position.y,20);

  ellipse(ball2.position.x,ball2.position.y,20);

  ellipse(ball3.position.x,ball3.position.y,20);

  ellipse(ball4.position.x,ball4.position.y,20);

  ellipse(ball5.position.x,ball5.position.y,20);

  rect(ground.position.x,ground.position.y,500,20);

  rect(ground2.position.x,ground2.position.y,500,20);

  rect(ground3.position.x,ground3.position.y,500,20);

  rect(block1.position.x,block1.position.y,100,20);

  rect(block2.position.x,block2.position.y,100,20);
  
  rect(block3.position.x,block3.position.y,100,20);

  rect(block4.position.x,block4.position.y,100,20);

  rect(block5.position.x,block5.position.y,100,20);

}



