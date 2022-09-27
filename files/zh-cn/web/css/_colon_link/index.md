---
title: ':link'
slug: Web/CSS/:link
---

{{ CSSRef() }}

## 总结

`:link`伪类选择器是用来选中元素当中的链接。它将会选中所有尚未访问的链接，包括那些已经给定了其他伪类选择器的链接（例如{{cssxref(":hover")}}选择器，{{cssxref(":active")}}选择器，{{cssxref(":visited")}}选择器）。为了可以正确地渲染链接元素的样式，:link 伪类选择器应当放在其他伪类选择器的前面，并且遵循 LVHA 的先后顺序，即：`:link` — `:visited` — `:hover` — `:active`。`:focus`伪类选择器常伴随在`:hover`伪类选择器左右，需要根据你想要实现的效果确定它们的顺序。

## 例子

```css
a:link {color: slategray;}
.external:link {background-color: lightblue;}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
