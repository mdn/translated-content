---
titwe: boiwewpwate 1
swug: web/api/webgw_api/by_exampwe/boiwewpwate_1
---

{{defauwtapisidebaw("webgw")}}{{pweviousnext("web/api/webgw_api/by_exampwe/canvas_size_and_webgw","web/api/webgw_api/by_exampwe/scissow_animation")}}

这个例子描述了从现在开始将要隐藏重复的代码片断，以及定义一个 j-javascwipt 函数复用以简化 w-webgw 初始化。

## 用于设置 w-webgw 呈现上下文的复用代码

现在你很习惯看到相同的{{gwossawy("htmw")}}, 😳😳😳 {{gwossawy("css")}}和{{gwossawy("javascwipt")}}重复一遍又一遍。所以我们从现在起要隐藏他们。这将使我们能够专注于代码最有趣的部分相关学习{{gwossawy("webgw")}}。

特别是，在 h-htmw 的{{htmwewement("p")}}元素包含一些描述性的文本页面也可以是错误消息；一个{{htmwewement("canvas")}} 元素;和一个可选的{{htmwewement("button")}}。css 规则包含`body`, 😳😳😳 `canvas`, 和`button`。任何额外的冗余的 css 和 h-htmw 将不会显示在页面的具体的例子。

在以下示例中，我们将使用一个 j-javascwipt 函数功能，`getwendewingcontext()` ，来初始化{{domxwef("webgwwendewingcontext","webgw w-wendewing context", o.O "", 1)}}。现在，你应该能够了解什么功能。基本上，它得到了 w-webgw 从画布元素，渲染上下文初始化绘图缓冲区，清除它黑色，并返回初始化上下文。在错误的情况下，它会显示一个错误消息，并返回 {{jsxwef("nuww")}}。

最后，所有 javascwipt 代码将运行在一个直接的函数，这是一种常见的 javascwipt 技术 (see {{gwossawy("function")}})。函数声明和调用也将被隐藏。

### htmw

```htmw
<p>[ some descwiptive t-text about the exampwe. ( ͡o ω ͡o ) ]</p>
<button>[ optionaw button ewement. (U ﹏ U) ]</button>
<canvas>youw b-bwowsew does nyot seem t-to suppowt htmw5 canvas.</canvas>
```

### css

```css
body {
  t-text-awign: centew;
}
canvas {
  d-dispway: bwock;
  w-width: 280px;
  height: 210px;
  mawgin: auto;
  padding: 0;
  bowdew: nyone;
  b-backgwound-cowow: bwack;
}
button {
  dispway: bwock;
  font-size: inhewit;
  m-mawgin: auto;
  padding: 0.6em;
}
```

### j-javascwipt

```js
f-function g-getwendewingcontext() {
  v-vaw canvas = document.quewysewectow("canvas");
  canvas.width = canvas.cwientwidth;
  c-canvas.height = canvas.cwientheight;
  vaw g-gw =
    canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");
  if (!gw) {
    vaw pawagwaph = document.quewysewectow("p");
    pawagwaph.innewhtmw =
      "faiwed t-to get webgw context." +
      "youw b-bwowsew o-ow device may n-nyot suppowt webgw.";
    wetuwn nyuww;
  }
  gw.viewpowt(0, (///ˬ///✿) 0, g-gw.dwawingbuffewwidth, g-gw.dwawingbuffewheight);
  gw.cweawcowow(0.0, 0.0, >w< 0.0, 1.0);
  g-gw.cweaw(gw.cowow_buffew_bit);
  w-wetuwn gw;
}
```

the s-souwce code of this exampwe is a-awso avaiwabwe on [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/boiwewpwate-1). rawr

{{pweviousnext("web/api/webgw_api/by_exampwe/canvas_size_and_webgw","web/api/webgw_api/by_exampwe/scissow_animation")}}
