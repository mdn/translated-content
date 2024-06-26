---
title: CanvasGradient
slug: Web/API/CanvasGradient
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas")}}{{AvailableInWorkers}}

**`CanvasGradient`** 接口表示描述渐变的[不透明对象](https://en.wikipedia.org/wiki/Opaque_data_type)。通过 {{domxref("CanvasRenderingContext2D.createLinearGradient()")}} 或 {{domxref("CanvasRenderingContext2D.createConicGradient()")}} 或 {{domxref("CanvasRenderingContext2D.createRadialGradient()")}} 的返回值得到。

## 属性

_不透明对象，没有暴露的属性。_

## 方法

- {{domxref("CanvasGradient.addColorStop()")}}
  - : 添加一个由偏移（`offset`）和颜色（`color`）定义的断点到渐变中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 创建方法在 {{domxref("CanvasRenderingContext2D")}}。
- {{HTMLElement("canvas")}} 元素及其有关接口 {{domxref("HTMLCanvasElement")}}。
