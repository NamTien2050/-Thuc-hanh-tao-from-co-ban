
//bai 1

// let a=parseInt(prompt("a:"));
// let b=parseInt(prompt("b:"));
// let result = ((a + b) < 4) ? 'Below' : 'Over';
// document.getElementById('toantu').innerHTML=result;

//bai 2
let login=prompt('login?:');
let message =(login=='Employee')?
    'Hello':
    (login=='Director') ?
        'Greetings':
        (login=='') ?
            'No login':
            '';
document.getElementById('toantu').innerHTML=message;