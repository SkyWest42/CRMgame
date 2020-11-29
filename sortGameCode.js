var startX;
var startY;

$(document).ready(function () {
    $("#to-shoot").on("mousedown", startPull);
});

function startPull(event) {
    startX = event.clientX;
    $(document).on("mousemove", pull);
    $(document).on("mouseup", stopPull);
    $("#to-shoot").css({
        "width": "300px",
        "height": "140px",
        "margin-bottom": "150px"
    });
    startY = event.clientY;
    // startY = document.getElementById("to-shoot").getBoundingClientRect().top;
}

var shootDeg;
function pull(event) {
    shootDeg = startX - event.clientX;
    var diffY = event.clientY - startY;
    if (shootDeg < 30 && shootDeg > -30) {
        $("#to-shoot").css({
            "transform": "rotate(" + shootDeg + "deg)"
        });
    }
    console.log(diffY);
    if (diffY > 0 && diffY < 100) {
        $("#to-shoot").css({
            "transition": "0.5s ease-out",
            "margin-bottom": 150 - diffY + "px"
        });
    }
}

function stopPull(event) {
    $(document).off("mousemove", pull);
    $(document).off("mouseup", stopPull);

    if (Number($("#to-shoot").css("margin-bottom").slice(0, -2)) > 60) {
        backToPosition();
    } else {
        $("#to-shoot").css({
            "top": document.getElementById("to-shoot").getBoundingClientRect().top,
            "right": document.getElementById("to-shoot").getBoundingClientRect().right,
            "left": document.getElementById("to-shoot").getBoundingClientRect().left
        });
        shoot();
    }
}

function backToPosition() {
    $("#to-shoot").css({
        "transform": "rotate(" + 0 + "deg)",
        "width": "450px",
        "height": "210px",
        "margin-bottom": "50px"
    });
}

function shoot() {
    if (shootDeg > 15) {
        $("#to-shoot").css({
            "transform": "3s",
            "top": "0",
            "right": "0"
        });
    } else if (shootDeg < -15) {
        $("#to-shoot").css({
            "transform": "3s",
            "top": "0",
            "left": "0"
        });

    } else {
        $("#to-shoot").css({
            "transform": "3s",
            "top": "0",
        });
    }
}