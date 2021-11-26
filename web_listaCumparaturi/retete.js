"use strict"
console.log(Math.random())
const retete = [
    {
        denumire: "Gogosi cu ciocolata",
        poza: "https://jamilacuisine.ro/wp-content/uploads/2021/05/Gogosi-umplute-cu-ciocolata.jpg",
        tip: "Desert",
        timpPreparare: "Timp preparare: 60 Min",
        idBtnView: Date.now()-Math.random(),
        ingrediente: ["1 ou +1 galbenus",
                        "75 g unt topit" ,  
                        "200 ml lapte caldut",
                        "50 ml apa minerala calduta",
                        "1 lingura zahar",
                        "3 pliculete zahar vanilat",
                        "1 drojdie",
                        "2 lingurite coaja de lamaie",
                        "1 praf de sare",
                        "cca 500 g faina",
                        "ulei pentru prajit",
                        "zahar pudra pentru decor",
                        "finetti/nutella pentru umplut gogosile" ],

        preparareLink: "https://www.youtube.com/embed/Bsa5EPbsa28"
    },
    {
        denumire: "Tort tiramisu",
        poza: "https://i.ytimg.com/vi/6Zg5vFuHZPM/maxresdefault.jpg",
        tip: "Desert",
        timpPreparare: "Timp preparare: 60 Min",
        idBtnView: Date.now()-Math.random(),
        ingrediente: ["1 ou +1 galbenus",
                        " ",
                        "75 g unt topit" ,  
                        "200 ml lapte caldut",
                        "50 ml apa minerala calduta",
                        "1 lingura zahar",
                        "3 pliculete zahar vanilat",
                        "1 drojdie",
                        "2 lingurite coaja de lamaie",
                        "1 praf de sare",
                        "cca 500 g faina",
                        "ulei pentru prajit",
                        "zahar pudra pentru decor",
                        "finetti/nutella pentru umplut gogosile" ],

        preparareLink: "https://www.youtube.com/embed/Bsa5EPbsa28"
    },
    {
        denumire: "Pui la cuptor",
        poza: "https://i.ytimg.com/vi/OEJYWfsP_Nc/maxresdefault.jpg",
        tip: "Fel principal",
        timpPreparare: "Timp preparare: 60 Min",
        idBtnView: Date.now()-Math.random(),
        ingrediente: ["1 ou +1 galbenus",
                        "75 g unt topit" ,  
                        " ",
                        "200 ml lapte caldut",
                        "50 ml apa minerala calduta",
                        "1 lingura zahar",
                        "3 pliculete zahar vanilat",
                        "1 drojdie",
                        "2 lingurite coaja de lamaie",
                        "1 praf de sare",
                        "cca 500 g faina",
                        "ulei pentru prajit",
                        "zahar pudra pentru decor",
                        "finetti/nutella pentru umplut gogosile" ],
        preparareLink: "https://www.youtube.com/embed/Bsa5EPbsa28"
    }
]

const initPrezRetete=()=>{
    let fullTemplate = ""
    for(let i=0; i<retete.length; i++) {
        let template = `
            <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single_recepie text-center">
                    <div class="recepie_thumb">
                        <img class="img_recepie"  src="${retete[i].poza}" alt="">
                    </div>
                    <h3>${retete[i].denumire}</h3>
                    <span>${retete[i].tip}</span>
                    <p>${retete[i].timpPreparare}</p>
                    <button type="button" class="btn btn-outline-warning btn_view_recepie text-dark" id="${retete[i].idBtnView}" onclick=showHideReteta(this.id)>Hai la Reteta!</button>
                </div>
            </div>`

        fullTemplate += template
    }
    let prezentareRetete = document.getElementById('prezentareRetete') 
    prezentareRetete.innerHTML = fullTemplate
}
initPrezRetete()

const searchByPropertyName=(arr,propName, propValue)=>{  ///// Search 
    for(let i=0; i<arr.length; i++) {
        if (arr[i][propName] == propValue) {
            return arr[i]
        }
    }
    return {}
}

const initReteta=(id)=>{
    let fullTemplate = ""
    let obj = searchByPropertyName(retete, "idBtnView", id)
    
    let template = 
        `<div class="container w-50 bg-light mb-3" >
            <dl>
                <dt>Ingrediente: </dt>
                <dd>
                    <ul>`

    for(let i=0; i < obj.ingrediente.length; i++) {
        template += `<li>`
        template += obj.ingrediente[i]
        template += `</li>`
    }               
                    
    template +=  
                    `</ul>
                </dd>
                <dt>Mod de preparare:</dt>
            </dl>
            <div class="ratio ratio-16x9">
                <iframe width="1280" height="720" src="${obj.preparareLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>`

    fullTemplate += template
    return fullTemplate
}

let a = 0
const showHideReteta=(id)=>{
    let reteta = document.getElementById("reteta")
    if (reteta.style.display == "none"){
        a = id
        document.getElementById(id).classList.add("bg-warning")
        reteta.innerHTML = initReteta(id)
        reteta.style.display = "block"
        reteta.scrollIntoView()
    } else {
        if (a==id) {
            document.getElementById(id).classList.remove("bg-warning")
            reteta.style.display = "none"
            reteta.innerHTML = ""
        }else {
            document.getElementById(a).classList.remove("bg-warning")
            a = id
            document.getElementById(id).classList.add("bg-warning")
            reteta.innerHTML = initReteta(id)
            reteta.style.display = "block"
            reteta.scrollIntoView()
        }
    }    
}
