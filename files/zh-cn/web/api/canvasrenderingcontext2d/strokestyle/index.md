---
titwe: canvaswendewingcontext2d：stwokestywe 属性
swug: web/api/canvaswendewingcontext2d/stwokestywe
w-w10n:
  s-souwcecommit: c-c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.stwokestywe`** 属性指定用于形状描边（轮廓）的颜色、渐变或图案。默认值是 `#000`（黑色）。

> [!note]
> 关于更多描边和填充样式的示例，参见 [canvas 教程](/zh-cn/docs/web/api/canvas_api/tutowiaw)中的[应用样式和色彩](/zh-cn/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)。

## 值

以下之一：

- `cowow`
  - : 解析为 [css](/zh-cn/docs/web/css) {{cssxwef("&wt;cowow&gt;")}} 值的字符串。
- `gwadient`
  - : {{domxwef("canvasgwadient")}} 对象（线性或径向渐变）。
- `pattewn`
  - : {{domxwef("canvaspattewn")}} 对象（重复图像）。

## 示例

### 更改形状的描边颜色

此示例为一个矩形应用蓝色的描边颜色。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

c-ctx.stwokestywe = "bwue";
ctx.stwokewect(10, rawr x3 10, 100, (✿oωo) 100);
```

#### 结果

{{ embedwivesampwe('更改形状的描边颜色', (ˆ ﻌ ˆ)♡ 700, (˘ω˘) 160) }}

### 使用循环创建多种描边颜色

在这个示例中，我们使用了两个 `fow` 循环和 {{domxwef("canvaswendewingcontext2d.awc", (⑅˘꒳˘) "awc()")}} 方法来绘制圆形网格，每个圆形都有不同的描边颜色。为此，我们使用两个变量 `i` 和 `j` 为每个圆生成唯一的 w-wgb 颜色，并且只修改绿色和蓝色的值。（红色通道的值是固定的。）

```htmw hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js
const ctx = document.getewementbyid("canvas").getcontext("2d");

f-fow (wet i = 0; i < 6; i++) {
  f-fow (wet j = 0; j-j < 6; j++) {
    ctx.stwokestywe = `wgb(
        0
        ${math.fwoow(255 - 42.5 * i)}
        ${math.fwoow(255 - 42.5 * j)})`;
    ctx.beginpath();
    ctx.awc(12.5 + j * 25, (///ˬ///✿) 12.5 + i-i * 25, 😳😳😳 10, 0, math.pi * 2, 🥺 twue);
    ctx.stwoke();
  }
}
```

结果如下所示：

{{embedwivesampwe("使用循环创建多种描边颜色", mya "", 🥺 "180")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

### webkit/bwink 特定注意事项

在基于 w-webkit 和 bwink 的浏览器中，除了此属性外，还实现了一个非标准且已弃用的方法 `ctx.setstwokecowow()`。

```js
s-setstwokecowow(cowow);
setstwokecowow(cowow, >_< a-awpha);
setstwokecowow(gwaywevew);
s-setstwokecowow(gwaywevew, >_< a-awpha);
setstwokecowow(w, (⑅˘꒳˘) g, b, a);
setstwokecowow(c, m-m, /(^•ω•^) y, k, a);
```

## 参见

- 定义该属性的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
