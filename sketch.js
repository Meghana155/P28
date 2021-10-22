
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Boy(150, 650, 200,200);
	tree = new Tree(550, 500, 500,500);
	stone = new Stone(90,600,50,50);
	ground = new Ground(400,680,800,10);

	mango1 = new Mango(350, 450, 75, 75);
	mango2 = new Mango(475, 450, 75, 75);
	mango3 = new Mango(600, 450, 75, 75);
	mango4 = new Mango(725, 450, 75, 75);
	mango5 = new Mango(412, 400, 75, 75);
	mango6 = new Mango(537, 400, 75, 75);
	mango7 = new Mango(662, 400, 75, 75);
	mango8 = new Mango(474, 350, 75, 75);
	mango9 = new Mango(599, 350, 75, 75);
	mango10 = new Mango(536, 300, 75, 75);

	slingshot = new SlingShot(stone.body,{x:200, y:50});
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  slingshot.display();

  
  drawSprites();
 
}



