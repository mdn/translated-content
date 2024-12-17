---
title: border-left-width
slug: Web/CSS/border-left-width
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 的 **`border-left-width`** 属性用来设置盒子的左边框的宽度。

{{EmbedInteractiveExample("pages/css/border-left-width.html")}}

## 语法

```css
/* 关键字数值  */
border-left-width: thin;
border-left-width: medium;
border-left-width: thick;

/* 长度数值 */
border-left-width: 10em;
border-left-width: 3vmax;
border-left-width: 6px;

/* 全局关键字 */
border-left-width: inherit;
border-left-width: initial;
border-left-width: unset;
```

### 数值

- `<br-width>`

  - : 定义边框的宽度，或者作为显性非负的长度值 {{cssxref("&lt;length&gt;")}} 或者是关键字。如果他是一个关键字，它必须是下列值的一种：

    - `thin` 一个细边框
    - `medium` 一个中等边框
    - `thick` 一个粗边框

    > [!NOTE]
    > 因为规范没有定义每个关键字表示的确切厚度，当使用其中之一的关键字时，需要具体实施才知道确切结果。不过，它们通常遵循下面的模式 `thin ≤ medium ≤ thick`, 在单独文档中这些值内部是恒定不变的。

### 形式语法

{{csssyntax}}

## 示例

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
  border-left-width: thick;
}
div:nth-child(2) {
  border-left-width: 2em;
}
```

### 结果

{{EmbedLiveSample('示例', '100%')}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- The other border-width-related CSS properties: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}, and {{Cssxref("border-width")}}.
- The other border-left-related CSS properties: {{Cssxref("border")}}, {{Cssxref("border-left")}}, {{Cssxref("border-left-style")}}, and {{Cssxref("border-left-color")}}.
