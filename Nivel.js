class Nivel {

    constructor(img) {

        this.matriz = [];
        for (let i = 0; i < 9; i++) {

            this.matriz.push(new Array(14))

            for (let j = 0; j < 14; j++) {

                this.matriz[i][j] = 0;

            }
        }

        this.img = img;
    }

    Getmatriz() {
        return this.matriz;
    }






}