class Enemy {

    constructor(x, y, refx, refy, matriz) {

        this.matriz = matriz
        this.cont_enemigo = 0;
        this.dir = int(random(1, 5));
        this.x = x;
        this.y = y;
        this.refX = refx;
        this.refY = refy;

    }
    mostrar() {

        this.mover();

    }

    mover() {

        if (this.cont_enemigo === 1) {
            console.log(this.refX, this.refY)

        }


        if (this.cont_enemigo === 20) {
            this.dir = int(random(1, 5));
            this.cont_enemigo = 0;


        }
        this.cont_enemigo++;

        switch (this.dir) {

            case 1:

                if (this.refX + 1 <= 11) {
                    if (this.matriz[this.refY][this.refX + 1] === 0) {

                        if (this.cont_enemigo === 20) {
                            this.refX++
                        }

                        this.x += 5;
                    }
                }

                break;

            case 2:

                if (this.refX - 1 >= 1) {

                    if (this.matriz[this.refY][this.refX - 1] === 0) {

                        if (this.cont_enemigo === 20) {
                            this.refX--
                        }

                        this.x -= 5;
                    }
                }

                break;

            case 3:
                if (this.refY + 1 <= 6) {

                    if (this.matriz[this.refY + 1][this.refX] === 0) {

                        if (this.cont_enemigo === 20) {
                            this.refY++
                        }
                    }

                    this.y += 5;
                }

                break;

            case 4:

                if (this.refY - 1 >= 1) {
                    if (this.matriz[this.refY - 1][this.refX] === 0) {
                        if (this.cont_enemigo === 20) {
                            this.refY--
                        }

                        this.y -= 5;
                    }
                }

                break;

        }



    }

    getDead() {
        return this.muerto;
    }

}