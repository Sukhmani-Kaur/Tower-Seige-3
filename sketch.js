const Engine =Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var Player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;

var polygon;
var img;
var backgroundImg;
var score=0;

function preload(){
    img=loadImage("polygon.png");
    getBackgroundImg();

}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;

    ground1 = new ground(600,285,200,10);
    ground2 = new ground(900,195,200,10);
    ground3 = new ground(750, 600, 1500, 10)


    block1 = new box(600,260,30,40);
    block2 = new box(570,260,30,40);
    block3 = new box(540,260,30,40);
    block4 = new box(630,260,30,40);
    block5 = new box(660,260,30,40);
    block6 = new box(585,220,30,40);
    block7 = new box(555,220,30,40);
    block8 = new box(615,220,30,40);
    block9 = new box(645,220,30,40);
    bolck10 = new box(600,170,30,40);
    block11 = new box(570,180,30,40);
    block12 = new box(630,180,30,40);
    block13 = new box(600,140,30,40);
    block14 = new box(900,170,30,40);
    block15 = new box(930,170,30,40);
    block16 = new box(870,170,30,40);
    block17 = new box(840,170,30,40);
    block18 = new box(960,170,30,40);
    block19 = new box(900,140,30,40);
    block20 = new box(930,140,30,40);
    block21 = new box(870,140,30,40);
    block22 = new box(900,110,30,40);

    Player = new player(50,200,30,30);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  sling = new slingshot(this.polygon,{x:150, y:160});

}

function draw() {
    if(backgroundImg)
      background(backgroundImg);
    
      noStroke();
      textSize(35)
      fill("black")
      text("Score  " + score, width-300, 50)

    Engine.update(engine);

    fill(rgb(135, 205, 236));

    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();

    fill("lightBlue");
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();
    block9.display();
    block9.score();

    fill("lightPink");
    bolck10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();
    fill(rgb(47, 48, 48));

    block13.display();
    block13.score();

    fill(rgb(135, 205, 236));
    block14.display();
    block14.score();
    block15.display();
    block15.score();
    block16.display();
    block16.score();
    block17.display();
    block17.score();
    block18.display();
    block18.score();
    fill("lightGreen");

    block19.display();
    block19.score();
    block20.display();
    block20.score();
    block21.display();
    block21.score();
    fill("lime");

    block22.display();
    block22.score();

    ground1.display();
    ground2.display();
    ground3.display();

    imageMode(CENTER);
    image(img,polygon.position.x,polygon.position.y,40,40);

    sling.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly()
}


function keyPressed(){
  if(keyCode === 32){
      sling.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}