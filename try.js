


function startGame() {
    const target = Math.floor(Math.random() * 100 ) +1;
    let attempts = 0;

    console.log('welcom to guessing game');
    console.log('i have chisen a number');
    console.log('could youd guesse it');

    function guessNumber(){
        const input = prompt('please guesse a number');
        const guesse = Number( input);
        attempts++;
    }

    if (isNaN(guesse) || guesse<1 || guesse>100){
     console.log('please enter a valid number');
     guessNumber();
     return;
    }
    
     if (guesse === target){
        console.log(`Bingoo, the number was ${target}, correct`)
        console.log(`you guessed in ${attempts} attemps.`)
     } else if (guesse > target){
        console.log('so high, try again');
        guessNumber();
     } else{
        console.log('low, try again');
        guessNumber();
    }
  
    guessNumber();
    

}
