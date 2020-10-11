
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var roof;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

var bobDiameter = 40;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new bob(280,400,40);
	bob2 = new bob(325,400,40);
	bob3 = new bob(370,400,40);
	bob4 = new bob(415,400,40);
	bob5 = new bob(460,400,40);
	
	roof = new Roof(370,200,230,20);

	rope1 = new rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new rope(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 = new rope(bob3.body,roof.body,-bobDiameter*0,0);
	rope4 = new rope(bob4.body,roof.body,-bobDiameter*-1,0);
	rope5 = new rope(bob5.body,roof.body,-bobDiameter*-2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(130);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display(); 
  rope3.display(); 
  rope4.display(); 
  rope5.display();
		
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}

