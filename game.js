class Game {
    constructor(){
  
    }

async start(){
    if(gameState === 0){
       form = new Form()
       form.display();
       
     }
 
   }
 
   play(){
    form.hide();
    player=createSprite(displayWidth/2,displayHeight-150);
    player.addImage(playerImage);
    house1=createSprite((displayWidth/4)*3,displayHeight/4-100);
    house1.addImage(house1Image);
    house2=createSprite(displayWidth/2,displayHeight/4-100);
    house2.addImage(house2Image);
    house3=createSprite(displayWidth/4,displayHeight/4-100);
    house3.addImage(house3Image);
    
    if(keyDown(UP_ARROW)){
        player.y = player.y-2;
        console.log("hello");
    }


   }
}