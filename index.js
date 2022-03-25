var ver =document.querySelector('div');
function horas(){
var data = new Date();
var horas = data.getHours(); 
var minutos = data.getMinutes();
var segundos = data.getSeconds();

return horas+":"+minutos+":"+segundos

}
setInterval(horas,1000);


function formata (p){
return p<10 ?"0" +p :p;
}

function mostrar(atual){
ver.innerHTML =atual;
}


mostrar(horas());

setInterval(function(){
mostrar(horas());

},1000)