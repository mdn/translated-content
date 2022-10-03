---
title: block-size
slug: Web/CSS/block-size
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 的 **`block-size`** 属性会根据元素的书写模式来定义元素块的水平宽度或垂直高度。它会根据 {{cssxref("writing-mode")}} 的值来映射至 {{cssxref("width")}} 属性或 {{cssxref("height")}} 属性。

如果书写模式是垂直方向，那么 `block-size` 的值就会和元素的宽有关，否则就会和元素的高有关。一个与 `block-size` 相关的属性是 {{cssxref("inline-size")}}，`block-size` 用于定义元素在某个方向上的长度，而 `inline-size` 用于定义元素在另一个方向上的长度。

{{EmbedInteractiveExample("pages/css/block-size.html")}}

## 语法

```css
/* <length> values */
block-size: 300px;
block-size: 25em;

/* <percentage> values */
block-size: 75%;

/* Keyword values */
block-size: max-content;
block-size: min-content;
block-size: fit-content(20em);
block-size: auto;

/* Global values */
block-size: inherit;
block-size: initial;
block-size: revert;
block-size: revert-layer;
block-size: unset;
```

### 值

`block-size` 属性的值与 {{cssxref("width")}} 属性和 {{cssxref("height")}} 属性的值相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 垂直文本的 block-size

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

#### 结果

{{EmbedLiveSample("垂直文本的 block-size")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 映射至物理方向的属性：{{cssxref("width")}} 和 {{cssxref("height")}}
- {{cssxref("writing-mode")}}
