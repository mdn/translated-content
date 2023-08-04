---
title: CanvasRenderingContext2D.globalCompositeOperation
slug: Web/API/CanvasRenderingContext2D/globalCompositeOperation
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.globalCompositeOperation`** 属性设置要在绘制新形状时应用的合成操作的类型，其中 type 是用于标识要使用的合成或混合模式操作的字符串。

在 [Canvas Tutorial](/zh-CN/docs/Web/API/Canvas_API/Tutorial) 中查看 [Compositing](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing) 章节。

## 语法

```
ctx.globalCompositeOperation = type;
```

### 类型

{{EmbedLiveSample("合成示例", 750, 6750, "" ,"Web/API/Canvas_API/Tutorial/Compositing/Example")}}

## 示例

### 改变合成操作

这是一段使用 `globalCompositeOperation` 属性的简单的代码片段，绘制了 2 个矩形在重叠时相互排斥的情况。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.globalCompositeOperation = "xor";

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
```

#### 结果

{{ EmbedLiveSample('改变合成操作', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### WebKit/Blink-specific 注解

- 在基于 WebKit- 和 Blink- 的浏览器中，除了此属性外，还实现了一个不标准的并且不赞成使用的方法 `ctx.setCompositeOperation()`。

### Gecko-specific 注解

- 早起的规范草案指定了 "darker"值。然而，Firefox 在第 4 个版本 ([Firefox bug 571532](https://bugzil.la/571532)) 移除了对 "darker"的支持。参见[这篇文章](http://dropshado.ws/post/77229081704/firefox-doesnt-support-canvas-composite-darker)建议如何使用不同的值实现和"darker"类似的效果。

## 参见

- 接口定义，{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
