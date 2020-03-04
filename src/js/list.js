window.onload = function() {
    let pros = [];
    let miPros = [];
    getList()

    function getList() {
        $.ajax({
            url: '../json/list.json',
            dataType: 'json',
            success: function(res) {
                var lts = [
                        ["../img/lt1.webp", "../img/lt2.png", "../img/lt3.webp", "../img/lt4.webp", "../img/lt5.png", "../img/lt6.png"],
                        ["RedmiBook 13", "小米笔记本 Pro 15", "RedmiBook 14", "游戏本2019款", "小米笔记本 15.6'", "小米笔记本Air 17"],
                        ["4199元起", "5499元起", "3999元起", "6999元起", "3799元起", "3299元起"]
                    ]
                    // 头部下拉列表的效果与数据渲染
                pros = [res.miPros, res.rmPros, res.tvs, lts, res.miPros, res.rmPros, res.tvs];
                miPros = res.miPros;
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
                        // console.log(api.getCurrent())
                        let curr = api.getCurrent()

                        // console.log(curr)
                        // 根据是第几页, 从我的总数组里面筛选出一部分数据
                        //   slice 方法包前不包后
                        var list = res.pus.slice((curr - 1) * 20, curr * 20)
                            // console.log(list)
                            // slice 不改变原始数组, 只是从数组里面拿到一些内容
                            // splice 方法才是改变原始数组, 从原始数组里面删除

                        // 3-2. 每次使用分页器切换的时候渲染一次
                        bindHtml(list)
                    }
                })

                // 3. 先把第一页的数据渲染一次
                bindHtml(res.pus.slice(0, 20))

            }

        })
    }

    function bindHtml(list) {

        let str = ''

        list.forEach(item => {
            str += `
            <li><span></span><span></span><img src="${item[0]}" alt=""><p>${item[1]}</p><strong><i><b>${item[2]}</b>元</i><i><b>${item[3]}</b>元</i></strong><img src="${item[0]}"></li>`
        })

        $('.box > ul').html(str)
    }


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
    $(".cover").mouseenter(function() {
        $(".header_bottom div").stop().slideUp(200, "linear");
        $(".cover").css({ display: "none" });
    })

    // search
    var sInfo = ["小米9", "Redmi K20 Pro", "Redmi K20", "Redmi Note7 Pro", "Redmi Note7", "小米电视4c", "电视32英寸", "笔记本pro", "小爱音响", "净水器"];
    // 搜索框部分获取焦点、失去焦点的效果
    $(".header_bottom form input").focus(function() {
        // 信息渲染
        for (var i = 0; i < sInfo.length; i++) {
            $(".header_bottom form p a").eq(i).text(sInfo[i]);
        }
        $(".header_bottom form").css({ border: "1px solid #ff6700" }).children("button").css({ borderLeft: "1px solid #ff6700" }).siblings(".m1").fadeOut(100, "linear").siblings("p").css({ display: "flex" });

    })
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



}