const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionsHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  Ground1 = new Ground(240, 790, 480, 20);

  for (var j = 40; j <=innerWidth; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for (var j = 15; j <=innerWidth-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for (var j = 40; j <=innerWidth; j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for (var j = 15; j <=innerWidth-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }

  for (var k = 0; k <=innerWidth; k=k + 80) {
    divisions.push(new Divitions(k, 800-divisionsHeight/2, 10, divisionsHeight));
  }
}

function draw() {
  background(0);
  Engine.update(engine);

  Ground1.display();

  

  if (frameCount % 90 === 0){
    particles.push(new Particle(random(width/2-30, width/2+30)), 10, 10)
  }

  

  for (var j = 0; j < plinkos.length; j++){

    plinkos[j].display();
  }

  for (var k = 0; k < divisions.length; k++){

    divisions[k].display();
  }


  for (var i = 0; i < particles.length; j++){
    particles[i].display();
  }

  console.log(frameCount);
  drawSprites();
}

