var ground, iss_img, spacecraft1_img, spacecraft2_img, spacecraft3_img, spacecraft4_img ;
var  iis,spacecraft1, spacecraft2, spacecraft3, spacecraft4;

function preload(){
  ground = loadImage("../images/spacebg.png");
  iss_img = loadImage("../images/iss.png");  
  spacecraft1_img = loadImage("../images/spacecraft1.png");
  spacecraft2_img = loadImage("../images/spacecraft2.png");
  spacecraft3_img = loadImage("../images/spacecraft3.png");
  spacecraft4_img = loadImage("../images/spacecraft3.png");
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  iis = createSprite(400,200);
iis.addImage("iis",iss_img);
spacecraft1 = createSprite(200,200);
spacecraft1.addImage("spacecraft1",spacecraft1_img);

}

function draw() {
  background(255,255,255); 

  if(KeyIsDown(UP_ARROW)){
    spacecraft2 = createSprite(100,200);
    spacecraft2.addImage("spacecraft2",spacecraft2_img) 
  }
  if(KeyIsDown(RIGHT_ARROW)){
    spacecraft3 = createSprite(100,200);
    spacecraft3.addImage("spacecraft3",spacecraft3_img)
  }
  if(KeyIsDown(LEFT_ARROW)){
    spacecraft4 = createSprite(100,200);
    spacecraft4.addImage("spacecraft4",spacecraft4_img)
  }



  drawSprites();
 }