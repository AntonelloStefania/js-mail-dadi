let button = document.getElementById('btn');



button.addEventListener('click', function(){
    let result = document.getElementById('result');
    let player = Math.floor(Math.random() * 6 + 1);
    console.log(player)

    button.innerText = 'tira ancora';
    
    let npc = Math.floor(Math.random() * 6 + 1);
    console.log(npc)
    
    document.getElementById('player').innerHTML = `il tuo risultato è ${player}`;
    document.getElementById('npc').innerHTML = `il banco ha fatto ${npc}`;
    
    if(player > npc){
        button.innerText = 'Complimenti, hai vinto!';
        console.log(result)
    } else if (player < npc){
        button.innerText = 'Hai perso, riprova!';
        console.log(result)
    } else {
        button.innerText = 'pareggio,tira ancora';
       
        console.log(result)
    }
})