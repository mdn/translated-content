---
title: CanvasRenderingContext2D.strokeStyle
slug: Web/API/CanvasRenderingContext2D/strokeStyle
---

{{APIRef}}

**`CanvasRenderingContext2D.strokeStyle`** 是 Canvas 2D API 描述画笔（绘制图形）颜色或者样式的属性。默认值是 `#000` (black)。

参见 [Canvas Tutorial](/zh-CN/docs/Web/API/Canvas_API/Tutorial) 中的 [Applying styles and color](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) 章节。

## 语法

```
ctx.strokeStyle = color;
ctx.strokeStyle = gradient;
ctx.strokeStyle = pattern;
```

### 选项

- `color`
  - : {{domxref("DOMString")}} 字符串，可以转换成 CSS {{cssxref("&lt;color&gt;")}} 值。
- `gradient`
  - : {{domxref("CanvasGradient")}} 对象（线性渐变或放射性渐变）。
- `pattern`
  - : {{domxref("CanvasPattern")}} 对象（可重复的图片）。

## 示例

### 更改形状的轮廓线颜色

这是一段简单的代码片段，使用 `strokeStyle` 属性设置不同的颜色。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "blue";
ctx.strokeRect(10, 10, 100, 100);
```

#### 结果

{{ EmbedLiveSample('更改形状的轮廓线颜色', 700, 160) }}

### 使用循环创建多种轮廓线颜色

这个例子使用 `strokeStyle` 属性改变图形轮廓线的颜色。我们使用 {{domxref("CanvasRenderingContext2D.arc", "arc()")}} 绘制圆形来代替正方形。

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const ctx = document.getElementById("canvas").getContext("2d");

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx.strokeStyle = `rgb(
        0,
        ${Math.floor(255 - 42.5 * i)},
        ${Math.floor(255 - 42.5 * j)})`;
    ctx.beginPath();
    ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}
```

结果如下显示：

{{EmbedLiveSample("使用循环创建多种轮廓线颜色", "180", "180", "canvas_strokestyle.png")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### WebKit/Blink-specific 注解

- 在基于 WebKit- 和 Blink- 的浏览器中，除了此属性外，还实现了一个不标准的并且不赞成使用的方法 `ctx.setStrokeColor()` 。

  ```js
  setStrokeColor(color, optional alpha);
  setStrokeColor(grayLevel, optional alpha);
  setStrokeColor(r, g, b, a);
  setStrokeColor(c, m, y, k, a);
  ```

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
