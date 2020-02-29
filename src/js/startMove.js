var flag = null;

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, false)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

function startMove(obj, json, time, callback) {
    flag = true;
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        for (var attr in json) {
            var current = 0;
            if (attr == "opacity") {
                current = parseFloat(getStyle(obj, attr)) * 100;
            } else if (attr == "zIndex") {
                current = parseFloat(getStyle(obj, attr)) * 100;
            } else {
                current = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - current) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (json[attr] != current) {
                flag = false;
            }
            if (attr == "opacity") {
                obj.style.opacity = (current + speed) / 100;
            } else if (attr == "zIndex") {
                obj.style.zIndex = json[attr];
            } else {
                obj.style[attr] = current + speed + "px";
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }

    }, time)
}