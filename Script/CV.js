function verif () {
    
    let name = customerName.value;
     if (F1.name.match(/[a-z]/g)) {
        alert("Le nom n'est pas valide") ;
    }
    else if (F1.name.match( /[A-Z]/g)) {
        alert("Nom valide ") ;
    }
//--------------------------------------------------------------------------------------------------
    let ch = F1.customerEmail.value ; 
    if ( (ch!="") &&                                            //texte non vide
     (ch.indexOf("@") != -1) &&                                 // existance de @
     (ch.indexOf("@")==ch.lastIndexOf("@")) &&                  // une seule @
     (ch.indexOf("."!= -1)) &&                                  //existance d'un point au moins
     (ch.indexOf("@")) < ch.lastIndexOf(".")) {                 // @ il faut avoir un point apres le @ 
         alert("Email valide") ; 
     } 
     else {
         alert("Email n'est pas valide")
     }
 //--------------------------------------------------------------------------------------------------
     let tlf = F1.customerPhone.value ; 

    if ((isNaN(tlf)) || (tlf == "") ) {
        alert("Numéro de telephone n'est pas valide") ; 
    }
    else {
        alert("Numéro de telephone valide") ; 
    }
//--------------------------------------------------------------------------------------------------
    let suj = F1.customerOrder.value ; 

    if (isNaN(suj)){
        alert("Sujet valide") ; 
    }
    else {
        alert("Sujet n'est pas valide") ; 
    }
//--------------------------------------------------------------------------------------------------
    let msg = F1.customerNote.value ; 

    if (isNaN(msg)){
        alert("Message valide") ; 
    }
    else {
        alert("Message n'est pas valide") ; 
    }

}   
