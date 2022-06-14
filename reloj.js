function reloj (resolve , reject){
    let config = true;
    alert("Este reloj funciona en formato de 24 hrs");
    do {
        var segs = 0;
        
        var hr = Number(prompt ("Ingrese la hora")); 
        var min = Number(prompt("Ingrese los minutos")); 
        if (hr > 24 || Number.isNaN(hr)) {
            alert("Por favor ingrese una hora correcta");
        }
        if (min > 59 || Number.isNaN(min)) {
            alert("Por favor ingrese los minutos correctos");
        }
        if (hr <= 24 && min <= 59) {
            config = false;
        }
    } while (config === true);
    
    const interval = setInterval(() => {
        segs++;
        if (segs > 59) {
            segs = 0;
            min++;
            if (min > 59) {
                min = 0;
                hr++;
                if (hr > 23) {
                    hr = 0;
                }
            }
        }
        console.clear();
        console.log(`%c Hora: ${hr} Minutos: ${min} Segundos: ${segs}` , "color: #eb5e28;");
    }, 1000);

};
function cronometro (resolve , reject){
    let config = true;
    alert("Manten vigilado el tiempo que llevas en tu PC");
        var segs = 0;
        var hr = 0; 
        var min = 0; 
    const interval = setInterval(() => {
        segs++;
        if (segs > 59) {
            segs = 0;
            min++;
            if (min > 59) {
                min = 0;
                hr++;
               
            }
        }
        console.clear();
        console.log(`%c Hora: ${hr} Minutos: ${min} Segundos: ${segs}` , "color: #49be25;");
    }, 1000);

};

let ciclo = true;
do {    
    var modo = prompt("¿reloj o cronometro?");
    switch (modo) {
        case "reloj" :
            ciclo = false;
            reloj();
            break;
        
        case "cronometro":
            ciclo = false;
            cronometro();
            break;
    
        default:
            alert("Por favor escoja un modo");
            break;
    }
} while (ciclo === true);
