---
title: border-right-style
slug: Web/CSS/border-right-style
---

{{CSSRef}}

**`border-right-style`** 是 border 中的一个 [CSS](/zh-CN/docs/CSS) 子属性，描述的是右边框的样式 {{cssxref("border")}}.

{{EmbedInteractiveExample("pages/css/border-right-style.html")}}

> **备注：** 这个 css 没有定义不同样式的边界之间如何拼接。

## Syntax

```css
/* 可用的值 */
border-right-style: none;
border-right-style: hidden;
border-right-style: dotted;
border-right-style: dashed;
border-right-style: solid;
border-right-style: double;
border-right-style: groove;
border-right-style: ridge;
border-right-style: inset;
border-right-style: outset;

/* 全局可用的值 */
border-right-style: inherit;
border-right-style: initial;
border-right-style: unset;
```

The `border-right-style` property is specified as a single keyword chosen from those available for the {{cssxref("border-style")}} property.

### 语法格式

{{csssyntax}}

## 示例

#### HTML

```html
<table>
  <tr>
    <td class="b1">none</td>
    <td class="b2">hidden</td>
    <td class="b3">dotted</td>
    <td class="b4">dashed</td>
  </tr>
  <tr>
    <td class="b5">solid</td>
    <td class="b6">double</td>
    <td class="b7">groove</td>
    <td class="b8">ridge</td>
  </tr>
  <tr>
    <td class="b9">inset</td>
    <td class="b10">outset</td>
  </tr>
</table>
```

#### CSS

```css
/* Define look of the table */
table {
  border-width: 2px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* border-right-style example classes */
.b1 {
  border-right-style: none;
}
.b2 {
  border-right-style: hidden;
}
.b3 {
  border-right-style: dotted;
}
.b4 {
  border-right-style: dashed;
}
.b5 {
  border-right-style: solid;
}
.b6 {
  border-right-style: double;
}
.b7 {
  border-right-style: groove;
}
.b8 {
  border-right-style: ridge;
}
.b9 {
  border-right-style: inset;
}
.b10 {
  border-right-style: outset;
}
```

#### 结果

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参考

- 其他样式相关边框属性：{{Cssxref("border-bottom-style")}}, {{Cssxref("border-left-style")}}, {{Cssxref("border-top-style")}}, and {{Cssxref("border-style")}}.
- 其他 bottom-border-related 属性：{{Cssxref("border-right")}}, {{Cssxref("border-right-color")}}, and {{Cssxref("border-right-width")}}.
