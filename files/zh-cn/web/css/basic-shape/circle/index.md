---
title: circle()
slug: Web/CSS/basic-shape/circle
l10n:
  sourceCommit: 20315338453f387f8c1f6c20a07766f8f71e8032
---

{{CSSRef}}

**`circle()`** CSS [函数](/zh-CN/docs/Web/CSS/CSS_Functions)定义了一个圆形，使用半径和位置来描述。它是 {{cssxref("&lt;basic-shape&gt;")}} 数据类型之一。

{{EmbedInteractiveExample("pages/css/function-circle.html")}}

## 语法

```css
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
```

## 值

- `<shape-radius>`

  - : 这可以是一个 {{cssxref("length")}} 值，或者是一个 {{cssxref("percentage")}} 值，或者是 `closest-side` 和 `farthest-side` 关键字值。

    - `closest-side`
      - : 使用从形状中心到参照盒子的最近边缘的长度。对于圆形来说，这是任何维度中最近的边缘。
    - `farthest-side`
      - : 使用从形状中心到参照盒子的最远边缘的长度。对于圆形来说，这是任何维度中最远的边缘。

- `<position>`

  - : 移动圆的中心。可以是一个 {{cssxref("length")}} 值，或者是一个 {{cssxref("percentage")}} 值，或者是类似 `left` 的值。如果省略了 `<position>` 值，则默认为中心。

## 形式语法

{{csssyntax}}

## 示例

### 基本圆形

在下面的示例中，{{cssxref("shape-outside")}} 属性的值为 `circle(50%)`，用于在浮动元素周围使文本环绕成圆形。

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 使用该数据类型的属性：{{cssxref("clip-path")}}、{{cssxref("shape-outside")}}
- [基本形状指南](/zh-CN/docs/Web/CSS/CSS_shapes/Basic_shapes)
