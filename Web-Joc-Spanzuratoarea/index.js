"use strict"

const dictionar = ["da", 
"casa", "tei", "acasa", "motocicleta", "Temperament", "Schizofrenic", "Sternocleidomastoidian", "Electrocardiograma", "Spectru", "Zbenghi", "Spermatozoid", "Pneumatic", "Feromicroazotombohidric", "Electroglotospectrografie", "Metalurgie", "Spanzuratoare", "Complexitate", "Necuvantatoare", "Bibliologie", "Soios", "Stupefiant", "Pneumogastric", "Neologism", "Opiaceu", "Latifundiar", "Monetarie", "Coincidenta", "Transplant", "Covid", "Jargon", "Radiografie", "Incapabil", "Necooperant", "Metacarp", "Fotosinteza", "Clorofila", "Trapezoid", "Nostalgie", "Elocvent", "Regenerator", "Crizantema", "Dermatovenerologie", "Anticonceptionale", 
"nu"]

let state ={
    cuvantDeGhicit: "",
    litereGhicite: 0,
    nrGreseli: 0,
    litera: "",
    exista: null,
    pozitiileCorecte: []
}

const genCuvant=(arr)=>{  // arr = array cu stringuri
    let randomCuvant = arr[Math.floor(Math.random() * arr.length)]
    return randomCuvant
}

const createTemplate=(str)=> {
    let template = ""
    for (let i=0; i<str.length; i++){
        template += `<span class="border-bottom border-dark border-3 fs-1 ms-1 me-1" id="litera${i}">&nbsp;&nbsp;&nbsp;</span>`
    }
    return template
}

const start=()=>{
    let container = document.getElementById("cuvantDeGhicit")
    changeImg(0)
    state.nrGreseli = 0
    state.litereGhicite = 0
    state.cuvantDeGhicit = genCuvant(dictionar).toUpperCase()
    container.innerHTML = createTemplate(state.cuvantDeGhicit)

    //query selector
    let tds = document.querySelectorAll(".alfabet  tr td");
    tds.forEach( td => { td.classList.remove("no-intereactions"); td.style.backgroundColor = "white"; });
}

const changeImg = (nr)=>{
    let imagine = ""
    switch (nr) {
        case 0: imagine = "faza0.png"
        break;
        case 1: imagine = "faza1.png"
        break;
        case 2: imagine = "faza2.png"
        break;
        case 3: imagine = "faza3.png"
        break;
        case 4: imagine = "faza4.png"
        break;
        case 5: imagine = "faza5.png"
        break;
        case 6: imagine = "faza6.png"
        break;
    }
    document.getElementById("img").src = "img/" + imagine
}

// const changeImg = (nr)=>{
//     switch (nr) {
//         case 1: document.getElementById("img").src = "img/faza1.png"
//         break;
//         case 2: document.getElementById("img").src = "img/faza2.png"
//         break;
//         case 3: document.getElementById("img").src = "img/faza3.png"
//         break;
//         case 4: document.getElementById("img").src = "img/faza4.png"
//         break;
//         case 5: document.getElementById("img").src = "img/faza5.png"
//         break;
//         case 6: document.getElementById("img").src = "img/faza6.png"
//         break;
//     }
// }

const pozLiteraCorecta=(str)=> {
    let arr = [...state.cuvantDeGhicit]
    state.litera = str
    state.exista = null
    state.pozitiileCorecte = []
    arr.forEach((item, index) => {
        if (item == str) {
            state.exista = true
            state.pozitiileCorecte.push(index)
        }
    })
}

let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))

const incearca=(id) => {
    let literaBtn = document.getElementById(id)
    let litera = literaBtn.innerHTML
    pozLiteraCorecta(litera)
    if (state.exista == true) {
        literaBtn.style.backgroundColor = "green"
        state.litereGhicite += state.pozitiileCorecte.length
        state.pozitiileCorecte.forEach(item =>{
            document.getElementById("litera"+item).innerHTML = litera
        })
    } else {
        state.nrGreseli++
        literaBtn.style.backgroundColor = "red"
    }
    literaBtn.classList.add("no-intereactions")

    if (state.nrGreseli < 6) {
        changeImg(state.nrGreseli)
        if (state.cuvantDeGhicit.length == state.litereGhicite) {
            myModal.show()
            document.getElementById("exampleModalLabel").innerHTML = "Ai castigat!"
            document.getElementById("btnModal").innerText = "Mai vreau!"
        }
    } else {
        changeImg(6)        
        myModal.show()
        document.getElementById("exampleModalLabel").innerHTML = "Ai pierdut!"      
        document.getElementById("btnModal").innerText = "Mai incearca!"
    } 
}

const hideModal=()=>{
    myModal.hide()
    start()
}