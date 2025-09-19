---
title: DOMQuad：p4 属性
short-title: p4
slug: Web/API/DOMQuad/p4
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`DOMQuad`** 接口的 **`p4`** 属性包含用于表示 `DOMQuad` 的四个角之一的 {{domxref("DOMPoint")}} 对象。当从 {{domxref("DOMQuad.fromRect_static", "DOMQuad.fromRect()")}} 创建时，它就是点 (x, y + height)。

## 值

{{domxref("DOMPoint")}} 对象包含以下双精度浮点数值：

- {{domxref("DOMPoint.x")}}：水平坐标。
- {{domxref("DOMPoint.y")}}：垂直坐标。
- {{domxref("DOMPoint.z")}}：深度坐标。
- {{domxref("DOMPoint.w")}}：透视值。默认值为 1.0。

这些值中的每一个都是**无限制的**，这意味着它们可以是无穷大或无效值（即，其值可能是 {{jsxref("NaN")}} 或 {{jsxref("Infinity", "±Infinity")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他 `DOMPoint` 属性：{{domxref("DOMQuad.p1", "p1")}}、{{domxref("DOMQuad.p2", "p2")}} 和 {{domxref("DOMQuad.p3", "p3")}}。
