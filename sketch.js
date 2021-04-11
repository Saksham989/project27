
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof (425,300,250,20);
	bob1 = new Bob (340,470,20)
	bob2 = new Bob (380,470,20)
	bob3 = new Bob (420,470,20)
	bob4 = new Bob (460,470,20)
	bob5 = new Bob (500,470,20);
	rope1= new Rope(bob1.body,roof1.body,-40*2, 0);
	rope2= new Rope(bob2.body,roof1.body,-20*2,0);
	rope3= new Rope(bob3.body,roof1.body,-0*2,0);
	rope4= new Rope(bob4.body,roof1.body,20*2,0);
	rope5= new Rope(bob5.body,roof1.body,40*2,0);
	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  
  roof1.display()
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
}


function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -50, y:-45});
	}
}
