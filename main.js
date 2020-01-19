const menu = document.querySelectorAll('.text');
const listMenu = document.querySelectorAll('.listMenu');





function handleMouseIn(event){
    const subMenu=event.target.children[1];
    subMenu.classList.remove('displayNone');
}

function handleMouseOut(event){
    const subMenu=event.target.children[1];
    subMenu.classList.add('displayNone');
}




listMenu.forEach(element =>{
    element.addEventListener("mouseenter", handleMouseIn);
    element.addEventListener("mouseleave", handleMouseOut);
})