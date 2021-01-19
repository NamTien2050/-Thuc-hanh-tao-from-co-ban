let numbers=[-3,5,1,3,2,10];
let max=numbers[0];
let phantulonnhat=0;
numbers.sort(function(a,b){return a-b});
document.getElementById("timgiatrilonnhat").innerHTML="ham da sap xep: " +numbers;
console.log("ham da sap xep: " +numbers);
for(let i=1;i<numbers.length;i++){
    if(numbers[i]>max){
        max=numbers[i];
        phantulonnhat=i;
    }
}
document.getElementById("timgiatrilonnhat").innerHTML="gia tri lon nhat cua mang: " +max+ " la " +phantulonnhat;
console.log("gia tri lon nhat cua mang: " +max+ " la " +phantulonnhat);