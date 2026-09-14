---
title: text-size-adjust
slug: Web/CSS/Reference/Properties/text-size-adjust
---

{{SeeCompatTable}}

**`text-size-adjust`** [CSS](/zh-CN/docs/Web/API/CSS) 控制将一些手机或平板设备上使用的文本溢出算法（text inflation algorithm）。其他类型的设备上的浏览器会忽略此属性。

因为许多网站还没有适配屏幕较小的设备，移动设备的浏览器和桌面浏览器在渲染网页时可能会有不同。它们不是以设备屏幕宽度布局网页，而是用比屏幕宽一些的{{glossary("viewport", "视口")}}去布局网页，通常是 800 到 1000 像素。为了将视口上的布局映射到原始设备屏幕上，手机浏览器要么只渲染整个页面的一部分，要么将视窗缩放至原始屏幕大小。

因为缩放适配小屏幕而导致文字会变得很小，许多手机浏览器会使用文本溢出算法放大文本，改善可读性。当一个包含文本的元素使用了 100% 的屏幕宽度，该算法会增加文本大小，但是不会修改布局。`text-size-adjust` 这个属性允许开发者去除或者修改浏览器的这种行为，比如，当网页已经适配了小屏幕之后，就不需要这么做了。

## 语法

```css
/* 关键字值 */
text-size-adjust: none;
text-size-adjust: auto;

/* <percentage> 值 */
text-size-adjust: 80%;

/* 全局值 */
text-size-adjust: inherit;
text-size-adjust: initial;
text-size-adjust: revert;
text-size-adjust: revert-layer;
text-size-adjust: unset;
```

`text-size-adjust` 属性的值为 `none`、`auto` 或 `<percentage>`。

### 属性值

- `none`
  - : 禁用浏览器的文本溢出算法。
- `auto`
  - : 启用浏览器的文本溢出算法。该值一般用于取消先前使用 CSS 设置的 `none`。
- `<percentage>`
  - : 启用浏览器的文本溢出算法，并使用用一个百分数来确定文本放大程度。

### 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Apple 的文档](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16)
- [Google Chrome 的行为描述](https://docs.google.com/document/d/1PPcEwAhXJJ1TQShor29KWB17KJJq7UJOM34oHwYP3Zg/edit)
- [Gecko 的行为描述](https://dbaron.org/log/20111126-font-inflation)，来自 L. David Baron
