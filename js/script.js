//Selezionare input dalla pagina
const userAge = document.getElementById("user-age");
const userKm = document.getElementById("user-km");
console.log(userKm);
const btnSubmit = document.getElementById("submit");
const nullSubmit = document.getElementById("non");
const tickPrice = 0.21;
console.log(btnSubmit);

//Creare un Event al click
btnSubmit.addEventListener("click", function(){
    const userKmValue = parseInt(userKm.value);
    const userAgeValue = parseInt(userAge.value);
    const totalPrice = userKmValue * tickPrice;
    //Variabile let per percentuale
    let discountPrice = "";
    /* Ripulire gli input */
    userKm.value="";
    userAge.value="";
    if (userAgeValue < 18) {
        discountPrice = totalPrice * 0.3;
    }else if (userAgeValue > 65){
        discountPrice = totalPrice * 0.4;
    }
    //calcolare il totale in base alle indicazioni
    const price = totalPrice - discountPrice;
    console.log(price.toFixed(2));
    
    
    
})
//Creare un bottone per annullare le cifre
nullSubmit.addEventListener("click", function(){
    userKm.value="";
    
    userAge.value="";
    
})



    


//Output