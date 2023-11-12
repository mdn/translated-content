---
title: font-size
slug: Web/CSS/font-size
---

{{CSSRef}}

**`font-size`** [CSS](/zh-CN/Web/docs/CSS) 属性设置字体大小。更改字体大小还会更新字体大小相关的 {{cssxref("&lt;length&gt;")}} 单位，例如 `em`、`ex` 等。

{{EmbedInteractiveExample("pages/css/font-size.html")}}

## 语法

```css
/* <absolute-size> 值 */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;
font-size: xxx-large;

/* <relative-size> 值 */
font-size: smaller;
font-size: larger;

/* <length> 值 */
font-size: 12px;
font-size: 0.8em;

/* <percentage> 值 */
font-size: 80%;

/* math 值 */
font-size: math;

/* 全局值 */
font-size: inherit;
font-size: initial;
font-size: revert;
font-size: revert-layer;
font-size: unset;
```

`font-size` 属性可以通过以下方式之一进行指定：

- 通过绝对大小、相对大小或 `math` 关键字之一
- 通过 `<length>` 或 `<percentage>`，相对于元素的字体大小。

### 值

- `xx-small`、`x-small`、`small`、`medium`、`large`、`x-large`、`xx-large`、`xxx-large`
  - : 基于用户默认字体大小（`medium`）的绝对大小关键字。
- `larger`、`smaller`
  - : 相对大小关键字。字体大小将相对于父元素的字体大小变大或变小，大致按照上面用于区分绝对大小关键字的比率。
- {{cssxref("&lt;length&gt;")}}

  - : 一个正的 {{cssxref("&lt;length&gt;")}} 值。对于大多数相对于字体的单位（例如 `em` 和 `ex`），字体大小相对于父元素的字体大小。

    对于基于根元素的字体相关单位（例如 `rem`），字体大小相对于 {{HTMLElement("html")}}（根）元素使用的字体大小。

- {{cssxref("&lt;percentage&gt;")}}
  - : 一个正的 {{cssxref("&lt;percentage&gt;")}} 值，相对于父元素的字体大小。

> **备注：** 为了最大化无障碍性，通常最好使用相对于用户默认字体大小的值。

- `math` {{Experimental_Inline}}
  使用特殊的[数学缩放规则](https://w3c.github.io/mathml-core/#the-math-script-level-property)来确定 `font-size` 属性的计算值。

## 描述

有几种指定字体大小的方法，包括关键字，像素或 em 的数字值。根据特定网页的需求选择适当的方法。

### 关键字

关键词是在网页上设置字体大小的好方法。通过在 {{HTMLElement("body")}} 元素上设置关键字字体大小，你可以在页面上的其他任何地方设置相对字体大小，从而使你能够轻松地按比例缩放整个页面上的字体大小。

### 像素

以像素值（`px`）设置字体大小是需要像素级精度时的不错选择。px 值是静态的。这是一种跨操作系统和跨浏览器的方式，可以确切地告诉浏览器以你指定的像素高度呈现字母。因为可能使用不同的算法来实现类似的效果，结果可能在不同浏览器间略有差异。

字体大小设置也可以组合使用。例如，如果父元素设置为 `16px`，其子元素设置为 `larger`，则子元素在页面上显示比父元素更大。

> **备注：** 使用 `px` 定义字体大小会[破坏无障碍](https://zh.wikipedia.org/wiki/網頁親和力)，因为用户在某些浏览器中无法更改字体大小。例如，视力有限的用户可能希望将字体大小设置得比网页设计师选择的大小大得多。如果你希望创建包容性设计，请避免使用它们来定义字体大小。

### Em

使用 `em` 值创建动态或计算字体大小（历史上，`em` 单位是从给定字体中大写字母“M”的宽度派生的）。数字值作为当前元素的 `font-size` 属性的乘数。考虑以下示例：

```css
p {
  font-size: 2em;
}
```

在这种情况下，`<p>` 元素的大小将会是其通过继承得到的 `font-size` 计算值的两倍。因此，`1em` 的 `font-size` 等于元素所使用的 `font-size` 计算值。

为了计算所需像素值的等效 `em` 值，你可以使用以下公式：

```plain
em = 希望得到的像素大小 / 父元素字体像素大小
```

例如，假设页面的 `<body>` 的 `font-size` 设置为 `16px`。如果你想要的字体大小为 `12px`，那么应该指定 `0.75em`（因为 12/16 = 0.75）。同样，如果你想要字体大小为 `10px`，则应指定 `0.625em`（10/16 = 0.625）；对于 `22px`，请指定 `1.375em`（22/16）。

CSS 中的 `em` 是非常有用的单位，因为它会根据读者选择使用的字体自动调整其长度。

记住一个重要事实：em 值是复合的。看下面的 HTML 和 CSS：

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6em;
}
```

```html
<div>
  <span>Outer <span>inner</span> outer</span>
</div>
```

结果是：

{{EmbedLiveSample("Em", 400, 100)}}

假设浏览器的默认 `font-size` 为 16px，则单词“outer”将渲染为 25.6px，但单词“inner”将渲染为 40.96px。这是因为内部 {{HTMLElement("span")}} 的 `font-size` 为 1.6em，相对于其父级的 `font-size`，而其父级又相对于其父级的 `font-size`。这通常被称为复合。

### Rem

`rem` 值的发明是为了避免复合问题。`rem` 值是相对于根 `html` 元素而不是父元素的。换句话说，它允许你以相对方式指定字体大小，而不受到父元素大小的影响，从而消除了复合问题。

下面的 CSS 与前一个示例几乎相同。唯一的例外是单位已更改为 `rem`。

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

然后我们将这个 CSS 应用到相同的 HTML 上，它看起来像这样：

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rem", 400, 100)}}

在这个例子中，“outer inner outer”这些单词都以 25.6 像素的大小显示（假设浏览器的 `font-size` 已保留默认值 16px）。

### Ex

像 `em` 单位一样，使用 `ex` 单位设置元素的 `font-size` 是计算或动态的。它的行为方式完全相同，只是在使用 `ex` 单位设置 `font-size` 属性时，`font-size` 等于页面上使用的[第一个可用字体](https://www.w3.org/TR/css-fonts-3/#first-available-font)的 x 字高度。数字值相对地乘以元素继承的 `font-size` 且 `font-size` 相对复合。

请参阅 W3C 编辑草案，了解有关 `ex` 等[字体相对长度单位](https://drafts.csswg.org/css-values-4/#font-relative-length)的更详细描述。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置字体大小

#### CSS

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

#### HTML

```html
<h1 class="small">Small H1</h1>
<h1 class="larger">Larger H1</h1>
<h1 class="point">24 point H1</h1>
<h1 class="percent">200% H1</h1>
```

#### 结果

{{EmbedLiveSample('设置字体大小', 600, 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("font-size-adjust")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
- [基本文本和字体样式](/zh-CN/docs/Learn/CSS/Styling_text/Fundamentals)
