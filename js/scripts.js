const navRight = document.getElementById('nav-right');
const navLeft = document.getElementById('nav-left');

function toggleMenuRight(active) {
    if (active) {
        navRight.classList.add('active-right');
    } else {
        navRight.classList.remove('active-right');
    }
}


function toggleMenuLeft(active) {
    if (active) {
        navLeft.classList.add('active-left');
    } else {
        navLeft.classList.remove('active-left');
    }
}