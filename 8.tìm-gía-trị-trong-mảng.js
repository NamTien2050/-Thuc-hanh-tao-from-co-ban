let value=parseInt(prompt("enter number"));
let numbers=[-3,5,1,3,2,10];
for (let i=0;i<numbers.length;i++){
    if(value==numbers[i])
    document.getElementById("timgiatritrongmang").innerHTML="gia tri nhap vao "+numbers[i]+ " found at "+i;
    console.log(i);
}