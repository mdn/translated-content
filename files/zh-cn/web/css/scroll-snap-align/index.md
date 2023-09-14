---
title: scroll-snap-align
slug: Web/CSS/scroll-snap-align
---

{{CSSRef}}

**`scroll-snap-align`** 属性将盒子的吸附位置指定为其吸附区域（作为对齐对象）在其吸附容器的吸附口（作为对齐容器）中的对齐方式。其两值分别指定了在块向轴盒行向轴上的吸附对齐方式。若仅指定一值，则第二值默认为同一值。

{{EmbedInteractiveExample("pages/css/scroll-snap-align.html")}}

## 语法

```css
/* 关键字值 */
scroll-snap-align: none;
scroll-snap-align: start end; /* 当设置两值时，第一值为块向，第二值为行向 */
scroll-snap-align: center;

/* 全局值 */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: revert;
scroll-snap-align: revert-layer;
scroll-snap-align: unset;
```

### 取值

- `none`
  - : 此盒在此轴上未定义吸附位置。
- `start`
  - : 此盒的滚动吸附区域在滚动容器的吸附口中的首对齐为此轴上的吸附位置。
- `end`
  - : 此盒的滚动吸附区域在滚动容器的吸附口中的末对齐为此轴上的吸附位置。
- `center`
  - : 此盒的滚动吸附区域在滚动容器的吸附口中的居中对齐为此轴上的吸附位置。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 滚动吸附](/zh-CN/docs/Web/CSS/CSS_scroll_snap)
- [用 CSS 滚动吸附明确控制滚动](https://web.dev/css-scroll-snap/)
