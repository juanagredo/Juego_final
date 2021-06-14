class Nivel_Electro extends Nivel {

    constructor(img){
    
    super(img);
    
    for (let i = 0; i < 7; i++) {
            
        for (let j = 0 ; j < 13 ; j++) {
            
            this.matriz[1][j] = 1;
            this.matriz[7][j] = 1;
            this.matriz[i][1] = 1;
            this.matriz[i][12] = 1;


              
    
    
    
              
        }}  
        this.matriz[1][6] = 0 ;
        this.matriz[7][6] = 0 ;
        this.matriz[7][7] = 0 ;
       this.matriz[1][7] = 0 ;

       this.matriz[0][6] = 1 ;
        this.matriz[8][6] = 1 ;
        this.matriz[8][7] = 1 ;
       this.matriz[0][7] = 1 ;
        


       this.inemy = new Lectry(50 + (1 * 100), 50 + (1 * 100), 2, 2, this.matriz);
       this.anemy = new Lectry(350 + (1 * 100), 50 + (1 * 100), 5, 2, this.matriz);

       this.daño = false;
   }

   mostrar(x, y) {


       fill("red")
       //circle(0+(index*50),0+(jndex*50),100)
       this.inemy.mostrar(this.img);
       this.anemy.mostrar(this.img);

       //this.moverEnemigos();

       this.contaudor++;

       if (frameCount % 40 === 0) {
        //   console.log(this.anemy.getPos());

       }

       this.protax = x;
       this.protay = y;
       

       ;

   }

   


}
