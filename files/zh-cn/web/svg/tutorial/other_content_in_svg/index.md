---
title: 其他 SVG 内容
slug: Web/SVG/Tutorial/Other_content_in_SVG
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Clipping_and_masking", "Web/SVG/Tutorial/Filter_effects") }}

除了图形化原件，如矩形和圆形之外，SVG 还提供了一些元素用来在图片中嵌入别的类型的内容。

### 嵌入光栅图像

很像在 HTML 中的`img`元素，SVG 有一个`image`元素，用于同样的目的。你可以利用它嵌入任意光栅（以及矢量）图像。它的规格要求应用至少支持 PNG、JPG 和 SVG 格式文件。

嵌入的图像变成一个普通的 SVG 元素。这意味着，你可以在其内容上用剪切、遮罩、滤镜、旋转以及其他 SVG 工具：

```html
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="200"
  height="200">
  <image
    x="90"
    y="-65"
    width="128"
    height="146"
    transform="rotate(45)"
    xlink:href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/image/mdn_logo_only_color.png" />
</svg>
```

{{ EmbedLiveSample('嵌入光栅图像','220','220') }}

### 嵌入任意 XML

因为 SVG 是一个 XML 应用，所以你**总是**可以在 SVG 文档的任何位置嵌入任意 XML。但是你没有必要定义周围的 SVG 需要怎样反作用于这个内容。实际上，在一个遵从的浏览者中，根本没有反作用的方法，数据将简单被忽略。因此特地在 SVG 中添加了{{ SVGElement("foreignObject") }} 元素。它的唯一的目的是作为其他标记的容器和 SVG 样式属性的载体（更突出的`width`和`height`用来定义该对象占用的空间。）。

foreignObject 元素是一个好办法，用来在 SVG 中嵌入 XHTML。如果你有更长的文本，该 HTML 布局比 SVG `text`元素更适合。另一个经常被引用的用例是用 MathML 写的方程式。对于 SVG 的科学应用，它是连接两个世界的一个很好的办法。

> **备注：** 请记住，`foreignObject`元素的内容是能被浏览器加工的。一个独立的 SVG 浏览器不太可能呈现 HTML 或 MathML。

因为`foreignObject`是一个 SVG 元素，所以你可以像用图像那样，使用任何 SVG 的精华，它将被应用到它的内容。

{{ PreviousNext("Web/SVG/Tutorial/Clipping_and_masking", "Web/SVG/Tutorial/Filter_effects") }}
