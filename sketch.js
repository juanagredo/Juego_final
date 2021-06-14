// personaje ----------------------------\\

let mov_personaje;

let protaX;
let protaY;

let ref_pX;
let ref_pY;

let arriba;
let abajo;
let derecha;
let izquierda;

let vista_prota;

let salud;
let interaccion;

// ataque ----------------------------\\

let ataque;
let arma;
let tiempo_ataque;

// imagenes ----------------------------\\

let img_inicio = [];
let img_prota = [];
let img_final1;
let img_final2;
let img_Ncryo;
let img_Npyro;
let img_Nelectro;
let img_Nhydro;

// matriz ----------------------------\\

let matriz;

// niveles ----------------------------\\

let nivel_cryo;
let nivel_pyro;
let nivel_electro;
let nivel_hydro;
let etapa_inicial;
let etapa_final;

let nivel_actual;

// enemigos ----------------------------\\

let olefs;
let fogos;
let lectros;
let watars;

// objetos ----------------------------\\

let espada;
let proyectil;

let posProyectilX;
let posProyectilY;

let copo;
let baya;
let cristal;
let energy;

let menu;
let titulo;




//nivel_inicio
let NI;


function preload()

{

  for (let i = 0; i < 5; i++) {
    img_inicio[i] = loadImage("./Assets_img/Inicial " + "(" + i + ").jpg");
    if (i < 4) {
      img_prota[i] = loadImage("./Assets_img/Niño " + (i + 1) + ".png");
    }

    img_inicio[i] = loadImage("./Assets_img/Inicial " + "(" + i + ").jpg");
  }


  titulo = loadImage("./Assets_img/Titulo.jpg");


  olefs = loadImage("./Assets_img/olef.png");
  fogos = loadImage("./Assets_img/fogo.png");
  lectros = loadImage("./Assets_img/lectry.png");
  watars = loadImage("./Assets_img/watar.png");


  copo = loadImage("./Assets_img/Copo.png");
  energy = loadImage("./Assets_img/Energy.png");
  baya = loadImage("./Assets_img/Baya.png");
  cristal = loadImage("./Assets_img/Cristal.png");


  img_Ncryo = loadImage("./Assets_img/Cryo.jpg");

  img_Npyro = loadImage("./Assets_img/Pyro.jpg");

  img_Nelectro = loadImage("./Assets_img/Electro.jpg");

  img_Nhydro = loadImage("/Assets_img/Hydro.jpg");

  img_final1 = loadImage("./Assets_img/Final.jpg");
  img_final2 = loadImage("./Assets_img/Final2.jpg");



  espada = loadImage("./Assets_img/espadaczo.png");
  proyectil = loadImage("./Assets_img/proyectil.png")


}

function setup() {
  createCanvas(1200, 700);

  frameRate(30);

  derecha = true;

  //nivel_inicio = 4;
  nivel_actual = 0;
  NI = 4;

  ref_pX = 1;
  ref_pY = 4;

  mov_personaje = 0;
  protaX = -50;
  protaY = 350;

  interaccion = false;

  ataque = false;
  arma = 1;
  tiempo_ataque = 15;

  posProyectilX = protaX;
  posProyectilY = protaY;

  // niveles ----------------------------\\

  nivel_cryo = new Nivel_Hielo(olefs);
  nivel_electro = new Nivel_Electro(lectros);
  nivel_hydro = new Nivel_Hydro(watars);
  nivel_pyro = new Nivel_Pyro(fogos);

  etapa_inicial = new Nivel_Inicial();
  etapa_final = new Nivel_Final();

  salud = 17;

  menu = false;

}

function draw() {

  
  //-------------------------------
  rectMode(CENTER);
  imageMode(CENTER);


  Nivel_Actual();
  stroke(0, 0, 0, 40);

  if (nivel_actual != 0) {

    //barra de salud -------------------------------

    rectMode(CORNER);

    fill(232, 33, 33);

    rect(30, 30, 255, 30);


    fill(33, 232, 81);

    rect(30, 30, salud * 15, 30);

    rectMode(CENTER);

    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 7; j++) {

        // square(50 + (i * 100), 50 + (j * 100), 100)
      }
    }

    // nivel_hielo.mostrar();
    //img_inicio[1]
    mostrar_prota();

    Ataque();

    fill(0, 0, 255);

    Menu();
  }

}

