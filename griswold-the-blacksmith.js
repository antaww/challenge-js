let purchasableGoods = ['arrows', 'boots', 'sword'];


if(playerCoins<3){
    while (purchasableGoods.length) {
        purchasableGoods[purchasableGoods.pop];
    }
}else if(playerCoins>=3){
    purchasableGoods[0];
} else if(playerCoins>=44){
    purchasableGoods[0,1];
} else if(playerCoins>=299.99){
    purchasableGoods[0,1,2];
}