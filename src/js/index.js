window.onload = () => {
    var miPros = [
        ["../img/mi10pro.webp", "../img/mi10.webp", "../img/miCC9pro.webp", "../img/mi9pro.webp", "../img/micc9.png", "../img/mcc9e.png"],
        ["小米10 Pro", "小米10", "小米CC9 Pro", "小米9 Pro 5G", "小米CC9", "小米CC9e"],
        ["4999元起", "3999元起", "2599元起", "3699元起", "1699元起", "1299元起"]
    ];
    var rmPros = [
        ["../img/rmik30.webp", "../img/rmk30pro.webp", "../img/rm8a.webp", "../img/rm8.webp", "../img/rmnote8.webp", "../img/rmnote8pro.webp"],
        ["Redmi K30", "Redmi K30 5G", "Redmi 8A", "Redmi 8", "Redmi Note8", "Redmi Note Pro"],
        ["1599元起", "1999元起", "599元起", "899元起", "1299元起", "699元起"]
    ];
    var tvs = [
        ["../img/tv1.webp", "../img/tv2.jpg", "../img/tv3.jpg", "../img/tv4.png", "../img/tv5.jpg", "../img/tv6.jpg"],
        ["红米电视 70英寸", "小米壁画电视 65英寸", "小米全屏电视 E678", "小米电视4A 32", "小米电视4A 64", "小米电视4A 75"],
        ["3299元起", "6999元起", "1799元起", "699元起", "1699元起", "2599元起"]
    ];
    var lts = [
        ["../img/lt1.webp", "../img/lt2.png", "../img/lt3.webp", "../img/lt4.webp", "../img/lt5.png", "../img/lt6.png"],
        ["RedmiBook 13", "小米笔记本 Pro 15", "RedmiBook 14", "游戏本2019款", "小米笔记本 15.6'", "小米笔记本Air 17"],
        ["4199元起", "5499元起", "3999元起", "6999元起", "3799元起", "3299元起"]
    ]
    let pros = [miPros, rmPros, tvs, lts, miPros, rmPros, tvs];
    $(".header_bottom nav span").mouseenter(function() {
        $(".header_bottom div").stop().slideDown(200, "linear");
        $(".header_bottom ul").addClass("active");
        for (let i = 0; i < miPros[0].length; i++) {
            $(".header_bottom ul").children().children().children("img").eq(i).attr({ src: pros[$(this).index()][0][i] });
            $(".header_bottom ul").children().children().children("strong").eq(i).text(pros[$(this).index()][1][i]);
            $(".header_bottom ul").children().children().children("i").eq(i).text(pros[$(this).index()][2][i]);
        }
    })
    $(".header_bottom nav").mouseleave(function() {
        $(".header_bottom div").stop().slideUp(200, "linear");
    })

    var sInfo = ["小米9", "Redmi K20 Pro", "Redmi K20", "Redmi Note7 Pro", "Redmi Note7", "小米电视4c", "电视32英寸", "笔记本pro", "小爱音响", "净水器"];

    $(".header_bottom form input").focus(function() {
        for (var i = 0; i < sInfo.length; i++) {
            $(".header_bottom form p a").eq(i).text(sInfo[i]);
        }
        $(".header_bottom form").css({ border: "1px solid #ff6700" }).children("button").css({ borderLeft: "1px solid #ff6700" }).siblings(".m1").fadeOut(100, "linear").siblings("p").css({ display: "flex" });

    })
    $(".header_bottom form input").blur(function() {
        $(".header_bottom form").css({ border: "1px solid #e0e0e0" }).children("button").css({ borderLeft: "1px solid #e0e0e0" }).siblings(".m1").fadeIn(100, "linear").siblings("p").css({ display: "none" });
    })

    var num = 0;
    var oBan = document.querySelector(".banner")
    var pics = document.querySelector(".banner ul:nth-of-type(1)");
    var btns = document.querySelector(".banner ul:nth-of-type(3)");
    var left = document.querySelector(".banner span:nth-of-type(1)");
    var right = document.querySelector(".banner span:nth-of-type(2)");
    var timer = setInterval(autoPlay, 1800);

    function autoPlay() {
        num++;
        if (num === pics.children.length) {
            num = 0;
        }
        for (var i = 0; i < 5; i++) {
            btns.children[i].className = "";
            startMove(pics.children[i], { "opacity": 0 }, 0);
        }
        btns.children[num].className = "on";
        startMove(pics.children[num], { "opacity": 100 }, 0);
    }
    oBan.addEventListener("mouseenter", function() {
        clearInterval(timer);
    }, false)
    oBan.addEventListener("mouseleave", function() {
        timer = setInterval(autoPlay, 3000);
    }, false)
    for (let i = 0; i < btns.children.length; i++) {
        btns.children[i].addEventListener("click", function() {
            num = i - 1; //点击按钮时要确定num的值
            autoPlay();
        }, false)
    }
}