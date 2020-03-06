window.onload = function() {
    let flag = true;
    let arr = [];
    let brr = [];
    getList()

    function getList() {
        $.ajax({
            url: '../json/list.json',
            dataType: 'json',
            success: function(res) {
                let lts = res.lts;
                let sInfo = res.sInfo;
                brr = res.disc;
                // 搜索框部分获取焦点、失去焦点的效果
                $(".header_bottom form input").focus(function() {
                    // 信息渲染
                    for (var i = 0; i < sInfo.length; i++) {
                        $(".header_bottom form p a").eq(i).text(sInfo[i]);
                    }
                    $(".header_bottom form").css({ border: "1px solid #ff6700" }).children("button").css({ borderLeft: "1px solid #ff6700" }).siblings(".m1").fadeOut(100, "linear").siblings("p").css({ display: "flex" });
                })

                // 头部下拉列表的效果与数据渲染
                let pros = [res.miPros, res.rmPros, res.tvs, lts, res.miPros, res.rmPros, res.tvs];
                let miPros = res.miPros;
                $(".header_bottom nav span").mouseenter(function() {
                    $(".header_bottom div").stop().slideDown(200, "linear");
                    $(".header_bottom ul").addClass("active");
                    for (let i = 0; i < miPros[0].length; i++) {
                        $(".header_bottom ul").children().children().children("img").eq(i).attr({ src: pros[$(this).index()][0][i] });
                        $(".header_bottom ul").children().children().children("strong").eq(i).text(pros[$(this).index()][1][i]);
                        $(".header_bottom ul").children().children().children("i").eq(i).text(pros[$(this).index()][2][i]);
                    }
                    $(".cover").css({ display: "block" })
                })
                $('.pagi').pagination({
                    pageCount: Math.ceil(res.pus.length / 20), // 总页数
                    current: 1, // 当前页
                    jump: true,
                    coping: true,
                    homePage: '首页', // 首页按钮的文本
                    endPage: '末页', // 末页按钮的文本
                    prevContent: '上页',
                    nextContent: '下页',
                    callback: function(api) { // 当你切换页面的时候会触发
                        // api.getCurrent() 获取当前是第几页
                        let curr = api.getCurrent()

                        // 根据是第几页, 从总数组里面筛选出一部分数据
                        var list = res.pus.slice((curr - 1) * 20, curr * 20)

                        // 3-2. 每次使用分页器切换的时候渲染一次
                        bindHtml(list)
                    }
                })

                // 3. 先把第一页的数据渲染一次
                bindHtml(res.pus.slice(0, 20))
                arr = res.pus;
            }

        })
    }

    function bindHtml(list) {

        let str = ''

        list.forEach(item => {
            str += `<li><em></em><span></span><img src="${item[0]}" alt=""><p>${item[1]}</p><strong><i><b>${item[2]}</b>元</i><i><b>${item[3]}</b>元</i></strong><img src="${item[0]}"></li>`
        })

        $('.box > ul').html(str);
    }
    $(".box>span").click(function() {
        if (flag) {
            $(this).text("价格↓");
        } else {
            $(this).text("价格↑");
        }
        flag = !flag
        arr.sort(function(a, b) {
            if (flag === true) {
                return a[2] - b[2]
            } else {
                return b[2] - a[2]
            }
        })
        $('.pagi').pagination({
            pageCount: Math.ceil(arr.length / 20), // 总页数
            current: 1, // 当前页
            jump: true,
            coping: true,
            homePage: '首页', // 首页按钮的文本
            endPage: '末页', // 末页按钮的文本
            prevContent: '上页',
            nextContent: '下页',
            callback: function(api) { // 当你切换页面的时候会触发
                let curr = api.getCurrent()
                    // console.log(curr)
                var list = arr.slice((curr - 1) * 20, curr * 20)
                    // 3-2. 每次使用分页器切换的时候渲染一次
                bindHtml(list)
            }
        })
        bindHtml(arr.slice(0, 20))
    })


    $(".cover").mouseenter(function() {
        $(".header_bottom div").stop().slideUp(200, "linear");
        $(".cover").css({ display: "none" });
    })

    // search

    $(".header_bottom form input").blur(function() {
        $(".header_bottom form").css({ border: "1px solid #e0e0e0" }).children("button").css({ borderLeft: "1px solid #e0e0e0" }).siblings(".m1").fadeIn(100, "linear").siblings("p").css({ display: "none" });
    })

    $(".box>ul").on("mouseenter", "li", function() {
        $(this).children("span").fadeIn(400, "linear");
        $(".box>ul").on("mouseenter", "span", function() {
            if ($(this).index() === 0) {
                $(this).text("喜欢");
            } else {
                $(this).text("查看详情");
            }
        })
    })
    $(".box>ul").on("mouseleave", "li", function() {
        $(this).children("span").fadeOut(400, "linear");
        $(".box>ul").on("mouseleave", "span", function() {
            $(this).text("");
        })
    })

    // this.localStorage.removeItem("good");
    $(".box>ul").on("click", "span", function() {
        let r = [`${$(this).siblings("img").attr("src")}`, `${$(this).siblings("p").text()}`, `${$(this).siblings("strong").children("i").eq(0).children().text()}`, `${brr[$(this).parents("li").index()]}`];
        localStorage.setItem("good", r);
        location.href = "../views/details.html";
    })


}