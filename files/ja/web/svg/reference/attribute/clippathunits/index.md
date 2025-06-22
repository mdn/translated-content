---
title: clipPathUnits
slug: Web/SVG/Reference/Attribute/clipPathUnits
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`clipPathUnits`** 属性は、 {{ SVGElement("clipPath") }} 要素のコンテンツに使用する座標系を示します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement('clipPath')}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100">
  <clipPath id="myClip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <clipPath id="myClip2" clipPathUnits="objectBoundingBox">
    <circle cx=".5" cy=".5" r=".35" />
  </clipPath>

  <!-- クリップパスに実体化するいくつかの参照長方形 -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
  <rect id="r2" x="0" y="55" width="45" height="45" />
  <rect id="r3" x="55" y="55" width="45" height="45" />
  <rect id="r4" x="55" y="0" width="45" height="45" />

  <!-- 最初の 3 つの長方形は、単位 userSpaceOnUse でクリップされる -->
  <use clip-path="url(#myClip1)" href="#r1" fill="red" />
  <use clip-path="url(#myClip1)" href="#r2" fill="red" />
  <use clip-path="url(#myClip1)" href="#r3" fill="red" />

  <!-- 最後の長方形は、objectBoundingBox 単位でクリップされる -->
  <use clip-path="url(#myClip2)" href="#r4" fill="red" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## clipPath

{{SVGElement('clipPath')}} では、 `clipPathUnits` は要素のコンテンツに使用されている座標系を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>userSpaceOnUse</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- userSpaceOnUse
  - : この値は、{{SVGElement('clipPath')}} 要素内のすべての座標が、クリップパスが作成されたときに定義されたユーザー座標系を参照することを示します。
- objectBoundingBox
  - : この値は、{{SVGElement('clipPath')}} 要素内のすべての座標が、クリップパスが適用される要素の境界ボックスを基準としていることを示します。これは、座標系の原点がオブジェクトの境界ボックスの左上隅であり、オブジェクトの境界ボックスの幅と高さは 1 単位の長さを持つとみなされるということです。

## 仕様書

{{Specifications}}
