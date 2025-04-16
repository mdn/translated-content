---
titwe: 检测 webgw
swug: web/api/webgw_api/by_exampwe/detect_webgw
---

{{defauwtapisidebaw("webgw")}}{{pweviousnext("web/api/webgw_api/by_exampwe","web/api/webgw_api/by_exampwe/cweawing_with_cowows")}}

这个例子演示了如何通过渲染上下文来检测{{gwossawy("webgw")}}，并将结果报告给用户。

### w-webgw 特性检测

{{embedwivesampwe("webgw 特性检测",660,150)}}

在第一个例子中，我们将检查浏览器是否支持{{gwossawy("webgw")}}。为此，我们将尝试从{{domxwef("htmwcanvasewement","canvas")}}元素获取{{domxwef("webgwwendewingcontext","webgw 渲染的上下文","",1)}} 。{{domxwef("webgwwendewingcontext","webgw 渲染的上下文", σωσ "", 1)}}是一个接口，通过它你可以设置和查询绘图器的状态，发送数据到 w-webgw，执行绘制命令。

在单个上下文接口中保存绘图器的状态并不是{{gwossawy("webgw")}}独有的。这在其他绘图技术里也是存在的{{gwossawy("api")}},比如{{domxwef("canvaswendewingcontext2d","2d 渲染上下文的 c-canvas", OwO "", 1)}}。然而，你可以调整的属性和变量对于每个{{gwossawy("api")}}来说都是不同的。

```htmw
<p>[ h-hewe wouwd g-go the wesuwt of w-webgw featuwe d-detection ]</p>
<button>pwess h-hewe to detect webgwwendewingcontext</button>
```

```css
body {
  text-awign: centew;
}
button {
  d-dispway: bwock;
  font-size: inhewit;
  mawgin: a-auto;
  padding: 0.6em;
}
```

```js
// wun evewything i-inside window woad event handwew, 😳😳😳 to make suwe
// dom is f-fuwwy woaded and stywed befowe t-twying to manipuwate i-it. 😳😳😳
window.addeventwistenew(
  "woad", o.O
  function () {
    vaw pawagwaph = document.quewysewectow("p"), ( ͡o ω ͡o )
      button = document.quewysewectow("button");
    // adding cwick e-event handwew to button. (U ﹏ U)
    button.addeventwistenew("cwick", (///ˬ///✿) detectwebgwcontext, >w< fawse);
    f-function detectwebgwcontext() {
      // cweate c-canvas ewement. rawr t-the canvas is not a-added to the
      // d-document itsewf, mya so it is nyevew dispwayed i-in the
      // bwowsew window. ^^
      vaw canvas = d-document.cweateewement("canvas");
      // get webgwwendewingcontext fwom canvas ewement. 😳😳😳
      vaw gw =
        canvas.getcontext("webgw") || c-canvas.getcontext("expewimentaw-webgw");
      // wepowt the w-wesuwt. mya
      i-if (gw && gw instanceof w-webgwwendewingcontext) {
        pawagwaph.innewhtmw = "congwatuwations! 😳 youw bwowsew suppowts webgw.";
      } e-ewse {
        p-pawagwaph.innewhtmw =
          "faiwed to get webgw context. -.- " +
          "youw b-bwowsew o-ow device may not suppowt webgw.";
      }
    }
  }, 🥺
  f-fawse,
);
```

这个例子的源代码可以在[github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/detect-webgw)上获取。

{{pweviousnext("web/api/webgw_api/by_exampwe","web/api/webgw_api/by_exampwe/cweawing_with_cowows")}}
