let yellow = document.getElementById("amarelo")
let red = document.getElementById("vermelho")
let green = document.getElementById("verde")
let automatic = document.getElementById("automatico")


function ramdomiz(){
    let ramd = Math.floor(Math.random() * 3 + 1)

    if(ramd == 1){
        document.getElementById("semar").src="img/verde.png"
        document.getElementById("text").innerHTML = "Pode passar"
    }
    if(ramd == 2){
        document.getElementById("semar").src="img/amarelo.png"
        document.getElementById("text").innerHTML = "Diminua a velocidade, por favor"
    }
    if(ramd == 3){
        document.getElementById("semar").src="img/vermelho.png"
        document.getElementById("text").innerHTML = "Pare!"
    }
}

yellow.addEventListener("click", ()=>{
    document.getElementById("semar").src="img/amarelo.png"
    document.getElementById("text").innerHTML = "Diminua a velocidade, por favor"
})
red.addEventListener("click", ()=>{
    document.getElementById("semar").src="img/vermelho.png"
    document.getElementById("text").innerHTML = "Pare!"
})
green.addEventListener("click", ()=>{
    document.getElementById("semar").src="img/verde.png"
    document.getElementById("text").innerHTML = "Pode passar"
})
automatic.addEventListener("click", ramdomiz)