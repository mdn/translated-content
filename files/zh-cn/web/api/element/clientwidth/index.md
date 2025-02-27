---
title: Element.clientWidth
slug: Web/API/Element/clientWidth
---

{{APIRef("DOM")}}

只读属性 **`Element.clientWidth`** 对于内联元素以及没有 CSS 样式的元素为 0；否则，它是元素内部的宽度（以像素为单位）。该属性包括内边距（padding），但不包括边框（border）、外边距（margin）和垂直滚动条（如果存在）。

在根元素（`<html>` 元素）或怪异模式下的 `<body>` 元素上使用 `clientWidth` 时，该属性将返回视口宽度（不包含任何滚动条）。[这是一个 `clientWidth` 的特例](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientwidth)。

> [!NOTE]
> 该属性值会被四舍五入为一个整数。如果你需要一个小数值，可使用 {{ domxref("element.getBoundingClientRect()") }}。

## 值

一个数字。

## 示例

![](dimensions-client.png)

## 规范

{{Specifications}}

### 备注

`clientWidth` 首次出现于微软 IE 浏览器的 DHTML 对象模型中。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("Element.scrollWidth")}}
- [确定元素的宽高](/zh-CN/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
