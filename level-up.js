let shaker = (quantity, fruit, alcohol) => {
    quantity = Number;
    fruit = String;
    alcohol = Boolean;

    if(alcohol == true) {
        alcohol = cocktail;
        if(quantity > 1){
            alcohol = cocktails;
        }
    } else {
        alcohol = milkshake;
        if(quantity > 1){
            alcohol = milkshakes;
        }
    }
    console.log(quantity + fruit + alcohol);
}