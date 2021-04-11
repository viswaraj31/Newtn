
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob,bob1,bob2,bob3,bob4;
var roof;
var str,str1,str2,str3,str4;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(800,200,800,20);
	bob = new Bob(680,500,30)
	bob1 = new Bob(740,500,30)
	bob2 = new Bob(800,500,30)
	bob3 = new Bob(860,500,30)
	bob4 = new Bob(920,500,30)
	str = new String(bob.body,roof.body,-120,0)
	str1 = new String(bob1.body,roof.body,-60,0)
	str2 = new String(bob2.body,roof.body,0,0)
	str3 = new String(bob3.body,roof.body,+60,0)
	str4 = new String(bob4.body,roof.body,+120,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  roof.display();
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  str.display();
  str1.display();
  str2.display();
  str3.display();
  str4.display();

  drawSprites();
 
}



