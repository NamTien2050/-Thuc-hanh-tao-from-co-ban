let value=prompt('what is the "official" name of javascript?','');
if (value=='ECMAScript'){
    document.getElementById("name").innerHTML='right!';
}else{
    document.getElementById('name').innerHTML="you don't know? ECMAScript";
}