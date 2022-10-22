---
title: scroll-margin
slug: Web/CSS/scroll-margin
---

{{CSSRef}}

**`scroll-margin`** 属性是修改一系列 `scroll-margin` 手写特性的快捷方式，它分配值的方式与 `margin` 属性为各个 `margin-*` 手写特性分配值的方式非常类似。

{{EmbedInteractiveExample("pages/css/scroll-margin.html")}}

`scroll-margin` 属性的值代表用于将盒元素拖拽到显示区域的拖拽滚动区域的起点。拖拽滚动区域由是由转换后边框大小的盒元素决定的，它会找到盒元素的矩形边界（在滚动的容器的坐标空间轴上），并添加指定的起点。

{{cssinfo}}

## Syntax

```css
/* <length> values */
scroll-margin: 10px;
scroll-margin: 1em .5em 1em 1em;

/* Global values */
scroll-margin: inherit;
scroll-margin: initial;
scroll-margin: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : 从滚动容器的相应边缘开始。

### Formal syntax

{{csssyntax}}

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}
