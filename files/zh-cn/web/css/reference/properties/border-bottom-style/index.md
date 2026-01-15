---
title: border-bottom-style
slug: Web/CSS/Reference/Properties/border-bottom-style
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-bottom-style`** 设置元素底部 {{cssxref("border")}} 的线条样式。

{{InteractiveExample("CSS 演示：border-bottom-style")}}

```css interactive-example-choice
border-bottom-style: none;
```

```css interactive-example-choice
border-bottom-style: dotted;
```

```css interactive-example-choice
border-bottom-style: dashed;
```

```css interactive-example-choice
border-bottom-style: solid;
```

```css interactive-example-choice
border-bottom-style: groove;
```

```css interactive-example-choice
border-bottom-style: inset;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    这是一个带有边框的盒子。
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}

body {
  background-color: white;
}
```

> [!NOTE]
> 规范中没有定义不同样式的边框在边角处是如何连接的。

## 语法

```css
/* 关键字值 */
border-bottom-style: none;
border-bottom-style: hidden;
border-bottom-style: dotted;
border-bottom-style: dashed;
border-bottom-style: solid;
border-bottom-style: double;
border-bottom-style: groove;
border-bottom-style: ridge;
border-bottom-style: inset;
border-bottom-style: outset;

/* 全局值 */
border-bottom-style: inherit;
border-bottom-style: initial;
border-bottom-style: revert;
border-bottom-style: revert-layer;
border-bottom-style: unset;
```

`border-bottom-style` 属性指定为单个 {{cssxref("line-style")}} 关键字值。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 演示所有边框样式

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
/* 确定表格的外观 */
table {
  border-width: 3px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* border-bottom-style 示例类型 */
.b1 {
  border-bottom-style: none;
}
.b2 {
  border-bottom-style: hidden;
}
.b3 {
  border-bottom-style: dotted;
}
.b4 {
  border-bottom-style: dashed;
}
.b5 {
  border-bottom-style: solid;
}
.b6 {
  border-bottom-style: double;
}
.b7 {
  border-bottom-style: groove;
}
.b8 {
  border-bottom-style: ridge;
}
.b9 {
  border-bottom-style: inset;
}
.b10 {
  border-bottom-style: outset;
}
```

#### 结果

{{ EmbedLiveSample('演示所有边框样式', 300, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与样式相关的边框属性：{{ Cssxref("border-left-style") }}、{{ Cssxref("border-right-style") }}、{{ Cssxref("border-top-style") }} 和 {{ Cssxref("border-style") }}。
- 其他与底部边框相关的属性：{{ Cssxref("border-bottom") }}、{{ Cssxref("border-bottom-color") }} 和 {{ Cssxref("border-bottom-width") }}。
