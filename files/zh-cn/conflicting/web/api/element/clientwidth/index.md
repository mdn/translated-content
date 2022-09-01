---
title: document.width
slug: conflicting/Web/API/Element/clientWidth
original_slug: Web/API/Document/width
---
{{ApiRef}} {{deprecated_header}}

> **备注：** 从 Gecko 6.0 开始，` 不再支持 document.width，请使用``document.body.clientWidth `来代替。查看{{domxref("element.clientWidth")}}.

## 概述

返回当前文档中的{{HTMLElement("body")}}元素的宽度，单位为像素.Internet Explorer 不支持该属性。

## 语法

```
pixels = document.width;
```

## 示例

```js
function init() {
    alert("当前文档的宽度为 " + document.width + " 像素.");
}
```

## 请使用下面的属性来替代该属性

```
document.body.clientWidth              /* <body>元素的宽度 */
document.documentElement.clientWidth   /* <html>元素的宽度 */
window.innerWidth                      /* window 的宽度 */
```

## 规范

HTML5

## 相关链接

- {{domxref("document.height")}}
