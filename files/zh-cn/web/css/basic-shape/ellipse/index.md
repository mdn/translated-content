---
title: ellipse()
slug: Web/CSS/basic-shape/ellipse
l10n:
  sourceCommit: 20315338453f387f8c1f6c20a07766f8f71e8032
---

{{CSSRef}}

**`ellipse()`** [CSS](/zh-CN/docs/Web/CSS) 函数是 {{cssxref("&lt;basic-shape&gt;")}} [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)之一。

{{EmbedInteractiveExample("pages/css/function-ellipse.html")}}

## 语法

```css
shape-outside: ellipse(40% 50% at left);
shape-outside: ellipse(closest-side farthest-side at 30%);
```

椭圆本质上是一个扁平的圆形，因此 `ellipse()` 的行为与 {{cssxref("basic-shape/circle","circle()")}} 非常相似，只是我们需要指定两个半径 x 和 y。

### 值

- `<shape-radius>`

  - : 两个半径，按顺序是 x 和 y。可以是 {{cssxref("length")}}、{{cssxref("percentage")}} 或值 `closest-side` 和 `farthest-side`。

    - `closest-side`
      - : 使用形状中心到参考框最近边缘的长度。对于椭圆来说，这是半径维度中最近的边缘。
    - `farthest-side`
      - : 使用形状中心到参考框最远边缘的长度。对于椭圆来说，这是半径维度中最远的边缘。

- `<position>`

  - : 移动椭圆的中心。可以是 {{cssxref("length")}}、 {{cssxref("percentage")}}，或者类似于 `left` 这样的值。如果省略 `<position>` 值，则默认为中心。

## 形式语法

{{csssyntax}}

## 示例

### 基本 ellipse() 示例

这个示例显示了一个 x 半径为 40%，y 半径为 50% 的椭圆，位置在左边。这意味着椭圆的中心位于框的左边缘，使我们的文本围绕其周围形成一个半椭圆形状。你可以更改这些值来查看椭圆如何变化。

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse.html", '100%', 800)}}

### 使用 closest-side / farthest-side 值

`closest-side` 和 `farthest-side` 的关键字值对于基于浮动元素参考框大小创建快速椭圆形状非常有用。

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse-keywords.html", '100%', 800)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 使用该数据类型的属性：{{cssxref("clip-path")}}、{{cssxref("shape-outside")}}
- [基本形状指南](/zh-CN/docs/Web/CSS/CSS_shapes/Basic_shapes)
