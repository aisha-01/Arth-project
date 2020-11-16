class Form{
  constructor(){
    this.image=loadImage("coverpage.jpg");
    button1 = createButton('Play');
  }
  hide(){
    button1.hide();
  }
  display(){
    image(this.image,0,0,displayWidth-20, displayHeight-30);
    button1.position(displayWidth/2 + 300, displayHeight/2-150);
    
    button1.mousePressed(()=>{
      button1.hide();
      gameState =1;
    });
  }
}