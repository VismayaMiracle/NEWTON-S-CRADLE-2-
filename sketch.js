const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;


var canvasmouse;
var pendulum1, pendulum2, pendulum3,pendulum4;
var sling1, sling2, sling3, sling4;
var background,backgroundIMG;
var ground1;

function preload(){
    backgroundIMG=loadImage("background.jpg")
}


function setup(){
  
    canvas = createCanvas(windowWidth/2,windowHeight/1);
    engine = Engine.create();
    world = engine.world;
    
    
    let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine, options);
    World.add(world,mConstraint);

    ground1 = new Ground(350,250,300,40);
    
    pendulum1 = new Pendulum(200,400, "darkgreen");
    pendulum2 = new Pendulum(250,400, "yellow");
    pendulum3 = new Pendulum(300,400, "red");
    pendulum4 = new Pendulum(350,400, "purple");

    sling1 = new Sling(pendulum1.body, { x: 260, y: 250 }); 
	sling2 = new Sling(pendulum2.body, { x: 310, y: 250 }); 
	sling3 = new Sling(pendulum3.body, { x: 360, y: 250 }); 
    sling4 = new Sling(pendulum4.body, { x: 410, y: 250 }); 
    
    Engine.run(engine);
}

function draw(){

    background(backgroundIMG)
    textSize(45);
    fill("yellow");
    strokeWeight(3)
    stroke("red")
	text("Newton's Cradle!!", 200,100)
	rectMode(CENTER);
    Engine.update(engine);
    
    ground1.display();
   
    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    


   

}

