// let mycolor=["Red", "Green", "White", "Black"];
// let color=mycolor.join();
// document.getElementById("sudungham").innerHTML=color;
// console.log(color);

// const num=window.prompt();
// const str=num.toString();
// const result=[str[0]];
// for(let x=1;x<str.length;x++){
//   if((str[x-1]%2===0)&&(str[x]%2===0)){
//       result.push('-',str[x]);
//   }else {
//    result.push(str[x]);
//   }
// }
// document.getElementById('sudungham').innerHTML=result.join('');

var str="The Quick Brown Fox";
var up="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var dowe="abcdefghijklmnopqrstuvwxyz";
var result=[];
for(let i=0;i<str.length;i++){
    if(up.indexOf(str[i])!==-1){
        result.push(str[i].toLowerCase());
    }else if(dowe.indexOf(str[i])!==-1){
        result.push(str[i].toUpperCase());
    }else{
        result.push(str[i]);
    }
}
document.getElementById("sudungham").innerHTML=result.join('');
console.log(result.join(''));