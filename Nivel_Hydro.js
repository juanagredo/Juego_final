class Nivel_Hydro extends Nivel {

    constructor(img) {

        super(img);

        for (let i = 0; i < 7; i++) {

            for (let j = 0; j < 13; j++) {

                this.matriz[1][j] = 1;
                this.matriz[7][j] = 1;
                this.matriz[i][1] = 1;
                this.matriz[i][12] = 1;

            }
        }
        this.matriz[1][6] = 0;
        this.matriz[7][6] = 0;
        this.matriz[7][7] = 0;
        this.matriz[1][7] = 0;

        this.matriz[0][6] = 1;
        this.matriz[8][6] = 1;
        this.matriz[8][7] = 1;
        this.matriz[0][7] = 1;



        this.vivoinemi = true;
        this.vivoanemi = true;

        if (this.vivoanemi) {
            this.inemy = new Watar(50 + (1 * 100), 50 + (1 * 100), 2, 2, this.matriz);
        }
        if (this.vivoanemi) {
            this.anemy = new Watar(350 + (1 * 100), 50 + (1 * 100), 5, 2, this.matriz);
        }

        this.daño = false;
    }

    mostrar(x, y, atac) {

        if (this.vivoinemi === false && this.vivoanemi === false) {
            this.win = true
        }
        this.atac = atac
        this.daño = false;

        fill("red")
        if (this.vivoinemi === true) {
            this.inemy.mostrar(this.img);
            if (dist(this.protax, this.protay, this.inemy.getPosX(), this.inemy.getPosY()) < 50) {
                this.daño = true
            }
        }
        if (this.vivoanemi === true) {
            this.anemy.mostrar(this.img);
            if (dist(this.protax, this.protay, this.anemy.getPosX(), this.anemy.getPosY()) < 50) {
                this.daño = true
            }
        }
        this.contaudor++;

        this.protax = x;
        this.protay = y;


        if (this.atac === true) {

            if (dist(this.protax, this.protay, this.inemy.getPosX(), this.inemy.getPosY()) < 200) {
                this.vivoinemi = false
            }
            if (dist(this.protax, this.protay, this.anemy.getPosX(), this.anemy.getPosY()) < 200) {
                this.vivoanemi = false
            }

        }
    }

    getdaño() {
        return this.daño
    }
    getwin() {
        return this.win
    }



}