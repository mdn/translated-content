---
title: unicode-bidi
slug: Web/CSS/unicode-bidi
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`unicode-bidi`** 属性，和 {{cssxref("direction")}} 属性，决定如何处理文档中的双书写方向文本（bidirectional text）。比如，如果一块内容同时包含有从左到右书写和从右到左书写的文本，那么用户代理（the user-agent）会使用复杂的 Unicode 算法来决定如何显示文本。`unicode-bidi` 属性会覆盖此算法，允许开发人员控制文本嵌入（text embedding）。

`unicode-bidi` 与 {{cssxref("direction")}} 是仅有的两个不受 {{cssxref("all")}} 简写影响的属性。

> **警告：** 此属性是文档类型定义（Document Type Definition, DTD）的设计者专用的。Web 设计者与其他类似的人员不应覆盖此属性。

```css
/* 关键字值 */
unicode-bidi: normal;
unicode-bidi: embed;
unicode-bidi: isolate;
unicode-bidi: bidi-override;
unicode-bidi: isolate-override;
unicode-bidi: plaintext;
/* 全局值 */
unicode-bidi: inherit;
unicode-bidi: initial;
unicode-bidi: unset;
```

{{cssinfo}}

## 语法

### 值

- `normal`
  - : 对双向算法，此元素不提供额外的嵌入级别。对于内联元素，隐式的重新排序在元素的边界上起作用。
- `embed`
  - : 对于内联元素，该值会为双向算法打开一个额外的嵌入级别。嵌入级别的方向是由 {{Cssxref("direction")}} 属性给出的。
- `bidi-override`
  - : 对于内联元素，该值会创建一个覆盖；对于块容器元素，该值将为不在另一个块容器元素内的内联级别的后代创建一个覆盖。这意味着在元素内部，根据 {{Cssxref("direction")}} 属性，重新排序是严格按照顺序排列的；双向算法的隐式部分被忽略。
- `isolate`
  - : 这个关键字表示计算元素容器的方向时，不考虑这个元素的内容。因此，这个元素就从它的兄弟姐妹中分离出来了。当应用它的双向分辨算法的时候，它的容器元素将其视为一个或多个 `U+FFFC Object Replacement Character`，即像 image 一样。
- `isolate-override`
  - : 这个关键字将 `isolate` 关键字的隔离行为应用于周围的内容，并将 `bidi-override` 关键字的覆盖行为应用于内部内容。
- `plaintext`
  - : 这个关键字在计算元素方向的时候，不考虑父元素的双向状态，也不考虑 {{cssxref("direction")}} 属性的值。它是使用 Unicode 双向算法的 P2 和 P3 规则计算的。
    这个值允许按照 Unicode 双向算法显示已经格式化的数据。

### 形式语法

{{csssyntax}}

## 示例

### CSS

```css
.bible-quote {
  direction: rtl;
  unicode-bidi: embed;
}
```

### HTML

```html
<div class="bible-quote">A line of text</div>
<div>Another line of text</div>
```

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("direction")}}
