function fadeOutEffectselect(subTipo, ...elements){
    let subtipeElement = document.getElementById(subTipo);

   for (let i=0; i< subtipeElement.clientHeight; i++){
        try{   
            if (subtipeElement [i].value != undefined && subtipeElement[i].value !=" "){
                for (let j=0; j< elements.length; j++){
                    if (subtipeElement [i].value == elements[j]){
                        subtipeElement [i].style.display= "none";
                    }
                 }
            }  
        }catch(e){
            break;
        }
    } 
}

function fadeInEffectSelectSelect (subTipo,...elements){
    let elementSelected =document.getElementById(elements);
  for (let i=0; i< elementSelected.length; i++){
        try{   
            if (elementSelected[i].value != undefined && elementSelected[i].value !=" "){
                for (let j=0; j< elements.length; j++){
                    if (elementSelected [i].value == elements[j]){
                        elementSelected[i].style.display= "block";
                    }
                 }
            }  
        }catch(error){
            break;
        }
    } 
}
function fadeOutEffectInput (elements) {
          let elementSelected = document.getElementById(elements);
          let fadeEffect = setInterval (function(){
          if ( ! elementSelected.style.opacity) {
              elementSelected.style.opacity=1;
         
            }
            if (elementSelected.style.opacity >0){
                elementSelected.style.opacity -=.2;
                if (elementSelected.style.opacity ==0) {
                    elementSelected.style.display = "none";
                }
            } else {

            } clearInterval(fadeEffect); 
        }, 100);
        
}

function fadeInEffectInput (element){
    var elementSelected = document.getElementById(elements);
    var fadeEffect = setInterval(function(){
        if(!elementSelected.style.opacity){
            elementSelected.style.opacity = 0;
        }
          if (elementSelected.style.opacity <1){
            elementSelected.style.opacity +=1;
            elementSelected.style.display = "block";
        }else{
            clearInterval(fadeEffect);
        }

    },200);
}

let tipoSelect = document.getElementById("tipoCanal");
tipoSelect.addEventListener("change", event=>{ 
let elementsSelected = tipoSelect.options[tipoSelect.selectedIndex].value;
    
    switch (elementsSelected){
        case "videojuegos":
            fadeOutEffectSelect("subTipo","pop","rock","salsa","balet","bachata","tango","tenor","corista","soprano");
            fadeOutEffectInput("tipoMusica") ;
            fadeOutEffectInput("numeroBailarines");
            fadeOutEffectInput("voz");
            break;
        case "musica":
             fadeOutEffectselect ("subTipo","halo","fifa","call of duti","balet","bachata","tango","tenor","corista","soprano")
             fadeInEffectselect ("subTipo","pop","rock","salsa")
             break;
        case "baile":
             fadeOutEffectselect ("subTipo","halo","fifa","call of duti","pop","rock","salsa","tenor","corista","soprano")
             fadeInEffectselect ("subTipo","balet","bachata","tango")
             break;
        case "canto":
             fadeOutEffectselect ("subTipo","halo","fifa","call of duti","pop","rock","salsa","balet","bachata","tango")
             fadeInEffectselect("subTipo","tenor","corista","soprano")
             break;
        default:
            alert ("Debes seleccionar alguna de las opciones");
            break;                
    }
});