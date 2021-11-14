"use strict"

/////////------ Problema 1 ------/////////

const convertor=(mySecunde) => {
    let ani = 0;
    let luni = 0;
    let zile = 0;
    let ore = 0;
    let minute = 0;
    let secunde = 0;

    let minut = 60;
    let ora = 60 * minut
    let zi = 24 * ora;
    let luna = 30 * zi; 
    let an = 12 * luna;
 
    let restulDinAni = mySecunde % an;  
    ani = (mySecunde - restulDinAni) / an;

    let restulDinLuni =  restulDinAni % (luna);
    luni = (restulDinAni - restulDinLuni) / (luna);

    let restulDinZile =  restulDinLuni % (zi);
    zile = (restulDinLuni - restulDinZile) / zi;

    let restulDinOre =  restulDinZile % ora;
    ore = (restulDinZile - restulDinOre) / ora;

    let restulDinMinute =  restulDinOre % minut;
    minute = (restulDinOre - restulDinMinute) / minut;

    secunde = restulDinMinute;
 
    console.log(
        mySecunde + " de secunde reprezinta: \n" + 
        + ani + " Ani, " + luni + " Luni, " + zile + " Zile, " + ore + " Ore, " + minute + " Minute, " + secunde + " Secunde. "
    )

    return ani + " Ani, " + luni + " Luni, " + zile + " Zile, " + ore + " Ore, " + minute + " Minute, " + secunde + " Secunde. "
}

const problema1=()=>{
    //citeste input
    let mySecunde = document.getElementById("inputProb1").value
    //apel conversie
    let rezultat = convertor(mySecunde)
    //afisare reultat
    document.getElementById("outputProb1").value = rezultat
}

//convertor(52678598);



/////////------ Problema 2 ------/////////

const afisare2=(operatie, a, b, rezultat) => {
    console.log(a + " " + operatie + " " + b + " = " + rezultat)
    document.getElementById("outputProb2").value = a + " " + operatie + " " + b + " = " + rezultat
}

const calculator=(operatie, a, b) => {
    if ((typeof a != "number") && (typeof b != "number")) {
        console.log(a + " si " + b + " nu sunt numere!");
        alert(a + " si " + b + " nu sunt numere!")
        return;
    }        
    if (typeof a != "number") {
        console.log(a + " nu este un numar!");
        alert(a + " nu este un numar!")
        return;
    } else if (typeof b != "number") {
        console.log(b + " nu este un numar!");
        alert(b + " nu este un numar!")
        return;
    }
    switch (operatie) {
        case "+": afisare2(operatie, a, b, a + b);
        break;
        case "-": afisare2(operatie, a, b, a - b);
        break;
        case "x": afisare2(operatie, a, b, a * b);
        break;
        case "/": afisare2(operatie, a, b, a / b);
        break
        //default: console.log("Operatia nu este suportata!")
    }
}

const problema2=()=> {
    let a = Number(document.getElementById("inputAProb2").value)
    let b = Number(document.getElementById("inputBProb2").value)    
    let operatie = document.getElementById("selectOperatieProb2").value
    calculator(operatie,a,b)
}

//calculator("+" , "2", 4);



/////////------ Problema 3 ------/////////

const invers=(str) => {   //numarul vine in format STRING
    let arrInvers = [];      
    console.log(typeof str)  
    if (isNaN(str) || (str[0] == 0)){
        console.log("Valoarea introdusa nu este un numar!");
        alert("Valoarea introdusa nu este un numar!")
        return;
    } else if (str < 10) {
        console.log("Numarul trbuie sa fie alcatuit din cel putin 2 cifre!");
        alert("Numarul trbuie sa fie alcatuit din cel putin 2 cifre!")
        return;    
    }
    //arr = str.split("")    
    arrInvers = [...str].reverse()  // [...str] cu spread se desparte stringul in array       
    console.log("Inversul numarului " + str + " este: " + arrInvers.join(""));
    return arrInvers.join("")
}

const problema3=()=> {
    let numar = document.getElementById("inputProb3").value
    document.getElementById("outputProb3").value = invers(numar)
}



/////////------ Problema 4 ------/////////

const criptare_1 = (str)  => {
    const vocale = ["a","e","i","o","u","A","E","I","O","U"]
    vocale.forEach( xxx => {        
        str = str.replaceAll(xxx , xxx + "p" + xxx);
    })
    console.log(str)
    return str
}

const problema4_1 = () => {
    let str = document.getElementById("inputProb4_1").value
    document.getElementById("outputProb4_1").value = criptare_1(str)
}

const deleteCriptare_1 =() =>{
    document.getElementById("outputProb4_1").value = ""

}


const alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const deplasareLaDreapta=(x, litera) => {
    let literaDeplasata = " "
    let pozitiaDeplasata = 0
    for (let i = 0; i < alfabet.length; i++) {
        if (litera == alfabet[i]) {
            pozitiaDeplasata = (i+x)%alfabet.length
            literaDeplasata = alfabet[pozitiaDeplasata]
        }
    }
    return literaDeplasata
}

