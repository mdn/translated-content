---
title: table-layout
slug: Web/CSS/table-layout
---

{{CSSRef}}

**table-layout** CSS 属性定义了用于布局{{htmlelement("table", "表格")}}的单元格、行和列的算法。

{{EmbedInteractiveExample("pages/css/table-layout.html")}}

## 语法

```css
/* 关键字值 */
table-layout: auto;
table-layout: fixed;

/* 全局值 */
table-layout: inherit;
table-layout: initial;
table-layout: revert;
table-layout: revert-layer;
table-layout: unset;
```

### 取值

- `auto`
  - : 默认情况下，大多数浏览器使用自动表格布局算法。表格及其单元格的宽度会根据内容自动调整大小。
- `fixed`

  - : 表格和列的宽度是由 `table` 和 `col` 元素的宽度或第一行单元格的宽度来设置的。后续行中的单元格不会影响列的宽度。

    在“fixed”布局方法下，一旦下载并分析了第一行表格，整个表格就可以被渲染出来。这可以加快渲染时间，相比于“automatic”布局方法，但是后续单元格内容可能不适合提供的列宽。单元格使用 {{Cssxref("overflow")}} 属性来确定是否要剪裁任何溢出的内容，但仅当表格具有已知宽度时才会生效；否则，它们不会溢出到单元格之外。

## 形式语法

{{csssyntax}}

## 形式定义

{{csssyntax}}

## 示例

### 具有 text-overflow 的固定宽度表格

这个例子使用了固定的表格布局，结合 {{cssxref("width")}} 属性，限制了表格的宽度。{{cssxref("text-overflow")}} 属性被用来在单词太长无法容纳时应用省略号。如果表格布局是 `auto`，表格将会根据其内容自动扩展大小，而不考虑指定的 `width`。

#### HTML

```html
<table>
  <tr>
    <td>Ed</td>
    <td>Wood</td>
  </tr>
  <tr>
    <td>Albert</td>
    <td>Schweitzer</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Fonda</td>
  </tr>
  <tr>
    <td>William</td>
    <td>Shakespeare</td>
  </tr>
</table>
```

#### CSS

```css
table {
  table-layout: fixed;
  width: 120px;
  border: 1px solid red;
}

td {
  border: 1px solid blue;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

#### 结果

{{EmbedLiveSample('具有 text-overflow 的固定宽度表格')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`<table>`](/zh-CN/docs/Web/HTML/Element/table)
