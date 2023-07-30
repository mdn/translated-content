---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.cos()`** 函数返回一个数值的余弦值。

## 语法

```plain
Math.cos(x)
```

### 参数

- `x`
  - : 一个以弧度为单位的数值。

## 描述

`cos` 方法返回一个 -1 到 1 之间的数值，表示角度（单位：弧度）的余弦值。

由于 `cos` 是 `Math` 的静态方法，所以应该像这样使用：`Math.cos()`，而不是作为你创建的 `Math` 实例的方法。

## 示例

### 示例：使用 `Math.cos`

```js
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398

Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The {{jsxref("Global_Objects/Math", "Math")}} object it belongs to.
