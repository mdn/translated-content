---
title: Window：mozInnerScreenX 属性
slug: Web/API/Window/mozInnerScreenX
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}{{Non-standard_Header}}

获取窗口视口左上角在屏幕坐标中的 X 坐标。

> [!NOTE]
> 该坐标以 CSS 像素 为单位报告，而非硬件像素。这意味着它会受到缩放级别的影响；要计算实际的物理屏幕像素数量，应使用 `nsIDOMWindowUtils.screenPixelsPerCSSPixel` 属性。

## 值

`window.mozInnerScreenX` 属性是一个浮点型的只读值；它没有默认值。

## 规范

不属于任何 W3C 技术规范或建议。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.mozInnerScreenY")}}
- `nsIDOMWindowUtils.screenPixelsPerCSSPixel`
