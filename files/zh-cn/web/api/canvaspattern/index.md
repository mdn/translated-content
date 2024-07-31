---
title: CanvasPattern
slug: Web/API/CanvasPattern
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`CanvasPattern`** 接口表示一个[不透明对象](https://en.wikipedia.org/wiki/Opaque_data_type)，描述了一个基于图像、画布或视频的模板，该模板通过 {{domxref("CanvasRenderingContext2D.createPattern()")}} 方法创建。

它可以用作 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 或 {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}。

## 实例属性

_非透明对象，没有暴露的属性。_

## 实例方法

_没有继承来的方法。_

- {{domxref("CanvasPattern.setTransform()")}}
  - : 应用 {{domxref("DOMMatrix")}} 对模板做线性变换

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CanvasRenderingContext2D.createPattern()")}}
- {{HTMLElement("canvas")}} 元素及其相关接口{{domxref("HTMLCanvasElement")}}
