function setCookie(key, value, expires) {
    if (expires) {
        let d = new Date();
        let t = d.setTime(d.getTime() - 1000 * 60 * 60 * 8 + 1000 * expires);
        document.cookie = `${key}=${value};expires=${t}`;
    } else {
        document.cookie = `${key}=${value}`;
    }
}

function getCookie(key) {
    let str = document.cookie;
    let arr = str.split("; ");
    for (let i = 0; i < arr.length; i++) {
        let newArr = arr[i].split("=");
        if (key === newArr[0]) {
            return newArr[1];
        }
    }
}