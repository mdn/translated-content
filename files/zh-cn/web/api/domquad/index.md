---
title: DOMQuad
slug: Web/API/DOMQuad
l10n:
  sourceCommit: 525ae099185446f58b200ac59b2c423ad319a2f0
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`DOMQuad` 是由四个（定义了任意四边形的角的） `DOMPoint` 组成的集合。返回 `DOMQuad` 使得 `getBoxQuads()` 在存在任意 2D 或 3D 变换时，依然能返回准确的信息。它还具有一个方便的 `bounds` 属性来返回 `DOMRectReadOnly`，适用于那些只需要轴对齐的边界矩形的情况。

## 构造函数

- {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}}
  - : 创建一个新的 `DOMQuad` 对象。

## 实例属性

- {{domxref("DOMQuad.p1")}} {{ReadOnlyInline}}
  - : 表示 `DOMQuad` 的拐角的 {{domxref("DOMPoint")}}。
- {{domxref("DOMQuad.p2")}} {{ReadOnlyInline}}
  - : 表示 `DOMQuad` 的拐角的 {{domxref("DOMPoint")}}。
- {{domxref("DOMQuad.p3")}} {{ReadOnlyInline}}
  - : 表示 `DOMQuad` 的拐角的 {{domxref("DOMPoint")}}。
- {{domxref("DOMQuad.p4")}} {{ReadOnlyInline}}
  - : 表示 `DOMQuad` 的拐角的 {{domxref("DOMPoint")}}。

## 实例方法

- {{domxref("DOMQuad.fromRect()")}}
  - : 根据传入的坐标集返回一个新的 `DOMQuad` 对象。
- {{domxref("DOMQuad.fromQuad()")}}
  - : 根据提供的输入，返回一个新的 `DOMQuad` 对象或一组四边形坐标。
- {{domxref("DOMQuad.getBounds()")}}
  - : 返回一个包含 `DOMQuad` 对象坐标和尺寸的 {{domxref("DOMRect")}} 对象。
- {{domxref("DOMQuad.toJSON()")}}
  - : 返回 `DOMQuad` 对象的 JSON 表示形式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
