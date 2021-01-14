let imgobj=null;
imgobj=document.getElementById('myimage');
function init(){
    imgobj=document.getElementById('myimage');
    imgobj.style.position='relative';
    imgobj.style.left='0px';
}
function moveRight(){
    imgobj.style.left=parseInt(imgobj.style.left)+10+'px';
}
window.onload=init();
