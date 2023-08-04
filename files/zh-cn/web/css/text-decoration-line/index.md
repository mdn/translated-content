---
title: text-decoration-line
slug: Web/CSS/text-decoration-line
---

{{CSSRef}}

[CSS](/zh-CN/docs/CSS) 属性 **`text-decoration-line`** 用于设置元素中的文本的修饰类型。当要设置多个线修饰属性时，用 {{cssxref("text-decoration")}} 简写属性会比分别写多个属性更方便。

```css
/* Keyword values */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: blink;
text-decoration-line: underline overline; /* Two decoration lines */
text-decoration-line: overline underline line-through; /* Multiple decoration lines */

/* Global values */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: unset;
```

{{cssinfo}}

## 语法

### 值

`text-decoration-line` 属性可以设置为 `none`, 或者**一个及多个**用空格分隔的下列值。

- `none`
  - : 表示没有文本修饰效果。
- `underline`
  - : 在文本的下方有一条修饰线。
- `overline`
  - : 在文本的上方有一条修饰线。
- `line-through`
  - : 有一条贯穿文本中间的修饰线。
- `blink {{deprecated_inline}}`
  - : 文本闪烁（文本交替处于显示与隐藏状态）。客户代理都一致没有实现文本闪烁效果。考虑到为了支持使用 [CSS 动画](/zh-CN/docs/Web/CSS/animation)，该值也**不宜使用**。

### 形式语法

{{csssyntax}}

## 示例

```html
<p class="wavy">Here's some text with wavy red underline!</p>
<p class="both">This text has lines both above and below it.</p>
```

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}

.both {
  text-decoration-line: underline overline;
}
```

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 当要设置多个线修饰属性时，用 {{cssxref("text-decoration")}} 简写属性会比分别写多个属性更方便。
