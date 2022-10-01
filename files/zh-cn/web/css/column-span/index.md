---
title: column-span
slug: Web/CSS/column-span
---

{{ CSSRef("CSS Multi-columns") }}

## 概述

[CSS](/zh-CN/docs/CSS) 属性`column-span` 的值被设置为`all`时，可以让一个元素跨越所有的列。一个跨越多列的元素被称为**spanning element。**

{{cssinfo}}

## 语法

```
Formal syntax: {{csssyntax("column-span")}}
```

```
column-span: none;
column-span: all;

column-span: inherit;
```

### 取值

- `none`
  - : 元素不跨多个列。
- `all`
  - : 元素横跨所有列。元素出现之前，出现在元素之前的正常流中的内容在所有列之间自动平衡。该元素建立一个新的块格式上下文。

## 例子

下例中的 h2 元素横跨 article 元素中的各列

### HTML

```
<article>
  <h2>My Very Special Columns</h2>
  <p>This is a bunch of text split into three columns
     using the CSS `columns` property. The text
     is equally distributed over the columns.</p>
</article>
```

### CSS

```
article {
  columns: 3;
}

h2 {
  column-span: all;
}
```

### Result

{{EmbedLiveSample('Example', 'auto', 120)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
