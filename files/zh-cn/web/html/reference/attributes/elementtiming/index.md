---
title: HTML 属性：elementtiming
slug: Web/HTML/Reference/Attributes/elementtiming
l10n:
  sourceCommit: b138fb464010633f2d80093211465195cd2d4a28
---

**`elementtiming`** 属性用于表示元素已被标记，以便 {{domxref("PerformanceObserver")}} 对象使用 `"element"` 类型进行跟踪。更多详情，请参见 {{domxref("PerformanceElementTiming")}} 接口。

该属性可应用于 {{htmlelement("img")}}、{{SVGElement("svg")}} 内的 {{SVGElement("image")}} 元素、{{htmlelement("video")}} 元素的海报图像、带有 {{cssxref("background-image")}} 的元素以及包含文本节点（如 {{htmlelement("p")}}）的元素。

在 DOM 中，此属性反射为 {{domxref("Element.elementTiming")}}。

## 使用方法

为 `elementtiming` 给出的值将成为被观测元素的标识符。

```html
<img alt="alt" src="img.jpg" elementtiming="label for element" />
```

可能需要观察的元素包括：

- 文章的主要图像。
- 博客文章标题。
- 购物网站中的轮播图像。
- 页面中主要视频的海报图像。

## 示例

```html
<img
  alt="博文主要图片的替代文字"
  src="my-massive-image.jpg"
  elementtiming="Main image" />

<p elementtiming="important-text">一些非常重要的信息。</p>
```

## 参见

- {{domxref("PerformanceElementTiming")}}
- {{domxref("Element.elementTiming")}}
