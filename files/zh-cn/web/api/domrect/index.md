---
title: DOMRect
slug: Web/API/DOMRect
---

{{APIRef("Geometry Interfaces")}}

一个 **`DOMRect`** 代表一个矩形。

`DOMRect` 表示的盒子的类型由返回它的方法或属性指定。例如，WebVR API 的 {{domxref("VREyeParameters.renderRect")}} 指定了头戴式显示器的一只眼睛应该呈现的影像所在的 [canvas](/zh-CN/docs/Web/API/HTMLCanvasElement) 的视口。

它继承自它的父类，{{domxref("DOMRectReadOnly")}}。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("DOMRect.DOMRect","DOMRect()")}}
  - : 创建一个新的 `DOMRect` 对象。

## 属性

`DOMRect` 从其父类 _{{domxref("DOMRectReadOnly")}}_ 继承属性。不同之处在于它们不再是只读的。

- {{domxref("DOMRectReadOnly.x")}}
  - : `DOMRect` 原点的 x 坐标。
- {{domxref("DOMRectReadOnly.y")}}
  - : `DOMRect` 原点的 y 坐标。
- {{domxref("DOMRectReadOnly.width")}}
  - : `DOMRect` 的宽度。
- {{domxref("DOMRectReadOnly.height")}}
  - : `DOMRect` 的高度。
- {{domxref("DOMRectReadOnly.top")}}
  - : 返回 `DOMRect` 的顶坐标值（与 `y` 具有相同的值，如果 `height` 为负值，则为 `y + height` 的值）。
- {{domxref("DOMRectReadOnly.right")}}
  - : 返回 `DOMRect` 的右坐标值（与 `x + width` 具有相同的值，如果`width` 为负值，则为 `x` 的值）。
- {{domxref("DOMRectReadOnly.bottom")}}
  - : 返回 `DOMRect` 的底坐标值（与 `y + height` 具有相同的值，如果 `height` 为负值，则为 `y` 的值）。
- {{domxref("DOMRectReadOnly.left")}}
  - : 返回 `DOMRect` 的左坐标值（与 `x` 具有相同的值，如果 `width` 为负值，则为 `x + width` 的值）。

## 静态方法

- {{domxref("DOMRectReadOnly.fromRect()")}}
  - : 创建一个具有指定位置和尺寸的新 `DOMRect` 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- {{domxref("DOMPoint")}}
