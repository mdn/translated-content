---
title: CanvasRenderingContext2D.miterLimit
slug: Web/API/CanvasRenderingContext2D/miterLimit
---

{{APIRef}}

The **`CanvasRenderingContext2D.miterLimit`** 是 Canvas 2D API 设置斜接面限制比例的属性。当获取属性值时，会返回当前的值（默认值是`10.0` ）。当给属性赋值时，0、负数、 {{jsxref("Infinity")}} 和 {{jsxref("NaN")}} 都会被忽略；除此之外都会被赋予一个新值。

参见 [Canvas Tutorial](/zh-CN/docs/Web/API/Canvas_API/Tutorial) 中的 [Applying styles and color](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) 章节。

## 语法

```
ctx.miterLimit = value;
```

### 选项

- `value`
  - : 斜接面限制比例的数字。0、负数、{{jsxref("Infinity")}} 和 {{jsxref("NaN")}} 都会被忽略。

## 简释

```
ctx.lineJoin = "miter"  // "miter" >   "round" )   "bevel" ]
```

只有当 lineJoin 显示为 ">" 时，miterLimit 才有效。边角的角度越小，斜接长度就会越大。为了避免斜接长度过长，我们可以使用 miterLimit 属性。如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 " ] " 类型来显示

## 示例

### 使用 `miterLimit` 属性

参见 [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)中的[应用样式和色彩](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#miterlimit_属性的演示示例)章节以获取更多信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义了该属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
