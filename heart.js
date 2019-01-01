function heart(x, y, hu){
  this.x = x;
  this.y = y;
  this.hu = hu;
  this.tm = 0;
  
  this.update = function(){
    this.tm++;
  }
  
  this.disp = function(){
    for(var i=0;i<5;i++){
      if(this.tm===i){
        point(this.x, this.y);
      }
      if(this.tm===i+5){
        point(this.x, this.y);
        point(this.x-1, this.y-1);
        point(this.x+1, this.y-1);
      }
      if(this.tm===i+10){
        point(this.x, this.y+1);
        point(this.x-1, this.y);
        point(this.x+1, this.y);
        point(this.x-2, this.y-1);
        point(this.x-1, this.y-1);
        point(this.x, this.y-1);
        point(this.x+1, this.y-1);
        point(this.x+2, this.y-1);
        point(this.x-1, this.y-2);
        point(this.x+1, this.y-2);
      }
      
    }
  }
}
        
