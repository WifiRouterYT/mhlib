/*
 * MHLib Script written by WifiRouter
 * 12/2022
 *
 * yes it sucks but it works (for the most part) so im keeping it
*/

var menu = document.getElementById('nav');

var isChromium = !!window.chrome;
if (!isChromium || /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
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

$(document).ready(function () {
    showSpinnerWhileiFrameLoads();
});

function showSpinnerWhileiFrameLoads() {
    var iframe = $('iframe');
    if (iframe.length) {
        $(iframe).before('<div id=\'spinner\' style=\'font-size: 8px;\'><i class=\'fa fa-circle-notch fa-spin fa-3x fa-fw\'></i></div>');
        $(iframe).on('load', function() {
            document.getElementById('spinner').style.display='none';
        });
    }
}

try {
    var ebookimg = document.getElementById('ebookimg');
    ebookimg.onclick = async function() {
    if ( null != ebookimg ) {ebookimg = "No value! Are you on the right page?"; return;}
    document.getElementById('enlargeimg').style.display = "flex";
    await sleep(100);
    document.getElementById('enlargeimg').style.opacity = "1";
    }
} catch {
    console.log("Found an invalid element, skipping over it.")
}

try {
    document.getElementById('enlargeimg').onclick = async function() {
        document.getElementById('enlargeimg').style.opacity = "0";
        await sleep(300);
        document.getElementById('enlargeimg').style.display = "none";
    }
} catch {
    console.log("Found an invalid element, skipping over it.")
}

/*
 *
 *  MENU LISTENERS
 *  PLACE ANY OTHER EVENTS UNDER IT (preferably in try/catch statements. not the best way but it works.)
 * 
*/

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

// END MENU LISTENERS

try {
    document.getElementById('reservebook').onclick = function() {
        window.open("https://mhms.sccs.opalsinfo.net/bin/home", '_blank');
    }
} catch {
    console.log("Found an invalid element, skipping over it.");
}

try {
    document.getElementById('lexile').onclick = function() {
        window.open("https://hub.lexile.com/find-a-book/book-results", '_blank');
    }
} catch {
    console.log("Found an invalid element, skipping over it.");
}

try {
    document.getElementById('rc').onclick = function() {
        window.open("https://readingcountsbookexpert.tgds.hmhco.com/bookexpert/search_results_quickfind.asp?UID=&subt=0&mode=new&criteria=&type=Title&x=49&y=20", '_blank');
    }
} catch {
    console.log("Found an invalid element, skipping over it.");
}