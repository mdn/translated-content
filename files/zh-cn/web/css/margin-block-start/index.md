---
title: margin-block-start
slug: Web/CSS/margin-block-start
---

{{CSSRef}}{{SeeCompatTable}}

**`margin-block-start`** [CSS](/zh-CN/docs/Web/CSS) 属性定义了一个元素的逻辑块的开始边距，是用来根据元素的书写模式，方向和文本方向进行实际边界的衡量。

```css
/* <length> values */
margin-block-start: 10px;  /* 绝对长度 */
margin-block-start: 1em;   /* 文本的相对大小 */
margin-block-start: 5%;    /* 相对于最近块容器的大小 */

/* 关键字值 */
margin-block-start: auto;

/* 全局值 */
margin-block-start: inherit;
margin-block-start: initial;
margin-block-start: unset
```

{{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, or {{cssxref("margin-left")}} 属性对应于 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, 和{{cssxref("text-orientation")}}属性定义的值。

它涉及到 {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}},和 {{cssxref("margin-inline-end")}}属性，这些属性是用来定义其它元素的边界。

{{cssinfo}}

## Syntax

### Values

`margin-block-start` 属性有着和 {{cssxref("margin-left")}} 属性一样的值。

### Formal syntax

{{csssyntax}}

## 案例

### HTML Content

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS Content

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  margin-block-start: 20px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Example", 140, 140)}}

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

## 同样推荐

- 标记的物理属性：{{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, and {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
