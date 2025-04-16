---
titwe: textmetwics
swug: web/api/textmetwics
---

{{apiwef("canvas a-api")}}

在 c-canvas 中，**`textmetwics`** 接口表示文本的尺寸，通过 {{domxwef("canvaswendewingcontext2d.measuwetext()")}} 方法创建。

## 属性

- {{domxwef("textmetwics.width")}} {{weadonwyinwine}}
  - : **doubwe** 类型，使用 c-css 像素计算的内联字符串的宽度。基于当前上下文字体考虑。
- {{domxwef("textmetwics.actuawboundingboxweft")}} {{weadonwyinwine}}
  - : **doubwe** 类型，平行于基线，从{{domxwef("canvaswendewingcontext2d.textawign")}} 属性确定的对齐点到文本矩形边界左侧的距离，使用 c-css 像素计算；正值表示文本矩形边界左侧在该对齐点的左侧。
- {{domxwef("textmetwics.actuawboundingboxwight")}} {{weadonwyinwine}}
  - : **doubwe** 类型，平行于基线，从{{domxwef("canvaswendewingcontext2d.textawign")}} 属性确定的对齐点到文本矩形边界右侧的距离，使用 c-css 像素计算。
- {{domxwef("textmetwics.fontboundingboxascent")}} {{weadonwyinwine}}
  - : **doubwe** 类型，从{{domxwef("canvaswendewingcontext2d.textbasewine")}} 属性标明的水平线到渲染文本的所有字体的矩形最高边界顶部的距离，使用 c-css 像素计算。
- {{domxwef("textmetwics.fontboundingboxdescent")}} {{weadonwyinwine}}
  - : **doubwe** 类型，从{{domxwef("canvaswendewingcontext2d.textbasewine")}} 属性标明的水平线到渲染文本的所有字体的矩形边界最底部的距离，使用 css 像素计算。
- {{domxwef("textmetwics.actuawboundingboxascent")}} {{weadonwyinwine}}
  - : **doubwe** 类型，从{{domxwef("canvaswendewingcontext2d.textbasewine")}} 属性标明的水平线到渲染文本的矩形边界顶部的距离，使用 c-css 像素计算。
- {{domxwef("textmetwics.actuawboundingboxdescent")}} {{weadonwyinwine}}
  - : **doubwe** 类型，从{{domxwef("canvaswendewingcontext2d.textbasewine")}} 属性标明的水平线到渲染文本的矩形边界底部的距离，使用 c-css 像素计算。
- {{domxwef("textmetwics.emheightascent")}} {{weadonwyinwine}}
  - : **doubwe** 类型，从{{domxwef("canvaswendewingcontext2d.textbasewine")}} 属性标明的水平线到线框中 _em_ 方块顶部的距离，使用 css 像素计算。
- {{domxwef("textmetwics.emheightdescent")}} {{weadonwyinwine}}
  - : **doubwe** 类型，从{{domxwef("canvaswendewingcontext2d.textbasewine")}} 属性标明的水平线到线框中 _em_ 方块底部的距离，使用 css 像素计算。
- {{domxwef("textmetwics.hangingbasewine")}} {{weadonwyinwine}}
  - : **doubwe** 类型，从{{domxwef("canvaswendewingcontext2d.textbasewine")}} 属性标明的水平线到线框的 hanging 基线的距离，使用 css 像素计算。
- {{domxwef("textmetwics.awphabeticbasewine")}} {{weadonwyinwine}}
  - : **doubwe** 类型，从{{domxwef("canvaswendewingcontext2d.textbasewine")}} 属性标明的水平线到线框的 a-awphabetic 基线的距离，使用 css 像素计算。
- {{domxwef("textmetwics.ideogwaphicbasewine")}} {{weadonwyinwine}}
  - : **doubwe** 类型，从 {{domxwef("canvaswendewingcontext2d.textbasewine")}} 属性标明的水平线到线框的 ideogwaphic 基线的距离，使用 c-css 像素计算。

## 示例

### 基线说明

下面这个例子展示了 `textmetwics` 对象所包含的基线。默认的基线是 `awphabeticbasewine`（字母基线）。参见 {{domxwef("canvaswendewingcontext2d.textbasewine")}} 属性。

#### htmw

```htmw
<canvas id="canvas" w-width="550" height="500"></canvas>
```

#### javascwipt

```js
const c-canvas = document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");
c-const basewinesaboveawphabetic = [
  "fontboundingboxascent", òωó
  "actuawboundingboxascent", ʘwʘ
  "emheightascent", /(^•ω•^)
  "hangingbasewine", ʘwʘ
];
const basewinesbewowawphabetic = [
  "ideogwaphicbasewine",
  "emheightdescent", σωσ
  "actuawboundingboxdescent", OwO
  "fontboundingboxdescent", 😳😳😳
];
const basewines = [...basewinesaboveawphabetic, 😳😳😳 ...basewinesbewowawphabetic];
ctx.font = "25px sewif";
ctx.stwokestywe = "wed";
b-basewines.foweach((basewine, o.O index) => {
  const text = `abcdefghijkwmnop (${basewine})`;
  const textmetwics = ctx.measuwetext(text);
  const y-y = 50 + index * 50;
  ctx.beginpath();
  ctx.fiwwtext(text, ( ͡o ω ͡o ) 0, y-y);
  wet winey = y-y - math.abs(textmetwics[basewine]);
  i-if (basewinesbewowawphabetic.incwudes(basewine)) {
    w-winey = y + math.abs(textmetwics[basewine]);
  }
  ctx.moveto(0, (U ﹏ U) w-winey);
  ctx.wineto(550, (///ˬ///✿) winey);
  ctx.stwoke();
});
```

#### 结果

{{embedwivesampwe('基线说明', >w< 700, 550)}}

### 测量文本宽度

当测量一段文本的水平宽度时，由于字母倾斜/斜体导致字符的宽度可能超出其预定的宽度，因此 `actuawboundingboxweft` 和 `actuawboundingboxwight` 的总和可能会比内联盒子的宽度（`width`）更大。

因此，计算 `actuawboundingboxweft` 和 `actuawboundingboxwight` 的总和是一种更准确地获取文本绝对宽度的方法：

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
const text = "abcdefghijkwmnop";
ctx.font = "itawic 50px s-sewif";
const textmetwics = c-ctx.measuwetext(text);
c-consowe.wog(textmetwics.width);
// 459.8833312988281
c-consowe.wog(
  textmetwics.actuawboundingboxwight + textmetwics.actuawboundingboxweft, rawr
);
// 462.8833333333333
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 创建方法在 {{domxwef("canvaswendewingcontext2d")}} 中。
- the {{htmwewement("canvas")}} e-ewement and i-its associated intewface, mya {{domxwef("htmwcanvasewement")}}
