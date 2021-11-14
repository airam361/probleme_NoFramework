let objQuiz = {
    titlu: "Curiozitati despre animale",
    intrebari: [
        {
            intrebare: "Cate picioare are o gaina?",
            raspuns1:"4",
            raspuns2: "2",
            raspuns3: "8",
            corect: "2"
        },
        {
            intrebare: "Ce este un delfin?",
            raspuns1: "Mamifer",
            raspuns2: "Planta",
            raspuns3: "Amiba",
            corect: "Mamifer"
        },
        {
            intrebare: "Cainele este cel mai bun prieten al ...",
            raspuns1: "cainelui",
            raspuns2: "omului",
            raspuns3: "tau",
            corect: "omului"
        },
        {
            intrebare: "Porcul mistet este un animal ...",
            raspuns1: "erbivor",
            raspuns2: "carnivor",
            raspuns3: "omnivor",
            corect: "omnivor"
        },
        {
            intrebare: "Cate picioare are un caine?",
            raspuns1: "3",
            raspuns2: "5",
            raspuns3: "4",
            corect: "4"
        }
    ]
}

const init = () => {  //template HTML cu id-uri
    let fullTemplate = ""
    for(let i=0; i< objQuiz.intrebari.length; i++) {
        let template = 
            `<div class="card mt-3" id="intrebarea${i+1}">
                <div class="card-header bg-primary bg-gradient bg-opacity-10">
                    <h3 id="intrebare${i+1}"></h3>
                </div>
                <div class="form-check ps-5 pt-3">
                    <input class="form-check-input" type="radio" name="raspuns${i+1}" id="raspuns${3*i+1}">
                    <label class="form-check-label" for="raspuns${3*i+1}" id="label${3*i+1}">
                    </label>
                </div>
                <div class="form-check ps-5 pt-2">
                    <input class="form-check-input" type="radio" name="raspuns${i+1}" id="raspuns${3*i+2}" >
                    <label class="form-check-label" for="raspuns${3*i+2}" id="label${3*i+2}">
                    </label>
                </div>
                <div class="form-check ps-5 pt-2 pb-3">
                    <input class="form-check-input" type="radio" name="raspuns${i+1}" id="raspuns${3*i+3}" >
                    <label class="form-check-label" for="raspuns${3*i+3}" id="label${3*i+3}">
                    </label>
                </div>
            </div>`
        fullTemplate += template    
    }
    let intrebariQuiz = document.getElementById('intrebariQuiz') 
    intrebariQuiz.innerHTML = fullTemplate
}

init()

let titlu = document.getElementById("titluQuiz") //iau obiectul titlu
titlu.innerHTML = objQuiz.titlu

let progres = document.getElementById("progress") 
let alertSucces = document.getElementById("alertSucces")
let alertError = document.getElementById("alertError")

const progresFunc=() => {
    let rasp = objQuiz.intrebari.filter(item => item.raspunsUtilizator).length
    progres.style.width = (rasp*100/objQuiz.intrebari.length) + "%"
    progres.innerHTML = (rasp*100/objQuiz.intrebari.length) + "%"
}

for (let i=0; i<objQuiz.intrebari.length; i++) {

    // afisare intrebari
    let intrebare = document.getElementById("intrebare" + (i+1))
    intrebare.innerHTML= objQuiz.intrebari[i].intrebare

    let label1 = document.getElementById("label" + (3*i+1))
    let label2 = document.getElementById("label" + (3*i+2))
    let label3 = document.getElementById("label" + (3*i+3))

    label1.innerHTML = objQuiz.intrebari[i].raspuns1
    label2.innerHTML = objQuiz.intrebari[i].raspuns2
    label3.innerHTML = objQuiz.intrebari[i].raspuns3

    //tratare evenimente - - - - -  raspunsurile selectate de utiliz se salveaza in objQuiz
    let raspuns1 = document.getElementById("raspuns" + (3*i+1))
    let raspuns2 = document.getElementById("raspuns" + (3*i+2))
    let raspuns3 = document.getElementById("raspuns" + (3*i+3))

    raspuns1.addEventListener('change', (event) => {
        objQuiz.intrebari[i].raspunsUtilizator = objQuiz.intrebari[i].raspuns1
        progresFunc()
    })
    raspuns2.addEventListener('change', (event) => {
        objQuiz.intrebari[i].raspunsUtilizator = objQuiz.intrebari[i].raspuns2
        progresFunc()
    })
    raspuns3.addEventListener('change', (event) => {
        objQuiz.intrebari[i].raspunsUtilizator = objQuiz.intrebari[i].raspuns3
        progresFunc()
    })
}

let verificaRaspunsuri = document.getElementById("verificaRaspunsuri")

verificaRaspunsuri.addEventListener('click', (event) => {
     
    alertSucces.style.display = "none"
    alertError.style.display = "none"
    
    let rasp = objQuiz.intrebari.filter(item => item.raspunsUtilizator === item.corect).length 

    if (rasp === objQuiz.intrebari.length ) {
        alertSucces.style.display = "block"
    } else {
        alertError.style.display = "block"
    }
})

const ascunde=()=>{
    for (let i=0; i<objQuiz.intrebari.length; i++) {
        let intrebarea = document.getElementById("intrebarea" + (i+1))
        intrebarea.style.display = "none"
    }
}

const showByIndex=(index)=>{   
    ascunde()      
    let intrebarea = document.getElementById("intrebarea" + (index+1))
    intrebarea.style.display = "block"
}

let intrebareaCurenta = 0

showByIndex(intrebareaCurenta)

let next = document.getElementById("next")

next.addEventListener('click', (event)=> {
    if (intrebareaCurenta + 1 < objQuiz.intrebari.length) {
        intrebareaCurenta++
        showByIndex(intrebareaCurenta)
    } else if(intrebareaCurenta+1 == objQuiz.intrebari.length) {
        intrebareaCurenta=0
        showByIndex(intrebareaCurenta)
    } 
})