---
title: scroll-margin-block
slug: Web/CSS/scroll-margin-block
---

{{CSSRef}}

[简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties) `scroll-margin-block` 设置了元素的块向滚动外边距。

{{EmbedInteractiveExample("pages/css/scroll-margin-block.html")}}

## 属性构成

此属性为下列 CSS 属性的简写属性：

- {{CSSXref("scroll-margin-block-end")}}
- {{CSSXref("scroll-margin-block-start")}}

## 语法

```css
/* <length> 值 */
scroll-margin-block: 10px;
scroll-margin-block: 1em 0.5em;

/* 全局值 */
scroll-margin-block: inherit;
scroll-margin-block: initial;
scroll-margin-block: revert;
scroll-margin-block: revert-layer;
scroll-margin-block: unset;
```

### 取值

- {{CSSXref("&lt;length&gt;")}}
  - : 滚动容器对应边的外边距。

## 描述

`scroll-margin` 值表示定义滚动吸附区域的外边距，此区域用于将此盒吸附至滚动口。滚动吸附区域的确定方法为：取变换后的边框盒，求其矩形包围盒（与滚动容器的坐标空间中的轴对齐），再加上指定的外边距。

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
