---
title: margin-block
slug: Web/CSS/margin-block
---

{{CSSRef}}{{SeeCompatTable}}

**`margin-block`**这个[CSS](/zh-CN/docs/Web/CSS)属性定义了一个元素的逻辑块开始和结束边距，根据元素的写入模式、方向性和文本方向映射到物理边界。

```css
/* 有长度的具体的值 */
margin-block: 10px 20px;  /* 一个绝对的长度值 */
margin-block: 1em 2em;   /* 相对于文本大小的值 */
margin-block: 5% 2%;    /* 相对于最近的块容器宽度的值 */
margin-block: 10px; /* 设置开始值和结束值 */

/* 关键字 值 */
margin-block: auto;

/* 全局 值 */
margin-block: inherit;
margin-block: initial;
margin-block: unset;
```

这些值对应的是{{CSSxRef("margin-top")}}和{{CSSxRef("margin-bottom")}}，或者 {{CSSxRef("margin-right")}}，和{{CSSxRef("margin-left")}}，这些属性取决于{{CSSxRef("writing-mode")}}，{{CSSxRef("direction")}}，和{{CSSxRef("text-orientation")}}。

这些值可以单独设置为{{CSSxRef("margin-block-start")}}和{{CSSxRef("margin-block-end")}}。inline direction 属性是{{CSSxRef("margin-inline")}}，也可设置为{{CSSxRef("margin-inline-start")}}，和{{CSSxRef("margin-inline-end")}}。

## 语法

### 值

`margin-block`属性采用和{{CSSxRef("margin-left")}}属性相同的值。

### 正规语法

{{CSSSyntax}}

## 示例

### HTML 部分

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS 部分

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  margin-block: 20px 40px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Example", 140, 140)}}

## 规范

{{Specifications}}

{{CSSInfo}}

## 浏览器兼容性

{{Compat}}

## 请参考

- 所映射的物理特性： {{CSSxRef("margin-top")}}，{{CSSxRef("margin-right")}}，{{CSSxRef("margin-bottom")}}和{{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}，{{CSSxRef("direction")}}，{{CSSxRef("text-orientation")}}