const deplasareLaStanga=(x, litera) => {
    let literaDeplasata = " "
    let pozitiaDeplasata = 0
    for (let i = 0; i < alfabet.length; i++) {
        if (litera == alfabet[i]) {
            if (i-x < 0) {
                pozitiaDeplasata = (i-x)%alfabet.length + alfabet.length
                literaDeplasata = alfabet[pozitiaDeplasata]
            } else {
                pozitiaDeplasata = (i-x)%alfabet.length
                literaDeplasata = alfabet[pozitiaDeplasata]
            }            
        }
    }
    return literaDeplasata
}

const criptare_2=(x,string) => {
    let strCriptat = ""
    for (let i = 0; i < string.length; i++) {
        strCriptat += deplasareLaDreapta(x, string[i])
    }
    console.log(strCriptat)
    return strCriptat
}

const decriptare_2=(x,string) => {
    let strDecriptat = ""
    for (let i = 0; i < string.length; i++) {
        strDecriptat += deplasareLaStanga(x, string[i])
    }
    console.log(strDecriptat)
    return strDecriptat
}

const problema4Criptare_2=() => {
    let str = document.getElementById("inputProb4_2").value
    console.log(str)
    let cheie = Number(document.getElementById("cheiaProb4_2").value)
    document.getElementById("outputCriptareProb4_2").value= criptare_2(cheie, str)
}

const problema4Decriptare_2=() => {
    let str = document.getElementById("outputCriptareProb4_2").value
    let cheie = Number(document.getElementById("cheiaProb4_2").value)
    document.getElementById("outputDecriptareProb4_2").value= decriptare_2(cheie, str)
}

const deleteCriptare_2 =() =>{
    document.getElementById("outputCriptareProb4_2").value = ""
    document.getElementById("outputDecriptareProb4_2").value = ""
}

/////////------ Problema 5 ------/////////

const transformareInBazaX=(nr, baza) => {
    let nrTransformat = []
    let nrAfisare = nr
    do {
        nrTransformat.unshift(nr%baza)
        nr = (nr - nr%baza) / baza
    } while (nr/baza > 0)
    console.log("Numarul " + nrAfisare + " transformat in baza " + baza + " este: " + nrTransformat.join(""))
    return nrTransformat.join("")
}

const problema5 =()=> {
    let nr = Number(document.getElementById("inputProb5").value)
    let baza = document.getElementById("selecBazaProb5").value
    document.getElementById("outputProb5").value=transformareInBazaX(nr, baza)
}


/////////------ Problema 6------/////////

