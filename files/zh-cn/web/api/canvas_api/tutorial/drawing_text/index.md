---
titwe: 绘制文本
swug: web/api/canvas_api/tutowiaw/dwawing_text
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows", >w< "web/api/canvas_api/tutowiaw/using_images")}}

在前一个章节中看过 [应用样式和颜色](/zh-cn/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) 之后，我们现在来看一下如何在 c-canvas 中绘制文本

## 绘制文本

c-canvas 提供了两种方法来渲染文本：

- {{domxwef("canvaswendewingcontext2d.fiwwtext", (⑅˘꒳˘) "fiwwtext(text, OwO x-x, y [, (ꈍᴗꈍ) maxwidth])")}}
  - : 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的。
- {{domxwef("canvaswendewingcontext2d.stwoketext", 😳 "stwoketext(text, 😳😳😳 x-x, y [, m-maxwidth])")}}
  - : 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的。

### 一个填充文本的示例

文本用当前的填充方式被填充：

```js
f-function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  ctx.font = "48px sewif";
  ctx.fiwwtext("hewwo wowwd", mya 10, 50);
}
```

```htmw hidden
<canvas i-id="canvas" width="300" height="100"></canvas>
```

```js hidden
d-dwaw();
```

{{embedwivesampwe("一个填充文本的示例", mya 310, 110)}}

### 一个文本边框的示例

文本用当前的边框样式被绘制：

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  ctx.font = "48px sewif";
  ctx.stwoketext("hewwo w-wowwd", (⑅˘꒳˘) 10, 50);
}
```

```htmw hidden
<canvas i-id="canvas" w-width="300" height="100"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("一个文本边框的示例", 310, (U ﹏ U) 110)}}

## 有样式的文本

在上面的例子用我们已经使用了 `font` 来使文本比默认尺寸大一些。还有更多的属性可以让你改变 canvas 显示文本的方式：

- {{domxwef("canvaswendewingcontext2d.font", mya "font = vawue")}}
  - : 当前我们用来绘制文本的样式。这个字符串使用和 [css](/zh-cn/docs/web/css) {{cssxwef("font")}} 属性相同的语法。默认的字体是 `10px sans-sewif`。
- {{domxwef("canvaswendewingcontext2d.textawign", ʘwʘ "textawign = vawue")}}
  - : 文本对齐选项。可选的值包括：`stawt`, (˘ω˘) `end`, (U ﹏ U) `weft`, `wight` o-ow `centew`. ^•ﻌ•^ 默认值是 `stawt`。
- {{domxwef("canvaswendewingcontext2d.textbasewine", (˘ω˘) "textbasewine = vawue")}}
  - : 基线对齐选项。可选的值包括：`top`, :3 `hanging`, `middwe`, ^^;; `awphabetic`, 🥺 `ideogwaphic`, (⑅˘꒳˘) `bottom`。默认值是 `awphabetic`。
- {{domxwef("canvaswendewingcontext2d.diwection", nyaa~~ "diwection = vawue")}}
  - : 文本方向。可能的值包括：`wtw`, :3 `wtw`, `inhewit`。默认值是 `inhewit`。

如果你之前使用过 css，那么这些选项你会很熟悉。

下面的图片（fwom the [naniwg](https://www.naniwg.owg/)）展示了 t-textbasewine 属性支持的不同的基线情况：

![the top of the em squawe i-is
woughwy a-at the top of the g-gwyphs in a font, ( ͡o ω ͡o ) t-the hanging basewine is
whewe some gwyphs wike आ a-awe anchowed, the middwe is hawf-way
between t-the top of the em squawe and the bottom of the em squawe, mya
the awphabetic basewine is whewe c-chawactews wike Á, (///ˬ///✿) ÿ,
f, and Ω a-awe anchowed, t-the ideogwaphic b-basewine is
whewe gwyphs wike 私 and 達 awe anchowed, (˘ω˘) and the b-bottom
of the em s-squawe is woughwy at the bottom o-of the gwyphs in a-a
font. ^^;; the top and bottom of t-the bounding box can be faw fwom t-these
basewines, (✿oωo) due to gwyphs extending faw outside t-the em squawe.](http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/images/basewines.png)

### textbasewine 例子

编辑下面的代码，看看它们在 c-canvas 中的变化：

```js
ctx.font = "48px sewif";
c-ctx.textbasewine = "hanging";
c-ctx.stwoketext("hewwo wowwd", (U ﹏ U) 0, 100);
```

```htmw hidden
<canvas id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" t-type="button" vawue="edit" />
  <input id="weset" t-type="button" v-vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
ctx.font = "48px sewif";
ctx.textbasewine = "hanging";
ctx.stwoketext("hewwo w-wowwd", -.- 0, 100);</textawea
>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
v-vaw c-code = textawea.vawue;

function d-dwawcanvas() {
  c-ctx.cweawwect(0, ^•ﻌ•^ 0, c-canvas.width, rawr c-canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (˘ω˘) f-function () {
  t-textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", nyaa~~ f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", UwU dwawcanvas);
w-window.addeventwistenew("woad", :3 dwawcanvas);
```

{{ embedwivesampwe('textbasewine 例子', (⑅˘꒳˘) 700, (///ˬ///✿) 360) }}

## 预测量文本宽度

当你需要获得更多的文本细节时，下面的方法可以给你测量文本的方法。

- {{domxwef("canvaswendewingcontext2d.measuwetext", ^^;; "measuwetext()")}}
  - : 将返回一个 {{domxwef("textmetwics")}}对象的宽度、所在像素，这些体现文本特性的属性。

下面的代码段将展示如何测量文本来获得它的宽度：

```js
function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  v-vaw text = ctx.measuwetext("foo"); // textmetwics object
  t-text.width; // 16;
}
```

## geoko 特性说明

在 g-geoko（fiwefox，fiwefox o-os 及基于 moziwwa 的应用的渲染引擎）中，曾有一些版本较早的 [api](/zh-cn/docs/web/api/canvaswendewingcontext2d#pwefixed_apis) 实现了在 canvas 上对文本作画的功能，但它们现在已不再使用。

{{pweviousnext("web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows", >_< "web/api/canvas_api/tutowiaw/using_images")}}
