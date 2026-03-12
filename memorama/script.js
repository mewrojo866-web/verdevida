const SIMBOLOS=["🍎","🍌","🍇","🍉","🍓","🍍","🥝","🍑","🍒","🍋","🥥","🍐"];


let estado={

cartas:[...SIMBOLOS,...SIMBOLOS],

primera:null,
segunda:null,

bloqueo:false,

puntos:0,
tiempo:60,

parejas:0,

timer:null

};

function mezclar(){

for(let i=estado.cartas.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1));

[estado.cartas[i],estado.cartas[j]]=[estado.cartas[j],estado.cartas[i]];

}

}

function crearTablero(){

const tablero=document.getElementById("tablero");

tablero.innerHTML="";

mezclar();

estado.cartas.forEach(simbolo=>{

const carta=document.createElement("div");

carta.className="carta";

carta.dataset.simbolo=simbolo;

carta.innerHTML=`
<div class="face front">${simbolo}</div>
<div class="face back">❓</div>
`;

carta.addEventListener("click",()=>voltear(carta));

carta.addEventListener("touchstart",()=>voltear(carta));

tablero.appendChild(carta);

});

}

function voltear(carta){

if(

estado.bloqueo ||

carta===estado.primera ||

carta.classList.contains("revelada")

)return;

document.getElementById("sonidoVoltear").play();

carta.classList.add("revelada");

if(!estado.primera){

estado.primera=carta;

return;

}

estado.segunda=carta;

estado.bloqueo=true;

if(estado.primera.dataset.simbolo===estado.segunda.dataset.simbolo){

document.getElementById("sonidoAcierto").play();

estado.puntos+=10;

document.getElementById("puntos").textContent=estado.puntos;

estado.parejas++;

resetTurno();

if(estado.parejas===SIMBOLOS.length){

finalizar(true);

}

}

else{

setTimeout(()=>{

estado.primera.classList.remove("revelada");

estado.segunda.classList.remove("revelada");

resetTurno();

},800);

}

}

function resetTurno(){

estado.primera=null;

estado.segunda=null;

estado.bloqueo=false;

}

function iniciarJuego(){

clearInterval(estado.timer);

estado.puntos=0;

estado.tiempo=60;

estado.parejas=0;

document.getElementById("puntos").textContent="0";

document.getElementById("tiempo").textContent="60";

document.getElementById("pantallaInicio").style.display="none";

document.getElementById("victoria").style.display="none";

document.getElementById("finJuego").style.display="none";

crearTablero();

estado.timer=setInterval(()=>{

estado.tiempo--;

document.getElementById("tiempo").textContent=estado.tiempo;

if(estado.tiempo<=0){

finalizar(false);

}

},1000);

}

function finalizar(ganado){

clearInterval(estado.timer);

estado.bloqueo=true;

if(ganado){

document.getElementById("sonidoVictoria").play();

document.getElementById("puntuacionFinal").textContent=estado.puntos;

document.getElementById("victoria").style.display="flex";

}

else{

document.getElementById("finJuego").style.display="flex";

}

}

function reiniciarJuego(){

iniciarJuego();

}

function salirAlMenu(){

clearInterval(estado.timer);

document.getElementById("victoria").style.display="none";

document.getElementById("finJuego").style.display="none";

document.getElementById("pantallaInicio").style.display="flex";

}