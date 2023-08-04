---
title: border-top-style
slug: Web/CSS/border-top-style
---

{{CSSRef}}

**`border-top-style`** [CSS](/zh-CN/CSS) 设置元素上边框的 {{cssxref("border")}}.

{{EmbedInteractiveExample("pages/css/border-top-style.html")}}

> **备注：** 此规范并未定义不同样式的边框边角处如何连接。

## 语法

```css
/* Keyword values */
border-top-style: none;
border-top-style: hidden;
border-top-style: dotted;
border-top-style: dashed;
border-top-style: solid;
border-top-style: double;
border-top-style: groove;
border-top-style: ridge;
border-top-style: inset;
border-top-style: outset;

/* Global values */
border-top-style: inherit;
border-top-style: initial;
border-top-style: unset;
```

选取以上可用关键字之一作为 {{cssxref("border-style")}} 的 **border-top-style** 属性的值。

### 形式语法

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

/* border-top-style example classes */
.b1 {
  border-top-style: none;
}
.b2 {
  border-top-style: hidden;
}
.b3 {
  border-top-style: dotted;
}
.b4 {
  border-top-style: dashed;
}
.b5 {
  border-top-style: solid;
}
.b6 {
  border-top-style: double;
}
.b7 {
  border-top-style: groove;
}
.b8 {
  border-top-style: ridge;
}
.b9 {
  border-top-style: inset;
}
.b10 {
  border-top-style: outset;
}
```

#### 输出结果

{{ EmbedLiveSample('示例', 300, 200) }}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- The other style-related border properties: {{ Cssxref("border-left-style") }}, {{ Cssxref("border-right-style") }}, {{ Cssxref("border-bottom-style") }}, and {{ Cssxref("border-style") }}.
- The other top-border-related properties: {{ Cssxref("border-top") }}, {{ Cssxref("border-top-color") }}, and {{ Cssxref("border-top-width") }}.
