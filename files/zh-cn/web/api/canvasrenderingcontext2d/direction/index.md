---
title: CanvasRenderingContext2D.direction
slug: Web/API/CanvasRenderingContext2D/direction
---

{{APIRef}} {{SeeCompatTable}}

**`CanvasRenderingContext2D.direction`** 是 Canvas 2D API 用来在绘制文本时，描述当前文本方向的属性。

## 语法

```
ctx.direction = "ltr" || "rtl" || "inherit";
```

### 选项

有效值：

- ltr
  - : 文本方向从左向右。
- rtl
  - : 文本方向从右向左。
- inherit
  - : 根据情况继承 {{HTMLElement("canvas")}} 元素或者 {{domxref("Document")}} 。

默认值是 `inherit`。

## 示例

### 使用 `direction` 属性

这是一段简单的代码片段，对文本设置不同的 direction 数值。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font = "48px serif";
ctx.fillText("Hi!", 150, 50);
ctx.direction = "rtl";
ctx.fillText("Hi!", 150, 130);
```

```html hidden
<canvas id="canvas" width="550" height="500"></canvas>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font = "48px serif";
ctx.fillText("Hi!", 150, 50);
ctx.direction = "rtl";
ctx.fillText("Hi!", 150, 130);
```

#### 结果

{{ EmbedLiveSample('使用 direction 属性', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
