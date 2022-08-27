---
title: 块级尺寸
slug: Web/CSS/block-size
---
{{CSSRef}}{{SeeCompatTable}}CSS 的 block-size 属性定义了元素区块的水平宽度和垂直高度，也就是{{cssxref("width")}}或{{cssxref("height")}}属性，它们的大小取决于写入模式，即{{cssxref("writing-mode")}}的值。{{EmbedInteractiveExample("pages/css/block-size.html")}}

## 语句

```css
/* <length> values */
block-size: 300px;
block-size: 25em;

/* <percentage> values */
block-size: 75%;

/* Keyword values */
block-size: 25em border-box;
block-size: 75% content-box;
block-size: max-content;
block-size: min-content;
block-size: available;
block-size: fit-content;
block-size: auto;

/* Global values */
block-size: inherit;
block-size: initial;
block-size: unset;If the writing mode is vertically oriented, the value of block-size relates to the width of the element; otherwise, it relates to the height of the element. A related property is {{cssxref("inline-size")}}, which defines the other dimension of the element.
```

如果写入模式为垂直方向，block-size 的值与元素的宽度有关，否则取决于元素的高度。相关的属性是定义了元素的其它大小的{{cssxref("inline-size")}}。

## 语句

### 值

`block-size` `属性的值是`p{{cssxref("width")}} 属性与 {{cssxref("height")}} 属性的值的结合。

### 正式语句

{{csssyntax}}

## 例子

### HTML

```html
<p class="exampleText">Example text</p>
```

### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

{{EmbedLiveSample("Example")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("css.properties.block-size")}}

## 相关链接

- The mapped physical properties: {{cssxref("width")}} and {{cssxref("height")}}
- {{cssxref("writing-mode")}}
