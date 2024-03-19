---
title: column-fill
slug: Web/CSS/column-fill
---

{{CSSRef}}

**`column-fill`** [CSS](/zh-CN/docs/Web/CSS) 属性可控制元素内容分成列时的平衡方式。

{{EmbedInteractiveExample("pages/css/column-fill.html")}}

## 语法

```css
/* Keyword values */
column-fill: auto;
column-fill: balance;
column-fill: balance-all;

/* Global values */
column-fill: inherit;
column-fill: initial;
column-fill: revert;
column-fill: revert-layer;
column-fill: unset;
```

`column-fill` 属性可指定为下列关键字值之一。初始值为 `balance` ，这样内容就会在各栏之间中保持平衡。

### 取值

- `auto`
  - : 按顺序填充列。内容只占用其所需的空间，可能导致某些列保持空白。
- `balance`
  - : 内容平均分配到各栏。在片段式上下文中，如 [CSS 分页媒体](/zh-CN/docs/Web/CSS/CSS_paged_media) ，只有最后一个片段是平衡的。因此，在分页媒体中，只有最后一页是平衡的。
- `balance-all` {{Experimental_Inline}}
  - : 内容平均分配到各栏。在片段式上下文中，如 [CSS 分页媒体](/zh-CN/docs/Web/CSS/CSS_paged_media) ，所有片段都是平衡的。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 平衡列内容

#### HTML

```html
<p class="fill-auto">
  This paragraph fills columns one at a time. Since all of the text can fit in
  the first column, the others are empty.
</p>

<p class="fill-balance">
  This paragraph attempts to balance the amount of content in each column.
</p>
```

#### CSS

```css
p {
  height: 7em;
  background: #ff9;
  columns: 3;
  column-rule: 1px solid;
}

p.fill-auto {
  column-fill: auto;
}

p.fill-balance {
  column-fill: balance;
}
```

#### 结果

{{EmbedLiveSample('Balancing_column_content', 'auto', 320)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

> **警告：** 由于规范中的一些问题尚未解决， `column-fill` 在不同浏览器之间存在一些交互操作性问题和错误。
>
> 特别是在使用 `column-fill: auto` 按顺序填充列时，Chrome 浏览器只有在多列容器具有区块尺寸（例如水平书写模式下的高度）时才会参考此属性。而 Firefox 浏览器则会始终查询该属性，因此在没有尺寸的情况下，会在第一列填充所有内容。

## 参见

- [多列布局](/zh-CN/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-count")}}
- {{CSSXref("column-width")}}
