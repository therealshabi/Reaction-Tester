document.getElementById("child").style.backgroundColor = "#123456";
document.getElementById("child").style.height = "200px";
document.getElementById("child").style.width = "200px";
document.getElementById("child").style.borderRadius = "50%";

function getRandomColor() {
    var hex = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomHeight() {
    return (Math.random() * 400) + 60;
}

function getRandomWidth() {
    return (Math.random() * 400) + 60;
}

function getRandomMargin() {
    return (Math.random() * 800);
}

var start = new Date().getTime();

var borderR = ["50%", "0%"];


//Set a loop which starts evert 1 second
setInterval(function () {
    document.getElementById("child").onclick = function () {
        var end = new Date().getTime();
        var time = end - start;
        time = time / 1000;
        document.getElementById("time").innerHTML = "Your time: " + time + "s";
        time = 0;
        document.getElementById("child").remove();
        document.getElementById("parent").innerHTML = "<div id='child'></div>";
        var color = getRandomColor();
        document.getElementById("child").style.backgroundColor = color;
        document.getElementById("child").style.height = getRandomHeight() + "px";
        document.getElementById("child").style.width = getRandomWidth() + "px";
        document.getElementById("child").style.borderRadius = borderR[Math.floor(Math.random() * 2)];
        document.getElementById("child").style.marginLeft = getRandomMargin() + "px";
        start = new Date().getTime();
    }
}, 100);
