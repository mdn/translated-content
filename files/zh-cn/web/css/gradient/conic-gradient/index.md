---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
tags:
  - CSS
  - CSS Function
  - CSS Images
  - Function
  - Graphics
  - Layout
  - Reference
  - Web
  - gradient
translation_of: Web/CSS/gradient/conic-gradient()
---
{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions) **`conic-gradient()`** 创建了一个由渐变组成的图像，渐变的颜色变换围绕一个中心点旋转（而不是从中心辐射）。锥形渐变的例子包括饼图和色轮 {{glossary("color wheel", "color wheels")}}. `conic-gradient()` 函数的结果是 {{CSSxRef("&lt;gradient&gt;")}} 数据类型的对象，是一种特殊的 {{CSSxRef("&lt;image&gt;")}} 数据类型。

{{EmbedInteractiveExample("pages/css/function-conic-gradient.html")}}

## 语法

```css
/* 一个旋转 45 度的锥形渐变，从蓝色渐变到红色 */
conic-gradient(from 45deg, blue, red);

/* 一个蓝紫色框：从蓝色渐变到红色，但只有右下象限可见，因为锥形渐变的中心位于左上角 */
conic-gradient(from 90deg at 0 0, blue, red);

/* 色轮 */
background: conic-gradient(
    hsl(360, 100%, 50%),
    hsl(315, 100%, 50%),
    hsl(270, 100%, 50%),
    hsl(225, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(135, 100%, 50%),
    hsl(90, 100%, 50%),
    hsl(45, 100%, 50%),
    hsl(0, 100%, 50%)
);
```

### 值

- {{CSSxRef("&lt;angle&gt;")}}
  - : 在 `from` 关键字之前，以角度作为其值，定义顺时针方向的渐变旋转。
- `<position>`
  - : 使用与 [background-position](/zh-CN/docs/Web/CSS/background-position) 属性相同的长度、顺序和关键字值，定义渐变的中心。如果省略，默认值是 `center`，表示渐变是居中的。
- `<angular-color-stop>`
  - : 一个颜色断点的 {{CSSxRef("&lt;color&gt;")}} 值，并且跟随着一个或两个可选的断点位置（一个沿着渐变圆周轴的{{CSSxRef("&lt;angle&gt;")}}）。
- `<color-hint>`
  - : 颜色中转点是一个 {{Glossary("interpolation")}} 提示，它定义了在相邻颜色之间渐变如何进行。长度定义了渐变色应在两个颜色断点之间的哪一点到达颜色过渡的中点。如果省略，颜色转换的中点是两个颜色断点之间的中点。

