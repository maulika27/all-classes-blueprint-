const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var  ground;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var bird;
var log1, log2, log3, log4;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,350,50,50);
    box2 = new Box(200, 350, 50, 50);

    ground = new Ground (200, 380, 400, 10);
   
    pig1 = new Pig(250, 350);

    bird = new Bird(50, 50);

    log1= new Log(250, 300, 150, PI/2);

    box3 = new Box(300, 250, 50, 50);
    box4 = new Box(200, 250, 50, 50);
    pig2 = new Pig(250, 300);

    log2 = new Log(250, 200, 150, PI/2);

    box5 = new Box(250,100, 50, 50);

    log3 = new Log(300, 100, 80, -PI/7);
    log4 = new Log(200, 100, 100, PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();
   
}