let shaker = (quantity, fruit, alcohol) => {
    quantity = Number;
    fruit = String;
    alcohol = Boolean;
    let drink = String;

    if(alcohol == true) {
        drink = 'cocktail';
        if(quantity > 1){
            drink = 'cocktails';
        }
    } else {
        drink = 'milkshake';
        if(quantity > 1){
            drink = 'milkshakes';
        }
    }
    return(`${quantity} ${fruit} ${drink}`);

}