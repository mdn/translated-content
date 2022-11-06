---
title: element
slug: Web/CSS/element
original_slug: Web/CSS/element()
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
<div style="width:400px; height:400px; background:-moz-element(#myBackground1) no-repeat;">
  <p>This box uses the element with the #myBackground1 ID as its background!</p>
</div>

<div style="overflow:hidden; height:0;">
  <div id="myBackground1" style="width:1024px; height:1024px; background-image: linear-gradient(to right, red, orange, yellow, white);">
  <p style="transform-origin:0 0; transform: rotate(45deg); color:white;">This text is part of the background. Cool, huh?</p>
  </div>
</div>
```

The {{HTMLElement("div")}} element with the ID "myBackground1" is used as the background for the content including the paragraph "This box uses the element with the #myBackground1 ID as its background!".

![example1.png](/@api/deki/files/4624/=example1.png)

### 一个有点怪怪的例子

This example uses a hidden {{HTMLElement("button")}} element in a repeating pattern as its background. This demonstrates that you can use arbitrary elements as background, but doesn't necessarily demonstrate good design practices.

```html
<div style="width:400px; height:100px; background:-moz-element(#myBackground2);">
</div>

<div style="overflow:hidden; height:0;">
  <button id="myBackground2" type="button">Evil button!</button>
</div>
```

![example2.png](/@api/deki/files/4625/=example2.png)

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
