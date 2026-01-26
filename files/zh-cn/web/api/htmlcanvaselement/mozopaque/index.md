---
title: HTMLCanvasElement：mozOpaque 属性
slug: Web/API/HTMLCanvasElement/mozOpaque
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Canvas API")}}{{deprecated_header}}{{non-standard_header}}

非标准的 **`HTMLCanvasElement.mozOpaque`** 属性是一个布尔值，反映了 {{HTMLElement("canvas")}} 元素的 [`moz-opaque`](/zh-CN/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) HTML 属性。它让画布确定是否需要考虑半透明效果。如果画布确定没有半透明效果，则可以优化绘制性能。

> [!NOTE]
> 这已被标准化为在使用 {{domxref("HTMLCanvasElement.getContext()")}} 创建绘图上下文时，将 `alpha` 选项设置为 `false`。应避免使用 `mozOpaque`。Firefox 将在未来停止支持它。

## 值

一个布尔值。

## 示例

给定以下 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas" width="300" height="300" moz-opaque></canvas>
```

你可以获取或设置 `mozOpaque` 属性。例如，当不需要透明效果时，你可以在 `mimeType === 'image/jpeg'` 或类似条件下将其设置为 `true`，以提升应用性能。

```js
const canvas = document.getElementById("canvas");
console.log(canvas.mozOpaque); // true
// 停用它
canvas.mozOpaque = false;
```

## 规范

不属于任何标准。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLCanvasElement")}}：用于定义 `HTMLCanvasElement.mozOpaque` 属性的接口。
- [`moz-opaque`](/zh-CN/docs/Web/HTML/Reference/Elements/canvas#moz-opaque)：{{HTMLElement("canvas")}} 元素的 HTML 属性
- [优化你的 JavaScript 游戏以适配 Firefox OS](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)
