---
title: font-size
slug: Web/CSS/font-size
---

{{CSSRef}}

**`font-size`** [CSS](/zh-CN/docs/CSS) 属性指定字体的大小。因为该属性的值会被用于计算 em 和 ex 长度单位，定义该值可能改变其他元素的大小。

```css
/* <absolute-size>，绝对大小值 */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;

/* <relative-size>，相对大小值 */
font-size: larger;
font-size: smaller;

/* <length>，长度值 */
font-size: 12px;
font-size: 0.8em;

/* <percentage>，百分比值 */
font-size: 80%;

font-size: inherit;
```

{{cssinfo}}

## 语法

**font-size** 属性以两种方式之一指定：

- 作为一个从绝对大小[absolute-size](/zh-CN/docs/Web/CSS/font-size#absolute-size) 关键字列表或相对大小[relative-size](/zh-CN/docs/Web/CSS/font-size#relative-size) 关键字列表中选择的单个关键字。
- 作为一个 [`<length-percentage>`](/zh-CN/docs/Web/CSS/font-size#length-percentage) 值。

### 值

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`
  - : 该套绝对大小关键字定义相对于用户的默认字体大小 (medium)。与展示 HTML 的 `<font size="1">` 到 `<font size="7">`（用户默认字体大小 `<font size="3">`）类似。
- `larger`, `smaller`
  - : 比父元素的字体大或小，使用与上面的关键字的相近缩放比率。
- `<length>`
  - : 正数{{cssxref("&lt;length&gt;")}}.。当单位为 `em` 或 `ex` 时，大小为相对于父元素的文字的大小。例如，`0.5em` 就是当前元素的父元素的字体大小的一半。
- `<percentage>`
  - : 父元素字体大小的正数{{cssxref("&lt;percentage&gt;")}}

最好使用用户默认字体大小的相对大小，避免使用除了 `em` 或 `ex` 的绝对大小单位。但是如果一定要使用绝对大小的话，px 是众多单位中最好的选择，因为它的含义不会随着操作系统所认为的屏幕分辨率的大小（通常是不对的）改变而改变。

### 正式语法

{{csssyntax("font-size")}}

## 可用方法

有多重定义字体大小的方法，包括了使用关键字及使用像素或 em 数字值。请根据网页的特定需求选择适用的方法。

### 关键字

关键字是定义网络字体大小的好方法。通过在 body 元素上定义关键字字体大小，你可以在网页的任何地方设置相对字体大小，这让你能轻易地缩放整个网页的字体大小。

### 像素

当你需要精确地像素时，用 px 设定字体大小是一种好方法。一像素的大小是固定的。这是一个不取决于平台的、跨浏览器的准确设置字体大小高度为你所想的像素大小的方法。因为不同浏览器为得到同样效果的算法可能不同，所以显示效果可能有微小的不同。

字体大小的设置也可以使用组合值。例如，如果父元素设定为 16px 而子元素设定为`larger`, 子元素显示的字体大小就会大于父元素。

> **备注：** 用像素字体定义使得字体大小不可由用户的浏览器改变。（例如，视力较低用户可能希望使用比网页设计师设定的字体大小大很多的字体）所以，如果你想创造能广泛使用的设计请避免使用像素设定字体。

### Em

另一种方法是用`em`值设定字体大小。`em` 值的大小是动态的。当定义或继承 font-size 属性时，1em 等于该元素的字体大小。如果你在网页中任何地方都没有设置文字大小的话，那它将等于浏览器默认文字大小，通常是 16px。所以通常 1em = 16px。2em = 32px。如果你设置了 body 元素的字体大小为 20px，那 1em = 20px、2em = 40px。那个 2 就是当前 em 大小的倍数。

可用这个公式计算像素大小的等价 em 大小：

```
em = 希望得到的像素大小 / 父元素字体像素大小
```

例如，假设 body 的文字大小设为 1em，且浏览器默认 1em = 16px。如果你想得到 12px，那你就可设定 0.75em (because 12/16 = 0.75)。同样的，如果你想设定文字大小为 10px，那就定义 0.625em (10/16 = 0.625)；若想要 22px 就定义 1.375em (22/16=1.375).

一个流行的技巧是设置 body 元素的字体大小为 62.5% (即默认大小 16px 的 62.5%)，等于 10px。现在你可以通过计算基准大小 10px 的倍数，在任何元素上方便的使用 em 单位。这样有 6px = 0.6em, 8px = 0.8em, 12px = 1.2em, 14px = 1.4em, 16px = 1.6em。例如：

```css
body {
  font-size: 62.5%; /* font-size 1em = 10px */
}
p {
  font-size: 1.6em; /* 1.6em = 16px */
}
```

因为 em 可以自动适应用户的字体，em 是一个非常有用的 CSS 单位。

## 示例

### 示例 1

```css
/* 设定段落文字大小为非常大 */
p { font-size: xx-large }

/* 设定一级标题的文字大小为 2.5 倍大小 */
h1 { font-size: 250% }

/* 设定 span 里的文字大小为 16px */
span { font-size: 16px; }
```

### 示例 2

```css
.small {
  font-size: xx-small;
}
.larger {
  font-size: larger;
}
.point {
  font-size: 24pt;
}
.percent {
  font-size: 200%;
}
```

```html
<h1 class="small">Small H1</h1>
<h1 class="larger">Larger H1</h1>
<h1 class="point">24 point H1</h1>
<h1 class="percent">200% H1</h1>
```

{{EmbedLiveSample('示例 2','600','200')}}

## 备注

{{Cssxref("font-size")}}属性的 `em` 和 `ex` 单位值相对于父元素的字体大小（不像其他属性，它们指的是相对当前元素的字体大小）。这意味对于{{Cssxref("font-size")}}属性来说，`em` 单位和百分比单位的作用是一样的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
