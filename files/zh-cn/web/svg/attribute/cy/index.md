---
title: cy
slug: Web/SVG/Attribute/cy
---

{{SVGRef}}

**`cy`** 属性定义一个中心点的 y 轴坐标。

有三个元素在使用此属性：{{SVGElement("circle")}}，{{SVGElement("ellipse")}} 和 {{SVGElement("radialGradient")}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cy="25%" id="myGradient">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cy="50" cx="50" r="45" />
  <ellipse cy="150" cx="50" rx="45" ry="25" />
  <rect x="5" y="205" width="90" height="90" fill="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample('示例', '100%', 300)}}

## 圆

对于 {{SVGElement('circle')}}，`cy` 用来定义图形中心的 y 轴坐标。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">可变性</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

**注：**起始于 SVG2，`cy` 是一个几何属性，意味着该属性也可以用作圆的 CSS 属性。

## 椭圆

对于 {{SVGElement('ellipse')}}，`cy` 用来定义图形中心的 y 轴坐标。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">可变性</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

**注：**起始于 SVG2，`cy` 是一个几何属性，意味着该属性也可以用作椭圆的 CSS 属性。

## 径向渐变

对于 {{SVGElement('radialGradient')}}，`cy` 用来定义径向渐变终止圆的 y 轴坐标。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>50%</code></td>
    </tr>
    <tr>
      <th scope="row">可变性</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

#### 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 34 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient cy="0" id="myGradient000">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cy="50%" id="myGradient050">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cy="100%" id="myGradient100">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
  </defs>

  <rect
    x="1"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient000)"
    stroke="black" />
  <rect
    x="13"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient050)"
    stroke="black" />
  <rect
    x="25"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient100)"
    stroke="black" />
</svg>
```

{{EmbedLiveSample('径向渐变', 150, '100%')}}

## 规范

{{Specifications}}

## 参见

- {{SVGAttr("cx")}}
- {{SVGAttr("r")}}
