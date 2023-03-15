---
title: ':nth-last-of-type'
slug: Web/CSS/:nth-last-of-type
---

{{CSSRef}}

## 概述

**`:nth-last-of-type(an+b)`** 这个 CSS [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) 匹配那些在它之后有 `an+b-1` 个相同类型兄弟节点的元素，其中 `n` 为正值或零值。它基本上和 {{Cssxref(":nth-of-type")}} 一样，只是它从**结尾**处反序计数，而不是从开头处。

可以在 {{Cssxref(":nth-child")}} 中查看关于语法参数更详细的描述。

## 语法

{{csssyntax}}

## Example

### HTML

```html
<div>
  <span>This is a span.</span>
  <span>This is another span.</span>
  <em>This is emphasized.</em>
  <span>Wow, this span gets limed!!!</span>
  <strike>This is struck through.</strike>
  <span>Here is one last span.</span>
</div>
```

### CSS

```css
span:nth-last-of-type(2) {
  background-color: lime;
}
```

### Result

{{EmbedLiveSample('Example','100%', '60')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref(":nth-last-child")}}, {{Cssxref(":nth-of-type")}}
