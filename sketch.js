
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render

var paperObject,groundObject;
var downbody;                                          


  
function setup() {
	createCanvas(1000,400);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject=new Paper(200,350,40);
	groundObject=new ground(width/2,390,width,20);
	downbody=new dustbin(700,350,10,100);
	downbody2=new dustbin(750,390,100,10);
	downbody3=new dustbin(800,350,10,100);
	Engine.run(engine);

	    var render = Matter.Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 400,
          wireframes: false
		}
	  });
	 // Engine.run(myengine);
	  Matter.Render.run(render);
  }
	
  



function draw() { 
  rectMode(CENTER);
  background(0);
  paperObject.display();
  groundObject.display();
  downbody.display();

  paperObject.bounceOff(groundObject);


 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}
