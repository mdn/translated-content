---
title: object-position
slug: Web/CSS/object-position
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`object-position`** 规定了[可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)的内容，在这里我们称其为对象（即 **`object-position`** 中的 **`object`）**，在其内容框中的位置。可替换元素的内容框中未被对象所覆盖的部分，则会显示该元素的背景（{{cssxref("background")}}）。

你还可以使用 {{cssxref("object-fit")}} 属性来改变可替换元素的对象的内在（原文：intrinsic）大小（即它看上去的大小）的调整方式，借助拉伸与缩放等使对象更好地适应元素的内容框。

{{EmbedInteractiveExample("pages/css/object-position.html")}}

## 语法

```css
/* <position> values */
object-position: center top;
object-position: 100px 50px;

/* Global values */
object-position: inherit;
object-position: initial;
object-position: unset;
```

### 取值

- {{cssxref("&lt;position&gt;")}}
  - : 使用 1 到 4 个值来定义该元素在它所处的二维平面中的定位。可以使用相对或绝对偏移。

> **备注：** 这些定位方式允许被替换元素的对象被定位到内容框外部。

### 正式语法

{{csssyntax}}

## 例子

### HTML

Here we see HTML that includes two {{HTMLElement("img")}} elements, each displaying the MDN logo.

这里我们看到包含两个 img 元素的 HTML，分别展示了 MDN 的 logo

```html
<img id="object-position-1" src="https://mdn.mozillademos.org/files/12668/MDN.svg" alt="MDN Logo"/>
<img id="object-position-2" src="https://mdn.mozillademos.org/files/12668/MDN.svg" alt="MDN Logo"/>
```

### CSS

CSS 包括\<img>元素本身的默认样式，以及两个图像各自的样式。

```css
img {
  width: 300px;
  height: 250px;
  border: 1px solid black;
  background-color: silver;
  margin-right: 1em;
  object-fit: none;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
```

第一个图像的左边缘距元素框左边缘 10 个像素。第二个图像的右边缘与元素框的右边缘齐平，并位于元素框高度下方 10％处。

### 输出

{{ EmbedLiveSample('Example', '100%','300px') }}

## 规范

{{Specifications}}

{{cssinfo}}

## Browser compatibility

{{Compat}}

## 参见

- 其他与图像相关的 CSS 属性：{{cssxref("object-fit")}}，{{cssxref("image-orientation")}}，{{cssxref("image-rendering")}}，{{cssxref("image-resolution")}}。
