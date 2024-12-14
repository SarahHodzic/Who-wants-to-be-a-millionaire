const Uputstva = document.querySelector('.praivla_igre');
const modal = document.getElementById('modal1');
const pozadina = document.getElementById('pozadina');
const dropDown = document.getElementById('Projekat');
const dropButton1 = document.querySelector('.dropButton');
const mobileNav = document.getElementById('collapsibleNavbar');
let isDropDownOpen = false;
let isClickedMobileNav = false;


Uputstva.addEventListener('click', function(){
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
    pozadina.style.display = 'inline-block';
    pozadina.style.pointerEvents = 'none !important';
})

function zatvori(){
    modal.style.transform = 'translate(-50%, -50%) scale(0)';
    pozadina.style.display = 'none';
    pozadina.style.pointerEvents = 'all';
}



function otvoriPodatke(){ 
    if(isDropDownOpen)
        dropDown.style.display = "none";
    else
        dropDown.style.display = "block";
    isDropDownOpen = !isDropDownOpen;
}

window.onclick = function(event){ /*https://www.w3schools.com/howto/howto_js_dropdown.asp*/
    if(!event.target.matches('.dropButton')){
        let dropdown1 = document.getElementsByClassName("dropDownItems");
        for(let i = 0; i < dropdown1.length; i++){
            let openDropDown = dropdown1[i];
            if(openDropDown.style.display === "block"){
                openDropDown.style.display = "none";
                isDropDownOpen = false;
            }
        }
    }
}

function prikaziMeniMobile(){
    mobileNav.classList.toggle('show');
    if(isClickedMobileNav){
        mobileNav.style.display = "none";
    }
    else{
        mobileNav.style.display = "block";
    }
    isClickedMobileNav = !isClickedMobileNav;
}