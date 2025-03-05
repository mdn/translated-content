---
title: CanvasRenderingContext2D：miterLimit 属性
slug: Web/API/CanvasRenderingContext2D/miterLimit
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.miterLimit`** 属性用于设置斜接限制比例。

> [!NOTE]
> 关于更多些斜接信息，参见 [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)中的[应用样式和色彩](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)。

## 值

一个数字，指定斜接限制比例，于坐标空间单位中。零、负数、{{jsxref("Infinity")}} 和 {{jsxref("NaN")}} 值将被忽略。默认值为 `10.0`。

## 示例

### 使用 `miterLimit` 属性

参见 [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)的[应用样式和色彩](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#miterlimit_属性的演示示例)章节获取更多信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义该属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
