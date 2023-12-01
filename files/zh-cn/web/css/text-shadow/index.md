---
title: text-shadow
slug: Web/CSS/text-shadow
---

{{CSSRef}}

**`text-shadow`** 为文字添加阴影。可以为文字与 [`decoration`](/zh-CN/docs/Web/CSS/text-decoration) 添加多个阴影，阴影值之间用逗号隔开。每个阴影值由元素在 X 和 Y 方向的偏移量、模糊半径和颜色值组成。

{{EmbedInteractiveExample("pages/css/text-shadow.html")}}

## 语法

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
text-shadow: #fc0 1px 0 10px;

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* Use defaults for color and blur-radius */
text-shadow: 5px 10px;

/* Global values */
text-shadow: inherit;
text-shadow: initial;
text-shadow: unset;
```

当阴影大于一个时要用逗号区别开阴影之间的参数。

每个阴影都有两到三个 `<length>` 参数，以及一个与阴影颜色相关的 `<color>` 参数。前两个 `<length>` 参数，是以“文字中心”为原点的坐标轴，分别为 x 轴 `<offset-x>` 和 y 轴 `<offset-y>` 的值；如果有第三个 `<length>` 参数，则第三个数值为形成阴影效果的半径的数值 `<blur-radius>`。

当所给的阴影大于一个时，阴影应用的顺序为从前到后，第一个指定的阴影在顶部。

这个属性同时适用于 {{cssxref("::first-line")}} 以及 {{cssxref("::first-letter")}} [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)。

### 值

- {{cssxref("&lt;color&gt;")}}
  - : 可选。阴影的颜色。可以在偏移量之前或之后指定。如果没有指定颜色，则使用用户代理自行选择的颜色，因此需要跨浏览器的一致性时，应该明确定义它。
- `<offset-x> <offset-y>`
  - : 必选。这些 {{cssxref("&lt;length&gt;")}} 值指定阴影相对文字的偏移量。`<offset-x>` 指定水平偏移量，若是负值则阴影位于文字左侧。`<offset-y>` 指定垂直偏移量，若是负值则阴影位于文字上方。如果两者均为 `0`，则阴影位于文字正后方，如果设置了 `<blur-radius>` 则会产生模糊效果。
- `<blur-radius>`
  - : 可选。这是 {{ cssxref("&lt;length&gt;") }} 值。如果没有指定，则默认为 0。值越大，模糊半径越大，阴影也就越大越淡（wider and lighter）。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 简单的阴影

```css
.red-text-shadow {
  text-shadow: red 0 -2px;
}
```

```html
<p class="red-text-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
```

{{EmbedLiveSample('简单的阴影', '689px', '90px')}}

### 多重阴影

```css
.white-with-blue-shadow {
  text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
  color: white;
  font:
    1.5em Georgia,
    "Bitstream Charter",
    "URW Bookman L",
    "Century Schoolbook L",
    serif;
}
```

```html
<p class="white-with-blue-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
```

{{EmbedLiveSample('多重阴影', '689px', '180px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("box-shadow")}}
- The {{cssxref("&lt;color&gt;")}} data type (for specifying the shadow color)
- [使用 CSS 为 HTML 元素应用颜色](/zh-CN/docs/Web/CSS/CSS_colors/Applying_color)
