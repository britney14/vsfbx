class Pig  {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("santa.jpg");
      this.Visiblity = 255;
    }
  
   display(){
     if(this.body.speed < 4){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 7;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
    }
  
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1015){
        score++;
      }
    }
  
  
  
  };