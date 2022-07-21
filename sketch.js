
 var navio,navioImg;
 var mar, marImg;

function preload(){
 
  navioImg.boardAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  marImg.boardAnimation("sea.png");

 

}

function setup(){
  createCanvas(400,400);
  
  navio = createSprite(100,300,70,70);
 navio.addAnimation("navioImg",navio);
 navio.velocityY=-3;
 navio.velocityX=+3;
 navio.velocityY=+2;
 navio.velocityX=-2;

 mar = createSprite(200,200,400,400);
 mar.addAnimation("marImg",mar);
 mar.velocityX=0;


}

function draw() {
  background("blue");

 if (mar.X < 0){
  mar.X= mar.width/2
 }



    drawSprites();

 
}
