---
title: line-height
slug: Web/CSS/line-height
---

{{CSSRef}}

**`line-height`** [CSS](/zh-CN/docs/Web/CSS) 属性用于设置多行元素的空间量，如多行文本的间距。对于块级元素，它指定元素行盒（line boxes）的最小高度。对于非[替代](/zh-CN/docs/Web/CSS/Replaced_element)的 inline 元素，它用于计算行盒（line box）的高度。

{{EmbedInteractiveExample("pages/css/line-height.html")}}

## 语法

```css
/* Keyword value */
line-height: normal;

/* Unitless values: use this number multiplied
by the element's font size */
line-height: 3.5;

/* <length> values */
line-height: 3em;

/* <percentage> values */
line-height: 34%;

/* Global values */
line-height: inherit;
line-height: initial;
line-height: unset;
```

`line-height` 属性被指定为以下任何一个：

- 一个 [`<number>`](#number) 值
- 一个 [`<length>`](#length) 值
- 一个 [`<percentage>`](#percentage) 值
- 关键字 [`normal`](#normal)。

### 取值

- `normal`
  - : 取决于用户代理。桌面浏览器（包括 Firefox）使用默认值，约为 **`1.2`**，这取决于元素的 `font-family`。
- `<number>`（无单位）
  - : 该属性的应用值是这个无单位{{cssxref("&lt;number&gt;", "&lt;数字&gt;")}}乘以该元素的字体大小。计算值与指定的 `<number>` 值相同。大多数情况下，这是设置 `line-height` 的**推荐方法**，不会在继承时产生不确定的结果。
- `<length>`
  - : 指定用于计算行向盒高度的{{cssxref("&lt;length&gt;", "&lt;长度&gt;")}}值。以 **em** 为单位的值可能会产生不确定的结果（见下面的示例）。
- `<percentage>`
  - : 与元素自身的字体大小有关。计算值是给定的百分比值乘以元素计算出的字体大小。{{cssxref("&lt;percentage&gt;")}} 值可能会带来不确定的结果（见下面第二个示例）。

### 形式化语法

{{csssyntax}}

## 示例

### 基本示例

```css
/* 理论上，以下所有规则拥有相同的行高 */

div {
  line-height: 1.2;
  font-size: 10pt;
} /* 无单位数值 number/unitless */
div {
  line-height: 1.2em;
  font-size: 10pt;
} /* 长度 length */
div {
  line-height: 120%;
  font-size: 10pt;
} /* 百分比 percentage */
div {
  font:
    10pt/1.2 Georgia,
    "Bitstream Charter",
    serif;
} /* font 简写属性 font shorthand */
```

为了简便，可以通过 {{cssxref("font")}} 简写来设置 `line-height`，但这要求在使用该简写属性时同时设置 `font-family` 属性。

### 推荐在设置 line-height 时使用无单位数值

这个示例说明了为什么给 `line-height` 赋值时使用 {{cssxref("&lt;number&gt;", "&lt;数字&gt;")}} 值比使用 {{cssxref("&lt;length&gt;","&lt;长度&gt;")}} 更好。我们会到用两个 {{HTMLElement("div")}} 元素。第一个 `div` 为绿色边框，使用无单位的 `line-height`值。第二个 `div` 带红色边框，使用 `em` 定义 `line-height` 的值。

#### CSS

```css
.green {
  line-height: 1.1;
  border: solid limegreen;
}

.red {
  line-height: 1.1em;
  border: solid red;
}

h1 {
  font-size: 30px;
}

.box {
  width: 18em;
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
}
```

#### HTML

```html
<div class="box green">
  <h1>Avoid unexpected results by using unitless line-height.</h1>
  length and percentage line-heights have poor inheritance behavior ...
</div>

<div class="box red">
  <h1>Avoid unexpected results by using unitless line-height.</h1>
  length and percentage line-heights have poor inheritance behavior ...
</div>

<!-- The first <h1> line-height is calculated from its own font-size   (30px × 1.1) = 33px  -->
<!-- The second <h1> line-height results from the red div's font-size  (15px × 1.1) = 16.5px,  probably not what you want -->
```

#### 结果

{{EmbedLiveSample('推荐在设置 line-height 时使用无单位数值', 600, 200)}}

## 无障碍方面

主段落内容的 `line-height` 至少应为 `1.5`。这将有助于改善低可视条件下的体验，也对认知阻碍者，如阅读困难者，有帮助。如果文字的大小要随页面的缩放而变化，请使用无单位的值，以确保行高也会等比例缩放。

[W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("font")}}
- {{Cssxref("font-size")}}
