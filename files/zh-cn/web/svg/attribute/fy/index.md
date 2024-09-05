---
title: fy
slug: Web/SVG/Attribute/fy
---

{{SVGRef}}

**`fy`** 属性用来定义径向渐变的焦点的 y 轴坐标。

你可以将该属性与以下 SVG 元素一起使用：

- {{SVGElement("radialGradient")}}

## 示例

### 示例 1

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="gradient1"
      cx="0.5"
      cy="0.5"
      r="0.5"
      fx="0.35"
      fy="0.35"
      fr="5%">
      <stop offset="0%" stop-color="white" />
      <stop offset="100%" stop-color="darkseagreen" />
    </radialGradient>
    <radialGradient
      id="gradient2"
      cx="0.5"
      cy="0.5"
      r="0.5"
      fx="0.35"
      fy="0.75"
      fr="5%">
      <stop offset="0%" stop-color="white" />
      <stop offset="100%" stop-color="darkseagreen" />
    </radialGradient>
  </defs>

  <circle cx="100" cy="100" r="100" fill="url(#gradient1)" />
  <circle
    cx="100"
    cy="100"
    r="100"
    fill="url(#gradient2)"
    style="transform: translateX(240px);" />
</svg>
```

{{EmbedLiveSample("示例 1", "480", "200")}}

### 示例 2

```html
<svg
  viewBox="0 0 120 120"
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="Gradient"
      cx="0.5"
      cy="0.5"
      r="0.5"
      fx="0.35"
      fy="0.35"
      fr="5%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient)"
    stroke="black"
    stroke-width="2" />

  <circle
    cx="60"
    cy="60"
    r="50"
    fill="transparent"
    stroke="white"
    stroke-width="2" />
  <circle cx="35" cy="35" r="2" fill="white" stroke="white" />
  <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">
    (fx,fy)
  </text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">
    (cx,cy)
  </text>
</svg>
```

{{EmbedLiveSample("示例 2", "200", "250")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>{{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td>
        与元素的 {{SVGAttr("cy")}} 表现值一致，不论
        <code>cy</code> 的值是继承与否。
      </td>
    </tr>
    <tr>
      <th scope="row">可变性</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
