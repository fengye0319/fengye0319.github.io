var _top = null;

function mOver(obj) {
    obj.className = "";
}

function mOut(obj) {
    obj.className = "blur3";
}

function forHeaderBackImg() {
    var _backImgObj = $("#backImg");
    _backImgObj.animate({
        marginTop: "-710px"
    }, 2000);
    if (_top == null) {
        _top = true;
        _backImgObj.animate({
            marginTop: "-710px"
        }, 2000);
    } else {
        _top = null;
        _backImgObj.animate({
            marginTop: "0px"
        }, 2000);
    }
}
setInterval("forHeaderBackImg()", 6000);
