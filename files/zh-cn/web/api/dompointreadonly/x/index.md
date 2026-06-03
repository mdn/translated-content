---
title: DOMPointReadOnly：x 属性
slug: Web/API/DOMPointReadOnly/x
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`DOMPointReadOnly`** 接口的 **`x`** 属性保存了空间中只读点的水平坐标 x。在 `DOMPoint` 对象的只读版本中，JavaScript 代码无法更改此属性。

通常情况下（在未做任何反转变换时），正的 `x` 值表示向右，负的 `x` 值表示向左。

## 值

一个双精度浮点值，表示该点的 x 坐标值。该值是**无限制的**，这意味着它可以是无穷大或非数（即，其值可能是 {{jsxref("NaN")}} 或 {{jsxref("Infinity", "±Infinity")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他坐标属性：{{domxref("DOMPointReadOnly.y", "y")}}、{{domxref("DOMPointReadOnly.z", "z")}} 和透视值 {{domxref("DOMPointReadOnly.w", "w")}}。
