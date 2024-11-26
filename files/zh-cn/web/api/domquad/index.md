---
title: DOMQuad
slug: Web/API/DOMQuad
l10n:
  sourceCommit: f1efcbb10e9d5bea6df19f18e670230dc7d87f18
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`DOMQuad` 是由四个 `DOMPoint` 组成的集合，用于定义一个任意四边形的四个角。返回 `DOMQuad` 使得 `getBoxQuads()` 即使在存在任意 2D 或 3D 变换的情况下也能返回准确的信息。它有一个方便的 `bounds` 属性，返回一个 `DOMRectReadOnly`，适用于那些只需要轴对齐的边界矩形的情况。

## 构造函数

- {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}}
  - : 创建一个新的 `DOMQuad` 对象。

## 实例属性

- {{domxref("DOMQuad.p1")}} {{ReadOnlyInline}}
  - : 表示 `DOMQuad` 的边角的 {{domxref("DOMPoint")}}。
- {{domxref("DOMQuad.p2")}} {{ReadOnlyInline}}
  - : 表示 `DOMQuad` 的边角的 {{domxref("DOMPoint")}}。
- {{domxref("DOMQuad.p3")}} {{ReadOnlyInline}}
  - : 表示 `DOMQuad` 的边角的 {{domxref("DOMPoint")}}。
- {{domxref("DOMQuad.p4")}} {{ReadOnlyInline}}
  - : 表示 `DOMQuad` 的边角的 {{domxref("DOMPoint")}}。

## 实例方法

- {{domxref("DOMQuad.fromRect()")}}
  - : 根据传入的坐标集返回一个新的 `DOMQuad` 对象。
- {{domxref("DOMQuad.fromQuad()")}}
  - : 根据传入的坐标集返回一个新的 `DOMQuad` 对象。
- {{domxref("DOMQuad.getBounds()")}}
  - : 返回一个包含 `DOMQuad` 对象坐标和尺寸的 {{domxref("DOMRect")}} 对象。
- {{domxref("DOMQuad.toJSON()")}}
  - : 返回 `DOMQuad` 对象的 JSON 表示形式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
