---
title: empty-cells
slug: Web/CSS/empty-cells
---

{{CSSRef}}

CSS 中 **`empty-cells`** 属性定义了用户端 {{glossary("user agent")}} 应该怎么来渲染表格 {{htmlelement("table")}} 中没有可见内容的单元格的边框和背景。

```css
/* Keyword values */
empty-cells: show;
empty-cells: hide;

/* Global values */
empty-cells: inherit;
empty-cells: initial;
empty-cells: unset;
```

只有当 {{cssxref("border-collapse")}} 属性值是 `separate` 时，才会生效。

{{cssinfo}}

## 语法

`empty-cells` 的属性值必须是以下取值中的一个。

### 取值

- `show`
  - : 边框和背景正常渲染。与普通元素一样。
- `hide`
  - : 边框和背景被隐藏。

### 语法形式

{{csssyntax}}

## 示例

### HTML

```html
<table class="table_1">
  <tr>
    <td>Moe</td>
    <td>Larry</td>
  </tr>
  <tr>
    <td>Curly</td>
    <td></td>
  </tr>
</table>
<br />
<table class="table_2">
  <tr>
    <td>Moe</td>
    <td>Larry</td>
  </tr>
  <tr>
    <td>Curly</td>
    <td></td>
  </tr>
</table>
```

### CSS

```css
.table_1 {
  empty-cells: show;
}

.table_2 {
  empty-cells: hide;
}

td,
th {
  border: 1px solid gray;
  padding: 0.5rem;
}
```

### 结果

{{ EmbedLiveSample('示例', '100%', '200') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
