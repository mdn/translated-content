---
title: border-right-width
slug: Web/CSS/border-right-width
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 的**`border-right-width`** 用来设置盒子右边框的宽度。

{{EmbedInteractiveExample("pages/css/border-right-width.html")}}

## 语法

```css
/* Keyword values */
border-right-width: thin;
border-right-width: medium;
border-right-width: thick;

/* <length> values */
border-right-width: 10em;
border-right-width: 3vmax;
border-right-width: 6px;

/* Global keywords */
border-right-width: inherit;
border-right-width: initial;
border-right-width: unset;
```

### 数值

- `<line-width>`

  - : 定义边框的宽度，或者作为显性非负的长度值 {{cssxref("&lt;length&gt;")}} 或者是关键字。如果他是一个关键字，它必须是下列值的一种：

    - `thin` 一个细边框
    - `medium` 一个中等边框
    - `thick` 一个粗边框

    > **备注：** 因为规范没有定义每个关键字表示的确切厚度，当使用其中之一的关键字时，需要具体实施才知道确切结果。不过，它们通常遵循下面的模式 `thin ≤ medium ≤ thick`, 在单独文档中这些值内部是恒定不变的。

### 形式语法

{{csssyntax}}

## 例子

### HTML

```html
<div>Element 1</div>
<div>Element 2</div>
```

### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-right-width: thick;
}
div:nth-child(2) {
  border-right-width: 2em;
}
```

### 结果

{{EmbedLiveSample('Example', '100%')}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 其他

- The other border-width-related CSS properties: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-top-width")}}, and {{Cssxref("border-width")}}.
- The other border-right-related CSS properties: {{Cssxref("border")}}, {{Cssxref("border-right")}}, {{Cssxref("border-right-style")}}, and {{Cssxref("border-right-color")}}.
