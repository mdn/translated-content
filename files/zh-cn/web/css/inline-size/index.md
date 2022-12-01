---
title: inline-size
slug: Web/CSS/inline-size
---

{{CSSRef}}

**`inline-size`** [CSS](/zh-CN/docs/Web/CSS) 属性影响一个元素的{{cssxref("width")}} 或 {{cssxref("height")}}，以改变一个元素的盒模型的水平或垂直大小（是 width 还是 height 取决于该元素的{{cssxref("writing-mode")}}）。

{{EmbedInteractiveExample("pages/css/inline-size.html")}}

## 语法

```css
/* <length> values */
inline-size: 300px;
inline-size: 25em;

/* <percentage> values */
inline-size: 75%;

/* Keyword values */
inline-size: max-content;
inline-size: min-content;
inline-size: fit-content(20em);
inline-size: auto;

/* Global values */
inline-size: inherit;
inline-size: initial;
inline-size: unset;
```

如果元素的 writing-mode 是垂直方向的它会影响 height，否则默认是影响 width。

有一个与 inline-size 属性有关的{{cssxref("block-size")}}，它定义了元素的其他尺寸。

{{cssinfo}}

### 值

`inline-size`属性的可选值与{{cssxref("width")}}和{{cssxref("height")}}的可选值一样。

### 正式语法

{{csssyntax}}

## 示例

### HTML

```html
<p class="exampleText">Example text</p>
```

### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  inline-size: 110px;
}
```

{{EmbedLiveSample("Example")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- The mapped physical properties: {{cssxref("width")}} and {{cssxref("height")}}
- {{cssxref("writing-mode")}}
