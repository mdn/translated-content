---
title: HTMLImageElement：naturalHeight 属性
slug: Web/API/HTMLImageElement/naturalHeight
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} 接口的 **`naturalHeight`** 只读属性返回图像固有的（自然的）、修正像素密度后的高度（以 {{Glossary("CSS pixel" , "CSS 像素")}}为单位）。

这是图像在没有限制其高度的情况下绘制的高度；如果你没有为图像指定高度，或者将图像放置在限制或明确指定图像高度的容器中，它将会以此高度渲染。

> [!NOTE]
> 大多数时候自然高度是服务器发送的图像的实际高度。不过，浏览器可以在将图像推送到渲染器之前对其进行修改。例如，Chrome 会[降低低端设备上图像的分辨率](https://crbug.com/1187043#c7)。在这种情况下，`naturalHeight` 会将浏览器干预修改的图像高度视为自然高度，并返回该值。

## 值

一个指示图像的固有高度（以 CSS 像素为单位）的整数值。这是在没有对图像设置约束或特定值时自然绘制图像的高度。与 {{domxref("HTMLImageElement.height","height")}} 不同，自然高度已针对显示它的设备的像素密度进行了校正。

如果固有高度不可用——要么是因为图像没有指定固有高度，要么是因为图像数据不可用于获取此信息，`naturalHeight` 返回 0。

## 示例

此示例显示图像的自然、经像素密度修正后的尺寸，以及由页面的 CSS 和其他因素改变后的渲染尺寸。

### HTML

```html
<div class="box">
  <img
    src="/zh-CN/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png"
    class="image"
    alt="一款带有白色表盘和黑色数字的圆形挂钟" />
</div>
<pre></pre>
```

HTML 具有一个 400x398 像素的图像（放置在一个 {{HTMLElement("div")}} 元素中）。

### CSS

```css
.box {
  width: 200px;
  height: 200px;
}

.image {
  width: 100%;
}
```

在上面的 CSS 中主要需要注意的是，用于绘制图像的容器的样式是 200px 宽，并且图像将被绘制以填充其宽度（100%）。

### JavaScript

```js
const output = document.querySelector("pre");
const image = document.querySelector("img");

image.addEventListener("load", (event) => {
  const { naturalWidth, naturalHeight, width, height } = image;
  output.textContent = `
自然尺寸：${naturalWidth} x ${naturalHeight} 像素
显示尺寸：${width} x ${height} 像素
`;
});
```

JavaScript 代码将自然尺寸和显示尺寸转储到 {{HTMLElement("pre")}} 中。这样做是为了响应图像的 {{domxref("HTMLElement.load_event", "load")}} 事件处理器，以确保在尝试检查图像的宽度和高度之前，图像已可用。

### 结果

{{EmbedLiveSample("示例", 600, 280)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLImageElement.height")}}
- {{domxref("HTMLImageElement.naturalWidth")}}
