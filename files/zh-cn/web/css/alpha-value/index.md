---
title: <alpha-value>
slug: Web/CSS/alpha-value
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types) **`<alpha-value>`** 表示可为 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;percentage&gt;")}} 的值，指定了颜色的 **{{Glossary("alpha", "alpha 通道")}}**（即**透明度**）。

## 语法

`<alpha-value>` 的值由 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;percentage&gt;")}} 所指定。

若指定为数，则可用范围为 0（完全透明）到 1.0（完全不透明），之间为十进制值，即 0.5 表示使用了一半的前景色和一半的背景色。虽然允许出现在 0 到 1 的范围外的值，但是这些值将被[截断](<https://en.wikipedia.org/wiki/Clamping_(graphics)>)，使其处于 0 到 1 的范围中。

若以百分比指定 alpha 值，则 0% 对应完全透明，而 100% 表示完全不透明。

## 形式语法

{{CSSSyntax}}

## 插值

在用于动画时，CSS 数据类型 `<alpha-value>` 的值按实值浮点数进行{{Glossary("interpolation", "插值")}}。插值速度由与动画关联的[计时函数](/zh-CN/docs/Web/CSS/easing-function)所决定。

## 示例

### 设置文本颜色不透明度

{{CSSXref("color_value/rgb", "rgb()")}} 函数接受可选的第四个参数用于指定 alpha 值。下列示例展示了如何使用 alpha 值应用有 60% 透明度的颜色：

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

- [基本文本和字体样式](/zh-CN/docs/Learn/CSS/Styling_text/Fundamentals)
- [CSS 数据类型](/zh-CN/docs/Web/CSS/CSS_Types)
- [CSS 颜色](/zh-CN/docs/Web/CSS/CSS_colors)
- {{CSSXref("&lt;color&gt;")}}
