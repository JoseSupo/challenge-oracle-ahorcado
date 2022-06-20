var palabras = ['ALURA', 'CHALLENGE', 'ORACLE','HTML','CSS','JAVASCRIPT']
var tablero = document.getElementById('letras').getContext('2d');
var palabraNueva = document.getElementById('ingrese-palabra');
var letras = [];
var contador = 0;
var palabraCorrecta = "";
var errores = 9;

function btnguardar(){
    palabraNuevaAgregada = palabraNueva.value.toUpperCase();
    if (palabras.push(palabraNuevaAgregada)){
        location.href="juego.html"
    };
    console.log(palabras);
}
function escojerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabra);
    return palabra;
    
    
}
console.log(palabras);
function horca(){

    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";

    tablero.moveTo(573,503);
    tablero.lineTo(867,503);
    tablero.stroke();
}
horca();


function dib(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";

    tablero.moveTo(654,503);
    tablero.lineTo(654,148);
    tablero.stroke();
}
function dibu(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";

    tablero.moveTo(654,148);
    tablero.lineTo(832,148);
    tablero.stroke();
}
function dibuj(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";

    tablero.moveTo(832,148);
    tablero.lineTo(832,198);
    tablero.stroke();
}
function dibuja(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    tablero.arc(832,229.5,31.5,0,Math.PI*2);
    tablero.stroke();
}
function dibujar(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    tablero.moveTo(832,261);
    tablero.lineTo(792,319);
    tablero.stroke();
}
function dibujarh(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    tablero.moveTo(832,261);
    tablero.lineTo(867,319);
    tablero.stroke();
}
function dibujarho(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    tablero.moveTo(832,261);
    tablero.lineTo(832,396);
    tablero.stroke();
}
function dibujarhor(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    tablero.moveTo(832,396);
    tablero.lineTo(792,457);
    tablero.stroke();
}
function dibujarhorc(){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    tablero.moveTo(832,396);
    tablero.lineTo(867,457);
    tablero.stroke();
}
function dibujarLineas(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    var ancho = 600/palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(420+(ancho*i),644)
        tablero.lineTo(470+(ancho*i),644)
    }
    tablero.stroke()
    tablero.closePath()
}dibujarLineas(escojerPalabraSecreta());

function escribirLetraCorrecta(index){
    tablero.font = '52px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    var ancho = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 425+(ancho*index),628)
}

function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font = '40px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    tablero.fillText(letra, 535+(40*(10-errorsLeft)), 744,40)

}

function verificarLetraClicada(key){
    if (letras.length < 1 || letras.indexOf(key)<0)
    {
        letras.push(key);
        return false;
    }
    else{
        letras.push(key);
        return true;
    }
}

function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase();
}
 function adicionarLetraIncorrecta(letter){
     if(palabraSecreta.indexOf(letter)<=0){
         errores-= 1;
         console.log(errores)
     }    
 }
 function ganaste(){
    tablero.font = '30px Inter';
    tablero.lineWidth = 3;
    tablero.fillStyle = "#008000";
    tablero.fillText("¡Ganaste,felicidades!",850,370)
 }
 function perdiste(){
    tablero.font = '30px Inter';
    tablero.lineWidth = 3;
    tablero.fillStyle = "#FF0000";
    tablero.fillText("Perdiste!, fin del juego",850,370)
 }
 document.onkeydown = (e) => {
     let letra = e.key.toUpperCase()
     if(!verificarLetraClicada(e.key)){
         if(palabraSecreta.includes(letra)){
             adicionarLetraCorrecta(palabraSecreta.indexOf(letra))

             for(let i=0;i<palabraSecreta.length;i++){
               
                 if(palabraSecreta[i]===letra){
                     
                     escribirLetraCorrecta(i)
                     contador++;
                     if(contador == palabraSecreta.length){
                        ganaste()
                 }
             }
            }
            
         }
         else{
            
            if (!verificarLetraClicada(e.key))  return
            adicionarLetraIncorrecta(letra)
            escribirLetraIncorrecta(letra,errores)
            
            if(errores == 8){
                dib()
                
             }
             if(errores == 7){
                dibu()
             }
             if(errores == 6){
                dibuj()
             }
             if(errores == 5){
                dibuja()
             }
             if(errores == 4){
                dibujar()
             }
             if(errores == 3){
                dibujarh()
             }
             if(errores == 2){
                dibujarho()
             }
             if(errores == 1){
                dibujarhor()
             }
             if(errores == 0){
                dibujarhorc()
                perdiste()               
             }            
         }
     }
 }

    

    