function Nivel_Actual() {

  if (nivel_actual === 0) {
    image(titulo, 600, 350)
    if (keyIsPressed) {
      nivel_actual = 1
    }

  }



  if (nivel_actual === 1) {

    matriz = etapa_inicial.Getmatriz();

    image(img_inicio[NI], 600, 350);



    if (protaX === 1190 && derecha === true) {

      nivel_actual = 2;
    }

    if (protaX < 550 && arriba === true && protaY < 50) {

      nivel_actual = 3;
      protaX = 550;
      ref_pX = 6;

    }
    if (protaX > 550 && arriba === true && protaY < 50) {

      nivel_actual = 4;
      protaX = 550;
      ref_pX = 6;

    }
    if (protaX < 550 && abajo === true && protaY > 650) {

      nivel_actual = 5;
      protaX = 550;
      ref_pX = 6;

    }
    if (protaX > 550 && abajo === true && protaY > 650) {

      nivel_actual = 6;
      protaX = 550;
      ref_pX = 6;

    }

    if (NI === 2) {

      etapa_inicial.setEstado(3);

    }
    if (NI === 1) {

      etapa_inicial.setEstado(2);

    }

    if (NI === 0) {

      etapa_inicial.setEstado(1);

    }

  }


  if (nivel_actual === 2) {

    matriz = etapa_final.Getmatriz();

    image(img_final1, 600, 350);



    if (protaX === 10 && izquierda) {

      nivel_actual = 1;
      if (NI === 4) {
        NI = 3;



      }
    }

    if (NI === 3) {

      etapa_inicial.setEstado(4);

    }



  }




  if (nivel_actual === 3) {

    matriz = nivel_cryo.Getmatriz();

    image(img_Ncryo, 600, 350);

    nivel_cryo.mostrar(protaX, protaY, ataque);
    if (nivel_cryo.getdaño() === true) {
      if (mov_personaje === 0) {
        salud--;
        fill(245, 12, 12, 120 / (salud / 1.5))
        square(600, 350, 1200, 20)
        if (salud <= 0) {
          salud = 0

        }
      }
      if (salud === 0) {

        nivel_actual = 1;


        ref_pX = 1;
        ref_pY = 4;

        mov_personaje = 0;
        protaX = -50;
        protaY = 350;
        salud = 17;
        derecha = true;

      }
    }

    if (nivel_cryo.getwin() === true) {

      nivel_actual = 1;

      ref_pX = 1;
      ref_pY = 4;

      mov_personaje = 0;
      protaX = -50;
      protaY = 350;
      salud = 17;
      derecha = true;

      NI = 2;
    }





  }

  if (nivel_actual === 4) {

    matriz = nivel_electro.Getmatriz();

    image(img_Nelectro, 600, 350);

    nivel_electro.mostrar(protaX, protaY, ataque);
    if (nivel_electro.getdaño() === true) {



      if (mov_personaje === 0) {
        salud--;
        fill(245, 12, 12, 120 / (salud / 1.5))
        square(600, 350, 1200, 20)
        if (salud <= 0) {
          salud = 0

        }
        if (salud === 0) {

          nivel_actual = 1;


          ref_pX = 1;
          ref_pY = 4;

          mov_personaje = 0;
          protaX = -50;
          protaY = 350;
          salud = 17;
          derecha = true;

        }

      }
    }
    if (nivel_electro.getwin() === true) {

      nivel_actual = 1;

      ref_pX = 1;
      ref_pY = 4;

      mov_personaje = 0;
      protaX = -50;
      protaY = 350;
      salud = 17;
      derecha = true;

      NI = 1;
    }

  }

  if (nivel_actual === 5) {

    matriz = nivel_pyro.Getmatriz();

    image(img_Npyro, 600, 350);

    nivel_pyro.mostrar(protaX, protaY, ataque);
    if (nivel_pyro.getdaño() === true) {




      if (mov_personaje === 0) {
        salud--;
        fill(245, 12, 12, 120 / (salud / 1.5))
        square(600, 350, 1200, 20)
        if (salud <= 0) {
          salud = 0

        }
        if (salud === 0) {

          nivel_actual = 1;


          ref_pX = 1;
          ref_pY = 4;

          mov_personaje = 0;
          protaX = -50;
          protaY = 350;
          salud = 17;
          derecha = true;

        }

      }

    }
    if (nivel_pyro.getwin() === true) {

      nivel_actual = 1;

      ref_pX = 1;
      ref_pY = 4;

      mov_personaje = 0;
      protaX = -50;
      protaY = 350;
      salud = 17;
      derecha = true;

      NI = 0;
    }
  }

  if (nivel_actual === 6) {

    matriz = nivel_hydro.Getmatriz();

    image(img_Nhydro, 600, 350);

    nivel_hydro.mostrar(protaX, protaY, ataque);
    if (nivel_hydro.getdaño() === true) {




      if (mov_personaje === 0) {
        salud--;
        fill(245, 12, 12, 120 / (salud / 1.5))
        square(600, 350, 1200, 20)
        if (salud <= 0) {
          salud = 0

        }
        if (salud === 0) {

          nivel_actual = 1;


          ref_pX = 1;
          ref_pY = 4;

          mov_personaje = 0;
          protaX = -50;
          protaY = 350;
          salud = 17;
          derecha = true;

        }

      }
    }

  }


  if (nivel_hydro.getwin() === true) {

    nivel_actual = 1;

    ref_pX = 1;
    ref_pY = 4;

    mov_personaje = 0;
    protaX = 50;
    protaY = 350;
    salud = 17;
    derecha = true;

    NI = 4;
  }
}


