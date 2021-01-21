const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backimg;
function preload()
{
backimg = loadImage("scientific.jpg");	
}

function setup() {
	createCanvas(1350, 750);


	engine = Engine.create();
	world = engine.world;

roof = new Roof(width/2, 300, 480, 20);

	bob1 = new Bob(360,500,40);
	bob2 = new Bob(440,500,40);
	bob3 = new Bob(520,500,40);
	bob4 = new Bob(605,500,40);
	bob5 = new Bob(683,500,40);

	rope = new Rope(bob1.body, roof.body, -160, 0);
	rope2 = new Rope(bob2.body, roof.body, -80, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 80, 0);
	rope5 = new Rope(bob5.body, roof.body, 160, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backimg);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}
function keyPressed(){

  if(keyCode == RIGHT_ARROW){

	Body.applyForce(bob5.body,bob5.body.position, {x: 300, y: -300} );

  }

  if(keyCode == LEFT_ARROW){

	Body.applyForce(bob1.body,bob1.body.position, {x: -300, y: 300} );

  }

}
