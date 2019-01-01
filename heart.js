function heart(x, y, hu){
  this.x = x;
  this.y = y;
  this.hu = hu;
  this.tm = 0;
  
  this.update = function(){
    this.tm++;
  }
  
  this.done = function() {
    if (this.tm>50) {
      return true;
    } else {
      return false;
    }
  }

  this.disp = function(){
    colorMode(HSB);
    stroke(this.hu, 255, 255);
    strokeWeight(2);
    var inc=5;
    for(var i=0;i<inc;i++){
      if(this.tm===i){
        point(this.x, this.y);
      }
      if(this.tm===i+inc){
        point(this.x, this.y);
        point(this.x-1, this.y-1);
        point(this.x+1, this.y-1);
      }
      if(this.tm===i+inc*2){
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
      if(this.tm===i+inc*3){
        point(this.x, this.y+3);
        point(this.x-1, this.y+2);
        point(this.x+1, this.y+2);
        point(this.x-2, this.y+1);
        point(this.x+2, this.y+1);
        point(this.x-2, this.y);
        point(this.x+2, this.y);
        point(this.x-3, this.y-1);
        point(this.x+3, this.y-1);
        point(this.x-2, this.y-2);
        point(this.x+2, this.y-2);
        point(this.x, this.y-2);
        point(this.x-1, this.y-3);
        point(this.x+1, this.y-3);
      }
      if(this.tm===i+inc*4){
        point(this.x, this.y+4);
        point(this.x-1, this.y+3);
        point(this.x+1, this.y+3);
        point(this.x-2, this.y+2);
        point(this.x+2, this.y+2);
        point(this.x-3, this.y+1);
        point(this.x+3, this.y+1);
        point(this.x-3, this.y);
        point(this.x+3, this.y);
        point(this.x-4, this.y-1);
        point(this.x+4, this.y-1);
        point(this.x-4, this.y-2);
        point(this.x+4, this.y-2);
        point(this.x-3, this.y-3);
        point(this.x, this.y-3);
        point(this.x+3, this.y-3);
        point(this.x-2, this.y-4);
        point(this.x-1, this.y-4);
        point(this.x+1, this.y-4);
        point(this.x+2, this.y-4);
      }
      if(this.tm===i+inc*5){
        point(this.x, this.y+5);
        point(this.x-1, this.y+4);
        point(this.x+1, this.y+4);
        point(this.x-2, this.y+3);
        point(this.x+2, this.y+3);
        point(this.x-3, this.y+2);
        point(this.x+3, this.y+2);
        point(this.x-3, this.y+1);
        point(this.x+3, this.y+1);
        point(this.x-4, this.y);
        point(this.x+4, this.y);
        point(this.x-4, this.y-1);
        point(this.x+4, this.y-1);
        point(this.x-5, this.y-2);
        point(this.x+5, this.y-2);
        point(this.x-5, this.y-3);
        point(this.x+5, this.y-3);
        point(this.x-5, this.y-4);
        point(this.x, this.y-4);
        point(this.x+5, this.y-4);
        point(this.x-4, this.y-5);
        point(this.x-1, this.y-5);
        point(this.x+1, this.y-5);
        point(this.x+4, this.y-5);
        point(this.x-3, this.y-6);
        point(this.x-2, this.y-6);
        point(this.x+2, this.y-6);
        point(this.x+3, this.y-6);
      }
      if(this.tm===i+inc*6){
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
        point(this.x , this.y );
      }
    }
  }
}
        
