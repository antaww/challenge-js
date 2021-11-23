let shaker = (quantity, fruit, alcohol) => {
    let drink = '';
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
    let result = `${quantity} ${fruit} ${drink}`;
    return result;
}
