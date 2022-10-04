//EXERCÍCIO 1
const frutas = ["laranja", "limão", "uva"];

const adcionarFruta1 = document.getElementById("fruta-1")
adcionarFruta1.innerHTML = frutas[0]

const adcionarFruta2 = document.getElementById("fruta-2")
adcionarFruta2.innerHTML = frutas[1]

const adcionarFruta3 = document.getElementById("fruta-3")
adcionarFruta3.innerHTML = frutas[2]

//EXERCÍCIO 2
const frutaLabel = document.getElementById("add-fruta")

function addFrutaInput() {
    console.log(frutaLabel.value)
}

//EXERCÍCIO 3
function adicionarFrutaLista () {
    // let pushFruta = addFrutaInput()
    // frutas.push(pushFruta)

    const adcionarFruta4 = document.getElementById("fruta-4")
    adcionarFruta4.innerHTML = frutaLabel.value
}

// const adcionarFruta4 = document.getElementById("fruta-4")
// adcionarFruta4.innerHTML = frutas[3]