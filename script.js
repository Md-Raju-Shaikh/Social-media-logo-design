function show_all_Icon(){
    document.getElementById('hide_all_icons').style.display = "inline-block";
    document.getElementById('show_blink_icons').style.display = "none";
}

function hide_all_Icon(){
    document.getElementById('hide_all_icons').style.display = "none";
    document.getElementById('show_blink_icons').style.display = "inline-block";
}


var i = 0;

function change_icon() {
    i = i + 1;
    if (i == 5) {
        i = 0;
    }

    if (i == 1) {
        document.getElementById('blink_icon').className = "fab fa-facebook-f";
        // document.getElementById('icon_color').style.backgroundColor = "blue";
    }
    else if (i == 2) {
        document.getElementById('blink_icon').className = "fab fa-linkedin";
    }
    else if (i == 3) {
        document.getElementById('blink_icon').className = "fab fa-twitter";
    }
    else if (i == 4) {
        document.getElementById('blink_icon').className = "fab fa-github";
    }
    else {
        document.getElementById('blink_icon').className = "fab fa-youtube";
    }
}
var pic_src = setInterval(change_icon, 1000);