function mostrar_prota() {
  switch (vista_prota) {
    case 1:
      image(img_prota[1], protaX, protaY - 60);

      break;

    case 2:
      image(img_prota[2], protaX, protaY - 60);
      break;
    case 3:
      image(img_prota[3], protaX, protaY - 60);

      break;
    case 4:
      image(img_prota[0], protaX, protaY - 60);

      break;

  }





  if (arriba) {

    protaY -= 10;

    if (protaY === 0) {
      protaY = 700;
      ref_pY = 7;
    }
    mov_personaje++;

    vista_prota = 2;




    if (mov_personaje === 10) {
      arriba = false;
      mov_personaje = 0;


      if (ref_pY - 1 >= 0) {
        if (matriz[ref_pY - 1][ref_pX] === 0) {

          if (keyCode === 87 && keyIsPressed) {
            arriba = true;
            ref_pY--;
          }
        }
      }

    }


  }
  if (abajo) {
    protaY += 10;

    if (protaY === 700) {
      protaY = 0;
      ref_pY = 1;
    }

    vista_prota = 4;
    mov_personaje++;




    if (mov_personaje === 10) {

      abajo = false;
      mov_personaje = 0;

      if (ref_pY + 1 <= 9) {
        if (matriz[ref_pY + 1][ref_pX] === 0) {


          if (keyIsPressed && keyCode === 83) {
            abajo = true;
            ref_pY++;
          }
        }
      }
    }
  }

  if (derecha) {
    protaX += 10;

    if (protaX === 1200) {
      protaX = 0;
      ref_pX = 1;


    }
    mov_personaje++;

    vista_prota = 3;

    if (mov_personaje === 10) {


      derecha = false;

      mov_personaje = 0;

      
      if (matriz[ref_pY][ref_pX + 1] === 0) {


        if (keyIsPressed && keyCode === 68) {
          derecha = true;
          ref_pX++;
          
        }
      }
    }
  }

  if (izquierda) {



    protaX -= 10;

    if (protaX === 0) {
      protaX = 1200;
      ref_pX = 12;
    }

    mov_personaje++;

    vista_prota = 1;
    if (mov_personaje === 10) {


      izquierda = false;

      mov_personaje = 0;
      if (ref_pX - 1 >= 0) {
        if (matriz[ref_pY][ref_pX - 1] === 0) {

          if (keyIsPressed && keyCode === 65) {
            izquierda = true;
            ref_pX--;
          }
        }
      }
    }
  }



}

