---
title: scroll-margin-block-start
slug: Web/CSS/scroll-margin-block-start
---

{{CSSRef}}

**`scroll-margin-block-start`** 属性定义了滚动吸附区域在的块首外边距，此区域用于将此盒吸附至滚动口。滚动吸附区域的确定方法为：取变换后的边框盒，求其矩形包围盒（与滚动容器的坐标空间中的轴对齐），再加上指定的外边距。

{{EmbedInteractiveExample("pages/css/scroll-margin-block-start.html")}}

## 语法

```css
/* <length> 值 */
scroll-margin-block-start: 10px;
scroll-margin-block-start: 1em;

/* 全局值 */
scroll-margin-block-start: inherit;
scroll-margin-block-start: initial;
scroll-margin-block-start: revert;
scroll-margin-block-start: revert-layer;
scroll-margin-block-start: unset;
```

### 取值

- {{CSSXref("&lt;length&gt;")}}
  - : 滚动容器的块首外边距。

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
