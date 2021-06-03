//Declaring variables
var bg,bg2,form,system,code,security;
var score=0;
var actualCode=accessCode2;
var enteredCode=security.input1;
var actualCode2=accessCode3;
var enteredCode2=security.input3;
var actualCode3=accessCode1;
var enteredCode3=security.input2;
var end,endBg;

//Loading the images
function preload() {
  bg = loadImage("background.jpg");
  endBg=loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
}

function draw() {
  background(bg);
  //Giving clues 
  clues();

  security.display();

  

  //Adding the treasure image for game's end
  if(score===3){
  end=createSprite(500,250);
  end.addImage(endBg);
  end.scale=1.5;

  }
  
  drawSprites()

  //Adding text for score
  textSize(25);
  text("Score:"+score,490,30);
  //text(mouseX + ","+mouseY,30,50 );
  if(score===3){
    stroke("red");
    fill("black");
    textSize(30);
    text("CONGRATS! THE TREASURE IS YOURS!!",200,280);
  }

}