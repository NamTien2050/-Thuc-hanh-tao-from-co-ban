let boad=[];
let data="";
for(let i=0;i<5;i++){
    boad[i]=["O","X","O","O"];
}
for(let i=0;i<5;i++){
    data +="<br/>";
    for(let j=0;j<5;j++){
        data += boad[i][j]+ "&nbsp;&nbsp;"
    }
}
data+="<br><br/><input type='button'value='Change Value'onclick='changevalue()'>"
document.getElementById("carogame").innerHTML=data;
console.log(data);
function changevalue(){
let positionX=prompt('X:');
let positionY=prompt('Y:');
data="";
boad[positionX][positionY]="x";
for(let i=0;i<5;i++){
    data+="<br>";
    for(let j=0;j<5;j++){
        data += boad[i][j] +"&nbsp;&nbsp;&nbsp;&nbsp;"
    }
}
    data+="<br><br/><input type='button'value='Change Value'onclick='changevalue()'/>"
        document.getElementById("carogame").innerHTML="<hr/>"+data;
console.log("<hr/>"+data);
}

