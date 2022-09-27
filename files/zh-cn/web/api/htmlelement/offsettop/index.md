---
title: HTMLElement.offsetTop
slug: Web/API/HTMLElement/offsetTop
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetTop`** 为只读属性，它返回当前元素相对于其 {{domxref("HTMLElement.offsetParent","offsetParent")}} 元素的顶部内边距的距离。

## 语法

```plain
topPos = element.offsetTop;
```

### 参数

- `topPos` 为返回的像素数。

## 示例

```js
var d = document.getElementById("div1");
var topPos = d.offsetTop;

if (topPos > 10) {
  // div1 距离它的 offsetParent 元素的顶部的距离大于 10 px
}
```

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

In compliance with the specification, this property will return `null` on Webkit if the element is hidden (the `style.display` of this element or any ancestor is `"none"`) or if the `style.position` of the element itself is set to `"fixed"`.

This property will return `null` on Internet Explorer (9) if the `style.position` of the element itself is set to `"fixed"`. (Having `display:none` does not affect this browser.)
