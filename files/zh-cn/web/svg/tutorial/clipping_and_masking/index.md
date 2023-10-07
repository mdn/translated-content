---
title: 剪切和遮罩
slug: Web/SVG/Tutorial/Clipping_and_masking
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Basic_Transformations", "Web/SVG/Tutorial/Other_content_in_SVG") }}

擦除已经创建的元素的部分内容，最初看起来有点矛盾。但是如果你打算在 SVG 中创建一个半圆形，你将很快发现下面的属性的作用了。

- **Clipping** 用来移除在别处定义的元素的部分内容。在这里，任何半透明效果都是不行的。它只能要么显示要么不显示。

- **Masking** 允许使用透明度和灰度值遮罩计算得的软边缘。

## 创建剪切

我们在一个圆形的基础上创建上面提到的半圆形：

```html
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="0" width="200" height="100" />
    </clipPath>
  </defs>

  <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
</svg>
```

在 (100,100) 创建一个圆形，半径是 100。属性`clip-path`引用了一个带单个 rect 元素的`{{ SVGElement("clipPath") }}`元素。它内部的这个矩形将把画布的上半部分涂黑。注意，`clipPath`元素经常放在一个`defs`元素内。

然而，该 rect 不会被绘制。它的象素数据将用来确定：圆形的哪些像素需要最终呈现出来。因为矩形只覆盖了圆形的上半部分，所以下半部分将消失了：

{{ EmbedLiveSample('创建剪切','240','240') }}

现在我们已经有了一个半圆形，不用处理弧形路径元素。对于这个剪切，`clipPath`内部的每个路径都会被检查到、与它的描边属性一起被估值、变形。然后目标的位于 clipPath 内容的结果的透明度区域的每一块都不会呈现。颜色、不透明度都没有这种效果，因为它们不能让一部分彻底消失。

## 遮罩

遮罩的效果最令人印象深刻的是表现为一个渐变。如果你想要让一个元素淡出，你可以利用遮罩效果实现这一点。

```html
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="Gradient">
      <stop offset="0" stop-color="white" stop-opacity="0" />
      <stop offset="1" stop-color="white" stop-opacity="1" />
    </linearGradient>
    <mask id="Mask">
      <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)" />
    </mask>
  </defs>

  <rect x="0" y="0" width="200" height="200" fill="green" />
  <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
</svg>
```

你看到有一个绿色填充的矩形在底层，一个红色填充的矩形在上层。后者有一个`mask`属性指向一个`mask`元素。`mask`元素的内容是一个单一的`rect`元素，它填充了一个透明到白色的渐变。作为红色矩形继承`mark`内容的`alpha`值（透明度）的结果，我们看到一个从绿色到红色渐变的输出：

{{ EmbedLiveSample('遮罩','240','240') }}

## 用 `opacity` 定义透明度

有一个简单方法可以用来为整个元素设置透明度。它就是`opacity`属性：

```xml
<rect x="0" y="0" width="100" height="100" opacity=".5" />
```

上面的矩形将绘制为半透明。填充和描边还有两个属性是`fill-opacity`和`stroke-opacity`，分别用来控制填充和描边的不透明度。需要注意的是描边将绘制在填充的上面。因此，如果你在一个元素上设置了描边透明度，但它同时设有填充，则描边的一半应用填充色，另一半将应用背景色。

```html
<svg
  width="200"
  height="200"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="0" y="0" width="200" height="200" fill="blue" />
  <circle
    cx="100"
    cy="100"
    r="50"
    stroke="yellow"
    stroke-width="40"
    stroke-opacity=".5"
    fill="red" />
</svg>
```

{{ EmbedLiveSample('用 opacity 定义透明度','240','240') }}

你看到这个示例，红色的圆形在蓝色的背景上，黄色描边设置为 50% 不透明度，导到双色描边的效果。

## 利用广为人知的 CSS 技术

Web 开发工具箱中有一个很有用的工具是`display:none`。它虽然几无悬念，但是依然可以在 SVG 上使用该 CSS 属性，连同 CSS2 定义的`visibility`和`clip`属性。为了恢复以前设置的`display:none`，知道这一点很重要：所有的 SVG 元素的初始`display`值都是`inline`。

{{ PreviousNext("Web/SVG/Tutorial/Basic_Transformations", "Web/SVG/Tutorial/Other_content_in_SVG") }}
