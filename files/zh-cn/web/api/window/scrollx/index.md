---
title: Window.scrollX
slug: Web/API/Window/scrollX
---

{{ APIRef() }}

## 概述

返回文档/页面水平方向滚动的像素值。

## 语法

```
var x = window.scrollX;
```

### 参数

- x 为该文档从左侧开始滚动的像素值。

## 示例

```js
// 如果 scrollX 大于 400，则把文档重新滚动到左上角。
if (window.scrollX > 400) {
  window.scroll(0, 0);
}
```

## 备注

`pageXOffset` 属性是 `scrollX` 属性的别名：

```
window.pageXOffset == window.scrollX; // 总是 true
```

为了跨浏览器兼容性，请使用 `window.pageXOffset` 代替 `window.scrollX`。另外，旧版本的 IE（<9）两个属性都不支持，必须通过其他的非标准属性来解决此问题。完整的兼容性代码如下：

```js
var x =
  window.pageXOffset !== undefined
    ? window.pageXOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollLeft;
var y =
  window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
```

## 规范

- CSSOM View Module: [window.scrollX](http://dev.w3.org/csswg/cssom-view/#widl-Window-scrollX) (Editor's Draft)

## 相关链接

- {{domxref("window.scrollY")}}
