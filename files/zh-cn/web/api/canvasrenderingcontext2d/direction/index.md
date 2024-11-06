---
title: CanvasRenderingContext2D：direction 属性
slug: Web/API/CanvasRenderingContext2D/direction
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.direction`** 属性用来在绘制文本时，描述当前文本方向。

## 值

可能的取值：

- `"ltr"`
  - : 文字方向为从左到右。
- `"rtl"`
  - : 文字方向为从右到左。
- `"inherit"`
  - : 文字方向从相应的 {{HTMLElement("canvas")}} 元素或 {{domxref("Document")}} 继承。

默认值为 `"inherit"`。

## 示例

### 改变文字方向

这个示例绘制了两段文字。第一段是从左到右的，第二段是从右到左的。注意在 `ltr` 中的“Hi!”变成了在 `rtl` 中的“!Hi”。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "48px serif";
ctx.fillText("Hi!", 150, 50);
ctx.direction = "rtl";
ctx.fillText("Hi!", 150, 130);
```

#### 结果

{{ EmbedLiveSample('改变文字方向', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此属性的接口：{{domxref("CanvasRenderingContext2D")}}
