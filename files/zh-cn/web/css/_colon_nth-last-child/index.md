---
title: ":nth-last-child"
slug: Web/CSS/:nth-last-child
---

{{CSSRef}}

**`:nth-last-child()`** 这个[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) 从兄弟节点中从后往前匹配处于某些位置的元素

```css
/* 在所有兄弟节点中，从后往前
   选择所有 4 的倍数的节点 */
:nth-last-child(4n) {
  color: lime;
}
```

> **备注：** 这个伪类和 {{Cssxref(":nth-child")}} 基本一致，但它是从*结尾*计数，而不是从开始计数。

## 语法

`nth-last-child`伪类接受一个参数，用来作为一个模式，从后往前匹配元素。

### Keyword values

- `odd`
  - : 代表一些元素，它们在所在的兄弟节点中，从后往前计算的数字位置是奇数，比如：1, 3, 5 等。
- `even`
  - : 代表一些元素，它们在所在的兄弟节点中，从后往前计算的数字位置是偶数，比如：2, 4, 6 等。

### Functional notation

- `<An+B>`
  - : 代表一些元素，它们在所在兄弟节点中的数字位置满足模式 `An+B`, `n`是 0 或者任意的正整数。从结尾开始计算的第一个元素的索引值是`1`. `A` 和 `B` 必须都是 {{cssxref("&lt;integer&gt;")}}.

### Formal syntax

{{csssyntax}}

## 示例

### 选择器示例

- `tr:nth-last-child(odd)` or `tr:nth-last-child(2n+1)`
  - : 表示 HTML 表的倒数的奇数行:1、3、5 等。
- `tr:nth-last-child(even)` or `tr:nth-last-child(2n)`
  - : 表示 HTML 表的倒数的偶数行:2、4、6 等。
- `:nth-last-child(7)`
  - : 表示倒数第 7 个元素。
- `:nth-last-child(5n)`
  - : 表示倒数的第 5、10、15 等元素。
- `:nth-last-child(3n+4)`
  - : 表示倒数的第 4、7、10、13 等元素。
- `:nth-last-child(-n+3)`
  - : 表示一组兄弟节点中的最后三个元素。
- `p:nth-last-child(n)` or `p:nth-last-child(n+1)`
  - : 表示一组兄弟节点中的每个`<p>`元素。这与一个简单的`p`选择器相同。(由于`n`从 0 开始，而最后一个元素从 1 开始，`n`和`n+1`都会选择相同的元素。)
- `p:nth-last-child(1)` or `p:nth-last-child(0n+1)`
  - : 表示所有处于兄弟节点中倒数第一位的元素`<p>`。这与{{cssxref(":last-child")}}选择器相同。

### Table example

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td>First line</td>
    </tr>
    <tr>
      <td>Second line</td>
    </tr>
    <tr>
      <td>Third line</td>
    </tr>
    <tr>
      <td>Fourth line</td>
    </tr>
    <tr>
      <td>Fifth line</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border: 1px solid blue;
}

/* Selects the last three elements */
tr:nth-last-child(-n + 3) {
  background-color: pink;
}

/* Selects every element starting from the second to last item */
tr:nth-last-child(n + 2) {
  color: blue;
}

/* Select only the last second element */
tr:nth-last-child(2) {
  font-weight: 600;
}
```

#### 结果

{{EmbedLiveSample('Table_example', 300,150)}}

### Quantity query

数量查询样式元素取决于它们的数量。在本例中，当给定列表中至少有三个列表项时，列表项变为红色。这是通过组合`nth-last-child`和 [通用兄弟选择器](/zh-CN/docs/Web/CSS/General_sibling_selectors).的功能来实现的

#### HTML

```html
<h4>A list of four items (styled):</h4>
<ol>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ol>

<h4>A list of two items (unstyled):</h4>
<ol>
  <li>One</li>
  <li>Two</li>
</ol>
```

#### CSS

```css
/* If there are at least three list items,
   style them all */
li:nth-last-child(n + 3),
li:nth-last-child(n + 3) ~ li {
  color: red;
}
```

#### Result

{{EmbedLiveSample('Quantity_query', '100%', 270)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref(":nth-child") }}
- [Quantity Queries for CSS](https://alistapart.com/article/quantity-queries-for-css)
