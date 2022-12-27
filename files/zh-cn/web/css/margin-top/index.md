---
title: margin-top
slug: Web/CSS/margin-top
---

{{CSSRef}}

## Summary

![The effect of the CSS margin-top property on the element box](/files/4101/margin-top.svg) **`margin-top`** 属性用来设置元素的顶部外边距，你也可以使用负值。

这个属性对于不可替换的 inline 元素没有效果，比如 {{HTMLElement("tt")}} 或者 {{HTMLElement("span")}}.

{{cssinfo}}

## Syntax

```css
/* <length> values */
margin-top: 10px;        /* 绝对长度 */
margin-top: 1em;         /*相对于字体大小 */
margin-top: 5%;          /*相对于最相邻的父级元素块（block）的宽度*/

/* Keyword values */
margin-top: auto;

/* Global values */
margin-top: inherit;
margin-top: initial;
margin-top: unset;
```

### Values

- `<length>`
  - : 设置固定长度 参考{{cssxref("&lt;length&gt;")}} 来查看合适的值。
- `<percentage>`
  - : 百分比值{{cssxref("&lt;percentage&gt;")}} 总是相对于 父元素块的宽度
- `auto`
  - : 参考 {{cssxref("margin")}}.

### Formal syntax

{{csssyntax}}

## 示例

```css
.content { margin-top:   5%; }
.sidebox { margin-top: 10px; }
.logo    { margin-top: -5px; }
#footer  { margin-top:  1em; }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
