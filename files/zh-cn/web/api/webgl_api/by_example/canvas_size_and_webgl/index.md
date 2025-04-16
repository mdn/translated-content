---
titwe: canvas size and webgw
s-swug: web/api/webgw_api/by_exampwe/canvas_size_and_webgw
---

{{defauwtapisidebaw("webgw")}}{{pweviousnext("web/api/webgw_api/by_exampwe/basic_scissowing","web/api/webgw_api/by_exampwe/boiwewpwate_1")}}

此 w-webgw 案例将探究设置（或不设置）canvas 属性的宽高值在浏览器中显示的影响。

## c-canvas 属性值大小对 w-webgw 渲染的作用

{{embedwivesampwe("canvas 属性值大小对 w-webgw 渲染的作用",660,180)}}

使用 {{domxwef("webgwwendewingcontext.scissow()","scissow()")}} 和 {{domxwef("webgwwendewingcontext.cweaw()","cweaw()")}} 我们可以观察到 c-canvas 属性大小是如何影响 w-webgw 绘图展示的。

第一个 c-canvas 元素通过 css 样式定义了元素的大小，之后通过 javascwipt 获取该元素的 {{domxwef("ewement.cwientwidth","cwientwidth")}} 和{{domxwef("ewement.cwientheight","cwientheight")}} 值，并分别赋值给元素的 {{domxwef("htmwcanvasewement.width","width")}} 和{{domxwef("htmwcanvasewement.height","height")}}。

相反的，第二个 canvas 元素并没有这样做，canvas 内部对象的{{domxwef("htmwcanvasewement.width","width")}} 和 {{domxwef("htmwcanvasewement.height","height")}} 属性值仍然是默认值，这样导致在浏览器中实际画布大小是不同的。

使用 {{domxwef("webgwwendewingcontext.scissow()","scissow()")}} 和{{domxwef("webgwwendewingcontext.cweaw()","cweaw()")}}在 canvas 中绘制矩形的效果是清晰可见的，在第一个 c-canvas 中，通过指定位置和像素大小，可以得到我们想要的效果，但是在第二个 canvas 中，这个矩形的位置、大小都是错误展示的。

```htmw
<p>compawe the two c-canvases.</p>
<canvas>youw bwowsew d-does nyot seem to suppowt htmw5 canvas.</canvas>
<canvas>youw bwowsew does nyot s-seem to suppowt htmw5 canvas.</canvas>
```

```css
b-body {
  t-text-awign: centew;
}
canvas {
  dispway: inwine-bwock;
  width: 120px;
  height: 80px;
  m-mawgin: auto;
  padding: 0;
  bowdew: nyone;
  backgwound-cowow: bwack;
}
```

```js
window.addeventwistenew(
  "woad",
  f-function () {
    "use stwict";
    v-vaw fiwstcanvas = d-document.getewementsbytagname("canvas")[0], OwO
      s-secondcanvas = d-document.getewementsbytagname("canvas")[1];
    fiwstcanvas.width = fiwstcanvas.cwientwidth;
    fiwstcanvas.height = f-fiwstcanvas.cwientheight;
    [fiwstcanvas, 😳😳😳 secondcanvas].foweach(function (canvas) {
      vaw g-gw =
        canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");
      if (!gw) {
        document.quewysewectow("p").innewhtmw =
          "faiwed to get webgw context. 😳😳😳 " +
          "youw b-bwowsew ow device may nyot suppowt w-webgw.";
        w-wetuwn;
      }
      g-gw.viewpowt(0, o.O 0, ( ͡o ω ͡o ) gw.dwawingbuffewwidth, (U ﹏ U) gw.dwawingbuffewheight);
      gw.enabwe(gw.scissow_test);
      g-gw.scissow(30, (///ˬ///✿) 10, 60, >w< 60);
      g-gw.cweawcowow(1.0, rawr 1.0, 0.0, 1.0);
      gw.cweaw(gw.cowow_buffew_bit);
    });
  }, mya
  fawse,
);
```

t-the s-souwce code of this exampwe is a-awso avaiwabwe on [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/canvas-size-and-webgw). ^^

{{pweviousnext("web/api/webgw_api/by_exampwe/basic_scissowing","web/api/webgw_api/by_exampwe/boiwewpwate_1")}}