> **备注：** 渲染颜色中间点的规则（[color stops in CSS gradients](#gradient_with_multiple_color_stops)）与 [SVG 渐变](/zh-CN/docs/Web/SVG/Tutorial/Gradients)一致。

## 描述

和任意渐变一样，锥形渐变[没有内在尺寸](/zh-CN/docs/Web/CSS/image#description)；就是说，它没有天然的或首选的尺寸，也没有首选的比例。它的具体大小将与它所应用的元素的大小相匹配，或者如果设置为元素大小以外的值，则与 `<image>` 的大小相匹配。

要创建重复的锥形渐变来填充 360 度旋转，应该使用 {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} 函数。

因为 `<gradient>` 属于 `<image>` 数据类型，它们只能用在能使用 `<image>` 的地方。因此，`conic-gradient()` 在 {{CSSxRef("background-color")}} 以及其他使用 {{CSSxRef("&lt;color&gt;")}} 数据类型的属性上不起作用。

> **备注：** 为什么它被称为“锥形”渐变？如果色块的一侧比另一侧亮得多，则从上面看，它可能看起来像一个圆锥体。

### 锥形渐变的合成

锥形渐变语法与径向渐变语法类似，但颜色断点放置在渐变圆弧（圆的周长）周围，而不是从渐变中心出现的渐变线上。使用锥形渐变时，颜色会围绕圆心旋转，从顶部开始顺时针旋转。在径向渐变中，颜色从椭圆中心向各个方向向外过渡。

![沿着锥形渐变的圆周和径向渐变的轴的颜色断点](screenshot_2018-11-29_21.09.19.png)

锥形渐变是通过指示旋转角度、渐变中心，然后指定颜色断点列表来指定的。与线性渐变和径向渐变不同，线性渐变和径向渐变的颜色断点是通过指定 [length](/zh-CN/docs/Web/CSS/length) 来放置的，而锥形渐变的颜色断点是通过 [angle](/zh-CN/docs/Web/CSS/angle) 来指定的。单位包括度的 `deg`、梯度的 `grad`、弧度的 `rad`和圈的 `turn`。在一个圆中有 360 度，400 个梯度，2π 弧度，1 圈。支持锥形渐变的浏览器也接受百分比值，100% 等于 360 度，但这不在规范中。

与径向渐变类似，锥形渐变语法用于将渐变中心定位在图像内部甚至外部的任何位置。位置的值类似于两个值的 background-position 语法。

渐变的弧度是渐变的周长。渐变或弧度的 _start point_ 方向是北，或 12:00pm 方向。然后通过 _from_ 角度来旋转。渐变的颜色由倾斜的颜色断点、它们的起点、终点，以及介于两者之间的可选的倾斜的颜色断点决定。颜色之间的过渡可以通过相邻颜色的颜色断点之间的颜色提示来改变。

#### 自定义渐变

通过在渐变弧上添加更多角度的颜色断点，可以在多种颜色之间创建高度定制的过渡。颜色断点的位置可以通过使用{{CSSxRef("&lt;angle&gt;")}}来明确地定义。如果不指定颜色断点的位置，它将位于其前面的颜色断点和后面的颜色断点之间。如果没有为第一个或最后一个颜色断点指定角度，则其值分别为 0 度和 360 度。以下两种渐变是等效的：

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

默认情况下，颜色从一个颜色断点处的颜色平滑过渡到下一个颜色断点处的颜色，颜色之间的中点是颜色过渡之间的中点。通过添加颜色提示，可以将此颜色过渡中点移动到两个颜色断点之间的任何点，指示颜色过渡的中间位置。以下是从起点到 10% 标记的纯红色，在 80% 的转弯中从红色过渡到蓝色，最后 10% 为纯蓝色。然而，红色到蓝色渐变变化的中点位于 20% 标记处，而不是在没有 80 度或 20% 颜色提示的情况下发生的 50% 标记处。

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

如果两个或多个颜色断点位于同一位置，则转换将是在该位置声明的第一个和最后一个颜色之间的硬线。要使用锥形渐变创建饼图（这不是创建饼图的正确方法，因为无法访问背景图像），请使用硬颜色断点——其中两个相邻颜色断点的颜色断点角度相同。最简单的方法是使用多个位置的颜色断点。以下两种声明是等效的：

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

颜色断点应按升序排列。值较低的后续颜色断点将覆盖上一个颜色断点的值，从而创建硬过渡。以下内容在 30% 标记处从红色变为黄色，然后在 35% 的渐变范围内从黄色变为蓝色：

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

使用锥形渐变还可以创建其他效果，棋盘格就是其中之一。通过创建具有左上角和右下角白色象限以及左下角和右上角黑色象限的象限，然后重复 16 次渐变（四次横切，四次向下），就可以制作棋盘。

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

你可以混合和匹配不同的角度单位，但最好不要，以上的内容很难理解。

### 正式语法

{{csssyntax}}

## 无障碍说明

浏览器不向辅助技术提供任何关于背景图像的特殊信息。这主要对屏幕阅读器来说很重要，因为屏幕阅读器不会宣布其存在，因此不会向用户传达任何信息。虽然可以创建饼图、棋盘和其他带有圆锥梯度的效果，但 CSS 图像不提供指定替代文本的原生方式，因此屏幕阅读器用户无法访问由圆锥梯度表示的图像。如果图像包含对理解页面的总体用途至关重要的信息，那么最好在文档中对其进行语义描述。

- [MDN Understanding WCAG, Guideline 1.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_%e2%80%94_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 示例

### 40 度渐变

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background-image:
     conic-gradient(from 40deg, #fff, #000);
}
```

{{EmbedLiveSample("40 度渐变", 120, 120)}}

### 偏移中心的渐变

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(from 0deg at 0% 25%, blue, green, yellow 180deg);
}
```

{{EmbedLiveSample("偏移中心的渐变", 120, 120)}}

### 渐变饼图

本示例使用多位置颜色断点，相邻颜色具有相同的颜色断点值，从而创建出条纹效果。

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(
     red 36deg, orange 36deg 170deg, yellow 170deg);
  border-radius: 50%
}
```

{{EmbedLiveSample("渐变饼图", 120, 120)}}

### 棋盘格

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background:
     conic-gradient(#fff 0.25turn, #000 0.25turn 0.5turn, #fff 0.5turn 0.75turn, #000 0.75turn)
     top left / 25% 25% repeat;
  border: 1px solid;
}
```

{{EmbedLiveSample("棋盘格", 120, 120)}}

### 更多锥形渐变的例子

更多示例请参见[使用 CSS 渐变](/zh-CN/docs/Web/CSS/CSS_Images/Using_CSS_gradients)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 渐变](/zh-CN/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- 其他渐变函数：{{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
