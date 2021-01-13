let userName=prompt("who's there?",'');
let pass=prompt("Password",'');
if(userName=='admin'){
    if(pass=='themaster'){
        document.getElementById('to').innerHTML="Welcome";
    }else if(pass=="null"){
        document.getElementById('to').innerHTML="canceled";
    }else{
        document.getElementById('to').innerHTML='wrong password';
    }
}else if(userName=="null"){
    document.getElementById('to').innerHTML='canceld';
}else{document.getElementById('to').innerHTML='i don`t know you';
}