function Ataque() {

  if (ataque === true && arma === 1) {
    tiempo_ataque -= 0.5;
    push();
    translate(protaX, protaY - 50)

    rotate(PI / tiempo_ataque);
    //rect(100,100, 60,30 );

    image(espada, 75, 75)

    if (tiempo_ataque < 0) {


      ataque = false;
      tiempo_ataque = 15;

    }

    pop();
  }

  if (ataque === true && arma === 2) {
    tiempo_ataque -= 0.25;
    if (tiempo_ataque < 0) {


      ataque = false;
      tiempo_ataque = 15;

    }
    if (tiempo_ataque >= 14) {
      posProyectilX = protaX;
      posProyectilY = protaY;
    }


    posProyectilX /= 1;

    posProyectilY /= 1;
    image(proyectil, posProyectilX, posProyectilY)

  }



}

function Menu() {

  if (menu === true) {

    fill(177, 167, 193);
    rect(600, 350, 800, 450);

    fill(205);
    rect(600, 350, 800, 20);

    image(copo, 350, 240);
    image(energy, 500, 240);
    image(baya, 650, 240);
    image(cristal, 800, 240);

    image(espada, 500, 450);
    image(proyectil, 700, 450);

    fill(70);
    textSize(50);

    text("K", 500, 570);
    text("L", 690, 570);
  }

}

function keyPressed() {

  if (ref_pY - 1 >= 0) {



    if (matriz[ref_pY - 1][ref_pX] === 0) {

      if (keyCode === 87 && !abajo && !izquierda && !derecha) {




        if (mov_personaje === 0)

        {
          arriba = true;
          ref_pY--;
        }

      }
    }
  }





  if (ref_pY + 1 <= 8) {
    if (matriz[ref_pY + 1][ref_pX] === 0) {
      if (keyCode === 83 && !arriba && !izquierda && !derecha) {
        if (mov_personaje === 0)

        {
          abajo = true;
          ref_pY++;
        }
      }
    }
  }

  if (matriz[ref_pY][ref_pX - 1] === 0) {
    if (keyCode === 65 && !abajo && !arriba && !derecha) {
      if (mov_personaje === 0)

      {
        izquierda = true;
        ref_pX--;
      }
    }
  }

  if (matriz[ref_pY][ref_pX + 1] === 0) {
    if (keyCode === 68 && !abajo && !izquierda && !arriba) {
      if (mov_personaje === 0)

      {
        derecha = true;
        ref_pX++;
      }
    }
  }

  if (keyCode === 76) {

    if (menu === false) {
      ataque = true
    }
    if (menu === true) {
      arma = 2;
      menu = false;
    }
  }
  if (keyCode === 75) {

    if (menu === false) {
      interaccion = true;
      interaccion = false;
    }

    if (menu === true) {
      arma = 1;
      menu = false;
    }
  }

  if (keyCode === 77) {
    menu = true;

  }

}

function keyReleased() {


  if (keyCode === 87) {
    if (mov_personaje === 0 || mov_personaje === 10)

    {
      arriba = false;
    }
  }

  if (keyCode === 83) {
    if (mov_personaje === 0 || mov_personaje === 10)

    {
      abajo = false;
    }
  }

  if (keyCode === 65) {
    if (mov_personaje === 0 || mov_personaje === 10)

    {
      izquierda = false;
    }
  }

  if (keyCode === 68) {
    if (mov_personaje === 0 || mov_personaje === 10)

    {
      derecha = false;
    }
  }

}