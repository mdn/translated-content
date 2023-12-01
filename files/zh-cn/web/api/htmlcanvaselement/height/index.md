---
title: HTMLCanvasElement.height
slug: Web/API/HTMLCanvasElement/height
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.height`** 属性是一个正`整数` ，使用了{{HTMLElement("canvas")}} 元素的 HTML 属性[`height`](/zh-CN/docs/Web/HTML/Element/canvas#height)来反映该元素高度的 CSS 像素值。当该属性没有被定义，或被定义为一个无效值（如负值）时，将使用`150`作为它的默认值。

控制 canvas 元素大小的属性有两个，这是其中一个，还有一个是{{domxref("HTMLCanvasElement.width")}}。

## 语法

```plain
var pxl = canvas.height;
canvas.height = pxl;
```

## 示例

给出这样一个{{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

可以通过以下代码获得这个 canvas 元素的高度：

```js
var canvas = document.getElementById("canvas");
console.log(canvas.height); // 300
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他

- 定义的接口，{{domxref("HTMLCanvasElement")}}.
- 另一个控制 canvas 大小的属性，{{domxref("HTMLCanvasElement.width")}}.
