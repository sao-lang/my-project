"use strict";window.onload=function(){var e=0,i=0;function a(){0===e?($("main>div").css({display:"none"}),$("main").css({paddingTop:"490px",background:"rgb(245, 245, 245) url(../img/cart_bg.png) center top no-repeat"}),$("main>fieldset legend").text("为您推荐")):($("main>div").css({display:"flex"}),$("main").css({paddingTop:0,background:"rgb(245, 245, 245)"}),$("main>fieldset legend").text("买购物车中商品的人还买了"))}function n(n,t){$("".concat(n)).click(function(){$(".del").css({top:"-300px"}),$(".cover").css({display:"none"}),t&&t()})}a(),$("ul>li").attr({flag:!1}),n(".del>em"),n(".cover",function(){$(".settle").css({top:"-1000px"})}),$.ajax({url:"../json/cart.json",dataType:"json",success:function(n){for(var t=n,e="",i=0;i<t.name.length;i++)e+='<li><img src="'.concat(t.imgSrc[i],'"><p>').concat(t.name[i],"</p><span><span>").concat(t.price[i],"</span>元</span><strong>").concat(t.praise[i],"人好评</strong><i>加入购物车</i></li>"),$("main>fieldset>ul").html(e)}}),$("main>fieldset>ul").on("click","i",function(){e+=1,$("main>ul").append($('<li><input type="checkbox"><img src="'.concat($(this).parent().children("img").attr("src"),'"><span>').concat($(this).parent().children("p").text(),"</span><strong><span><span>").concat($(this).parent().children("span").children("span").text(),"</span>元</span></strong><p><b>-</b><span>1</span><em>+</em></p><span><span>").concat($(this).parent().children("span").children("span").text(),"</span>元</span><i>X</i></li>"))),$("main>ul li").last().prop({newflag:!1}),a(),$("main>div:nth-of-type(2)>p span:eq(0)").text()?$("main>div:nth-of-type(2)>p span:eq(0)").text(Number($("main>div:nth-of-type(2)>p span:eq(0)").text())+1):$("main>div:nth-of-type(2)>p span:eq(0)").text(1);for(var n=0,t=0;t<e;t++)n+=Number($("main>ul").children("li").eq(t).children("p").children("span").text()),i=n;n=0,$("main>div:nth-of-type(2)>p span:eq(0)").text(i)}),$("main>ul").on("click","i",function(){$(this).parent().attr({flag:!0}).siblings("li").attr({flag:!1}),$(".del").css({top:"40px"}),$(".cover").css({display:"block"})}),n(".del>p span:nth-of-type(1)"),n(".del>p span:nth-of-type(2)",function(){e-=1,$("li[flag=true]").remove(),0===e&&a();for(var n=0,t=0;t<e;t++)n+=Number($("main>ul").children("li").eq(t).children("p").children("span").text()),i=n;n=0,$("main>div:nth-of-type(2)>p span:eq(0)").text(i)}),$("main>ul").on("click","em",function(){10<=Number($(this).prev("span").text())?($(this).prev("span").text(10),alert("您所购买的商品数量已达上限")):$(this).prev("span").text(Number($(this).prev("span").text())+1);for(var n=0,t=0;t<e;t++)n+=Number($(this).parents("ul").children("li").eq(t).children("p").children("span").text()),i=n;n=0,$("main>div:nth-of-type(2)>p span:eq(0)").text(i),$(this).parents("li").children("span").eq(1).children("span").text((Number($(this).prev("span").text())*$(this).parents("li").children("strong").children("span").children("span").text()).toFixed(2))}),$("main>ul").on("click","b",function(){Number($(this).next("span").text())<=1?$(this).next("span").text(1):$(this).next("span").text(Number($(this).next("span").text())-1);for(var n=0,t=0;t<e;t++)n+=Number($(this).parents("ul").children("li").eq(t).children("p").children("span").text()),i=n;n=0,$("main>div:nth-of-type(2)>p span:eq(0)").text(i),$(this).parents("li").children("span").eq(1).text((Number($(this).next("span").text())*$(this).parents("li").children("strong").children("span").children("span").text()).toFixed(2))});var p=0;$("main>div:nth-of-type(1) span:eq(0)").click(function(){$(this).parents("main").children("ul").children().children("input").prop({checked:!0});for(var n=0,t=0;t<e;t++)n+=Number($(this).parents("main").children("ul").children().eq(t).children("span").eq(1).children("span").text()),p=n;n=0}),$("main>ul").on("click","input",function(){$(this).parent.prop("newFlag")?$(this).parent.prop({newflag:!1}):$(this).parent.prop({newflag:!0})}),$("main>div:nth-of-type(2)>span:nth-of-type(1)").click(function(){$(".settle").css({top:0}).children().text(p),$(".cover").css({display:"block"})})};