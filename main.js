const listMenu = document.querySelectorAll('.listMenu');
const message = document.querySelector('.message');





function handleMouseIn(event){
    const subMenu=event.target.children[1];
    subMenu.classList.remove('displayNone');
}

function handleMouseOut(event){
    const subMenu=event.target.children[1];
    subMenu.classList.add('displayNone');
}

function displayMessage(){
    let ranNum = parseInt(Math.random()*1000);
    let innerMessage='';
    if (ranNum<10){
        innerMessage=`00${ranNum}`;
    } else if(ranNum<100){
        innerMessage=`0${ranNum}`;
    } else {
        innerMessage=`${ranNum}`;
    }
    message.innerHTML=`지금 주변에 ${innerMessage} 명의 회원들이 여행 메이트를 찾고 있습니다!!`;
}


listMenu.forEach(element =>{
    element.addEventListener("mouseenter", handleMouseIn);
    element.addEventListener("mouseleave", handleMouseOut);
})
setInterval(displayMessage, 1000);
