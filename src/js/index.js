window.onload = () => {
    // 头部下拉列表信息
    var miPros = [
        ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=160&h=110&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/be92bc4baa572bf467fc9e881fd4be2a.png?thumb=1&w=160&h=110&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41c566d825a3ae3b5751a78d4c7cffdb.png?thumb=1&w=160&h=110&f=webp&q=90", "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=160&h=110", "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=160&h=110"],
        ["小米10 Pro", "小米10", "小米CC9 Pro", "小米9 Pro 5G", "小米CC9", "小米CC9e"],
        ["4999元起", "3999元起", "2599元起", "3699元起", "1699元起", "1299元起"]
    ];
    var rmPros = [
        ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=160&h=110&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/398311b2e6f47ac324ba0421a0ac1b80.png?thumb=1&w=160&h=110&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacd6a3d8440b7a038e9778702bd6db6.png?thumb=1&w=160&h=110&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ee0af37bbd2f5a83c799e87dd791037.png?thumb=1&w=160&h=110&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a9734e0314fec470ff6912a8a92da5e6.png?thumb=1&w=160&h=110&f=webp&q=90"],
        ["Redmi K30", "Redmi K30 5G", "Redmi 8A", "Redmi 8", "Redmi Note8", "Redmi Note Pro"],
        ["1599元起", "1999元起", "599元起", "899元起", "1299元起", "699元起"]
    ];
    var tvs = [
        ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=160&h=110&f=webp&q=90", "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg?thumb=1&w=160&h=110", "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a40904b6a053b73b631a152334388d0e.jpg?thumb=1&w=160&h=110", "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png?thumb=1&w=160&h=110", "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bf72a3e9a6e799cb71ecfa7d80465351.jpg?thumb=1&w=160&h=110", "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bd922870295a97a0972eaba5af92129e.jpg?thumb=1&w=160&h=110"],
        ["红米电视 70英寸", "小米壁画电视 65英寸", "小米全屏电视 E678", "小米电视4A 32", "小米电视4A 64", "小米电视4A 75"],
        ["3299元起", "6999元起", "1799元起", "699元起", "1699元起", "2599元起"]
    ];
    var lts = [
            ["../img/lt1.webp", "../img/lt2.png", "../img/lt3.webp", "../img/lt4.webp", "../img/lt5.png", "../img/lt6.png"],
            ["RedmiBook 13", "小米笔记本 Pro 15", "RedmiBook 14", "游戏本2019款", "小米笔记本 15.6'", "小米笔记本Air 17"],
            ["4199元起", "5499元起", "3999元起", "6999元起", "3799元起", "3299元起"]
        ]
        // 头部下拉列表的效果与数据渲染
    let pros = [miPros, rmPros, tvs, lts, miPros, rmPros, tvs];
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
    var phone = [
        ["../img/mb1.webp", "../img/mb2.webp", "../img/mb1.webp", "../img/mb2.webp", "../img/mb1.webp", "../img/mb2.webp", "../img/mb1.webp", "../img/mb2.webp", "../img/mb1.webp", "../img/mb2.webp", "../img/mb1.webp", "../img/mb2.webp", "../img/mb1.webp", "../img/mb2.webp"],
        ["miBook 1", "miBook 2", "miBook 1", "miBook 2", "miBook 1", "miBook 2", "miBook 1", "miBook 2", "miBook 1", "miBook 2", "miBook 1", "miBook 2", "miBook 1", "miBook 2"]
    ];
    // banner商品信息
    var laptap = [
        ["../img/mt1.webp", "../img/mt2.webp", "../img/mt1.webp", "../img/mt2.webp", "../img/mt1.webp", "../img/mt2.webp", "../img/mt1.webp", "../img/mt2.webp", "../img/mt1.webp", "../img/mt2.webp", "../img/mt1.webp", "../img/mt2.webp", "../img/mt1.webp", "../img/mt2.webp", "../img/mt1.webp", "../img/mt2.webp", "../img/mt1.webp", "../img/mt2.webp", "../img/mt1.webp", "../img/mt1.webp"],
        ["miPhone 1", "miPhone 2", "miPhone 1", "miPhone 2", "miPhone 1", "miPhone 2", "miPhone 1", "miPhone 2", "miPhone 1", "miPhone 2", "miPhone 1", "miPhone 2", "miPhone 1", "miPhone 2", "miPhone 1", "miPhone 1", "miPhone 2", "miPhone 1", "miPhone 2", "miPhone 1"]
    ];
    var all = [phone, laptap, phone, laptap, phone, laptap, phone, laptap, phone, laptap];
    for (let i = 0; i < all.length; i++) {
        $(`.banner ul:nth-of-type(1) li div:eq(${i})`).css({ width: `${990/4*Math.ceil(all[i][0].length/6)}px` });
        for (let j = 0; j < phone[0].length; j++) {
            $(`.banner ul:nth-of-type(1) li div:eq(${i})`).append($(`<p><img src=${all[i][0][j]}>${all[i][1][j]}</p>`));
        }
    }

    // 倒计时
    // var num = 0;

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
    var tPros = [
        ["../img/time_pro1.jpg", "../img/time_pro2.jpg", "../img/time_pro3.jpg", "../img/time_pro4.jpg", "../img/time_pro5.jpg", "../img/time_pro6.jpg", "../img/time_pro7.jpg", "../img/time_pro2.jpg", "../img/time_pro7.jpg"],
        ["玺佳机械表41254346", "小米路由器 4C 白色", "米家led吸顶灯 白", "小米随身蓝牙音箱mini 灰", "小米户外蓝牙音箱 黑", "mijoy抽纸青春版 24包/箱", "小米路由器4A", "小米路由器 4C 白色", "mijoy抽纸青春版 24包/箱"],
        ["颠覆创新一瞬间悬浮时光", "300M单频 4增益天线", "用光线还原理想生活", "全金属外壳 内置麦克风", "动感音质 如影随形", "精选原生纸浆 健康环保", "双核千兆宽带", "300M单频 4增益天线", "动感音质 如影随形"],
        ["499元", "59元", "349元", "59元", "89元", "89元", "129元", "89元", "89元"],
        ["599元", "99元", "399元", "69元", "99元", "99元", "169元", "399元", "69元"]
    ];
    for (let i = 0; i < tPros[0].length; i++) {
        $(".play ul").css({ width: `${248.5*tPros[0].length}px` });
        $(".play ul").append($(`<li style="border-top:1px solid ${getColor()}"><img src=${tPros[0][i]}><p>${tPros[1][i]}</p><em>${tPros[2][i]}</em><strong><b>${tPros[3][i]}</b><b>${tPros[4][i]}</b></strong></li>`));
    }
    var n = 0;
    var left = $(".shopping>span i:eq(0)");
    var right = $(".shopping>span i:eq(1)");

    function _autoPlay(json) {
        startMove(document.querySelector(".play ul"), json, 30)
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

    // 手机区域的数据渲染
    var ps = [
        ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c16238f786e4f93bdb175d7bf21aa47.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53641901fbc28cbcdb495b17fdf69e46.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07270cc09689eb9b13b29aa9f6bc41eb.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c924c3f3436b6934495fd98f159ee3f7.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg?thumb=1&w=200&h=200&f=webp&q=90"],
        ["小米 10", "Redmi K30", "Redmi K30 5g", "Redmi CC9 Pro", "Redmi 8", "Redmi 8A", "Redmi Note 8 Pro", "Redmi Note 8"],
        ["晓龙865/1亿像素相机", "120Hz流水屏，急速热爱", "，双模配置120Hz流水屏", "1亿像素，双模五闪", "5000mA超长续航", "6400万全景拍摄", "5000mA超长续航", "千元4千万拍摄"],
        ["3999元起", "1599元起", "1999元起", "2599元起", "749元起", "599元起", "1299元起", "699元起"],
        ["", "", "", "2799元起", "799元起", "699元起", "599元起", ""]
    ];
    for (let i = 0; i < ps[0].length; i++) {
        $(".phone>div ul").append($(`<li><img src=${ps[0][i]}><p>${ps[1][i]}</p><em>${ps[2][i]}</em><strong><b>${ps[3][i]}</b><b>${ps[4][i]}</b></strong></li>`));
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
    // 家电数据渲染
    var elecs = [
        [
            ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0baacf6e54cbf89cab2c543cc02344e9.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/44a30f0da2aacb66a0f896293ebc703f.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b42e49c6c0208f2de5a2f7a491a3af46.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e850fa029579ba886e3d5c81f00ae534.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0c65d472682f0679e192dc7b4cd6e64c.jpg?thumb=1&w=200&h=200&f=webp&q=90"],
            ["小米[小艾老师]", "小米米家智能门锁", "小米小爱音箱play", "小爱音箱万能遥控板", "米家电饭煲4l", "小米手环4", "米家9号平衡轮"],
            ["口袋里的英语外教", "高端式门锁", "听音乐，语音遥控家电", "传统家电秒变智能", "890w立体加热", "大屏超显，长久续航", "能花式酷玩的代步车"],
            ["455元起", "1699元起", "99元起", "149元起", "249元起", "169元", "499元起"],
            ["499元起", "", "169元起", "199元起", "299元起", "", "999元起"]
        ],
        [
            ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f33baec53cc73e2942277640ba6e710.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1840f64ea310ca8013385885baaf16a8.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0baacf6e54cbf89cab2c543cc02344e9.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0245498a0e08b87ba8c323871c5d48bc.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e83e1ab5947337d7b631e056b3e0f23d.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa7cdb455f106da904e8c3f6156abc06.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://i8.mifile.cn/b2c-mimall-media/98c51f977ac5b590dbaf7b8445b30fa6!200x200.jpg"],
            ["米家智能门锁 碳素黑", "米家智能门锁 摩砂金", "米家智能门锁 推拉式通用版", "米家智能门锁 青春版", "米家智能门锁 霸王锁体 碳素黑", "米家智能门锁 霸王锁体 摩砂金", "小米米家小白只能摄像机"],
            ["一体化活体指纹智能识别", "一体化活体指纹智能识别", "一体化活体指纹智能识别", "一体化活体指纹智能识别", "适配锁体，多种开锁方式", "适配锁体，多种开锁方式", "只能开户，AI你所爱"],
            ["1299元起", "1299元起", "1699元起", "1299元起", "1499元起", "1599元起", "1799元起"],
            ["1499元起", "1499元起", "", "", "", "1999元起", ""]
        ],
        [
            ["https://i8.mifile.cn/v1/a1/768992ca-4136-92f1-244a-0194a81a6360!200x200.jpg", "https://i8.mifile.cn/b2c-mimall-media/18a82e7cda6ecbc22ecee7ac927d6ff9!200x200.jpg", "https://i8.mifile.cn/b2c-mimall-media/18a82e7cda6ecbc22ecee7ac927d6ff9!200x200.jpg", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0294e2f3997bf0cffb7bf48361d03588.jpg?thumb=1&w=200&h=200&f=webp&q=90"],
            ["小米米家电动滑板车", "迷途折叠婴儿车", "就好平衡车plus", "米家重启包"],
            ["编写出行，自由创行", "出发去向往的额地方", "一个形影不离的或按不能", "便携式充气筒"],
            ["1999元起", "699元起", "1399元起", "1499元起"],
            ["", "", "", ""]
        ]
    ];
    var intells = [
        [
            ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633!200x200.jpg", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg?thumb=1&w=200&h=200&f=webp&q=90"],
            ["米家互联网空调C1", "米架空回调", "米家互联网洗烘一体机Pro", "米家电视4a", "红米全自动波轮洗衣机", "小米全屏电视E55A", "15''超薄清本 游戏本"],
            ["变频能省点，自清洁", "出众静音，快速制冷", "智能烘系，省心省力", "人工智能系统，高液晶显示屏", "一键操作，父母都爱用", "全面屏设计，人工智能语音", "全面均衡的国民超薄本"],
            ["2399元起", "1399元起", "1699元起", "1599元起", "7684元起", "3527元起", "5332元起"],
            ["462元起", "1899元起", "8192元起", "7982元起", "754元起", "23422元起", "54325元起"]
        ],
        [
            ["https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633!200x200.jpg", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3317a291b112aa4712059ad93263668.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://i8.mifile.cn/b2c-mimall-media/ede227c1f0e3472fb8dcfae980d1e43f!200x200.jpg", "https://i8.mifile.cn/v1/a1/cef8a9c0-2386-5b66-9ed2-6b1d4e4490bf!200x200.jpg", "https://i8.mifile.cn/b2c-mimall-media/91b59cc6474e0cd777445b15adb13980!200x200.jpg", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7eee530e4a103f2f5a0937a14bed53.jpg?thumb=1&w=200&h=200&f=webp&q=90"],
            ["小米电视 4A", "小米全屏电视", "小米电视 4A", "小米全屏电视", "小米电视 4A", "小米全屏电视", "小米全屏电视"],
            ["人工智能，高清液晶屏", "全面屏，看点之更爽", "全面屏，看点之更爽", "人工智能，高清液晶屏", "全面屏，看点之更爽", "人工智能，高清液晶屏", "全面屏，看点之更爽"],
            ["2399元起", "1399元起", "1699元起", "1599元起", "7684元起", "3527元起", "5332元起"],
            ["462元起", "1899元起", "8192元起", "7982元起", "754元起", "23422元起", "54325元起"]
        ]
    ];
    var collos = [
        [
            ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50649d7b5706f4cd9f658e93db6b6564.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/faf8668acb2fd80c0afad4d4c4e837ad.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://i8.mifile.cn/b2c-mimall-media/92af1f21293fabfbf2a112892b864925!200x200.jpg", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/df90d51fce8449db25c9a71c715dec1b.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b619d27877bbc497468c673a317a847.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6a35e4dfff70f4195b29e8008716d82.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://i8.mifile.cn/b2c-mimall-media/838ba427ef55317d8c4911b02c95bb79!200x200.jpg"],
            ["米家互联网空调C1", "米架空回调", "米家互联网洗烘一体机Pro", "米家电视4a", "红米全自动波轮洗衣机", "小米全屏电视E55A", "15''超薄清本 游戏本"],
            ["变频能省点，自清洁", "出众静音，快速制冷", "智能烘系，省心省力", "人工智能系统，高液晶显示屏", "一键操作，父母都爱用", "全面屏设计，人工智能语音", "全面均衡的国民超薄本"],
            ["2399元起", "1399元起", "1699元起", "1599元起", "7684元起", "3527元起", "5332元起"],
            ["462元起", "1899元起", "8192元起", "7982元起", "754元起", "23422元起", "54325元起"]
        ],
        [
            ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50649d7b5706f4cd9f658e93db6b6564.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03!200x200.jpg", "https://i8.mifile.cn/b2c-mimall-media/92af1f21293fabfbf2a112892b864925!200x200.jpg", "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg?thumb=1&w=200&h=200"],
            ["小米电视 4A", "小米全屏电视", "小米电视 4A", "小米全屏电视", "小米电视 4A", "小米全屏电视", "小米全屏电视"],
            ["人工智能，高清液晶屏", "全面屏，看点之更爽", "全面屏，看点之更爽", "人工智能，高清液晶屏", "全面屏，看点之更爽", "人工智能，高清液晶屏", "全面屏，看点之更爽"],
            ["2399元起", "1399元起", "1699元起", "1599元起", "7684元起", "3527元起", "5332元起"],
            ["462元起", "1899元起", "8192元起", "7982元起", "754元起", "23422元起", "54325元起"]
        ]
    ];
    var pars = [
        [
            ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0baacf6e54cbf89cab2c543cc02344e9.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/44a30f0da2aacb66a0f896293ebc703f.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b42e49c6c0208f2de5a2f7a491a3af46.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e850fa029579ba886e3d5c81f00ae534.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0c65d472682f0679e192dc7b4cd6e64c.jpg?thumb=1&w=200&h=200&f=webp&q=90"],
            ["小米[小艾老师]", "小米米家智能门锁", "小米小爱音箱play", "小爱音箱万能遥控板", "米家电饭煲4l", "小米手环4", "米家9号平衡轮"],
            ["口袋里的英语外教", "高端式门锁", "听音乐，语音遥控家电", "传统家电秒变智能", "890w立体加热", "大屏超显，长久续航", "能花式酷玩的代步车"],
            ["455元起", "1699元起", "99元起", "149元起", "249元起", "169元", "499元起"],
            ["499元起", "", "169元起", "199元起", "299元起", "", "999元起"]
        ],
        [
            ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f33baec53cc73e2942277640ba6e710.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1840f64ea310ca8013385885baaf16a8.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0baacf6e54cbf89cab2c543cc02344e9.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0245498a0e08b87ba8c323871c5d48bc.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e83e1ab5947337d7b631e056b3e0f23d.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa7cdb455f106da904e8c3f6156abc06.jpg?thumb=1&w=200&h=200&f=webp&q=90", "https://i8.mifile.cn/b2c-mimall-media/98c51f977ac5b590dbaf7b8445b30fa6!200x200.jpg"],
            ["米家智能门锁 碳素黑", "米家智能门锁 摩砂金", "米家智能门锁 推拉式通用版", "米家智能门锁 青春版", "米家智能门锁 霸王锁体 碳素黑", "米家智能门锁 霸王锁体 摩砂金", "小米米家小白只能摄像机"],
            ["一体化活体指纹智能识别", "一体化活体指纹智能识别", "一体化活体指纹智能识别", "一体化活体指纹智能识别", "适配锁体，多种开锁方式", "适配锁体，多种开锁方式", "只能开户，AI你所爱"],
            ["1299元起", "1299元起", "1699元起", "1299元起", "1499元起", "1599元起", "1799元起"],
            ["1499元起", "1499元起", "", "", "", "1999元起", ""]
        ],
        [
            ["https://i8.mifile.cn/v1/a1/768992ca-4136-92f1-244a-0194a81a6360!200x200.jpg", "https://i8.mifile.cn/b2c-mimall-media/18a82e7cda6ecbc22ecee7ac927d6ff9!200x200.jpg", "https://i8.mifile.cn/b2c-mimall-media/18a82e7cda6ecbc22ecee7ac927d6ff9!200x200.jpg", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0294e2f3997bf0cffb7bf48361d03588.jpg?thumb=1&w=200&h=200&f=webp&q=90"],
            ["小米米家电动滑板车", "迷途折叠婴儿车", "就好平衡车plus", "米家重启包"],
            ["编写出行，自由创行", "出发去向往的额地方", "一个形影不离的或按不能", "便携式充气筒"],
            ["1999元起", "699元起", "1399元起", "1499元起"],
            ["", "", "", ""]
        ]
    ];
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
}