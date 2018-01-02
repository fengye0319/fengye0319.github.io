var _top = null;

function mOver(obj) {
    obj.className = "";
}

function mOut(obj) {
    obj.className = "blur3";
}

function forHeaderBackImg() {
    var _backImgObj = $("#backImg");

    if (_top == null) {
        _top = true;
        _backImgObj.animate({
            marginTop: "-660px"
        }, 2500);
    } else {
        _top = null;
        _backImgObj.animate({
            marginTop: "0px"
        }, 2500);
    }
}
setInterval("forHeaderBackImg()", 8000);
