---
title: element()
slug: Web/CSS/Reference/Values/element
---

{{SeeCompatTable}}

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions) **`element()`** 定义了一个从任意的 HTML 元素中生成的图像 {{cssxref("&lt;image&gt;")}} 值。该图像值是实时的，这意味着如果被指定的 HTML 元素被更改，则使用结果值的 CSS 属性会自动更新。

一个特别实用的应用场景是，在某个 HTML {{HTMLElement("canvas")}} 元素中渲染图像，然后将其用作背景。

在使用 Gecko 渲染引擎的浏览器中，可以使用非标准的 {{domxref("document.mozSetImageElement()")}} 方法，将某个元素指定为其他元素的背景图像。

## 语法

```css
element(id)
```

其中：

- _id_
  - : 用作背景的元素的 ID，使用元素的 HTML 属性 #_id_ 指定。

## 示例

这些示例在支持 `-moz-element()` 的 Firefox 中有效。

### 一个比较现实的例子

这个例子将文档中一个隐藏的 {{HTMLElement("div")}} 元素作为背景。背景元素使用了渐变，但其中也包含作为背景一部分渲染的文本。

```html
<div id="target-box">
  <p>这个盒子使用 ID 为 #my-background 的元素作为其背景！</p>
</div>

<div id="background-container">
  <div id="my-background">
    <p>这段文字是背景的一部分。很酷吧？</p>
  </div>
</div>
```

```css
#target-box {
  width: 400px;
  height: 400px;
  background: -moz-element(#my-background) no-repeat;
}

#background-container {
  overflow: hidden;
  height: 0;
}

#my-background {
  width: 1024px;
  height: 1024px;
  background-image: linear-gradient(to right, red, orange, yellow, white);
}

#my-background p {
  transform-origin: 0 0;
  rotate: 45deg;
  color: white;
}
```

{{EmbedLiveSample("一个比较现实的例子")}}

ID 为“my-background”的 {{HTMLElement("div")}} 元素被包含段落“这个盒子使用 ID 为 #my-background 的元素作为其背景！”的内容用作背景。

### 页面预览

这个[基于 Vincent De Oliveira 的示例](https://iamvdo.me/en/blog/css-element-function)在 `<div id="css-result">` 之中创建了 `<div id="css-source">` 的预览。

#### HTML

```html
<div id="css-source">
  <h1>页面预览</h1>
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

- {{cssxref("image/image", "image()")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("cross-fade", "cross-fade()")}}
- {{domxref("document.mozSetImageElement()")}}
