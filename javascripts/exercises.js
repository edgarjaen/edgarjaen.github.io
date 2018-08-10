/*--------------------------------------------------------------------------------------------------------------------
CASO 1. Athletes.
De cuatro atletas se sabe que C ha llegado inmediatamente detrás de B, y D ha llegado en medo de A y C
¿ Podría usted calcular el orden de llegada ?.
--------------------------------------------------------------------------------------------------------------------*/
var athletes = {
  A:0,
  B:0,
  C:0,
  D:0,
  resultado: function(){
    if( athletes.C > athletes.B &&
        athletes.D > athletes.B &&
        athletes.D > athletes.C &&
        athletes.D < athletes.A){
          return true
    }else {
          return false
    }
  },
  intervalo: setInterval(function(){
    //Asignacion de valores aleatorios a cada Atleta
    athletes.A = Math.ceil(Math.random()*4);
    athletes.B = Math.ceil(Math.random()*4);
    athletes.C = Math.ceil(Math.random()*4);
    athletes.D = Math.ceil(Math.random()*4);
    //Validacion del resultado en cada caso
    if(athletes.resultado()){
      clearInterval(athletes.intervalo);
      console.warn("Athletes A:",athletes.A);
      console.warn("Athletes B:",athletes.B);
      console.warn("Athletes C:",athletes.C);
      console.warn("Athletes D:",athletes.D);
    }
  },10)
}

//Caballos
var edad      = {joven: 1,viejo: 2},
    velocidad = {lento: 1,rapido: 2},
    tono      = {claro: 1,oscuro: 2};
/*--------------------------------------------------------------------------------------------------------------------
Caso 2 Horses
El Caballo de Mac es más oscuro que el de Smith, pero más rápido y más viejo que el de Mack, que es más lento que el
de Willy, que es más joven que el de Mac, que es más viejo que el de Smith, que es más claro que el de willy, aunque
el de Jack es más lento y más oscuro que el de Smith.
¿Cuál es el más viejo, cuál es el más lento y cuál el más claro?
--------------------------------------------------------------------------------------------------------------------*/

var horse = {
  Mac:  {age:0, speed:0, tone:0},
  Smith:{age:0, speed:0, tone:0},
  Jack: {age:0, speed:0, tone:0},
  Willy:{age:0, speed:0, tone:0},
  resultado: function(){
    if( horse.Mac.tone > horse.Smith.tone &&
        horse.Mac.speed > horse.Jack.speed &&
        horse.Mac.age > horse.Jack.age &&
        horse.Jack.speed < horse.Willy.speed &&
        horse.Willy.age < horse.Mac.age &&
        horse.Mac.age > horse.Smith.age &&
        horse.Smith.tone < horse.Willy.tone &&
        horse.Jack.speed < horse.Smith.speed &&
        horse.Jack.tone > horse.Smith.tone){
          return true;
    }
    return false;
  },
  intervalo: setInterval(function(){
    horse.Mac.age   = Math.ceil(Math.random()*2);
    horse.Mac.speed = Math.ceil(Math.random()*2);
    horse.Mac.tone  = Math.ceil(Math.random()*2);
    horse.Smith.age   = Math.ceil(Math.random()*2);
    horse.Smith.speed = Math.ceil(Math.random()*2);
    horse.Smith.tone  = Math.ceil(Math.random()*2);
    horse.Jack.age   = Math.ceil(Math.random()*2);
    horse.Jack.speed = Math.ceil(Math.random()*2);
    horse.Jack.tone  = Math.ceil(Math.random()*2);
    horse.Willy.age   = Math.ceil(Math.random()*2);
    horse.Willy.speed = Math.ceil(Math.random()*2);
    horse.Willy.tone  = Math.ceil(Math.random()*2);

    //
    if(horse.resultado()){
      clearInterval(horse.intervalo);
      console.warn("Mac's horse:",   horse.Mac);
      console.warn("Smith's horse:", horse.Smith);
      console.warn("Jack's horse:",  horse.Jack);
      console.warn("Willy's horse:", horse.Willy);
    }
  },10)
}
