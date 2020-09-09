var fix,move;
function setup() {
  createCanvas(1200,800);
  fix = createSprite(200,400,50,70);
  move = createSprite(100,200,50,70);
  fix.shapeColor = "blue";
  move.shapeColor = "blue";
  fix.debug = true;
  move.debug = true;
  
}

function draw() {
  background("black"); 
  
  move.x = World.mouseX;
  move.y = World.mouseY;

  if(move.x-fix.x < move.width/2+fix.width/2 && fix.x-move.x < move.width/2+fix.width/2 
    && move.y-fix.y < move.height/2+fix.height/2 && fix.y-move.y <move.height/2+fix.height/2)
  {
    fix.shapeColor = "red";
    move.shapeColor = "red";
  }
  else
  {
    fix.shapeColor = "blue";
    move.shapeColor = "blue";
  }
  drawSprites();
}