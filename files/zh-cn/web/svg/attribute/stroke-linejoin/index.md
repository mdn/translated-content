---
title: stroke-linejoin
slug: Web/SVG/Attribute/stroke-linejoin
---

{{SVGRef}}

**`stroke-linejoin`** 属性指明路径的转角处使用的形状或者绘制的基础形状。

> **备注：** 作为表现属性，`stroke-linejoin` 能被用做 CSS 属性。

作为表现属性，该属性能被应用到任何元素，但只对以下元素有效：

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
  <!--
  Upper left path:
  Effect of the "miter" value
  -->
  <path
    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!--
  Center path:
  Effect of the "round" value
  -->
  <path
    d="M7,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="round" />

  <!--
  Upper right path:
  Effect of the "bevel" value
  -->
  <path
    d="M13,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="bevel" />

  <!--
  Bottom left path:
  Effect of the "miter-clip" value
  with fallback to "miter" if not supported.
  -->
  <path
    d="M3,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!--
  Bottom right path:
  Effect of the "arcs" value
  with fallback to "miter" if not supported.
  -->
  <path
    d="M9,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="arcs" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <g id="highlight">
    <path
      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5.5" r="0.05" fill="pink" />
  </g>
  <use xlink:href="#highlight" x="6" />
  <use xlink:href="#highlight" x="12" />
  <use xlink:href="#highlight" x="2" y="6" />
  <use xlink:href="#highlight" x="8" y="6" />
</svg>
```

{{EmbedLiveSample('示例', '100%', 400)}}

## 用法

| 值       | `arcs` \| `bevel` \|`miter` \| `miter-clip` \| `round` |
| -------- | ------------------------------------------------------ |
| 默认值   | `miter`                                                |
| 可动画性 | Yes                                                    |

### arcs

> **备注：** `arcs` 来自于 SVG2 但尚未被广泛支持，详情参见 [浏览器兼容性](#Browser_compatibility)

`arcs` 值指示将使用圆弧拐角来连接路径线段。通过用与连接点的外边缘具有相同曲率的圆弧在连接点处延伸笔触的外边缘来形成弧形。

#### 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "arcs" value -->
  <path
    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="arcs" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <g id="p">
    <path
      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('arcs', '100%', 200)}}

### bevel

The `bevel` 用斜角连接路径段。

#### 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "bevel" value -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="bevel" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <g id="p">
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('bevel', '100%', 200)}}

### miter

The `miter` 用尖角连接路径段。通过在路径段的切线处延伸笔触的外边缘直到它们相交，来形成拐角。

> **备注：** 如果超出了{{SVGAttr('stroke-miterlimit')}}，则会退回到 `bevel`。

#### 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "miter" value -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!-- Effect of the "miter" value on a sharp angle
       where de default miter limit is exceeded -->
  <path
    d="M7,5 l0.75,-3 l0.75,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!-- the following red dotted line show where
       the miter value falls back to the bevel value -->
  <path
    d="M0,0 h10"
    stroke="red"
    stroke-dasharray="0.05"
    stroke-width="0.025" />

  <!-- the following pink lines highlight the position of the path for each stroke -->
  <g>
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />

    <path
      d="M7,5 l0.75,-3 l0.75,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="7" cy="5" r="0.05" fill="pink" />
    <circle cx="7.75" cy="2" r="0.05" fill="pink" />
    <circle cx="8.5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('miter', '100%', 200)}}

### miter-clip

> **备注：** `miter-clip` 来自于 SVG2 但尚未被广泛支持，详情参见 [浏览器兼容性](#Browser_compatibility)

The `miter-clip` 用尖角连接路径段。通过在路径段的切线处延伸笔触的外边缘直到它们相交，来形成拐角。

如果超过了{{SVGAttr('stroke-miterlimit')}}，则斜切将被裁剪为等于{{SVGAttr('stroke-miterlimit')}}值乘以路径段相交处的笔划宽度的一半的距离。在非常尖锐的连接或动画的情况下，这提供了比 `mitt` 更好的渲染效果。

#### 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "miter-clip" value -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!-- Effect of the "miter-clip" value on a sharp angle
       where de default miter limit is exceeded -->
  <path
    d="M7,5 l0.75,-3 l0.75,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!-- the following red dotted line show where the clip should happen -->
  <path
    d="M0,0 h10"
    stroke="red"
    stroke-dasharray="0.05"
    stroke-width="0.025" />

  <!-- the following pink lines highlight the position of the path for each stroke -->
  <g>
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />

    <path
      d="M7,5 l0.75,-3 l0.75,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="7" cy="5" r="0.05" fill="pink" />
    <circle cx="7.75" cy="2" r="0.05" fill="pink" />
    <circle cx="8.5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('miter-clip', '100%', 200)}}

### round

`round` 使用圆角连接路径片段。

#### 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "round" value -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="round" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <g id="p">
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('round', '100%', 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
