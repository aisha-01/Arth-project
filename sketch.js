const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var form;
var gameState=0;
var player,house1,house2,house3;
var playerImage,house1Image,house2Image,house3Image;
var Background,backgroundImage;
var game;
var gameState=0;
var stress,stressImage;
var button1;

function preload()
{
  playerImage=loadImage("happydog.JPG");
  house1Image=loadImage("GAMEHOUSE.JPG");
  house2Image=loadImage("MUSICHOUSE.JPG");
  house3Image=loadImage("STORYHOUSE.JPG");
  //backgroundImage=loadImage("BgImage.JPG");
  stressImage=loadImage("coverpage.jpg");
  
}

function setup() {
	createCanvas(displayWidth-20, displayHeight-30);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

  game=new Game();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if (gameState===0){
    game.start();
    background(stressImage);
  }
  if (gameState===1){
    button1.visible= false;
    game.play();
    background("white");
  }
  
  drawSprites();
 
}



