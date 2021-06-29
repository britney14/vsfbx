const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow, slingshot, snowWorld, ground,slingshot,wood;
var gameState= START
var score = 0;
function preload() {
  background = loadImage(snow2.jpg)
}
function setup() {
  createCanvas(800,400);
  ground= new ground(600,height,800,400)
  snow = new snow(200,50);
  enemy = new Enemy(810, 220);
  
  engine = Engine.create();
    world = engine.world;
    slingshot = new slingshot(snow.body,{x:200, y:50});
}

function draw() {
  background(255,255,255);  
  text("Score  " + score, width-300, 50)
  textSize(35)

  drawSprites();
}