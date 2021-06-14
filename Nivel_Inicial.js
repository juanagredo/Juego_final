class Nivel_Inicial extends Nivel {

constructor(){

super();

for (let i = 0; i < 8; i++) {
        
    for (let j = 0 ; j < 14 ; j++) {
        
        
          this.matriz[2][j] = 1;
          this.matriz[6][j] = 1;
          this.matriz[i][0] = 1;
          



          
    }}  
    
    
    this.matriz[1][2] = 1;
    this.matriz[1][5] = 1;

    
//------------------------------------
    this.matriz[7][2] = 1;
    this.matriz[7][5] = 1;

   
//------------------------------------
    this.matriz[1][6] = 1;
    this.matriz[1][9] = 1;

   
//------------------------------------
    this.matriz[7][6] = 1;
    this.matriz[7][9] = 1;

    this.estado = 5;
   
}

setEstado (estado){
    
    this.estado = estado; 

    if (this.estado === 4) {
        
        this.matriz[2][3] = 0;
        this.matriz[2][4] = 0;
        

    }

 if (this.estado === 3) {
        
        this.matriz[2][3] = 0;
        this.matriz[2][4] = 0;
        
        this.matriz[2][7] = 0;
        this.matriz[2][8] = 0;

    }

 if (this.estado === 2) {
        
        this.matriz[2][3] = 0;
        this.matriz[2][4] = 0;

        this.matriz[2][7] = 0;
        this.matriz[2][8] = 0;
        
        this.matriz[6][3] = 0;
        this.matriz[6][4] = 0;
    }
 if (this.estado === 1) {
        
        this.matriz[2][3] = 0;
        this.matriz[2][4] = 0;

        this.matriz[2][7] = 0;
        this.matriz[2][8] = 0;
        
        this.matriz[6][3] = 0;
        this.matriz[6][4] = 0;

        this.matriz[6][7] = 0;
        this.matriz[6][8] = 0;

    }

}




}