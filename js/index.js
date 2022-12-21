var menu = document.getElementById('nav');

var isChromium = !!window.chrome;
if (!isChromium) {
    document.getElementById('browserwarning').style.display = "flex";
}

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

document.getElementById('ebookimg').onclick = async function() {
    document.getElementById('enlargeimg').style.display = "flex";
    await sleep(100);
    document.getElementById('enlargeimg').style.opacity = "1";
}

document.getElementById('enlargeimg').onclick = async function() {
    document.getElementById('enlargeimg').style.opacity = "0";
    await sleep(300);
    document.getElementById('enlargeimg').style.display = "none";
}

document.getElementById('menutoggle').onclick = function() {
    togglemenu();
}

document.getElementById('home').onclick = function() {
    window.location = "/mhlib/";
}

document.getElementById('mhhomepage').onclick = function() {
    window.open("https://sccsmissionhill.ss8.sharpschool.com", '_blank');
}

document.getElementById('opals').onclick = function() {
    window.location = "/mhlib/opals";
}

document.getElementById('onlinebooks').onclick = function() {
    window.location = "/mhlib/onlinebooks"
}

document.getElementById('reservebook').onclick = function() {
    window.open("https://mhms.sccs.opalsinfo.net/bin/home", '_blank');
}

document.getElementById('lexile').onclick = function() {
    window.open("https://hub.lexile.com/find-a-book/book-results", '_blank');
}

document.getElementById('rc').onclick = function() {
    window.open("https://readingcountsbookexpert.tgds.hmhco.com/bookexpert/search_results_quickfind.asp?UID=&subt=0&mode=new&criteria=&type=Title&x=49&y=20", '_blank');
}