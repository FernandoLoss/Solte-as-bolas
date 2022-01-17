
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

	var plane_options={

		isStatic: true

	}

	block1= Bodies.rectangle(200,100,90,20);

	World.add(world,block1);

	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine);
  rectMode(CENTER);
  background("lightGreen");

  
  drawSprites();
 
}



