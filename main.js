const menu = document.querySelectorAll('.text');



function handleMouseIn(event){
    const subMenu=event.target.nextElementSibling;
    subMenu.classList.remove('displayNone');
}

function handleMouseOut(event){
    const subMenu=event.target.nextElementSibling;
    subMenu.classList.add('displayNone');
}

menu.forEach(element => {
    element.addEventListener("mouseenter", handleMouseIn);
    element.addEventListener("mouseleave", handleMouseOut);
});