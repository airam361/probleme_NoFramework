"use strict"

const prodFrecv = [
    {
        categorie: "Lactate",
        produse: ["Unt", "Smantana", "Lapte", "Iaurt", "Cascaval", "Branza de vaci"]
    },
    {
        categorie: "Mezeluri",
        produse: ["Salam", "Kaizer", "Crenvursti", "Parizer", "Cabanos", "Muschi afumat"]
    },
    {
        categorie: "Legume",
        produse: ["Rosii", "Salata Caesar", "Salata", "Castraveti", "Ardei", "Varza"]
    },
    {
        categorie: "Fructe",
        produse: ["Mere", "Pere", "Banane", "Portocale", "Struguri", "Capsuni", "Lamaie"]
    },
    {
        categorie: "Bauturi",
        produse: ["Apa", "Suc", "Bere", "Vin", "Vodka", "Whisky", "Gin"]
    },
    {
        categorie: "Curatenie casa",
        produse: ["Mop", "Bureti de bucatarie", "Lavete", "Domestos", "Detergent vase", "Detergent rufe", "Balsam rufe"]
    }
]

const initProdFrecv=()=>{
    let fullTemplate = ""
    for(let i=0; i< prodFrecv.length; i++) {
        let template =
        `<div class="accordion-item">
            <h2 class="accordion-header" id="heading_1${i+1}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_1${i+1}" aria-expanded="false" aria-controls="collapse_1${i+1}">
                    ${prodFrecv[i].categorie}
                </button>
            </h2>
            <div id="collapse_1${i+1}" class="accordion-collapse collapse" aria-labelledby="heading_1${i+1}" data-bs-parent="#cumparateFrecvent">
                <div class="accordion-body">`

        for(let j=0; j< prodFrecv[i].produse.length; j++) {
            template +=
                `<p class="card-text" id="prod${prodFrecv[i].categorie + j}" onclick="eventAddProdFrecv(this.id)">${prodFrecv[i].produse[j]}</p>`
        }    
        template +=  `</div> </div> </div>`
        fullTemplate += template    
    }
    let cumparateFrecvent = document.getElementById('cumparateFrecvent') 
    cumparateFrecvent.innerHTML = fullTemplate
} 
initProdFrecv()

class State {
    produse = []
    container = null

    constructor(container) {
        this.container = container  
        this.produse = JSON.parse(localStorage.getItem("produsDinStorageLocal") || "[]")
        this.render()
    }
    
    getProduse = () => {return this.produse}

    render() {
        container.innerHTML= ""
        this.produse.map(
            item=> {
            container.innerHTML += 
            `<div class="card mt-3"  >
                <div class="card-body p-0">
                    <div class="row row-cols-2 ">
                        <div class="col-8 "> 
                            <h5 class="card-title mb-0 ms-2">${item.nume}</h5>                            
                        </div>
                        <div class="col-4 p-0"> 
                            <div class="d-grid mx-auto">
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" class="btn btn-warning bg-gradient p-0"" data-bs-toggle="modal" data-bs-target="#editModal" onclick="eventSetId(${item.id})">Editeaza</button>
                                    <button type="button" class="btn btn-danger bg-gradient p-0"" onclick="eventSterge(${item.id})">Sterge</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>                        
            </div>`
        })
        localStorage.setItem("produsDinStorageLocal", JSON.stringify(this.produse))
    }
    
    addProdus = (nume) => {
        let obj = new Produs(nume)        
        this.produse.push(obj)
        this.render()
    }
    deleteProdus = (id) => {
        this.produse = this.produse.filter(item => item.id != id)
        this.render()
    }
    editProdus = (id, nume) => {
        let produs = this.produse.filter(item => item.id == id)[0]
        produs.nume = nume
        this.render()
    }

    deleteAll = () => {
        this.produse = []
        this.render()
    }    
}

class Produs {
    constructor(nume) {
        this.id = Date.now()
        this.nume = nume
    }
}

const container =  document.getElementById("produs")
const state = new State(container)

const stergeTot=() => {
    state.deleteAll()
}

const eventAdaugareProdus=() => {
    let numeProdus = document.getElementById("inputProdus").value
    state.addProdus(numeProdus)
    document.getElementById("inputProdus").value =""
    let myModalEl = document.getElementById('exampleModal')
    let modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance
    modal.hide()
}

const eventSetId=(id) => {
    document.getElementById("setID").value = id
    let produs = state.getProduse().filter(item => item.id == id)[0]
    document.getElementById("editProdus").value = produs.nume
}

const eventEditeazaProdus=()=> {    
    let id = document.getElementById("setID").value
    let nouNumeProdus = document.getElementById("editProdus").value
    state.editProdus(id, nouNumeProdus)
    let myModalEl = document.getElementById('editModal')
    let modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance
    modal.hide()
}

const eventSterge=(id) => {
    state.deleteProdus(id)    
}

const eventAddProdFrecv=(id) => {
    let numeProdus = document.getElementById(id).innerHTML
    state.addProdus(numeProdus)    
}

// setTimeout(() =>{
//     state.addProdus("paine")
// }, 10)

// setTimeout(() =>{
//     state.addProdus("lapte")
// }, 20)

// setTimeout(() =>{
//     state.addProdus("unt")
// }, 30)

// setTimeout(() =>{
//     state.addProdus("cartofi")
// }, 40)

console.log(state.produse)