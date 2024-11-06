---
title: Window.scrollX
slug: Web/API/Window/scrollX
---

{{ APIRef() }}

返回文档/页面水平方向滚动的像素值。

## 示例

```js
// 如果 scrollX 大于 400，则把文档重新滚动到左上角。
if (window.scrollX > 400) {
  window.scroll(0, 0);
}
```

## 备注

`pageXOffset` 属性是 `scrollX` 属性的别名。这意味这如果你没有为其中的任一属性重新赋值，`window.pageXOffset == window.scrollX` 总为真。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.scrollY")}}
