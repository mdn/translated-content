---
title: r
slug: Web/SVG/Attribute/r
l10n:
  sourceCommit: 86d2da199cf9705310c61cada97ed4e9b921fc47
---

{{SVGRef}}

**`r`** 属性は円の半径を定義します。

この属性は次の SVG 要素で使用できます。

- {{SVGElement("circle")}}
- {{SVGElement("radialGradient")}}

値がパーセント値で設定されている場合、現在の SVG ビューポートの正規化された対角線を参照します。

## 例

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

{{EmbedLiveSample("Example", '100%', 200)}}

## circle

{{SVGElement('circle')}} に関しては、`r` は、円の半径を定めており、したがって、その円の大きさを定めています。ゼロ以下の値を用いると、その円はまったく描画されません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> SVG2 からは、`r` は _幾何プロパティ (Geometry Property)_ です。すなわち、この属性をは円に対して CSS プロパティとしても使うことができます。

## radialGradient

{{ SVGElement("radialGradient") }} において、`r` は、放射グラデーションの末端の円の半径を定めます。

グラデーションは、 **100%** の色経由点 (stop) が、この末端の円の外周に対応するように描画されます。ゼロ以下の値を用いると、グラデーションの最後の {{ SVGElement("stop") }} の色と不透明度を使った単一の色で、当該領域を塗りつぶすことになります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>50%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}
