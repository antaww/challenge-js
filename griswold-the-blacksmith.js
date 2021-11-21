const purchasableGoods = ['arrows', 'boots', 'sword'];

if(playerCoins<3){
    purchasableGoods.length = 0;
}else if(playerCoins>=3){
    purchasableGoods.slice(0,1)
    if(playerCoins>=44){
        purchasableGoods.slice(0,2)
        if(playerCoins>=299.99){
            purchasableGoods.slice(0,3)
}}}