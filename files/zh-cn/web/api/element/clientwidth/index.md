---
title: Element.clientWidth
slug: Web/API/Element/clientWidth
---
{{APIRef("DOM")}}

内联元素以及没有 CSS 样式的元素的 **`clientWidth`** 属性值为 0。**`Element.clientWidth`** 属性表示元素的内部宽度，以像素计。该属性包括内边距 padding，但不包括边框 border、外边距 margin 和垂直滚动条（如果有的话）。

当在根元素 (\<html>元素) 上使用 clientWidth 时 (或者在\<body>上，如果文档是在 quirks(怪异) 模式下)，将返回 viewport 的宽度 (不包括任何滚动条). [This is a special case of `clientWidth`](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientwidth).

> **备注：** 该属性值会被四舍五入为一个整数。如果你需要一个小数值，可使用 {{ domxref("element.getBoundingClientRect()") }}。

## 语法

```
var intElemClientWidth = element.clientWidth;
```

`intElemClientWidth` 是一个整数，表示元素的 `clientWidth`。`clientWidth` 是一个只读属性。

## 示例

![Image:Dimensions-client.png](/@api/deki/files/185/=Dimensions-client.png)

## 规范

{{Specifications}}

### 备注

`clientWidth` 首次出现于微软 IE 早期的 DHTML 对象模型中。

## 浏览器兼容性

{{Compat("api.Element.clientWidth")}}

## 参见

- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("Element.scrollWidth")}}
- [Determining the dimensions of elements](/zh-CN/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
