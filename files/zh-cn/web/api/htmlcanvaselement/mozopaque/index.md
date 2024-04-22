---
title: HTMLCanvasElement.mozOpaque
slug: Web/API/HTMLCanvasElement/mozOpaque
---

{{APIRef("Canvas API")}}{{non-standard_header}}

非标准的 **`HTMLCanvasElement.mozOpaque`** 是一种 {{jsxref("Boolean")}} 的数据反映了 {{HTMLElement("canvas")}} 元素的 [`moz-opaque`](/zh-CN/docs/Web/HTML/Element/canvas#moz-opaque) HTML 属性。它能够让画布（canvas）将半透明作为一个参考因素。如果画布知道没有半透明因素，作画的性能可以优化。

当使用 {{domxref("HTMLCanvasElement.getContext()")}} 创建绘图上下文时，该 api 将被标准化为将 alpha 选项设置为 false。应该避免使用 mozOpaque。Firefox 将在未来停止支持它。

## 语法

```plain
var opaque = canvas.mozOpaque;
canvas.mozOpaque = true;
```

## 示例

有如下 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas" width="300" height="300" moz-opaque></canvas>
```

你可以获取或设置 `mozOpaque` 属性。例如，当 mimeType == 'image/jpeg'或类似值时，可以将其属性值设置为 true，以在不需要半透明度的情况下提高应用程序的性能。

```js
var canvas = document.getElementById("canvas");
console.log(canvas.mozOpaque); // true
// 停用该方法
canvas.mozOpaque = false;
```

## 规范

不属于任何标准。

## 浏览器兼容性

{{Compat}}

## 参考

- 定义它的接口，{{domxref("HTMLCanvasElement")}}.
- {{HTMLElement("canvas")}} 元素的[`moz-opaque`](/zh-CN/docs/Web/HTML/Element/canvas#moz-opaque)HTML 属性
- [为 Firefox OS 优化你的 JavaScript 游戏](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)
