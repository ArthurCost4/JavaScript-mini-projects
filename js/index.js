let lamp = document.getElementById("lampada")
let ligada = document.getElementById("ligado")
let desligada = document.getElementById("desligada")

function turnon(){
    document.getElementById("lampada").src="img/ligada.jpg"
}
function turnoff(){
    document.getElementById("lampada").src="img/desligada.jpg"
} 
ligada.addEventListener("click", turnon)
desligada.addEventListener("click", turnoff) 



function mousefora(){ 
    document.getElementById("lampada").src="img/desligada.jpg"
}
function mousedentro(){  
    document.getElementById("lampada").src="img/ligada.jpg"
}
lamp.addEventListener("mouseout", mousefora) 
lamp.addEventListener("mouseover", mousedentro)

/*Funão de cancelamento de eventos, note que todos os eventos foram explicitos sem nenhum ser anonimo, assim podendo usar o removeEventListener*/ 
lamp.addEventListener("dblclick", function(){
    document.getElementById("lampada").src="img/quebrada.jpg"
    document.getElementById("ligado").removeEventListener("click", turnon)
    document.getElementById("desligada").removeEventListener("click", turnoff)
    lamp.removeEventListener("mouseout", mousefora)
    lamp.removeEventListener("mouseover", mousedentro)
})