---
title: "HTMLElement: offsetWidth property"
short-title: offsetWidth
slug: Web/API/HTMLElement/offsetWidth
page-type: web-api-instance-property
browser-compat: api.HTMLElement.offsetWidth
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLElement")}} 接口的 **`offsetWidth`** 只读属性以整数形式返回元素的布局宽度。

通常，`offsetWidth` 是元素 CSS 宽度的像素测量值，包括任何边框、内边距和垂直滚动条（如果渲染了的话）。它不包括伪元素（如 `::before` 或 `::after`）的宽度。

如果元素被隐藏（例如，将元素或其某个祖先元素的 `style.display` 设置为 `"none"`），则返回 `0`。

## 值

一个整数。

## 示例

![一个具有较大内边距、边框和外边距的示例元素。`offsetWidth` 是元素的布局宽度，包括其内边距和边框，但不包括其外边距。](dimensions-offset.png)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [确定元素的尺寸](/zh-CN/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
- {{domxref("HTMLElement.offsetHeight")}}
- {{domxref("HTMLElement.offsetLeft")}}
- {{domxref("HTMLElement.offsetTop")}}
- {{domxref("Element.getBoundingClientRect()")}}
