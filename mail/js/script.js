let mails = [ 'pincopallino@msn.com','mariafranca@msn.com', 'giangiorgio@msn.com', 'alfredo@msn.com', 'mariella@msn.com', 'riccardinofuffo@msn.com', 'ferrogigio@msn.com', 'impostellina@msn.com']

let user = prompt('inserisci la tua email');
//console.log(user)

let flag = false

for (let i=0; i < mails.length; i++){
//console.log(mails[i])
if( mails[i].toLowerCase === user.toLowerCase){
    flag = true
}
}

if(flag === true){
    //console.log('email presente')
    document.getElementById('user').innerHTML=`la tua email ${user} è presente nella lista`
} else {
    //console.log('email non presente')
    document.getElementById('user').innerHTML=`${user} non è tra le email registrate`
}