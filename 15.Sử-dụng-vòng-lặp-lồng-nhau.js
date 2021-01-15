let o;
let i;
let j;
o="<table border='1' width='300' cellspacing='0' cellpadding='3'>";
for(i=1;i<=10;i++) {
    o=o+'<tr>';
    for(j=1;j<=10;j++){
        o+='<td>'+i*j+'</td>';
    }
    o=o+'</tr>';
}
o=o+'</table>';
document.getElementById("longnhau").innerHTML=o;
console.log(o);
