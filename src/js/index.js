window.onload = () => {
    let list = [];
    $.ajax({
        url: "../json/index.json",
        dataType: "json",
        success: function(res) {
            // 头部下拉列表信息
            list = res;
            let miPros = list.miPros;
            let rmPros = list.rmPros;
            let lts = list.lts;
            let tvs = list.tvs;
            // 头部下拉列表的效果与数据渲染
            let pros = [miPros, rmPros, tvs, lts, miPros, rmPros, tvs];
            let sInfo = list.sInfo;
            $(".header_bottom nav span").mouseenter(function() {
                $(".header_bottom div").stop().slideDown(200, "linear");
                $(".header_bottom ul").addClass("active");
                for (let i = 0; i < pros[0][0].length; i++) {
                    $(".header_bottom ul").children().children().children("img").eq(i).attr({ src: pros[$(this).index()][0][i] });
                    $(".header_bottom ul").children().children().children("strong").eq(i).text(pros[$(this).index()][1][i]);
                    $(".header_bottom ul").children().children().children("i").eq(i).text(pros[$(this).index()][2][i]);
                }
                $(".cover").css({ display: "block" })
            })

            // 搜索框部分获取焦点、失去焦点的效果
            $(".header_bottom form input").focus(function() {
                // 信息渲染
                for (var i = 0; i < sInfo.length; i++) {
                    $(".header_bottom form p a").eq(i).text(sInfo[i]);
                }
                $(".header_bottom form").css({ border: "1px solid #ff6700" }).children("button").css({ borderLeft: "1px solid #ff6700" }).siblings(".m1").fadeOut(100, "linear").siblings("p").css({ display: "flex" });

            })
            let phone = list.phone;
            // banner商品信息
            let laptap = list.laptap;
            let all = [phone, laptap, phone, laptap, phone, laptap, phone, laptap, phone, laptap];
            for (let i = 0; i < all.length; i++) {
                $(`.banner ul:nth-of-type(1) li div:eq(${i})`).css({ width: `${990/4*Math.ceil(all[i][0].length/6)}px` });
                for (let j = 0; j < phone[0].length; j++) {
                    $(`.banner ul:nth-of-type(1) li div:eq(${i})`).append($(`<p><img src=${all[i][0][j]}>${all[i][1][j]}</p>`));
                }
            }

            // 倒计时区域
            let tPros = list.tPros;
            for (let i = 0; i < tPros[0].length; i++) {
                $(".play ul").css({ width: `${248.5*tPros[0].length}px` });
                $(".play ul").append($(`<li style="border-top:1px solid ${getColor()}"><img src=${tPros[0][i]}><p>${tPros[1][i]}</p><em>${tPros[2][i]}</em><strong><b>${tPros[3][i]}</b><b>${tPros[4][i]}</b></strong></li>`));
            }
            left.click(function() {
                n++;
                if (n === Math.ceil(tPros[0].length / 4)) {
                    n = 0
                }
                _autoPlay({
                    left: -1004 * n
                });
            })

            // 手机等区域的数据渲染
            let ps = list.ps;
            for (let i = 0; i < ps[0].length; i++) {
                $(".phone>div ul").append($(`<li><img src=${ps[0][i]}><p>${ps[1][i]}</p><em>${ps[2][i]}</em><strong><b>${ps[3][i]}</b><b>${ps[4][i]}</b></strong></li>`));
            } // 家电数据渲染
            let elecs = list.elecs;
            let intells = list.intells;
            let pars = list.pars;
            let collos = list.collos;
            for (var j = 0; j < elecs.length; j++) {
                if (j === elecs.length - 1) {
                    for (let k = elecs[j][0].length - 1; k >= 0; k--) {
                        $(".elec>div ul").eq(j).prepend($(`<li><img src=${elecs[j][0][k]}><p>${elecs[j][1][k]}</p><em>${elecs[j][2][k]}</em><strong><b>${elecs[j][3][k]}</b><b>${elecs[j][4][k]}</b></strong></li>`));
                        $(".par>div ul").eq(j).prepend($(`<li><img src=${pars[j][0][k]}><p>${pars[j][1][k]}</p><em>${pars[j][2][k]}</em><strong><b>${pars[j][3][k]}</b><b>${pars[j][4][k]}</b></strong></li>`));
                    }
                } else {
                    for (let i = elecs[0][0].length - 1; i >= 0; i--) {
                        $(".elec>div ul").eq(j).prepend($(`<li><img src=${elecs[j][0][i]}><p>${elecs[j][1][i]}</p><em>${elecs[j][2][i]}</em><strong><b>${elecs[j][3][i]}</b><b>${elecs[j][4][i]}</b></strong></li>`));
                        $(".intell>div ul").eq(j).prepend($(`<li><img src=${intells[j][0][i]}><p>${intells[j][1][i]}</p><em>${intells[j][2][i]}</em><strong><b>${intells[j][3][i]}</b><b>${intells[j][4][i]}</b></strong></li>`));
                        $(".collo>div ul").eq(j).prepend($(`<li><img src=${collos[j][0][i]}><p>${collos[j][1][i]}</p><em>${collos[j][2][i]}</em><strong><b>${collos[j][3][i]}</b><b>${collos[j][4][i]}</b></strong></li>`));
                        $(".par>div ul").eq(j).prepend($(`<li><img src=${pars[j][0][i]}><p>${pars[j][1][i]}</p><em>${pars[j][2][i]}</em><strong><b>${pars[j][3][i]}</b><b>${pars[j][4][i]}</b></strong></li>`));
                    }
                }
            }
        }
    })

    $(".cover").mouseenter(function() {
        $(".header_bottom div").stop().slideUp(200, "linear");
        $(".cover").css({ display: "none" });
    })

    // 搜索框部分获取焦点、失去焦点的效果

    $(".header_bottom form input").blur(function() {
        $(".header_bottom form").css({ border: "1px solid #e0e0e0" }).children("button").css({ borderLeft: "1px solid #e0e0e0" }).siblings(".m1").fadeIn(100, "linear").siblings("p").css({ display: "none" });
    })

    // banner轮播图
    var num = 0;
    var oBan = document.querySelector(".banner")
    var pics = document.querySelector(".banner ul:nth-of-type(2)");
    var btns = document.querySelector(".banner ul:nth-of-type(3)");
    var pre = document.querySelector(".banner span:nth-of-type(2)");
    var next = document.querySelector(".banner span:nth-of-type(1)");
    var timer = setInterval(autoPlay, 5000);

    function autoPlay() {
        if (num === pics.children.length) {
            num = 0;
        } else if (num === -1) {
            num = pics.children.length - 1;
        }
        for (var i = 0; i < 5; i++) {
            btns.children[i].className = "";
            startMove(pics.children[i], { "opacity": 0 }, 30);
        }
        btns.children[num].className = "on";
        startMove(pics.children[num], { "opacity": 100 }, 30);
    }
    oBan.addEventListener("mouseenter", function() {
        clearInterval(timer);
    }, false)
    oBan.addEventListener("mouseleave", function() {
        timer = setInterval(() => {
            num++;
            autoPlay();
        }, 5000);
    }, false)
    for (let i = 0; i < btns.children.length; i++) {
        btns.children[i].addEventListener("click", function() {
            num = i - 1;
            num++;
            autoPlay();
        }, false)
    }

    next.addEventListener("click", function() {
        num--;
        autoPlay();
    }, false)

    pre.addEventListener("click", function() {
        num++;
        autoPlay();
    }, false)

    // 倒计时
    function moreTen(num) {
        return num < 10 ? "0" + num : num;
    }

    function showTime(future) {
        var now = new Date();
        if (to.getTime() >= (new Date()).getTime()) {
            var ms = parseInt((future.getTime() - now.getTime()) / 1000);
            var day = parseInt(ms / (3600 * 24));
            var h = moreTen(parseInt((ms - day * (3600 * 24)) / 3600));
            var min = moreTen(parseInt((ms - day * 3600 * 24 - h * 3600) / 60));
            var s = moreTen(ms - day * 3600 * 24 - h * 3600 - min * 60);
            $(".time div:first-of-type ul li:nth-of-type(1)").text(h);
            $(".time div:first-of-type ul li:nth-of-type(3)").text(min);
            $(".time div:first-of-type ul li:nth-of-type(5)").text(s);
        } else {
            $(".time div>b").text("本场已结束");
            $(".time div:first-of-type ul li:nth-of-type(1)").text("00");
            $(".time div:first-of-type ul li:nth-of-type(3)").text("00");
            $(".time div:first-of-type ul li:nth-of-type(5)").text("00");
        }
    }

    var to = new Date("2020-3-2 22:00:00");
    $(".time div p strong").text(`${moreTen(to.getHours())}:${moreTen(to.getMinutes())}`);
    showTime(to);
    var atimer = setInterval(function() {
        showTime(to);
        if (to.getTime() < (new Date()).getTime()) {
            clearInterval(atimer);
        }
    }, 1000)

    // 该区域轮播图
    // 获取随机颜色值

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1));
    }

    function getColor() {
        var str = "0123456789abcdef";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += str.charAt(rand(0, 15));
        }
        return color;
    }

    // 数据渲染

    var n = 0;
    var left = $(".shopping>span i:eq(0)");
    var right = $(".shopping>span i:eq(1)");

    function _autoPlay(json) {
        startMove(document.querySelector(".play ul"), json, 30)
    }


    // 家电、智能、搭配
    function change(obj) {

        $(`${obj}>p span`).mouseenter(function() {
            $(this).addClass("online").siblings("span").removeClass("online");
            $(`${obj}>div ul`).eq($(this).index()).css({ display: "flex" }).siblings("ul").css({ display: "none" });
        })
    }
    change(".elec");
    change(".intell");
    change(".collo");
    change(".par");

    // footer_top
    $(".footer_top ul li").mouseenter(function() {
        $(this).css({ color: "#ff6700" }).children("img").attr({ src: `../img/footer_top${$(this).index()+1}_active.jpg` });
    })
    $(".footer_top ul li").mouseleave(function() {
        $(this).css({ color: "#666" }).children("img").attr({ src: `../img/footer_top${$(this).index()+1}.jpg` });
    })
    $(document).scroll(function() {
        if ($(document).scrollTop() > 400) {
            $(".fixed").css({ display: "block" });
        } else {
            $(".fixed").css({ display: "none" });
        }
    })
    $(".fixed").click(function() {
        var ctimer = setInterval(function() {
            $(document).scrollTop($(document).scrollTop() - 80);
            if ($(document).scrollTop() === 0) {
                clearInterval(ctimer);
            }
        }, 30)
    })
    if (localStorage.getItem("num")) {
        $("header nav:eq(1) a:eq(3)").text(`购物车(${localStorage.getItem("num")})`)
    }
}