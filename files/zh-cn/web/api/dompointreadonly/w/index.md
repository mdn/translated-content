---
title: DOMPointReadOnly：w 属性
slug: Web/API/DOMPointReadOnly/w
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`DOMPointReadOnly`** 接口的 **`w`** 属性包含空间中只读点的透视值 `w`。

如果你的脚本需要更改该属性的值，请改用 {{domxref("DOMPoint")}} 对象。

## 值

一个双精度浮点值，表示该点的 `w` 透视值。此值是**无限制的**，这意味着它允许为无穷大或非数（即其值可能是 {{jsxref("NaN")}} 或 {{jsxref("Infinity", "±无穷大")}}）。默认值为 `1.0`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他坐标属性：{{domxref("DOMPointReadOnly.x", "x")}}、{{domxref("DOMPointReadOnly.y", "y")}} 和 {{domxref("DOMPointReadOnly.z", "z")}}。
