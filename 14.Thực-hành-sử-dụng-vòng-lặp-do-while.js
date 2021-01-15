let value= "null";
do{
    value=prompt("nhap vao so tu 1 -> 10");
}while (value<1||value>10);
document.getElementById('dowhile').innerHTML+='so ban vua nhap: '+value;
console.log(value);
