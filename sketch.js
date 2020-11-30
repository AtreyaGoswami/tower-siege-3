const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);

  box1 = new Block(330,235,30,40);
  box2 = new Block(360,235,30,40);
  box3 = new Block(390,235,30,40);
  box4 = new Block(420,235,30,40);
  box5 = new Block(450,235,30,40);
  

  box6 = new Block(420,195,30,40);
  box7 = new Block(450,195,30,40);
  box8 = new Block(450,195,30,40);

  box9 = new Block(480,155,30,40);

  

  
  
}

function draw() {
  background(0);  

  Block.display();
  Block.display();
  Block.display();
  Block.display();  
  Block.display();
  Block.display();
  Block.display();
  Block.display();
  Block.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x : mouseX , y : mouseY})
  }
  function mouseReleased(){
      sling2.fly();
  }
