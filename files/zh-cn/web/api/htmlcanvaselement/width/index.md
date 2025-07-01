---
title: HTMLCanvasElement：width 属性
slug: Web/API/HTMLCanvasElement/width
l10n:
  sourceCommit: c16ab7959173ec929df57d3916f8f4dbce485709
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.width`** 属性是一个正整数（`integer`），表示以 CSS 像素为单位解析的 {{HTMLElement("canvas")}} 元素的 [`width`](/zh-CN/docs/Web/HTML/Reference/Elements/canvas#width) HTML 属性。当未指定该属性，或者设置为无效值（例如负数）时，将使用默认值 `300`。

当设置 `width` 属性时，绘图缓冲区总是会被重置为空白状态——这对于所有上下文类型都适用，即使高度被设置为相同的值也是如此。如果需要恢复之前的内容，可以通过 {{domxref("CanvasRenderingContext2D.getImageData()")}} 保存，并通过 {{domxref("CanvasRenderingContext2D.putImageData()")}} 进行恢复。

这是控制画布大小的两个属性之一，另一个属性是 {{domxref("HTMLCanvasElement.height")}}。

## 值

一个数字。

## 示例

给定以下 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

你可以通过以下代码获取画布的宽度：

```js
const canvas = document.getElementById("canvas");
console.log(canvas.width); // 300
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLCanvasElement")}}：用于定义 `HTMLCanvasElement.width` 属性的接口
- {{domxref("HTMLCanvasElement.height")}}：用于控制画布大小的另一个属性
- {{domxref("HTMLEmbedElement.width")}}
- {{domxref("HTMLIFrameElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
- {{domxref("HTMLVideoElement.width")}}
