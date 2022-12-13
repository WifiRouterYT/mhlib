var menu = document.getElementById('nav');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var collapsestate = 0;
async function togglemenu() {
    if(collapsestate === 0) {
        menu.style.width = "230px";
        collapsestate = 1;
    } else {
        menu.style.width = "52px";
        collapsestate = 0;
    }
}

document.getElementById('menutoggle').onclick = function() {
    togglemenu();
}

document.getElementById('home').onclick = function() {
    window.location.replace("/mhlib/");
}

document.getElementById('mhhomepage').onclick = function() {
    window.open("https://sccsmissionhill.ss8.sharpschool.com", '_blank');
}

document.getElementById('opals').onclick = function() {
    window.location.replace("/mhlib/opals/");
}