const problema6=() => {
    let str = document.getElementById("inputProb6").value
    let arr = str.replace(/ /g, "").replace(/"/g, '').split(',')
   
    document.getElementById("outputProb6").value = arr.map(a => Number(a)).filter( x => !isNaN(x) )
    
}



/////////------ Problema 7------/////////

const faraVocale = (str) => {
    let vocale = ["a","e","i","o","u","A","E","I","O","U"] 
    let arr = [...str]
    vocale.forEach(vocala => {
        arr = arr.filter((item) => {
            if (item !== vocala) {return item}
        })
    })
    console.log("Sirul fara vocale este: " + arr.join(""))
    return arr.join("")    
}

const problema7=() => {
    let str = document.getElementById("inputProb7").value
    document.getElementById("outputProb7").value = faraVocale(str)    
}



/////////------ Problema 8------/////////

const emoProp = (str) => {  //// facuta de Catalin
    const emoMap = {
        "trist": "&#x1F641;",
        "ranjet": "&#x1F601;",
        "zambet": "&#x1F60A;",
        "nervos": "&#x1F620;"
    }
    let keys = Object.keys(emoMap)    
    keys.forEach(item => {
        str = str.replaceAll(item, emoMap[item])
    })
    console.log(str)
    return str
}

const problema8=() => {
    let str = document.getElementById("inputProb8").value
    document.getElementById("outputProb8").innerHTML = emoProp(str)    
}

//  El, are: un; ranjet. dar este nervos rau pentru ca zambetul la el nu are un dinte trist, dar ranjet zambet trist ranjet.


/////////------ Problema 9 ------/////////

const mediaAritmetica = (arr) => {
    let sum=0;
    arr.forEach(item => {
        sum += Number(item)
    })
    console.log(sum/arr.length)
    return sum/arr.length
}

const problema9=() => {
    let str = document.getElementById("inputProb9").value
    let arr = str.split(" ")
    document.getElementById("outputProb9").value = mediaAritmetica(arr)
}



/////////------ Problema 10 ------/////////

const minimMaxim=(arr) => {    
    let obj={
        min: arr[0],
        max: arr[0]
    }
    arr.forEach(item => {
        if (obj.min > item){
            obj.min = item
        }
        if (obj.max < item){
            obj.max = item
        }
    })    
    console.log("Minimul este: " + obj.min + ". Maximul este: " + obj.max)
    return "Minimul este: " + obj.min + ". Maximul este: " + obj.max
}

const problema10=() => {
    let str = document.getElementById("inputProb10").value
    let arr = str.split(" ").map(item => item=Number(item))
    document.getElementById("outputProb10").value = minimMaxim(arr)
}

//console.log(minimMaxim([1,2,2,3,10,3,2,1]))


/////////------ Problema 11 ------/////////

const elimDuplicate = (arr) => {  //// varianta mai corecta data de Catalin
    let unic = []
    arr.forEach(item => {
        if(unic.indexOf(item) === -1) {
            unic.push(item)
        }
    })  
    console.log(unic)
    console.log("Sirul de numere fara duplicate este: " + unic)
    return unic
}

const problema11=() => {
    let str = document.getElementById("inputProb11").value
    let arr = str.split(" ").map(item => item=Number(item))
    document.getElementById("outputProb11").value = elimDuplicate(arr).join(" ")
}

/////////------ Problema 12 ------/////////

const sumaNrDiv = (arr, nr) => {
    let sum=0;
    arr.forEach(item => {
        if (item%nr == 0) {
            sum += item
        }  
    })
    console.log("Suma numerelor divizible cu " + nr + " este: " + sum) 
    return sum
}

const problema12=() => {
    let str = document.getElementById("inputProb12").value
    let arr = str.split(" ").map(item => item=Number(item))
    let nr = Number(document.getElementById("divizorProb12").value)
    document.getElementById("outputProb12").value = sumaNrDiv(arr, nr)
}

const deleteRezultProb12=() => {
    document.getElementById("outputProb12").value = ""
}

//sumaNrDiv([1,2,3,4], 2)
//sumaNrDiv([1,2,3,4], 5)


/////////------ Problema 13 ------/////////

const ePalindrom = (str, strInversat)  =>{
    for (let i=0; i < str.length; i++) {        
        if (str[i] != strInversat[i]) {
            return false
        }
    }
    return true
}

const palindrom=(str) =>{
    let strInvers = "";    
    strInvers = [...str].reverse().join("") 
    if (ePalindrom(str,strInvers) == true) {
        console.log("Sirul este Palindrom!")
        return "Sirul este Palindrom!"
    } else {
        console.log("Sirul nu este Palindrom!")
        return "Sirul nu este Palindrom!"
    }
}

const problema13=() => {
    let str = document.getElementById("inputProb13").value
    document.getElementById("outputProb13").value = palindrom(str)
}

//palindrom("ana")


/////////------ Problema 14 ------/////////

const metodaBulelorCresc=(arr) => {  
    let SW 
    do {
        SW = 0
        let schimb = 0
        for (let i=0; i<arr.length; i++) {
            if( arr[i] > arr[i+1]) {
                schimb = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = schimb
                SW = 1
            }
        }
    } while( SW == 1 )
    return arr
}

const metodaBulelorDescresc=(arr) => {  
    let SW
    do {
        SW = 0
        let schimb = 0
        for (let i=0; i<arr.length; i++) {
            if( arr[i] < arr[i+1]) {
                schimb = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = schimb
                SW = 1
            }
        }
    } while( SW == 1 )
return arr
}

const problema14=() => {
    let str = document.getElementById("inputProb14").value
    let arr = str.split(" ").map(item =>  item=Number(item))
    let sortare = document.getElementById("selectSortareProb14").value

    switch (sortare) {
        case "+": 
            console.log(metodaBulelorCresc(arr).join("<"))
            document.getElementById("outputProb14").value = metodaBulelorCresc(arr).join("<");
            break;
        case "-": 
            console.log(metodaBulelorDescresc(arr).join(">"))
            document.getElementById("outputProb14").value = metodaBulelorDescresc(arr).join(">");
            break;    

    }
}

const deleteRezultProb14=() => {
    document.getElementById("outputProb14").value = ""
}

//5 9 2 7 4 36 24 96 3 6 5 9 743



/////////------ Problema 15 ------/////////

const numeSocietateSecreta=(arr) => {
    let strInitiale = ""
    let arrInitialeSortate =[]  
    arr.forEach(item => {
        strInitiale += item.slice(0,1)
    })   
    arrInitialeSortate = metodaBulelorCresc([...strInitiale])
    console.log("Numele societatii secrete este: " + arrInitialeSortate.join(""))
    return arrInitialeSortate.join("")
}

const problema15=() => {
    let str = document.getElementById("inputProb15").value  
    let arr = str.split(" ")
    document.getElementById("outputProb15").value = numeSocietateSecreta(arr);

}

const deleteRezultProb15=() => {
    document.getElementById("outputProb15").value = ""
}

//Victor Ioana Liviu
//Victor Ioana Liviu Bogdan Anca