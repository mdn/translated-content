---
title: table-layout
slug: Web/CSS/table-layout
---

{{CSSRef}}

**table-layout** CSS 属性定义了用于布局表格*单元格*，*行*和*列*的算法。

```plain
/* Keyword values */
table-layout: auto;
table-layout: fixed;

/* Global values */
table-layout: inherit;
table-layout: initial;
table-layout: unset;
```

{{cssinfo}}

## 语法

```css
/* Keyword values */
table-layout: auto;
table-layout: fixed;

/* Global values */
table-layout: inherit;
table-layout: initial;
table-layout: unset;
```

### 值

- {{Cssxref("auto")}}
  - : 大多数浏览器采用自动表格布局算法对表格布局。表格及单元格的宽度取决于其包含的内容。
- `fixed`

  - : 表格和列的宽度通过表格的宽度来设置，某一列的宽度仅由该列首行的单元格决定。在当前列中，该单元格所在行之后的行并不会影响整个列宽。

    使用“fixed”布局方式时，整个表格可以在其首行被下载后就被解析和渲染。这样对于“automatic”自动布局方式来说可以加速渲染，但是其后的单元格内容并不会自适应当前列宽。任何一个包含溢出内容的单元格可以使用 {{Cssxref("overflow")}} 属性控制是否允许内容溢出。

### 正式语法

{{csssyntax}}

## 示例

本示例使用了 fixed 的表格布局，结合{{cssxref("width")}}属性来限制表格的宽。{{cssxref("text-overflow")}} 属性用于文字过长时显示省略号。

如果表格的布局是 auto，即使指定了表格的 width，表格仍然会自适应内容自动撑开。

### HTML

```html
<table>
 <tr><td>Ed</td><td>Wood</td></tr>
 <tr><td>Albert</td><td>Schweitzer</td></tr>
 <tr><td>Jane</td><td>Fonda</td></tr>
 <tr><td>William</td><td>Shakespeare</td></tr>
</table>
```

### CSS

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

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
