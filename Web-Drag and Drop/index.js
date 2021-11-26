"use strict"

const proverbe = [
    "A face ochi dulci cuiva",
    "A face pe cineva cu ou și cu oțet",
    "Bine faci, bine găsești",
    "Cum e turcul și pistolul",
    "Cu răbdarea treci și marea",
    "Boii bătrâni fac brazda dreaptă",
    "Dacă n-ajunge, mai rămâne",
    "Cum e stăpânul așa-i și sluga",
    "A împușca doi iepuri dintr-un foc",
    "A pune carul înaintea boilor",
    "Din talpa casei nu poți face doage, nici din coadă de câine sită de mătase",
    "Din talpa casei nu se face obadă de roată",
    "A turna gaz pe foc",
    "Cine se scuză, se acuză",
    "Ajută-te singur și Domnul te va ajuta",
    "Apa trece, pietrele rămân",
    "Are un car cu boi și o sută de nevoi",
    "Surdul n-aude, dar le potrivește",
    "Bătrânețe – haine grele",
    "Bunul gospodar își face vara sanie și iarna car",
    "Buturuga mică răstoarnă carul mare",
    "Cine se aseamănă, se adună",
    "Cine se scoală de dimineață, departe ajunge",
    "Cine stă în casă de sticlă, nu aruncă cu pietre",
    "După mine, potopul!. Dacă tăceai, filosof rămâneai",
    "După război mulți viteji se arată",
    "Cine sapă groapa altuia, cade singur în ea",
    "Ferește-te de câinele mut și de omul tăcut",
    "Banu-i ochiul dracului",
    "Bate fierul cât e cald",
    "Fă-te frate cu dracul până treci punte",
    "A face pe cineva de două parale",
    "Haina nu îl face pe om",
    "Vinde pielea ursului din pădure."
]

let state = {
    randomProverb: "",
    amestecatProverb: [],
    propDropped: [],
    idBtnGenProverb: "genProverb",
    idBtnMaiIncearca: "maiIncearca"
}

const genProverb = (arr) => {  // arr = array cu stringuri
    let randomProverb = arr[Math.floor(Math.random() * arr.length)]
    return randomProverb
}

const amestecaCuvProverb = (str) => {
    let arr = str.split(" ")
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr  
}

const createTemplate = (arr)=> {
    let template = []
    let templateAmestecat = ""
    let templateOrdonat = ""
    for (let i=0; i<arr.length; i++){
        templateAmestecat += `<div class="cuvinte fw-bold" draggable="true" ondragstart="dragStart(event)" id="${arr[i]}-${i}">${arr[i]}</div>`
        templateOrdonat += `<div class="cuvinte fw-bold" ondragover="dragOver(event)" ondrop="drop(event)">&nbsp;</div>`
    }
    template.push(templateAmestecat)
    template.push(templateOrdonat)
    return template
}

const startGame = (sw) => {
    state.propDropped = []
    document.getElementById(state.idBtnGenProverb).textContent = "Genereaza Proverb Amestecat"
    document.getElementById(state.idBtnMaiIncearca).style.display = "none"
    if (sw) {
        state.randomProverb = genProverb(proverbe)
        state.amestecatProverb = amestecaCuvProverb(state.randomProverb)
    }
    
    let template = createTemplate(state.amestecatProverb)
    let cuvAmestecate = document.getElementById("cuvAmestecate")
    let cuvOrdonate = document.getElementById("cuvOrdonate")
    cuvAmestecate.innerHTML = template[0]
    cuvOrdonate.innerHTML = template[1]
}

const dragStart = (event) =>{
    event.dataTransfer.setData("text", event.target.id);
}

const dragOver = (event) => {
    event.preventDefault()
}
  
const drop = (event) => {
    //event.preventDefault();
    let id = event.dataTransfer.getData("text");
    let cuvant = document.getElementById(id)
    cuvant.style.display = "none"
    event.target.innerHTML = cuvant.innerHTML
    state.propDropped.push(cuvant.innerHTML)
    
    let proverb = state.randomProverb.split(" ")
    if (state.propDropped.length == proverb.length){
        if (state.propDropped.join(" ") == state.randomProverb) {
            document.getElementById(state.idBtnGenProverb).textContent = "Mai vreau un Proverb!"
            document.getElementById("cuvAmestecate").innerHTML = "<h1>Ai castigat!</h1>"
            //alert("ai castigat")            
        } else {
            document.getElementById(state.idBtnMaiIncearca).style.display = "block"
            //alert("ai pierdut")
        }
    }    
}


