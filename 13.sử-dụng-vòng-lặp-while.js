
//Bai 1:
// let num;
// let total=0
// while (num!=-1){
//     num=parseInt(prompt("so:"));
//     console.log(num);
//     document.getElementById('tinhtong').innerHTML+='the number is'+num+'<br>';
//     total+=num;
// }
// document.getElementById('tinhtong').innerHTML+='tong bieu thuc là: ' +total+ '<br>';


//Bai 2:
let i=1;
while (i<100){
    document.getElementById("tinhtong").innerHTML+="<hr width=" + i + "%>";
    console.log(i);
    i++;
}


