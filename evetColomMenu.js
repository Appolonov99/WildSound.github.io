function CM(e){
var colomMenu=document.body.getElementsByClassName("menu")[0].getElementsByTagName("div");
colomMenu.forEach=[].forEach;
colomMenu.forEach(function(elem){
    if(getComputedStyle(elem).display=='none')
{elem.style.display="flex"; return;}
elem.style.display="none";})
}