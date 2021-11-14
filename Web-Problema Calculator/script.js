function display (event) {                
    var x = "" 
    
    switch(event.target.innerHTML){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
        case "+":
        case "-":
        case "*":
        case "/":
            x = event.target.innerHTML;
            document.getElementById("th").innerHTML += x
            break;
        case "C":
            document.getElementById("th").innerHTML = ""
            break;
        case "Backspace":
            x = document.getElementById("th").innerHTML                        
            document.getElementById("th").innerHTML = x.slice(0,-1)
            break;
        case "+/-":                        
            document.getElementById("th").innerHTML = "-"
            break;    
        case "=":                        
            x = document.getElementById("th").innerHTML                        
            document.getElementById("th").innerHTML = eval(x)
            break; 
    }

}