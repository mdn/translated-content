---
title: HTMLCanvasElement：height 属性
slug: Web/API/HTMLCanvasElement/height
l10n:
  sourceCommit: 4aa077d26c6b1f7168af634082b6e6f71e11bb99
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.height`** 属性是一个正整数（`integer`），表示以 CSS 像素为单位解析的 {{HTMLElement("canvas")}} 元素的 [`height`](/zh-CN/docs/Web/HTML/Reference/Elements/canvas#height) HTML 属性。当未指定该属性，或者设置为无效值（例如负数）时，将使用默认值 `150`。

当设置 `height` 属性时，绘图缓冲区总是会被重置为空白状态——这对于所有上下文类型都适用，即使高度被设置为相同的值也是如此。如果需要恢复之前的内容，可以通过 {{domxref("CanvasRenderingContext2D.getImageData()")}} 保存，并通过 {{domxref("CanvasRenderingContext2D.putImageData()")}} 进行恢复。

这是控制画布大小的两个属性之一，另一个属性是 {{domxref("HTMLCanvasElement.width")}}。

## 值

一个数字。

## 示例

给定以下 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

你可以通过以下代码获取画布的高度：

```js
const canvas = document.getElementById("canvas");
console.log(canvas.height); // 300
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLCanvasElement")}}：用于定义 `HTMLCanvasElement.height` 属性的接口
- {{domxref("HTMLCanvasElement.width")}}：用于控制画布大小的另一个属性
- {{domxref("HTMLEmbedElement.height")}}
- {{domxref("HTMLIFrameElement.height")}}
- {{domxref("HTMLImageElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLSourceElement.height")}}
- {{domxref("HTMLVideoElement.height")}}
