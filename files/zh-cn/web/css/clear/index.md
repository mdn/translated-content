---
title: clear
slug: Web/CSS/clear
---

{{CSSRef}}

**`clear`** [CSS](/zh-CN/docs/CSS) 属性指定一个元素是否必须移动 (清除浮动后) 到在它之前的浮动元素下面。`clear` 属性适用于浮动和非浮动元素。

{{EmbedInteractiveExample("pages/css/clear.html")}}

当应用于非浮动块时，它将非浮动块的[边框边界](/zh-CN/docs/CSS/box_model)移动到所有相关浮动元素[外边界](/zh-CN/docs/CSS/box_model)的下方。这个非浮动块的顶部外边距会折叠。

另一方面，两个浮动元素的垂直外边距将不会折叠。当应用于浮动元素时，它将底部元素的[外边界边缘](/zh-CN/docs/CSS/box_model)移动到所有相关的浮动元素外边界边缘的下方。这会影响后面浮动元素的布局，因为后面的浮动元素的位置无法高于它之前的元素。

要被清除的相关浮动元素指的是在相同[块级格式化上下文](/zh-CN/docs/CSS/block_formatting_context)中的前置浮动。

> **备注：** 如果一个元素里只有浮动元素，那它的高度会是 0。如果你想要它自适应即包含所有浮动元素，那你需要清除它的子元素。一种方法叫做**clearfix**，即`clear`一个不浮动的 {{cssxref("::after")}} [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)。
>
> ```css
> #container::after {
>   content: "";
>   display: block;
>   clear: both;
> }
> ```

## 语法

```
/* Keyword values */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* Global values */
clear: inherit;
clear: initial;
clear: unset;
```

### 值

- `none`
  - : 元素*不会*被向下移动以清除浮动。
- `left`
  - : 元素被向下移动以清除左浮动。
- `right`
  - : 元素被向下移动以清除右浮动。
- `both`
  - : 元素被向下移动以清除左右浮动。
- `inline-start`
  - : 元素被向下移动以清除其包含块的起始侧浮动，即 ltr 时清除左浮动，rtl 时清除右浮动。
- `inline-end`
  - : 元素被向下移动以清除其包含块的结束侧浮动，即 ltr 时清除右浮动，rtl 时清除左浮动。

### Formal syntax

{{csssyntax}}

## 示例

### clear: left

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="left">This paragraph clears left.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.left {
  border: 1px solid black;
  clear: left;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: left;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear: left','100%','250') }}

### clear: right

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="right">This paragraph clears right.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.right {
  border: 1px solid black;
  clear: right;
}
.black {
  float: right;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear: right','100%','250') }}

### clear: both

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor. Fusce pulvinar lacus
    ac dui.
  </p>
  <p class="red">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="both">This paragraph clears both.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.both {
  border: 1px solid black;
  clear: both;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 45%;
}
```

{{ EmbedLiveSample('clear: both','100%','300') }}

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [盒模型](/zh-CN/docs/CSS/box_model)
