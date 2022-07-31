---
title: HTMLImageElement.naturalHeight
slug: Web/API/HTMLImageElement/naturalHeight
tags:
- API
- HTMLImageElement
- Intrinsic Height
- Reference
- Property
- Vertical
- naturalHeight
- size
---
{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} 接口的 **`naturalHeight`** 属性是一个只读值，它返回图像固有的（自然的）、修正高度后的 {{Glossary("CSS pixel" , "CSS 像素")}}。

这是图像在没有限制其高度的情况下绘制的高度；如果您没有为图像指定高度，或者将图像放置在限制或明确指定图像高度的容器中，它将被渲染为如此高。

> **备注：** 大多数时候自然高度是服务器发送的图像的实际高度。不过，浏览器可以在将图像推送到渲染器之前对其进行修改。例如，Chrome 会[降低低端设备上图像的分辨率](https://bugs.chromium.org/p/chromium/issues/detail?id=1187043#c7)。在这种情况下，`naturalHeight` 会将浏览器干预修改的图像高度视为自然高度，并返回该值。

## 值

一个整数值，指示图像的固有高度（以 CSS 像素为单位）。这是在没有为图像建立约束或特定值时自然绘制图像的高度。与 {{domxref("HTMLImageElement.height","height")}} 不同，此自然高度已针对显示它的设备的像素密度进行了校正。

如果固有高度不可用——要么是因为图像没有指定固有高度，要么是因为图像数据不可用于获取此信息，“naturalHeight”返回 0。

## 示例

此示例显示图像的自然、密度调整大小以及由页面的 CSS 和其他因素更改的渲染大小。

### HTML

```html
<div class="box">
  <img src="/en-US/docs/Web/HTML/Element/img/clock-demo-400px.png" class="image">
</div>
<div class="output">
</div>
```

HTML 具有一个 400x398 像素的图像，该图像放置在一个 {{HTMLElement("div")}} 元素中。

### CSS

```css
.box {
  width: 200px;
  height: 200px;
}

.image {
  width: 100%;
}

.output {
  padding-top: 2em;
}
```

在上面的 CSS 中主要需要注意的是，用于绘制图像的容器的样式是 200px 宽，并且图像将被绘制以填充其宽度（100%）。

### JavaScript

```js
let output = document.querySelector(".output");
let image = document.querySelector("img");

window.addEventListener("load", event => {
  output.innerHTML += `Natural size: ${image.naturalWidth} x ` +
                      `${image.naturalHeight} pixels<br>`;
  output.innerHTML += `Displayed size: ${image.width} x ` +
                      `${image.height} pixels`;
});
```

JavaScript 代码将自然尺寸和显示尺寸转储到带有 `output` 类的 {{HTMLElement("div")}} 中。这是为了响应窗口的 {{domxref("Window.load_event", "load")}} 事件处理程序，以确保在尝试检查其宽度和高度之前，确保图像可用。

### 结果

{{EmbedLiveSample("示例", 600, 280)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
