
var images = ["images/bannar-min-02.png", "images/bannar-min-01.png", ];
var index = 0;

function mOver(obj) {
    obj.className = "";
}

function mOut(obj) {
    obj.className = "blur3";
}


function forHeaderBackImg() {
    var _headerObj = document.getElementById("index_header");
    var currentImage = images[index];
    _headerObj.style.backgroundImage = "url(" + currentImage + ")";
    index++;
    if (images[index] == null) {
        index = 0;
    }
}

setInterval("forHeaderBackImg()", 4000);
