---
title: scroll-padding-bottom
slug: Web/CSS/scroll-padding-bottom
---

{{CSSRef}}

**`scroll-padding-bottom`** 属性定义了滚动口的*最优视区*——用于在用户视野中放置内容的目标区域——的下内边距。作者由此得以排除滚动口被其他内容（如固定定位的工具栏或侧边栏）所遮挡的区域，或在目标元素与滚动口的边之间留出更多余地。

{{EmbedInteractiveExample("pages/css/scroll-padding-bottom.html")}}

## 语法

```css
/* 关键字值 */
scroll-padding-bottom: auto;

/* <length> 值 */
scroll-padding-bottom: 10px;
scroll-padding-bottom: 1em;
scroll-padding-bottom: 10%;

/* 全局值 */
scroll-padding-bottom: inherit;
scroll-padding-bottom: initial;
scroll-padding-bottom: revert;
scroll-padding-bottom: revert-layer;
scroll-padding-bottom: unset;
```

### 取值

- `<length-percentage>`
  - : 滚动口的下内边距，为有效的长度或百分比。
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
