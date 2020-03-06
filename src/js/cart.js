window.onload = function() {
    // 定义一个全局变量，记录添加到购物车商品的个数
    let num = 0;
    // 定义一个全局变量，记录选择商品的个数
    let n = 0;
    // 没有商品时进行提示
    function remove() {
        if (num === 0) {
            $("main>div").css({ display: "none" });
            $("main").css({ paddingTop: "490px", background: "rgb(245, 245, 245) url(../img/cart_bg.png) center top no-repeat" });
            $("main>fieldset legend").text("为您推荐");
        } else {
            $("main>div").css({ display: "flex" });
            $("main").css({ paddingTop: 0, background: "rgb(245, 245, 245)" });
            $("main>fieldset legend").text("买购物车中商品的人还买了");
        }
    }
    remove();
    $("ul>li").attr({ flag: false });
    // 确认删除区域的效果
    function hidden(obj, callback) {
        $(`${obj}`).click(function() {
            $(".del").css({ top: "-300px" });
            $(".cover").css({ display: "none" });
            if (callback) {
                callback();
            }
        })
    }
    hidden(".del>em");
    hidden(".cover", function() {
        $(".settle").css({ top: "-1000px" });
    });
    // 商品数量改变
    function numChange() {
        let m = 0;
        for (let i = 0; i < num; i++) {
            m += Number($("main>ul").children("li").eq(i).children("p").children("span").text());
            n = m;
        }
        m = 0;
        $("main>div:nth-of-type(2)>p span:eq(0)").text(n);
        localStorage.setItem("num", n);
    }
    $.ajax({
        url: "../json/cart.json",
        dataType: "json",
        success: function(res) {
            let list = res;
            let str = ``;
            for (let i = 0; i < list.name.length; i++) {
                str += `<li><img src="${list.imgSrc[i]}"><p>${list.name[i]}</p><span><span>${list.price[i]}</span>元</span><strong>${list.praise[i]}人好评</strong><i>加入购物车</i></li>`;
                $("main>fieldset>ul").html(str);
            }

        }
    })

    console.log(localStorage.getItem("goodsList"));

    let goods = [];
    let goodsList = [];

    function addGood() {
        if (localStorage.getItem("goodsList")) {
            goodsList = localStorage.getItem("goodsList").split(",");
            for (let i = 0; i < goodsList.length; i += 4) {
                goods = goodsList.slice(i, i + 4);
                $("main>ul").append($(`<li data-id=${goods[2]}><input type="checkbox"><img src="${goods[0]}"><span>${goods[1]}</span><strong><span><span>${goods[2]}</span>元</span></strong><p><b>-</b><span>1</span><em>+</em></p><span><span>${goods[2]}</span>元</span><i>X</i></li>`));
                $("main>ul li").last().prop({ newflag: false })
                if (!$("main>div:nth-of-type(2)>p span:eq(0)").text()) {
                    $("main>div:nth-of-type(2)>p span:eq(0)").text(1)
                } else {
                    $("main>div:nth-of-type(2)>p span:eq(0)").text(Number($("main>div:nth-of-type(2)>p span:eq(0)").text()) + 1);
                }
                num += 1;
                remove();
                numChange();
            }
        }
    }
    addGood();
    // 加入购物车
    $("main>fieldset>ul").on("click", "i", function() {
        $("main>ul").append($(`<li data-id=111111><input type="checkbox"><img src="${$(this).parent().children("img").attr("src")}"><span>${$(this).parent().children("p").text()}</span><strong><span><span>${$(this).parent().children("span").children("span").text()}</span>元</span></strong><p><b>-</b><span>1</span><em>+</em></p><span><span>${$(this).parent().children("span").children("span").text()}</span>元</span><i>X</i></li>`));
        $("main>ul li").last().prop({ newflag: false })
        remove();
        if (!$("main>div:nth-of-type(2)>p span:eq(0)").text()) {
            $("main>div:nth-of-type(2)>p span:eq(0)").text(1)
        } else {
            $("main>div:nth-of-type(2)>p span:eq(0)").text(Number($("main>div:nth-of-type(2)>p span:eq(0)").text()) + 1);
        }
        num += 1;
        numChange();
    })

    // 删除商品
    $("main>ul").on("click", "i", function() {
        $(this).parent().attr({ flag: true }).siblings("li").attr({ flag: false });
        $(".del").css({ top: "40px" });
        $(".cover").css({ display: "block" });
        $(this).parents("li").prop("a", true).siblings().prop("a", false);
        let that = $(this).parents("li");
        hidden(".del>p span:nth-of-type(1)");
        hidden(".del>p span:nth-of-type(2)", function() {
            $("li[flag=true]").remove();
            numChange();
            num -= 1;
            if (num === 0) {
                remove();
            }
            // 删除localStorage中的商品，当id相等的时候
            for (let i = 0; i < goodsList.length; i += 4) {
                console.log(localStorage.getItem("goodsList"));
                if (that.data("id") == goodsList[2 + i]) {
                    goodsList.splice(goodsList.indexOf(goodsList[2 + i]) - 2, 4)
                    localStorage.setItem("goodsList", goodsList);
                    break;
                }
            }
            addGood();

        });
    })



    // 商品数量增加

    $("main>ul").on("click", "em", function() {
        if (Number($(this).prev("span").text()) >= 10) {
            $(this).prev("span").text(10);
            alert("您所购买的商品数量已达上限");
        } else {
            $(this).prev("span").text(Number($(this).prev("span").text()) + 1);
        }
        numChange();
        $(this).parents("li").children("span").eq(1).children("span").text((Number($(this).prev("span").text()) * $(this).parents("li").children("strong").children("span").children("span").text()).toFixed(2));
    })

    // 商品数量减少
    $("main>ul").on("click", "b", function() {
        if (Number($(this).next("span").text()) <= 1) {
            $(this).next("span").text(1);
        } else {
            $(this).next("span").text(Number($(this).next("span").text()) - 1)
        }
        numChange();
        $(this).parents("li").children("span").eq(1).children("span").text((Number($(this).next("span").text()) * $(this).parents("li").children("strong").children("span").children("span").text()).toFixed(2));
    })

    // 记录金额
    let x = 0;
    let l = 0;
    // 全部选中
    $("main>div:nth-of-type(1) span:eq(0)").click(function() {
        $(this).parents("main").children("ul").children().children("input").prop({ checked: true });
    })

    // 选中商品
    $("main>ul").on("click", "input", function() {
        if ($(this).prop("checked") === true) {
            x += Number($(this).parent().children("span").eq(1).children("span").text());
            l += Number($(this).parent().children("p").children("span").text());
        } else {
            x -= Number($(this).parent().children("span").eq(1).children("span").text());
            l -= Number($(this).parent().children("p").children("span").text());
        }
    })

    // 结算时提示
    $("main>div:nth-of-type(2)>span:nth-of-type(1)").click(function() {
        let m = 0;
        let q = 0;
        for (let i = 0; i < num; i++) {
            if ($(this).parent().prev().children("li").eq(i).children("input").prop("checked")) {
                m += Number($("main>ul").children("li").eq(i).children("span").eq(1).children("span").text());
                q += Number($("main>ul").children("li").eq(i).children("p").children("span").text());
            }
            x = m;
            l = q;
        }
        m = 0;
        q = 0;
        $(".settle").css({ top: 0 }).text(`您选择了${l}件商品，一共要消费${x}元`);
        $(".cover").css({ display: "block" });
    })




}