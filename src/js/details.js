window.onload = function() {
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
    $(window).scroll(function() {
        if ($(document).scrollTop() > 154) {
            $(".gover").css({ position: "fixed", top: 0, left: 0 });
        } else {
            $(".gover").css({ position: "static" });
        }
    })
    let c = getCookie("login");
    if (c === "1") {
        $(".login").css({ display: "none" });
    } else {
        $(".login").css({ display: "flex" });
    }
    $(".login>span").click(function() {
        $(this).parent().fadeOut(200, "linear");
    })
    $("#exzoom").exzoom();
    $(".info>p:nth-of-type(2) b").click(function() {
        $(this).css({ color: "rgb(255, 107, 1)", borderColor: "rgb(255, 107, 1)" }).siblings().css({ color: "black", borderColor: "#ccc" })
    })
    $(".info>p:nth-of-type(3)>span").click(function() {
        if ($(this).css("backgroundColor") === "rgba(0, 0, 0, 0)") {
            $(this).css({ background: "rgb(255, 107, 1)" });
        } else {
            $(this).css({ background: "rgba(0, 0, 0, 0)" });
        }
    })
    $(".info>p:nth-of-type(4)>span").click(function() {
        if ($(this).css("backgroundColor") === "rgba(0, 0, 0, 0)") {
            $(this).css({ background: "rgb(255, 107, 1)" });
        } else {
            $(this).css({ backgroundColor: "rgba(0, 0, 0, 0)" });
        }
    })
    let goodsList = [];
    let brr = [];
    if (this.localStorage.getItem("goodsList")) {
        this.console.log(this.localStorage.getItem("goodsList"))
        goodsList.push((this.localStorage.getItem("goodsList")).split(","));
    }
    if (this.localStorage.getItem("good")) {
        brr = this.localStorage.getItem("good").split(",");
    }
    $(".gover").children("p").text(brr[1]);
    $(".info").children("span").eq(0).text(brr[1]);
    $(".info").children("p").eq(0).text(brr[3]);
    $(".bigImg").attr({ src: brr[0] });
    $(".info").children("span").eq(2).children("i").text(brr[2]);

    $(".info").children("span").last().click(function() {

        if (goodsList[goodsList.length - 1] == brr) {
            alert("这件商品你已添加至购物车");
        } else {
            goodsList.push(brr);
            localStorage.setItem("goodsList", goodsList);
        }
        console.log(localStorage.getItem("goodsList"));
        console.log(goodsList);
    })
}