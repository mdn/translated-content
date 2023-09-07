---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.tan()`** 方法返回一个数值的正切值。

## 语法

```plain
Math.tan(x)
```

### 参数

- `x`
  - : 一个数值，表示一个角（单位：弧度）。

## 描述

`tan` 方法返回一个数值，表示一个角的正切值。

由于 `tan` 是 `Math` 的静态方法，所以应该像这样使用 `Math.tan()`，而不是作为你创建的 `Math` 实例的方法。

## 示例

### 示例：使用 `Math.tan`

下面的函数返回变量 `x` 的正切值：

```js
function getTan(x) {
  return Math.tan(x);
}
```

由于 `Math.tan()` 函数接受弧度数值，但是通常使用度更方便，下面的函数可以接受以度为单位的数值，将其转为弧度，然后返回其正切值。

```js
function getTanDeg(deg) {
  var rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
