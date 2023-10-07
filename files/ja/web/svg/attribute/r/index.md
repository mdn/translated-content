---
title: r
slug: Web/SVG/Attribute/r
---

{{SVGRef}}

**`r`** 属性は円の半径を定義します。

二つの要素、すなわち、{{SVGElement("circle")}} と {{SVGElement("radialGradient")}} が、この属性を使っています。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <radialGradient r="0" id="myGradient000">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>
  <radialGradient r="50%" id="myGradient050">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>
  <radialGradient r="100%" id="myGradient100">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50" cy="50" r="0" />
  <circle cx="150" cy="50" r="25" />
  <circle cx="250" cy="50" r="50" />

  <rect x="20" y="120" width="60" height="60" fill="url(#myGradient000)" />
  <rect x="120" y="120" width="60" height="60" fill="url(#myGradient050)" />
  <rect x="220" y="120" width="60" height="60" fill="url(#myGradient100)" />
</svg>
```

{{EmbedLiveSample('topExample', '100%', 200)}}

## circle

{{SVGElement('circle')}} に関しては、`r` は、円の半径を定めており、したがって、その円の大きさを定めています。ゼロ以下の値を用いると、その円はまったく描画されません。

| 値                   | **[\<length>](/ja/docs/Web/SVG/Content_type#Length)** \| **[\<percentage>](/ja/docs/Web/SVG/Content_type#Percentage)** |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| デフォルト値         | `0`                                                                                                                    |
| アニメーション可能か | Yes                                                                                                                    |

> **メモ:** SVG2 からは、`r` は _幾何属性 (Geometry Property)_ です。これが意味することは、`r` 属性を `circle` の CSS 属性としても使える、ということです。

## radialGradient

{{ SVGElement("radialGradient") }} に関しては、`r` は、放射状グラデーションの末端の円の半径を定めています。

グラデーションの **100%** にあたるピン留め箇所 (stop) が、この末端の円の外周にマッピングされるように、グラデーションが描画されます。ゼロ以下の値を用いると、グラデーションの最後の {{ SVGElement("stop") }} の色と不透明度を使った単一の色で、当該領域を塗りつぶすことになります。

| 値                   | **[\<length>](/ja/docs/Web/SVG/Content_type#Length)** \| **[\<percentage>](/ja/docs/Web/SVG/Content_type#Percentage)** |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| デフォルト値         | `50%`                                                                                                                  |
| アニメーション可能か | Yes                                                                                                                    |

## 仕様

{{Specifications}}
