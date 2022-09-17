const openMenu = () => {
    document.querySelector(".backdrop").className = 'backdrop active';
    document.querySelector("aside").className = 'active';
}
const closemenu = () => {
    document.querySelector( ".backdrop").className = 'backdrop';
    document.querySelector( "aside").className = '';
}


document.getElementById ("MenuBtn" ).onclick = e => {
    e.preventDefault();
    openMenu();

}
document.querySelector("aside button.close").onclick = e  => {
    closemenu();
}
document.querySelector(".backdrop").onclick = e => {
    closemenu();
}

window.onscroll=()=>{
    checkscroll();
}
window.onload=()=>{
    checkscroll();
}

function checkscroll(){
    let ele = document.querySelector('.line');
    let distance=window.pageYOffset + ele.getBoundingClientRect().top;
    
    let arr=document.querySelectorAll('.li');
    arr.forEach((curr)=>{
        curr.style.background='black';
    })

    if(distance>0&&distance<600){
        arr[0].style.background='white';
    }
    else if(distance>600&&distance<1200){
        arr[1].style.background='white';
    }
    else if(distance>1200){
        arr[2].style.background='white';
    }
}
