---
title: DOMRect.DOMRect()
slug: Web/API/DOMRect/DOMRect
---

{{APIRef("DOM")}}{{ SeeCompatTable() }}

**`DOMRect()`** 构造函数生成一个新的 {{domxref("DOMRect")}} 对象。

## 语法

```js
var myDOMRect = new DOMRect(x, y, width, height);
```

### 参数

- x
  - : `DOMRect` 原点的 `x` 坐标。
- y
  - : `DOMRect` 原点的 y 坐标。
- width
  - : `DOMRect` 的宽度。
- height
  - : `DOMRect` 的高度。

## 例子

想生成一个新 `DOMRect`，你可以运行一行这样的代码：

```js
myDOMRect = new DOMRect(0, 0, 100, 100);
// running 'myDOMRect' in the console would then return
// DOMRect { x: 0, y: 0, width: 100, height: 100, top: 0, right: 100, bottom: 100, left: 0 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
