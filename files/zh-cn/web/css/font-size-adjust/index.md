---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
---

{{CSSRef}}

## 概述

`font-size-adjust` CSS 属性定义字体大小应取决于小写字母，而不是大写字母。在字体较小时，字体的可读性主要由小写字母的大小决定，通过此选项即可进行调整。

当{{ Cssxref("font-family") }}的首选字体不可用时，如果备选字体的尺寸比（小写字母的大小与字体大小的比）有较大的差别时，可读性可能会成为一大问题。

为了兼容于不支持 `font-size-adjust` 的浏览器，该属性的值应该被定义为 {{ Cssxref("font-size") }} 的值所要乘的系数。这意味着定义的值应该为首选字体的尺寸比。例如，样式表这样定义

```css
font-size: 14px;
font-size-adjust: 0.5;
```

的真实作用是定义小写字母的大小应该为 `7px` 高（0.5 × 14px）。

{{cssinfo}}

## 语法

```css
/* 仍使用 font size 的值 */
font-size-adjust: none;

/* 使用小写字母大小为 font size 一半大小的字体大小 */
font-size-adjust: 0.5;

font-size-adjust: inherit;
```

### 值

- `none`
  - : 仅根据{{ Cssxref("font-size") }}属性决定字体大小。
- `<number>`

  - : 根据使小写字母大小（根据字体的 x-height--西文字体设计中的基线与主线的距离--决定）为该值乘以{{ Cssxref("font-size") }}的结果定义字体。

    数字应为{{ Cssxref("font-family") }}的首选字体的尺寸比（x-height 和字体大小的比）。这意味着当首选字体可用时，不论浏览器是否支持 font-size-adjust，都会显示文字为{{ Cssxref("font-size") }}的大小。

### 正式语法

{{csssyntax("font-size-adjust")}}

## 示例

[查看在线演示](/samples/cssref/font-size-adjust.html)

```css
p {
  font:
    12px Verdana,
    "DejaVu Sans",
    sans-serif;
  font-size-adjust: 0.58;
}
```

## 规范

{{Specifications}}

`font-size-adjust` CSS 属性最初在 CSS 2 中被定义，但在 CSS 2.1 被放弃。后又被新添加至 CSS 3。

## 浏览器兼容性

{{Compat}}

## 参见

- [David Baron about font-size-adjust](http://dbaron.org/log/20080613-firefox3-css#font-size-adjust)
