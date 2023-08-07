---
title: scroll-padding-inline
slug: Web/CSS/scroll-padding-inline
---

{{CSSRef}}

[简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties) **`scroll-padding-inline`** 设置了元素的行向滚动内边距。

{{EmbedInteractiveExample("pages/css/scroll-padding-inline.html")}}

滚动内边距属性定义了滚动口的*最优视区*——用于在用户视野中放置内容的目标区域——的内边距。作者由此得以排除滚动口被其他内容（如固定定位的工具栏或侧边栏）所遮挡的区域，或在目标元素与滚动口的边之间留出更多余地。

## 属性构成

此属性为下列 CSS 属性的简写属性：

- {{CSSXref("scroll-padding-inline-end")}}
- {{CSSXref("scroll-padding-inline-start")}}

## 语法

```css
/* 关键字值 */
scroll-padding-inline: auto;

/* <length> 值 */
scroll-padding-inline: 10px;
scroll-padding-inline: 1em 0.5em;
scroll-padding-inline: 10%;

/* 全局值 */
scroll-padding-inline: inherit;
scroll-padding-inline: initial;
scroll-padding-inline: revert;
scroll-padding-inline: revert-layer;
scroll-padding-inline: unset;
```

### 取值

- `<length-percentage>`
  - : 滚动口对应边的内边距，为有效的长度或百分比。
- `auto`
  - : 此内边距由用户代理所决定。此值通常为 `0px`，但用户代理可检测非零值是否更合理并另行处理。

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
