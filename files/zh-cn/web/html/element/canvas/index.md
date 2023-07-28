---
title: <canvas>
slug: Web/HTML/Element/canvas
---

`<canvas>` 元素可被用来通过 JavaScript（[Canvas](/zh-CN/docs/Web/API/Canvas_API) API 或 [WebGL](/zh-CN/docs/Web/API/WebGL_API) API）绘制图形及图形动画。

{{HTMLSidebar}}

## 属性

本元素支持[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `height`
  - : 该元素占用空间的高度，以 CSS 像素（px）表示，默认为 150。
- `moz-opaque` {{non-standard_inline}} {{deprecated_inline}}
  - : 通过设置这个属性，来控制 canvas 元素是否半透明。如果你不想 canvas 元素被设置为半透明，使用这个元素将可以优化浏览器绘图性能。
- `width`
  - : 该元素占用空间的宽度，以 CSS 像素（px）表示，默认为 300。

## 注意事项

### 标签需要闭合

不同于 {{HTMLElement("img")}} 元素， {{HTMLElement ("canvas")}}元素需要有闭合标签 (`</canvas>`).

### 设置画布 (canvas) 的大小

直接在 html 标签中设置 width 和 height 属性或者使用 JavaScript 来指定画布尺寸，这将改变一个画布的水平像素和垂直像素数，就像定义了一张图片的大小一样。

可以使用 CSS 的 width 和 height 以在渲染期间缩放图像以适应样式大小，就像\<img>元素一样。如果您发现\<canvas>元素中展示的内容变形，您可以通过\<canvas>自带的 height 和 width 属性进行相关设置，而不要使用 CSS。

### 最大的画布尺寸

画布的最大的尺寸取决于浏览器，下表的结论来自别处 (e.g. [Stack Overflow](https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element)):

| 浏览器  | 最大高度      | 最大宽度      | 最大面积                                   |
| ------- | ------------- | ------------- | ------------------------------------------ |
| Chrome  | 32,767 pixels | 32,767 pixels | 268,435,456 pixels (i.e., 16,384 x 16,384) |
| Firefox | 32,767 pixels | 32,767 pixels | 472,907,776 pixels (i.e., 22,528 x 20,992) |
| Safari  | 32,767 pixels | 32,767 pixels | 268,435,456 pixels (i.e., 16,384 x 16,384) |
| IE      | 8,192 pixels  | 8,192 pixels  | ?                                          |

## 示例

### HTML

```html
<canvas id="canvas" width="300" height="300">
  抱歉，您的浏览器不支持 canvas 元素
  （这些内容将会在不支持&lt;canvas%gt;元素的浏览器或是禁用了 JavaScript
  的浏览器内渲染并展现）
</canvas>
```

### JavaScript

使用{{domxref("HTMLCanvasElement.getContext()")}}获得一个绘图上下文并开始绘制

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
```

### 结果

{{EmbedLiveSample('示例')}}

## 无障碍

`<canvas>` 元素本身只是一个位图，不提供任何绘制对象的信息。画布内容不像 HTML 那样具有语义并能暴露给无障碍工具。以下指南可以帮助您更方便地访问它。

- [MDN Hit regions and accessability](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility)
- [Canvas accessibility use cases](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Canvas element accessibility issues](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [HTML5 Canvas Accessibility in Firefox 13 – by Steve Faulkner](https://developer.paciellogroup.com/blog/2012/06/html5-canvas-accessibility-in-firefox-13/)
- [Best practices for interactive canvas elements](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [MDN canvas portal](/zh-CN/docs/Web/API/Canvas_API)
- [Canvas tutorial](/zh-CN/docs/Web/API/Canvas_API/Tutorial)
- [Canvas cheat sheet](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html)

- [Canvas-related demos](/zh-CN/docs/Web/Demos#canvas)
- [Canvas introduction by Apple](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html)
