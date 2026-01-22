---
title: column-fill
slug: Web/CSS/Reference/Properties/column-fill
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

**`column-fill`** [CSS](/zh-CN/docs/Web/CSS) 属性可控制元素内容分成列时的平衡方式。

{{InteractiveExample("CSS Demo: column-fill")}}

```css interactive-example-choice
column-fill: auto;
```

```css interactive-example-choice
column-fill: balance;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  height: 90%;
  columns: 3;
  text-align: left;
}
```

## 语法

```css
/* 关键字值 */
column-fill: auto;
column-fill: balance;
column-fill: balance-all;

/* 全局值 */
column-fill: inherit;
column-fill: initial;
column-fill: revert;
column-fill: revert-layer;
column-fill: unset;
```

`column-fill` 属性可指定为下列关键字值之一。初始值为 `balance`，这样内容就会在各列之间中保持平衡。

### 取值

- `auto`
  - : 按顺序填充列。内容只占用其所需的空间，可能导致某些列保持空白。
- `balance`
  - : 内容平均分配到各列。在片段式上下文中，如 [CSS 分页媒体](/zh-CN/docs/Web/CSS/Guides/Paged_media)，只有最后一个片段是平衡的。因此，在分页媒体中，只有最后一页是平衡的。
- `balance-all` {{Experimental_Inline}}
  - : 内容平均分配到各列。在片段式上下文中，如 [CSS 分页媒体](/zh-CN/docs/Web/CSS/Guides/Paged_media)，所有片段都是平衡的。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 平衡列内容

#### HTML

```html
<p class="fill-auto">
  本段一次填满一列。由于所有文字都可以填入第一列，所以其他列是空的。
</p>

<p class="fill-balance">
  这一段试图平衡各列的内容量，使用 CSS <code>balance</code>
  属性来平衡各列。
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

{{EmbedLiveSample('平衡列内容', 'auto', 320)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

> [!WARNING]
> 由于规范中的一些问题尚未解决，`column-fill` 在不同浏览器之间存在一些交互操作性问题和错误。
>
> 特别是在使用 `column-fill: auto` 按顺序填充列时，Chrome 浏览器只有在多列容器具有区块尺寸（例如水平书写模式下的高度）时才会参考此属性。而 Firefox 浏览器则会始终查询该属性，因此在没有尺寸的情况下，会在第一列填充所有内容。

## 参见

- [多列布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-count")}}
- {{CSSXref("column-width")}}
