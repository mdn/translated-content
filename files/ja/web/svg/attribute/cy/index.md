---
title: cy
slug: Web/SVG/Attribute/cy
---

{{SVGRef}}

**`cy`** 属性は中心の y-座標を定義します。

3 つの要素がこの属性を用います: {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("radialGradient")}}

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

{{EmbedLiveSample('topExample', '100%', 300)}}

## circle

{{SVGElement('circle')}}に対して、`cy`は、図形の y-軸の中心を定義します。

| 値                 | **[\<length>](/ja/docs/Web/SVG/Content_type#Length)** \| **[\<percentage>](/ja/docs/Web/SVG/Content_type#Percentage)** |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 既定値             | `0`                                                                                                                    |
| アニメーション可否 | はい                                                                                                                   |

> **メモ:** SVG2 として開始する場合には、`cy`は*ジオメトリプロパティ*です。これは本属性が円への CSS プロパティとしても利用可能であることを意味します。

## ellipse

{{SVGElement('ellipse')}}に対して、`cy`は図形中心の y-座標を定義します。

| 値                 | **[\<length>](/ja/docs/Web/SVG/Content_type#Length)** \| **[\<percentage>](/ja/docs/Web/SVG/Content_type#Percentage)** |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 既定値             | `0`                                                                                                                    |
| アニメーション可否 | はい                                                                                                                   |

> **メモ:** SVG2 として開始する場合には、`cy`は*ジオメトリプロパティ*です。これは本属性が円への CSS プロパティとしても利用可能であることを意味します。

## radialGradient

{{SVGElement('radialGradient')}}に対して、`cy`は、放射状勾配の終端円の y-座標を定義します。

| 値                 | **[\<length>](/ja/docs/Web/SVG/Content_type#Length)** |
| ------------------ | ----------------------------------------------------- |
| 既定値             | `50%`                                                 |
| アニメーション可否 | はい                                                  |

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

{{EmbedLiveSample('radialGradient', 150, '100%')}}

## 仕様

{{Specifications}}
