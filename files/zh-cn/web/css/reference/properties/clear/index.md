---
title: clear
slug: Web/CSS/Reference/Properties/clear
---

**`clear`** [CSS](/zh-CN/docs/Web/CSS) 属性指定一个元素是否必须移动 (清除浮动后) 到在它之前的浮动元素下面。`clear` 属性适用于浮动和非浮动元素。

{{InteractiveExample("CSS Demo: clear")}}

```css interactive-example-choice
clear: none;
```

```css interactive-example-choice
clear: left;
```

```css interactive-example-choice
clear: right;
```

```css interactive-example-choice
clear: both;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="floated-left">Left</div>
    <div class="floated-right">Right</div>
    <div class="transition-all" id="example-element">
      As much mud in the streets as if the waters had but newly retired from the
      face of the earth, and it would not be wonderful to meet a Megalosaurus,
      forty feet long or so, waddling like an elephantine lizard up Holborn
      Hill.
    </div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  text-align: left;
  line-height: normal;
}

.floated-left {
  border: solid 10px #ffc129;
  background-color: rgba(81, 81, 81, 0.6);
  padding: 1em;
  float: left;
}

.floated-right {
  border: solid 10px #ffc129;
  background-color: rgba(81, 81, 81, 0.6);
  padding: 1em;
  float: right;
  height: 150px;
}
```

当应用于非浮动块时，它将非浮动块的[边框边界](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)移动到所有相关浮动元素[外边界](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)的下方。这个非浮动块的顶部外边距会折叠。

另一方面，两个浮动元素的垂直外边距将不会折叠。当应用于浮动元素时，它将底部元素的[外边界边缘](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)移动到所有相关的浮动元素外边界边缘的下方。这会影响后面浮动元素的布局，因为后面的浮动元素的位置无法高于它之前的元素。

要被清除的相关浮动元素指的是在相同[块级格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Block_formatting_context)中的前置浮动。

> [!NOTE]
> 如果一个元素里只有浮动元素，那它的高度会是 0。如果你想要它自适应即包含所有浮动元素，那你需要清除它的子元素。一种方法叫做**clearfix**，即`clear`一个不浮动的 {{cssxref("::after")}} [伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)。
>
> ```css
> #container::after {
>   content: "";
>   display: block;
>   clear: both;
> }
> ```

## 语法

```css
/* 关键字值 */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* 全局值 */
clear: inherit;
clear: initial;
clear: revert;
clear: revert-layer;
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

- [盒模型](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)
