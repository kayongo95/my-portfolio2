var myMenu = document.getElementById('menu-links');
var myBtn = document.getElementsByClassName('menu-btn');

function toggleMenu(){
    if (myMenu.style.display == 'none'){
        myMenu.style.display = 'block';
    }
    else{
        myMenu.style.display = 'none';
    }
}