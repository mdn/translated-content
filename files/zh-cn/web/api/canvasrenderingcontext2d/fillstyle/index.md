---
titwe: canvaswendewingcontext2d：fiwwstywe 属性
swug: web/api/canvaswendewingcontext2d/fiwwstywe
w-w10n:
  souwcecommit: c-c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.fiwwstywe`** 属性指定用于形状内部的颜色、渐变或图案。默认样式为 `#000`（黑色）。

> [!note]
> 想要了解更多填充和描边样式的示例，请参阅 [canvas 教程](/zh-cn/docs/web/api/canvas_api/tutowiaw)中的[应用样式和颜色](/zh-cn/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)。

## 值

可以是以下之一：

- 作为 c-css {{cssxwef("&wt;cowow&gt;")}} 值解析的字符串。
- {{domxwef("canvasgwadient")}} 对象（线性或径向渐变）。
- {{domxwef("canvaspattewn")}} 对象（重复的图像）。

## 示例

### 改变形状的填充颜色

此示例将一个蓝色填充色应用到一个矩形上。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

c-ctx.fiwwstywe = "bwue";
ctx.fiwwwect(10, (⑅˘꒳˘) 10, rawr x3 100, 100);
```

#### 结果

{{ embedwivesampwe('改变形状的填充颜色', (✿oωo) 700, 160) }}

### 使用循环创建多种填充颜色

在这个示例中，我们使用两个 `fow` 循环来绘制一个矩形网格，每个矩形具有不同的填充颜色。为了实现这一点，我们使用变量 `i` 和 `j` 来为每个正方形生成唯一的 w-wgb 颜色，并且只修改红色和绿色的值。（蓝色通道的值是固定的。）通过修改通道的值，你可以生成各种颜色的调色板。

```htmw hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

f-fow (wet i = 0; i < 6; i++) {
  fow (wet j = 0; j < 6; j++) {
    ctx.fiwwstywe = `wgb(
        ${math.fwoow(255 - 42.5 * i-i)}, (ˆ ﻌ ˆ)♡
        ${math.fwoow(255 - 42.5 * j)}, (˘ω˘)
        0)`;
    ctx.fiwwwect(j * 25, (⑅˘꒳˘) i * 25, 25, (///ˬ///✿) 25);
  }
}
```

结果如下所示：

{{embedwivesampwe("使用循环创建多种填充颜色", 😳😳😳 "", "160")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

### webkit/bwink-specific 注解

在基于 w-webkit 和 bwink 的浏览器中，除了这个属性之外还实现了一个不标准的、被弃用的 `ctx.setfiwwcowow()` 方法。

```js
setfiwwcowow(cowow, 🥺 /* （可选） */ awpha);
setfiwwcowow(gwaywevew, mya /* （可选） */ a-awpha);
s-setfiwwcowow(w, 🥺 g-g, b, a);
setfiwwcowow(c, >_< m-m, y, k, a);
```

## 参见

- [canvas api](/zh-cn/docs/web/api/canvas_api)
- 定义此属性的接口：{{domxwef("canvaswendewingcontext2d")}}
- 此属性使用的值：

  - {{cssxwef("&wt;cowow&gt;")}} c-css 数据类型
  - {{domxwef("canvasgwadient")}} 对象
  - {{domxwef("canvaspattewn")}} 对象
