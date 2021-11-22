if(athletes.indexOf('Pedro')+1 == 1){
    let emoji = '🥇';
} else if(athletes.indexOf('Pedro')+1 == 2){
    let emoji = '🥈';
} else if(athletes.indexOf('Pedro')+1 == 3){
    let emoji = '🥉';
} else {
    let emoji = '😞';
}

console.log(emoji + ' Perdo is #' + athletes.indexOf('Pedro')+1);