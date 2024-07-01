---
title: element
slug: Web/CSS/element
---

{{CSSRef}}{{SeeCompatTable}}

[CSS](/zh-CN/docs/Web/CSS) 函数 **`element()`** 定义了一个从任意的 HTML 元素中生成的图像 {{cssxref("&lt;image&gt;")}} 值。该图像值是实时的，这意味着如果被指定的 HTML 元素被更改，the CSS properties using the resulting value are automatically updated.

一个特别实用的应用场景是，在某个 HTML {{HTMLElement("canvas")}} 元素中渲染图像，然后将其用作背景。

在使用 Gecko 渲染引擎的浏览器中，可以使用非标准的 {{domxref("document.mozSetImageElement()")}} 方法，将某个元素指定为其他元素的背景图像。

## 语法

```
element(id)
```

其中：

- _id_
  - : The ID of an element to use as the background, specified using the HTML attribute #_id_ on the element.

## 示例

在支持 `-moz-element()` 的 Firefox 中，可以[实地考察](/samples/cssref/moz-element.html)这些例子。

### 一个比较现实的例子

这个例子将文档中另一个隐藏的 {{HTMLElement("div")}} 元素作为背景。被隐藏的元素本身使用了渐变背景，也包含了一些文字，渐变背景和文字都成为了第一个元素的背景。

```html
<div
  style="width:400px; height:400px; background:-moz-element(#myBackground1) no-repeat;">
  <p>This box uses the element with the #myBackground1 ID as its background!</p>
</div>

<div style="overflow:hidden; height:0;">
  <div
    id="myBackground1"
    style="width:1024px; height:1024px; background-image: linear-gradient(to right, red, orange, yellow, white);">
    <p style="transform-origin:0 0; rotate: 45deg; color:white;">
      This text is part of the background. Cool, huh?
    </p>
  </div>
</div>
```

{{EmbedLiveSample("一个比较现实的例子")}}

The {{HTMLElement("div")}} element with the ID "myBackground1" is used as the background for the content including the paragraph "This box uses the element with the #myBackground1 ID as its background!".

### 页面预览

这个<a href="https://iamvdo.me/en/blog/css-element-function">基于 Vincent De Oliveira 的示例</a>在 `<div id="css-result">` 之中创建了 `<div id="css-source">` 的预览。

#### HTML

```html
<div id="css-source">
  <h1>Page Preview</h1>
</div>
<div id="css-result"></div>
```

#### CSS

```css
#css-result {
  background: -moz-element(#css-source) no-repeat;
  width: 256px;
  height: 32px;
  background-size: 80%;
  border: dashed;
}
```

#### 结果

{{EmbedLiveSample("页面预览")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("_image", "image()")}}
- {{cssxref("image-set", "image-set()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("element()")}}
- {{cssxref("cross-fade")}}
- {{domxref("document.mozSetImageElement()")}}
