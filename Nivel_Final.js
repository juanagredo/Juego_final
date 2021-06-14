class Nivel_Final extends Nivel {

    constructor() {

        super();

        for (let i = 0; i < 7; i++) {

            for (let j = 0; j < 13; j++) {


                this.matriz[0][j] = 1;
                this.matriz[8][j] = 1;
                this.matriz[i][13] = 1;
                //this.matriz[i][0] = 1;





            }
        }
        this.matriz[1][0] = 1;
        this.matriz[2][0] = 1;
        this.matriz[7][0] = 1;
        this.matriz[6][0] = 1;

    }
}