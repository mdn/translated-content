---
title: DOMPointReadOnly：y 属性
slug: Web/API/DOMPointReadOnly/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`DOMPointReadOnly`** 接口的 **`y`** 属性表示空间中只读点的垂直坐标 y。

如果你的脚本需要更改此属性的值，请改用 {{domxref("DOMPoint")}} 对象。

通常情况下（在未做任何反转变换时），`y` 的正值表示向下，负值表示向上。

## 值

一个双精度浮点值，表示该点的 y 坐标值。此值是**无限制的**，这意味着它可以是无穷大或非数（即，其值可能是 {{jsxref("NaN")}} 或 {{jsxref("Infinity", "±Infinity")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他坐标属性：{{domxref("DOMPointReadOnly.x", "x")}}、{{domxref("DOMPointReadOnly.z", "z")}} 和透视值 {{domxref("DOMPointReadOnly.w", "w")}}。
