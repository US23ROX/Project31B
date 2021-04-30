const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine
var world 

var plinkos = []
var block = []

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  for(var i = 40;i<=width-10;i=i+20){
      plinkos.push(new Plinko(i,50));
  }
  for(var i = 10;i<=width-10;i=i+20){
    plinkos.push(new Plinko(i,85));
}
for(var i = 40;i<=width-10;i=i+20){
  plinkos.push(new Plinko(i,120));
}
for(var i = 10;i<=width-10;i=i+20){
  plinkos.push(new Plinko(i,155));
}
for(var i = 10;i<=width;i=i+20){
  block.push(new Block(i,height-300));
}

}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  for(var i = 0;i<=plinkos.length;i++){
    plinkos[i].display();
  }

  for(var i = 0;i<=block.length;i++){
    block[i].display();
  }




}