---
title: cx
slug: Web/SVG/Attribute/cx
---

{{SVGRef}}

**`cx`** 属性は中心の x-座標を定義します。

3 つの要素がこの属性を用います: {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("radialGradient")}}

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cx="25%" id="myGradient">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50" cy="50" r="45" />
  <ellipse cx="150" cy="50" rx="45" ry="25" />
  <rect x="205" y="5" width="90" height="90" fill="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample('topExample', 100, 100)}}

## circle

{{SVGElement('circle')}}に対して、`cx`は、図形の x-軸の中心を定義します。

| 値                 | {{cssxref("length-percentage")}} |
| ------------------ | -------------------------------- |
| 既定値             | `0`                              |
| アニメーション可否 | はい                             |

> **メモ:** SVG2 として開始する場合には、`cx`は*ジオメトリプロパティ*です。これは本属性が円への CSS プロパティとしても利用可能であることを意味します。

## ellipse

{{SVGElement('ellipse')}}に対して、`cx`は、図形の x-軸の中心を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

> **メモ:** SVG2 として開始する場合には、`cx`は*ジオメトリプロパティ*です。これは本属性が楕円への CSS プロパティとしても利用可能であることを意味します。

## radialGradient

{{SVGElement('radialGradient')}}に対して、`cx`は、放射状勾配の終端円の x-軸の中心を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>50%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション可否</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

#### 例

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
    <radialGradient cx="0" id="myGradient000">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="50%" id="myGradient050">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="100%" id="myGradient100">
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

{{EmbedLiveSample('radialGradient', 150, '100%')}}

## 仕様

{{Specifications}}

## 関連情報

- [cy](/ja/docs/Web/SVG/Attribute/cy)
- [r](/ja/docs/Web/SVG/Attribute/r)
