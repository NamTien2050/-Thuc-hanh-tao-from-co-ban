let x=0;
let array=[];
let result='';
function add_element_to_array(){
    let get_element=document.getElementById("mang")  .value;
    array.push(get_element);
    document.getElementById("mang")  .value='';

}

function display_array(){
    array.forEach(function(item,index){
        result+="<p>Element"+index+"="+item+"</p>";
    })
    document.getElementById("result").innerHTML=result;

}
