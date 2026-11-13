---
title: <alpha-value>
slug: Web/CSS/Reference/Values/alpha-value
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

**`<alpha-value>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types) 表示可为 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;percentage&gt;")}} 的值，指定了颜色的 [**alpha 通道**](/zh-CN/docs/Glossary/Alpha)或**透明度**。

## 语法

`<alpha-value>` 的值由 [`<number>`](/zh-CN/docs/Web/CSS/Reference/Values/number) 或 {{cssxref("percentage")}} 所指定。

若指定为数，则可用范围为 0（完全透明）到 1.0（完全不透明），之间为十进制值，即 0.5 表示使用了一半的前景色和一半的背景色。虽然允许出现在 0 到 1 的范围外的值，但是这些值将被[截断](<https://en.wikipedia.org/wiki/Clamping_(graphics)>)，使其处于 0 到 1 的范围中。

若以百分比指定 alpha 值，则 0% 对应完全透明，而 100% 表示完全不透明。

## 形式语法

{{csssyntax}}

## 插值

在用于动画时，CSS 数据类型 `<alpha-value>` 的值按实值浮点数进行{{Glossary("interpolation", "插值")}}。插值速度由与动画关联的[缓动函数](/zh-CN/docs/Web/CSS/Reference/Values/easing-function)所决定。

## 示例

### 设置文本颜色不透明度

[`rgb()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/rgb) 函数接受可选的第四个参数用于指定 alpha 值。下列示例展示了如何使用 alpha 值应用有 60% 透明度的颜色：

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

### 设置形状图像的阈值

此处使用 alpha 值决定将图像的哪些部分视为形状的一部分：

```css
/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;
```

## 规范

{{Specifications}}

## 参见

- [基本文本和字体样式](/zh-CN/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS 数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)
- [CSS 颜色](/zh-CN/docs/Web/CSS/Guides/Colors)
- [`<color>`](/zh-CN/docs/Web/CSS/Reference/Values/color_value)
