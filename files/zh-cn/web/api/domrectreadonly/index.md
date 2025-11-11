---
title: DOMRectReadOnly
slug: Web/API/DOMRectReadOnly
---

{{APIRef("Geometry Interfaces")}}

**`DOMRectReadOnly`** 接口通过详细列出 {{domxref("DOMRect")}} 所使用的标准属性来定义一个属性不可变的矩形。

## 构造函数

- {{domxref("DOMRectReadOnly.DOMRectReadOnly","DOMRectReadOnly()")}}
  - : 用来创建新的 `DOMRectReadOnly` 对象，但请注意，该构造函数不能由第三方 JavaScript 调用：这样做将返回“Illegal constructor”类型错误。

## 属性

- {{domxref("DOMRectReadOnly.x")}} {{readonlyInline}}
  - : `DOMRect` 原点的 x 坐标。
- {{domxref("DOMRectReadOnly.y")}} {{readonlyInline}}
  - : `DOMRect` 原点的 y 坐标。
- {{domxref("DOMRectReadOnly.width")}} {{readonlyInline}}
  - : `DOMRect` 的宽度。
- {{domxref("DOMRectReadOnly.height")}} {{readonlyInline}}
  - : `DOMRect` 的高度。
- {{domxref("DOMRectReadOnly.top")}} {{readonlyInline}}
  - : 返回 `DOMRect` 的顶部坐标值（通常与 `y` 相同）。
- {{domxref("DOMRectReadOnly.right")}} {{readonlyInline}}
  - : 返回 `DOMRect` 的右坐标值（通常与 `x + width` 相同）。
- {{domxref("DOMRectReadOnly.bottom")}} {{readonlyInline}}
  - : 返回 `DOMRect` 的底部坐标值（通常与 `y + height` 相同）。
- {{domxref("DOMRectReadOnly.left")}} {{readonlyInline}}
  - : 返回 `DOMRect` 的左坐标值（通常与 `x` 相同）。

## 静态方法

- {{domxref("DOMRectReadOnly.fromRect()")}}
  - : 使用指定的位置和尺寸创建一个新的 `DOMRect` 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他

- {{domxref("DOMPoint")}}
