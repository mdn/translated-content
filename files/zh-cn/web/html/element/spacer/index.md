---
title: <spacer>
slug: Web/HTML/Element/spacer
---

{{non-standard_header}}{{deprecated_header}}

**`<spacer>`** 是过时的 HTML 元素，它可以向页面插入间隔。它由 Netscape 设计，用于实现单像素布局图像的相同效果，Web 设计师用它来向页面添加空白，而不需要实际使用图片。但是，`<spacer>` 不再受任何主流浏览器支持，并且相同效果可以简单由 CSS 实现。

Firefox 是 Netscape 浏览器的后继，在版本 4 中移除了 `<spacer>` 的支持。

## 属性

就像其他 HTML 元素一样，这个元素支持 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

- {{ htmlattrdef("type") }}
  - : 这个属性指定间隔的类型，可用的值为 `horizontal`, `vertical` 和 `block`。
- {{ htmlattrdef("size") }}
  - : 当类型为 `horizontal` 或 `vertical` 时，这个属性可以用于定义间隔大小，以像素为单位。
- {{ htmlattrdef("width") }}
  - : 当类型为 `block` 时，这个属性可以用于定义间隔的宽度，以像素为单位。
- {{ htmlattrdef("height") }}
  - : 当类型为 `block` 时，这个属性可以用于定义间隔的高度，以像素为单位。
- {{ htmlattrdef("align") }}
  - : 这个属性定义了间隔的对齐，可用的值为 `left`, `right` 和 `center`。

## 示例

```html
<span>Just a text node</span>
<spacer type="horizontal" size="10"></spacer>
<span>Just another text node</span>
<spacer type="block" width="10" height="10"></spacer>
```

## 规范

并不是任何规范的一部分。

{{ HTMLRef }}
