const menu = document.querySelectorAll('.text');
const listMenu = document.querySelectorAll('.menu');

console.log(listMenu);



function handleMouseIn(event){
    const subMenu=event.target.nextElementSibling;
    subMenu.classList.remove('displayNone');
}

function handleMouseOut(event){
    const subMenu=event.target.nextElementSibling;
    subMenu.classList.add('displayNone');
}

function handleMouseInList(event){
    const listMenu=event.target;
    listMenu.classList.remove('displayNone');
}

function handleMouseOutList(event){
    const listMenu=event.target;
    listMenu.classList.add('displayNone');
}

menu.forEach(element => {
    element.addEventListener("mouseenter", handleMouseIn);
    element.addEventListener("mouseleave", handleMouseOut);
})

listMenu.forEach(element =>{
    element.addEventListener("mouseenter", handleMouseInList);
    element.addEventListener("mouseenter", handleMouseOutList);
})