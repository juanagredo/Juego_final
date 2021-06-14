class Nivel_Hielo extends Nivel {

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


        this.win = false;
        this.vivoinemi = true;
        this.vivoanemi = true;
        if (this.vivoinemi) {
            this.inemy = new Olef(50 + (1 * 100), 50 + (1 * 100), 2, 2, this.matriz);
        }
        if (this.vivoanemi) {
            this.anemy = new Olef(350 + (1 * 100), 50 + (1 * 100), 5, 2, this.matriz);
        }

    }

    mostrar(x, y, atac) {

        if (this.vivoinemi === false && this.vivoanemi === false) {
            this.win = true
        }
        this.daño = false;
        this.atac = atac;

        fill("red")
        if (this.vivoanemi) {
            this.anemy.mostrar(this.img);
        }

        if (this.vivoinemi) {
            this.inemy.mostrar(this.img);
        }

        this.contaudor++;


        this.protax = x;
        this.protay = y;


        if (dist(this.protax, this.protay, this.inemy.getPosX(), this.inemy.getPosY()) < 50) {
            this.daño = true
        }
        if (dist(this.protax, this.protay, this.anemy.getPosX(), this.anemy.getPosY()) < 50) {
            this.daño = true
        }

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