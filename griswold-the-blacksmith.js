const purchasableGoods = ['arrows', 'boots', 'sword'];

if (playerCoins < 3) {
    purchasableGoods.length = 0; //if coins < 3, array empty
} else if (playerCoins >= 3) {
    if (playerCoins >= 44) {
        if (playerCoins >= 299.99) {
            purchasableGoods;
        } else { //if coins < 299.99, first & second indexes remaining
            for (let i = 0; i < 1; i++) {
                purchasableGoods.pop()
            }
        }
    } else { //if coins < 44, first index remaining
        for (let i = 0; i < 2; i++) {
            purchasableGoods.pop()
        }
    }
}




console.log(purchasableGoods)