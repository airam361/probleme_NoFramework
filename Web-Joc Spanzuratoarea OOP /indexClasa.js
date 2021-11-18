"use strict"
import dictionar from './dictionar.js'

class Game {
 
    constructor() {
        this.initEvents()
    }

    dictionar = dictionar

    cuvantDeGhicitID = "cuvantDeGhicit"
    imagineID = "img"
    modalID = "exampleModal"
    modalLabelID = "exampleModalLabel"
    modalBtnID = "btnModal"
    butonStartID = "btnStart"
    
    myModal = new bootstrap.Modal(document.getElementById(this.modalID))

    state = {
        cuvantDeGhicit: "",
        litereGhicite: 0,
        nrGreseli: 0,
        litera: "",
        exista: null,
        pozitiileCorecte: []
    }
    
    genCuvant=()=>{  // arr = array cu stringuri
        let arr = this.dictionar
        let randomCuvant = arr[Math.floor(Math.random() * arr.length)]
        return randomCuvant
    }
    
    createTemplate=()=> {
        let str = this.state.cuvantDeGhicit
        let template = ""
        for (let i=0; i<str.length; i++){
            template += `<span class="border-bottom border-dark border-3 fs-1 ms-1 me-1" id="litera${i}">&nbsp;&nbsp;&nbsp;</span>`
        }
        return template
    }
    
    pozLiteraCorecta=(str)=> {
        let arr = [...this.state.cuvantDeGhicit]
        this.state.litera = str
        this.state.exista = null
        this.state.pozitiileCorecte = []
        arr.forEach((item, index) => {
            if (item == str) {
                this.state.exista = true
                this.state.pozitiileCorecte.push(index)
            }
        })
    }
    
    getImg = (nrGreseli)=>{
        let imagine = ""
        switch (nrGreseli) {
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
        return imagine
    }

    setImgHTML=(imagine) =>{
        document.getElementById(this.imagineID).src = "img/" + imagine
    }

    resetAlfbetBtnStyle = () => {
        //query selector
        let tds = document.querySelectorAll(".alfabet  tr td");
        tds.forEach( td => { td.classList.remove("no-intereactions"); td.style.backgroundColor = "white"; });
    }

    setJoc=()=>{
        this.state.nrGreseli = 0
        this.state.litereGhicite = 0
        this.state.cuvantDeGhicit = this.genCuvant().toUpperCase()

        let container = document.getElementById(this.cuvantDeGhicitID)        
        container.innerHTML = this.createTemplate()

        this.setImgHTML(this.getImg(0))
        this.resetAlfbetBtnStyle()        
    }

    checkEndGame = () => {
        if (this.state.nrGreseli < 6) {
            let imagine = this.getImg(this.state.nrGreseli)
            this.setImgHTML(imagine)
            if (this.state.cuvantDeGhicit.length == this.state.litereGhicite) {
                this.myModal.show()
                document.getElementById(this.modalLabelID).innerHTML = "Ai castigat!"
                document.getElementById(this.modalBtnID).innerText = "Mai vreau!"
            }
        } else {
            this.setImgHTML(this.getImg(6))     
            this.myModal.show()
            document.getElementById(this.modalLabelID).innerHTML = "Ai pierdut!"      
            document.getElementById(this.modalBtnID).innerText = "Mai incearca!"
        } 
    }

    updateGuessedWord = (id) => {
        let literaBtn = document.getElementById(id)
        let litera = literaBtn.innerHTML
        this.pozLiteraCorecta(litera)
        if (this.state.exista == true) {
            literaBtn.style.backgroundColor = "green"
            this.state.litereGhicite += this.state.pozitiileCorecte.length
            this.state.pozitiileCorecte.forEach(item =>{
                document.getElementById("litera"+item).innerHTML = litera
            })
        } else {
            this.state.nrGreseli++
            literaBtn.style.backgroundColor = "red"
        }

        literaBtn.classList.add("no-intereactions")
    }
    
    tryLitera= (id) => {
        if(typeof id === 'object') {
            id = id.target.id
        }

        this.updateGuessedWord(id)
        this.checkEndGame()
    }

    resetGame = () => {
        this.myModal.hide()
        this.setJoc()
    }

    initEvents=()=> {
        //initialize buttons events
        document.getElementById(this.butonStartID).addEventListener("click", this.setJoc)
        document.getElementById(this.modalBtnID).addEventListener("click", this.resetGame)

        //initialize alfabet events
        document.querySelectorAll(".alfabet tr td").forEach( item => {
            let id = item.attributes['id']?.value
            if(id)
                document.getElementById(id).addEventListener("click", this.tryLitera)
        })
    }
}

let joc = new Game()


// const eventStart=()=>{
//     joc.setJoc()
// }

// const eventTry=(id)=>{
//     joc.tryLitera(id)
// }

// const eventHideModal=()=>{
//     joc.resetGame()
// }