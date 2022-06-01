---
title: border-image-slice
slug: Web/CSS/border-image-slice
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - NeedsExample
  - Reference
  - recipe:css-property
translation_of: Web/CSS/border-image-slice
---
{{CSSRef}}

**`border-image-slice`** [CSS](/zh-CN/docs/Web/CSS) 属性将使用 {{cssxref("border-image-source")}} 引用的图像划分为多个区域。这些区域组成了一个元素的[边框图像](/zh-CN/docs/Web/CSS/border-image)。

{{EmbedInteractiveExample("pages/css/border-image-slice.html")}}

切分过程会将图像分割为 9 个区域：四个角、四个边（edges）以及中心区域。四条切片线，从它们各自的侧面设置给定距离，控制区域的大小。

[![The nine regions defined by the border-image or border-image-slice properties](border-image-slice.png)](border-image-slice.png)

上图说明了每个区域的位置。

- 区域 1-4 为角区域（corner region）。每一个都被用于组成最终边框图像的四个角。
- 区域 5-8 边区域（edge region）。在最终的边框图像中[重复、缩放或修改](/zh-CN/docs/Web/CSS/border-image-repeat)它们以匹配元素的大小。
- 区域 9 为中心区域（middle region）。它在默认情况下会被丢弃，但如果设置了关键字 `fill`，则会将其用作元素的背景图像。

{{cssxref("border-image-repeat")}}、{{cssxref("border-image-width")}} 和 {{cssxref("border-image-outset")}} 属性则用于定义如何使用这些图像。

## 语法

```css
/* All sides */
border-image-slice: 30%;

/* vertical | horizontal */
border-image-slice: 10% 30%;

/* top | horizontal | bottom */
border-image-slice: 30 30% 45;

/* top | right | bottom | left */
border-image-slice: 7 12 14 5;

/* Using the `fill` keyword */
border-image-slice: 10% fill 7 12;

/* Global values */
border-image-slice: inherit;
border-image-slice: initial;
border-image-slice: revert;
border-image-slice: revert-layer;
border-image-slice: unset;
```

`border-image-slice` 属性可以用四个指定的 `<number-percentage>` 值来表示每一个图像切片的位置。负数是无效的，而大于其相应的最大尺寸的值则会被限制为 `100%`。

- 仅指定了**一**个位置（1 个值）时，创建的（上下左右）四个切片将具有相同的宽度/高度。
- 当指定了**两**个位置（2 个值）时，第一个值表示垂直方向的两个切片的高度（即 **top** 与 **bottom**），第二个值表示水平方向两侧切片的宽度（即 **left** 和 **right**）。
- 当指定了**三**个位置（3 个值）时，第一个值表示顶部切片的高度（即 **top**），第二个值表示水平方向两侧切片的宽度（即 **left** 和 **right**），第三个值则表示底部切片的高度（即 **buttom**）。
- 当指定了**四**个位置（4 个值）时，这四个值则分别对应 **top**、**right**、**buttom**、**left**（上、右、下、左）四个切片的宽度/高度。

可选值 `fill` 可放在上面声明的值的末尾。

### 取值

- {{cssxref("&lt;number&gt;")}}
  - : 表示到图像边缘的偏移量，在位图中的单位为*像素点*，在矢量图中则是坐标。对于矢量图，`<number>` 值与元素大小相关，而非矢量图的原始大小。因此，使用矢量图时，使用百分比值（`<percentage>`）更可取。
- {{cssxref("&lt;percentage&gt;")}}
  - : 以原始图像大小的百分比表示的边缘偏移量：水平偏移使用图像的宽度，垂直偏移则使用图像的高度。
- `fill`
  - : 保留图像的中心区域并将其作为背景图像显示出来，但其会堆叠在 {{cssxref("background")}} 之上。它的宽度和高度分别对应顶部和左侧图像切片的宽度和高度。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 可调整的边框宽度和切片

以下示例展示了一个简单的带有边框图像的 `<div>`。引用的边框图像如下所示：

![nice multi-colored diamonds](border-diamonds.png)

图像中钻石是长宽分别为 30px，所以我们将 [`border-width`](/zh-CN/docs/Web/CSS/border-width) 和 `border-image-slice` 的值分别设置为 30px，以呈现完整且清晰的钻石图像。

```css
border-width: 30px;
border-image-slice: 30;
```

这是我们在示例中采用的默认值。我们还额外提供了两个滑块，让你可以动态修改这两个属性的值，以查看对应的效果。

`border-image-slice` 用于改变每个边区域和角区域对应的图像切片（如果设置了 `fill` 关键字，则会额外包括图像的中心区域）的大小——将其改变为其它值会使边框中的形状看起来不太规则，但这会产生一些有趣的效果。

`border-width` 用于改变边框的宽度。引用的图像切片将被缩放以适应边框的大小。这意味着，如果边框宽度大于切片宽度，图像可能会变得模糊（除非使用了 SVG 矢量图）。

#### HTML

```html
<div class="wrapper">
  <div></div>
</div>

<ul>
  <li>
    <label for="width">slide to adjust <code>border-width</code></label>
    <input type="range" min="10" max="45" id="width">
    <output id="width-output">30px</output>
  </li>
  <li>
    <label for="slice">slide to adjust <code>border-image-slice</code></label>
    <input type="range" min="10" max="45" id="slice">
    <output id="slice-output">30</output>
  </li>
</ul>
```

#### CSS

```css
.wrapper {
  width: 400px;
  height: 300px;
}

div > div {
  width: 300px;
  height: 200px;
  border-width: 30px;
  border-style: solid;
  border-image: url(https://interactive-examples.mdn.mozilla.net/media/examples/border-diamonds.png);
  border-image-slice: 30;
  border-image-repeat: round;
}

li {
  display: flex;
  place-content: center;
}
```

#### JavaScript

```js
const widthSlider = document.getElementById('width');
const sliceSlider = document.getElementById('slice');
const widthOutput = document.getElementById('width-output');
const sliceOutput = document.getElementById('slice-output');
const divElem = document.querySelector('div > div');

widthSlider.addEventListener('input', () => {
  const newValue = widthSlider.value + 'px';
  divElem.style.borderWidth = newValue;
  widthOutput.textContent = newValue;
})

sliceSlider.addEventListener('input', () => {
  const newValue = sliceSlider.value;
  divElem.style.borderImageSlice = newValue;
  sliceOutput.textContent = newValue;
})
```

#### 结果

{{EmbedLiveSample('可调整的边框宽度和切片', '100%', 400)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [图解说明 1 到 4 个值的语法](/zh-CN/docs/Web/CSS/Shorthand_properties#tricky_edge_cases)
