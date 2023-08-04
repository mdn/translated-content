---
title: width
slug: Web/CSS/width
---

{{CSSRef}}

**`width`** 属性用于设置元素的宽度。`width` 默认设置[内容区域](/zh-CN/docs/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content-area)的宽度，但如果 {{cssxref("box-sizing")}} 属性被设置为 `border-box`，就转而设置[边框区域](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border-area)的宽度。

{{EmbedInteractiveExample("pages/css/width.html")}}

{{ cssxref("min-width") }} 和 {{ cssxref("max-width") }} 属性的优先级高于 {{ cssxref("width") }}。

## 语法

```css
/* <length> values */
width: 300px;
width: 25em;

/* <percentage> value */
width: 75%;

/* Keyword values */
width: max-content;
width: min-content;
width: fit-content(20em);
width: auto;

/* Global values */
width: inherit;
width: initial;
width: unset;
```

`width` 属性也指定为：

- 下面关键字值之一：[`min-content`](/zh-CN/docs/Web/CSS/width#min-content)，[`max-content`](/zh-CN/docs/Web/CSS/width#max-content)，[`fit-content`](/zh-CN/docs/Web/CSS/width#fit-content)，[`auto`](/zh-CN/docs/Web/CSS/width#auto)。
- 一个长度值 [`<length>`](/zh-CN/docs/Web/CSS/width#%3Clength%3E) 或者百分比值 [`<percentage>`](/zh-CN/docs/Web/CSS/width#%3Cpercentage%3E)。

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 使用绝对值定义宽度。
- {{cssxref("&lt;percentage&gt;")}}
  - : 使用外层元素的容纳区块宽度（the containing block's width）的百分比定义宽度。
- `auto`
  - : 浏览器将会为指定的元素计算并选择一个宽度。
- `max-content` {{ experimental_inline }}
  - : 元素内容固有的（intrinsic）合适宽度。
- `min-content` {{ experimental_inline }}
  - : 元素内容固有的最小宽度。
- `fit-content` {{ experimental_inline }}

  - : 取以下两种值中的较大值：

    - 固有的最小宽度
    - 固有首选宽度（max-content）和可用宽度（available）两者中的较小值

    可表示为：`min(max-content, max(min-content, <length-percentage>))`

### 形式语法

{{csssyntax}}

## 示例

### 默认宽度

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('默认宽度', '500px', '64px')}}

### 像素 px 和字高 em

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="px_length">以 px 度量的宽度</div>
<div class="em_length">以 em 度量的宽度</div>
```

{{EmbedLiveSample('像素 px 和字高 em', '500px', '64px')}}

### 百分比

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="percent">按照百分比度量的宽度</div>
```

{{EmbedLiveSample('百分比', '500px', '64px')}}

### `max-content` 使用示例

```css
p.maxgreen {
  background: lightgreen;
  width: intrinsic; /* Safari/WebKit 使用了非标准的名称 */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
}
```

```html
<p class="maxgreen">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('max-content_使用示例', '500px', '64px')}}

### `min-content` 使用示例

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content; /* Firefox */
  width: -webkit-min-content; /* Chrome */
}
```

```html
<p class="minblue">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('min-content_使用示例', '500px', '155px')}}

## 无障碍考虑

当页面放大以增加文本大小时，请确保 `width` 设置的元素不会被截断并且不会遮挡其他内容。

- [MDN Understanding WCAG, Guideline 1.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [框盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}
- {{cssxref("max-width")}}
