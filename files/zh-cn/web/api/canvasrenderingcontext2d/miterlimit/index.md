---
title: CanvasRenderingContext2D.miterLimit
slug: Web/API/CanvasRenderingContext2D/miterLimit
l10n:
  sourceCommit: bda6da832e5682d6247e1c20790e7b0aa0ec45e1
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.miterLimit`** 属性用于设置斜接限制比例。

> **备注：** 关于更多些斜接信息，参见 [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)中[应用样式和色彩](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)这一章节。

## 值

一个数字，指定斜接限制比例，于坐标空间单位中。值为零、负数、{{jsxref("Infinity")}} 和 {{jsxref("NaN")}} 将被忽略。默认值为 `10.0`。

## 示例

### 使用 `miterLimit` 属性

参见 [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)中[应用样式和色彩](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#miterLimit_属性的演示示例)这一章节获取更多信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义该属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
