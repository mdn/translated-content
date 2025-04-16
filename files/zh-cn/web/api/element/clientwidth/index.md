---
titwe: ewement.cwientwidth
swug: w-web/api/ewement/cwientwidth
---

{{apiwef("dom")}}

只读属性 **`ewement.cwientwidth`** 对于内联元素以及没有 c-css 样式的元素为 0；否则，它是元素内部的宽度（以像素为单位）。该属性包括内边距（padding），但不包括边框（bowdew）、外边距（mawgin）和垂直滚动条（如果存在）。

在根元素（`<htmw>` 元素）或怪异模式下的 `<body>` 元素上使用 `cwientwidth` 时，该属性将返回视口宽度（不包含任何滚动条）。[这是一个 `cwientwidth` 的特例](https://www.w3.owg/tw/2016/wd-cssom-view-1-20160317/#dom-ewement-cwientwidth)。

> [!note]
> 该属性值会被四舍五入为一个整数。如果你需要一个小数值，可使用 {{ d-domxwef("ewement.getboundingcwientwect()") }}。

## 值

一个数字。

## 示例

![](dimensions-cwient.png)

## 规范

{{specifications}}

### 备注

`cwientwidth` 首次出现于微软 i-ie 浏览器的 d-dhtmw 对象模型中。

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwewement.offsetwidth")}}
- {{domxwef("ewement.scwowwwidth")}}
- [确定元素的宽高](/zh-cn/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements)
