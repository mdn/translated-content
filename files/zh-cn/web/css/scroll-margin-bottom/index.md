---
title: scroll-margin-bottom
slug: Web/CSS/scroll-margin-bottom
---

{{CSSRef}}

**`scroll-margin-bottom`** 属性定义了滚动吸附区域的下外边距，此区域用于将此盒吸附至滚动口。滚动吸附区域的确定方法为：取变换后的边框盒，求其矩形包围盒（与滚动容器的坐标空间中的轴对齐），再加上指定的外边距。

{{EmbedInteractiveExample("pages/css/scroll-margin-bottom.html")}}

## 语法

```css
/* <length> 值 */
scroll-margin-bottom: 10px;
scroll-margin-bottom: 1em;

/* 全局值 */
scroll-margin-bottom: inherit;
scroll-margin-bottom: initial;
scroll-margin-bottom: revert;
scroll-margin-bottom: revert-layer;
scroll-margin-bottom: unset;
```

### 取值

- {{CSSXref("&lt;length&gt;")}}
  - : 滚动容器的下外边距。

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
- [用 CSS 滚动吸附明确控制滚动](https://web.developers.google.cn/articles/css-scroll-snap)
