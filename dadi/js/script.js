let button = document.getElementById('btn');

button.addEventListener('click', function(){
    let player = Math.floor(Math.random() * 6 + 1);

    button.innerText = 'tira ancora';
    
    let npc = Math.floor(Math.random() * 6 + 1);
    
    document.getElementById('player').innerHTML = `il tuo risultato è ${player}`;
    document.getElementById('npc').innerHTML = `il banco ha fatto ${npc}`;
    
    if(player > npc){
        button.innerText = 'Complimenti, hai vinto!';
    } else if (player < npc){
        button.innerText = 'Hai perso, riprova!';
    } else {
        button.innerText = 'pareggio,tira ancora';
    }
})