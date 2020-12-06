var Calculadora= {
vectornumeros:['1','2','3','4','5','6','7','8','9'],
 num1:0,
 num2:0,
 operacion:' ',
 resultado:0,
init: function(){
        this.asignarEventoTamañoTeclas();
        this.asignarEventoOperacion();
        this.asignarEvento_on();
        this.asignarEventoSigno();
        this.asignarEventoPunto();
        this.asignarEventoCero();
        this.asignarEventoClickteclas();   
        this.asignarEventoIgual();  
    },
//asignamos a las teclas los eventos para que reduzcan el tamaño 
//al pulsarlas y vuelvan al original al soltarlas
asignarEventoTamañoTeclas:function(){  
 var teclas=document.getElementsByClassName('tecla');
 for (var i=0; i < teclas.length; i++) {
    teclas[i].onmouseover = this.eventoReducirTecla;
    teclas[i].onmouseout= this.eventoNormalTecla;  
  //  teclas[i].onclick=this.eventoclasificarTecla;
    }
},
eventoReducirTecla: function(event){
  var elemento=event.target;
  if (elemento.id =='mas') {
    elemento.style.height="90%";}
  else{
   elemento.style.height="61px";
  }
},

eventoNormalTecla:function(event){
  var elemento=event.target;
  if (elemento.id =='mas'){
    elemento.style.height="100%";
  } else {
  elemento.style.height="62.91px";
}
},

asignarEventoOperacion:function(){
  var operaciones=document.querySelectorAll("[class^='tecla ']");
  for (var j=0; j <operaciones.length;j++) {  
  operaciones[j].onclick=this.eventooperacion;
}
},

asignarEventoClickteclas:function(){
  for (var i=0 ; i<Calculadora.vectornumeros.length; i++){
   elemento=Calculadora.vectornumeros[i];
  document.getElementById(elemento).onclick=this.escribirpantalla
  }
},
asignarEventoIgual:function(){
  document.getElementById('igual').onclick=this.calculartotal;
},
asignarEvento_on:function(){
document.getElementById('on').onclick=this.borrarpantalla;
},

asignarEventoCero:function(){
document.getElementById('0').onclick=this.tratarcero;
},

asignarEventoPunto:function(){
document.getElementById('punto').onclick=this.tratarpunto;
},

asignarEventoSigno:function(){
document.getElementById('sign').onclick=this.tratarsigno;
},
tratarcero:function(event){
  var pulsada=event.target.id;
  var cifrapantalla=document.getElementById('display').innerHTML;
  if (cifrapantalla=='0'){
     document.getElementById('display').innerHTML=pulsada;
      } else {
        document.getElementById('display').innerHTML=cifrapantalla+pulsada;
      }
},

tratarpunto:function(event){
  cifrapantalla=document.getElementById('display').innerHTML;
  var pto='.';
   if (cifrapantalla.indexOf(pto) != -1) {
      alert(' ya hay un punto en el operando');
     document.getElementById('display').innerHTML=cifrapantalla;
     } else { 
      document.getElementById('display').innerHTML=cifrapantalla+pto
    }
},

tratarsigno:function(event){
  cifrapantalla=document.getElementById('display').innerHTML;
  var signo='-';
  if (cifrapantalla.indexOf(signo) != -1) {
      alert(' ya hay signo - en el operando');
      cifrapantalla=cifrapantalla*(-1);
     document.getElementById('display').innerHTML=cifrapantalla;
     } else { 
      document.getElementById('display').innerHTML=signo+cifrapantalla;
}
},

borrarpantalla:function(){
  document.getElementById('display').innerHTML="0";
  Calculadora.num1=0;
  Calculadora.num2=0;
  Calculadora.resultado=0;
},

escribirpantalla:function(event){ 
  var cifrapantalla=document.getElementById('display').innerHTML;
  var pulsada=event.target.id;
  if (cifrapantalla=='0' || cifrapantalla== ' '){
        document.getElementById('display').innerHTML=pulsada;}
  else { if (cifrapantalla.length < 8) 
          {document.getElementById('display').innerHTML=cifrapantalla+pulsada;}
      else {document.getElementById('display').innerHTML=cifrapantalla;}
        }     
},

eventooperacion:function(event){
   Calculadora.operacion=event.target.id;
   Calculadora.num1=document.getElementById('display').innerHTML;
   document.getElementById('display').innerHTML=' ';
   Calculadora.num2=0;
     },

calculartotal: function(){

 if (Calculadora.num2 =='0') {
    Calculadora.num2=document.getElementById('display').innerHTML;}
 
  oper1=parseFloat(Calculadora.num1);
  oper2=parseFloat(Calculadora.num2);
  
 switch(Calculadora.operacion) {

  case 'mas':
   Calculadora.resultado=oper1 + oper2;

        break;
  case 'menos':
     Calculadora.resultado=oper1-oper2;
    
    break;
  case 'por':
     Calculadora.resultado=oper1 * oper2;
     
    break;

  case 'dividido':
    Calculadora.resultado=oper1/oper2;

    break;

  default:
    break;
  }
  
  var rdo=Calculadora.resultado.toString();
  //pant=rdo.substr(0,8);
  //alert(pant);
  document.getElementById('display').innerHTML=rdo.substr(0,8);
     
  Calculadora.num1=Calculadora.resultado;
    
   }
}



Calculadora.init();

 //escribirpantalla(event.target);
// primeroperando
// segundooperando
// operacion
// vertipotecla(event.target);