class Watar extends Enemy {
    constructor(x, y, refx, refy, matriz){
        super(x, y, refx, refy, matriz);
        
    }
    
    mostrar(img){
    super.mostrar(img);
    
    this.img= img;
    
    image(this.img,this.x,this.y-50)
    
    
    }
    mover(){
    super.mover();
    
    }
    
    
    
    
    
    
    getPosX(){
    
        return this.x
    } 
    
    getPosY(){
    
        return this.y
    } 
    



}