---
title: color
slug: Web/CSS/Reference/At-rules/@media/color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) [媒体特性](/zh-CN/docs/Web/CSS/Reference/At-rules/@media#媒体特性) **`color`** 可用于检测输出设备每个颜色分量（红、绿、蓝）的位数。

## 语法

`color` 特性被指定为 {{cssxref("&lt;integer&gt;")}} 值，用于表示输出设备每个颜色分量（红、绿、蓝）的位数。如果设备不是彩色设备，该值为 0。它属于范围特性，这意味着你还可以使用带前缀的 **`min-color`** 和 **`max-color`** 变体，分别用于查询最小值和最大值。

> [!NOTE]
> 如果各个颜色分量由不同的位数表示，则取其中最小的位数。例如，如果显示器对蓝色和红色使用 5 位，而对绿色使用 6 位，那么该设备被视为每个颜色分量使用 5 位。如果设备使用索引颜色，则取颜色表中每个颜色分量的最小位数。

请参阅[使用 CSS 为 HTML 元素应用颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Applying_color)以进一步了解如何使用 CSS 为 HTML 应用颜色。

## 示例

### HTML

```html
<p>
  这段文字在非彩色设备上应显示为黑色，在低色彩数的设备上应显示为红色，而在高色彩数的设备上应显示为绿色调。
</p>
```

### CSS

```css
p {
  color: black;
}

/* 任意彩色设备 */
@media (color) {
  p {
    color: red;
  }
}

/* 任意彩色设备，且每个颜色分量至少有 8 位 */
@media (min-color: 8) {
  p {
    color: #24ba13;
  }
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- CSS {{cssxref("color")}} 属性
- CSS {{cssxref("&lt;color&gt;")}} 数据单位
