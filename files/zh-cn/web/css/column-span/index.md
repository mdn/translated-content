---
title: column-span
slug: Web/CSS/column-span
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`column-span`** 的值被设置为 `all` 时，可以让一个元素跨越所有的列。

{{EmbedInteractiveExample("pages/css/column-span.html")}}

```css
/* 关键字值 */
column-span: none;
column-span: all;

/* 全局值 */
column-span: inherit;
column-span: initial;
column-span: revert;
column-span: revert-layer;
column-span: unset;
```

一个跨越多列的元素被称为**跨越元素**（spanning element）。

## 语法

`column-span` 属性可以被指定为下面列出的关键字值之一。

### 取值

- `none`
  - : 元素不跨多个列。
- `all`
  - : 元素横跨所有列。元素出现之前，出现在元素之前的正常流中的内容在所有列之间自动平衡。该元素建立一个新的区块格式化上下文。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使标题跨越列

在该示例中，标题跨越了文章中的所有列。

#### HTML

```html
<article>
  <h2>这是一个跨越了所有的列的标题</h2>
  <p>h2 元素应该跨越所有列。文本的其余内容应该分布在各列中。</p>
  <p>这是一些使用 CSS `columns` 属性分成三列的文本。文本在各列中均匀分布。</p>
  <p>这是一些使用 CSS `columns` 属性分成三列的文本。文本在各列中均匀分布。</p>
  <p>这是一些使用 CSS `columns` 属性分成三列的文本。文本在各列中均匀分布。</p>
  <p>这是一些使用 CSS `columns` 属性分成三列的文本。文本在各列中均匀分布。</p>
</article>
```

#### CSS

```css
article {
  columns: 3;
}

h2 {
  column-span: all;
}
```

#### 结果

{{EmbedLiveSample('使标题跨越列', 'auto', 260)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [行级元素](/zh-CN/docs/Glossary/Inline-level_content)
- {{domxref("HTMLSpanElement")}}
