---
title: 使用 SMIL 的 SVG 动画
slug: Web/SVG/SVG_animation_with_SMIL
---

{{SVGRef}}

> **警告：** 虽然 Chrome 45 弃用了 SMIL 而偏向于 CSS 动画和 Web 动画，但之后 Chrome 开发者[中止了](https://groups.google.com/a/chromium.org/d/msg/blink-dev/5o0yiO440LM/YGEJBsjUAwAJ)对 SMIL 的弃用。

Firefox 4 利用 [Synchronized Multimedia Integration Language](https://www.w3.org/TR/REC-smil/)（SMIL）引入了对 [SVG](/zh-CN/docs/Web/SVG) 动画的支持。SMIL 允许你：

- 变动一个元素的数字属性（x、y……）
- 变动变形属性（translation 或 rotation）
- 变动颜色属性
- 物件方向与运动路径方向同步

只要在一个 SVG 元素内添加一个 SVG 元素比如说 {{SVGElement("animate")}}，就能实现让元素动起来。下面是四个不同方法的示例。

## 元素的动画属性

下面的示例变动了一个圆的 **cx** 属性。为了做到这，我们在 {{SVGElement("circle")}} 元素里面添加了一个 {{SVGElement("animate")}} 元素。对 {{SVGElement("animate")}} 元素来说，重要的属性有：

- **attributeName**
  - : 变动属性的属性名。
- from
  - : 变动的初始值。
- to
  - : 结束值。
- dur
  - : 动画的持续时间（例如，写“5s”代表 5 秒钟）。

如果你想在同一个元素里变动更多的属性，只要添加更多的 {{SVGElement("animate")}} 元素。

```html
<svg width="300" height="100">
  <title>Attribute Animation with SMIL</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animate
      attributeName="cx"
      from="0"
      to="500"
      dur="5s"
      repeatCount="indefinite" />
  </circle>
</svg>
```

{{ EmbedLiveSample('元素的动画属性', '100%', 120) }}

## 变动 transform 属性

{{SVGElement("animateTransform")}} 元素用于变动 **transform** 属性。这个新元素是必要的，否则我们就不能让一个简单的、仅仅是一个数字的属性比如说 **x** 动起来。旋转属性看起来是这样的：`rotation(theta, x, y)`，这里 `theta` 是以角度数计量的角度，`x` 和 `y` 都是绝对位置。在下面的示例中，将变动旋转的中心以及角度。

```html
<svg width="300" height="100">
  <title>SVG SMIL Animate with transform</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect
    x="0"
    y="50"
    width="15"
    height="34"
    fill="blue"
    stroke="black"
    stroke-width="1">
    <animateTransform
      attributeName="transform"
      begin="0s"
      dur="20s"
      type="rotate"
      from="0 60 60"
      to="360 100 60"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{ EmbedLiveSample('变动 transform 属性', '100%', 120) }}

## 沿着路径动画

{{SVGElement("animateMotion")}} 元素使一个元素的位置动起来，并顺着路径同步旋转。定义这个路径是与在 {{SVGElement("path")}} 元素中定义路径的方法相同。你可以设置这个属性以定义对象是否与跟着路径的正切值旋转。

### 示例 1：线性运动

在这个示例中，一个蓝色的圆球在左右边界之间弹动，一次又一次，永不停息。这个动画是用 {{SVGElement("animateMotion")}} 元素操纵的。在这个例子中，我们建立了一个由 **MoveTo** 命令和 **Horizontal-line** 命令、**Z** 命令构成的路径，**MoveTo** 命令命令指定动画路径的起始点，而 **Horizontal-line** 命令把圆移到右边 300 像素处，**Z** 命令闭合路径，建立一个回到起始点的回路。把 **repeatCount** 属性的值设置为 `indefinite`，我们指明了反复循环的动画，只要 SVG 图像还存在就会一直循环下去。

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
  <title>SVG SMIL Animate with Path</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animateMotion path="M 0 0 H 300 Z" dur="3s" repeatCount="indefinite" />
  </circle>
</svg>
```

{{ EmbedLiveSample('示例 1：线性运动', '100%', 120) }}

[查看示例](https://mdn.dev/archives/media/samples/svg/svganimdemo1.html)

### 示例 2：曲线运动

略有改变的示例，其运动路径是一条曲线，沿着路径的方向运动。

```html
<svg width="300" height="100">
  <title>SVG SMIL Animate with Path</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect
    x="0"
    y="0"
    width="20"
    height="20"
    fill="blue"
    stroke="black"
    stroke-width="1">
    <animateMotion
      path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
      dur="3s"
      repeatCount="indefinite"
      rotate="auto" />
  </rect>
</svg>
```

{{ EmbedLiveSample('示例 2：曲线运动', '100%', 120) }}

## 参见

- [SVG](/zh-CN/docs/Web/SVG)
- [SVG 动画规范](https://www.w3.org/TR/SVG/animate.html)
- [SMIL 规范](https://www.w3.org/TR/REC-smil/)
