---
title: "`border-left-style` CSS 属性"
short-title: border-left-style
slug: Web/CSS/Reference/Properties/border-left-style
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`border-left-style`** [CSS](/zh-CN/docs/Web/CSS) 属性设置元素左边 {{cssxref("border")}} 的线条样式。

> [!NOTE]
> 规范中没有定义不同样式的边框在边角处是如何连接的。

{{InteractiveExample("CSS 演示：border-left-style")}}

```css interactive-example-choice
border-left-style: none;
```

```css interactive-example-choice
border-left-style: dotted;
```

```css interactive-example-choice
border-left-style: dashed;
```

```css interactive-example-choice
border-left-style: solid;
```

```css interactive-example-choice
border-left-style: groove;
```

```css interactive-example-choice
border-left-style: inset;
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

## 语法

```css
/* 关键字值 */
border-left-style: none;
border-left-style: hidden;
border-left-style: dotted;
border-left-style: dashed;
border-left-style: solid;
border-left-style: double;
border-left-style: groove;
border-left-style: ridge;
border-left-style: inset;
border-left-style: outset;

/* 全局值 */
border-left-style: inherit;
border-left-style: initial;
border-left-style: revert;
border-left-style: revert-layer;
border-left-style: unset;
```

`border-left-style` 属性指定为单个 {{cssxref("line-style")}} 关键字值。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置 border-left-style

#### HTML

```html
<table>
  <tbody>
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
  </tbody>
</table>
```

#### CSS

```css
/* 定义表格外观 */
table {
  border-width: 2px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* border-left-style 示例类 */
.b1 {
  border-left-style: none;
}
.b2 {
  border-left-style: hidden;
}
.b3 {
  border-left-style: dotted;
}
.b4 {
  border-left-style: dashed;
}
.b5 {
  border-left-style: solid;
}
.b6 {
  border-left-style: double;
}
.b7 {
  border-left-style: groove;
}
.b8 {
  border-left-style: ridge;
}
.b9 {
  border-left-style: inset;
}
.b10 {
  border-left-style: outset;
}
```

#### 结果

{{EmbedLiveSample("示例", 300, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与样式相关的边框属性：{{Cssxref("border-bottom-style")}}、{{Cssxref("border-right-style")}}、{{Cssxref("border-top-style")}} 和 {{Cssxref("border-style")}}。
- 其他与左边框相关的属性：{{Cssxref("border-left")}}、{{Cssxref("border-left-color")}} 和 {{Cssxref("border-left-width")}}。
