---
title: DOMPointReadOnly：z 属性
slug: Web/API/DOMPointReadOnly/z
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`DOMPointReadOnly`** 接口的 **`z`** 属性保存了空间中只读点的深度坐标 z。

如果你的脚本需要更改此属性的值，请改用 {{domxref("DOMPoint")}} 对象。

通常情况下（在未做任何反转变换时），`z` 的正值表示朝向用户（屏幕外），负值表示远离用户（屏幕内）。

## 值

一个双精度浮点值，表示该点的 z 坐标值。该值是**无限制的**，这意味着它可以是无穷大或非数（即其值可能是 {{jsxref("NaN")}} 或 {{jsxref("Infinity", "±Infinity")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他坐标属性：{{domxref("DOMPointReadOnly.x", "x")}}、{{domxref("DOMPointReadOnly.y", "y")}} 和透视值 {{domxref("DOMPointReadOnly.w", "w")}}。
