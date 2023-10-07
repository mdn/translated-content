---
title: scroll-padding
slug: Web/CSS/scroll-padding
---

{{CSSRef}}

[简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties) **`scroll-padding`** 同时设置元素的所有滚动内边距，其赋值方式较为类似 {{CSSXref("padding")}} 属性为元素内边距赋值的方式。

{{EmbedInteractiveExample("pages/css/scroll-padding.html")}}

`scroll-padding-*` 属性定义了滚动口的*最优视区*——用于在用户视野中放置内容的目标区域——的内边距。作者由此得以排除滚动口被其他内容（如固定定位的工具栏或侧边栏）所遮挡的区域，或在目标元素与滚动口的边之间留出更多余地。

## 属性构成

此属性为下列 CSS 属性的简写属性：

- {{CSSXref("scroll-padding-bottom")}}
- {{CSSXref("scroll-padding-left")}}
- {{CSSXref("scroll-padding-right")}}
- {{CSSXref("scroll-padding-top")}}

## 语法

```css
/* 关键字值 */
scroll-padding: auto;

/* <length> 值 */
scroll-padding: 10px;
scroll-padding: 1em 0.5em 1em 1em;
scroll-padding: 10%;

/* 全局值 */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: revert-layer;
scroll-padding: unset;
```

### 取值

- {{CSSXref("&lt;length-percentage&gt;")}}
  - : 滚动口对应边的内边距，为有效的长度（{{CSSXref("&lt;length&gt;")}}）或百分比（{{CSSXref("&lt;percentage&gt;")}}）。
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
