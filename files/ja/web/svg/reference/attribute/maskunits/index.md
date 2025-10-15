---
title: maskUnits
slug: Web/SVG/Reference/Attribute/maskUnits
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`maskUnits`** 属性は、 {{ SVGElement("mask") }} 要素の幾何プロパティに使用する座標系を示します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement('mask')}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <mask
    id="myMask1"
    maskUnits="userSpaceOnUse"
    x="20%"
    y="20%"
    width="60%"
    height="60%">
    <rect fill="black" x="0" y="0" width="100%" height="100%" />
    <circle fill="white" cx="50" cy="50" r="35" />
  </mask>

  <mask
    id="myMask2"
    maskUnits="objectBoundingBox"
    x="20%"
    y="20%"
    width="60%"
    height="60%">
    <rect fill="black" x="0" y="0" width="100%" height="100%" />
    <circle fill="white" cx="50" cy="50" r="35" />
  </mask>

  <!-- Some reference rect to materialized the mask -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
  <rect id="r2" x="0" y="55" width="45" height="45" />
  <rect id="r3" x="55" y="55" width="45" height="45" />
  <rect id="r4" x="55" y="0" width="45" height="45" />

  <!-- The first 3 rect are masked with useSpaceOnUse units -->
  <use mask="url(#myMask1)" href="#r1" fill="red" />
  <use mask="url(#myMask1)" href="#r2" fill="red" />
  <use mask="url(#myMask1)" href="#r3" fill="red" />

  <!-- The last rect is masked with objectBoundingBox units -->
  <use mask="url(#myMask2)" href="#r4" fill="red" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## mask

{{SVGElement('mask')}} では、 `maskUnits` は要素の幾何属性 ({{ SVGAttr("x") }}、{{ SVGAttr("y") }}、{{ SVGAttr("width") }}、{{ SVGAttr("height") }}) に使用される座標系を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : この値は、幾何属性のすべての座標が、マスクの作成時に定義されたユーザー座標系を参照することを示します。
- `objectBoundingBox`
  - : この値は、幾何属性のすべての座標が、マスクが適用される要素の境界ボックスを小数またはパーセント値で表すことを示します。境界ボックスは、 {{ SVGElement("mask") }} のコンテンツが `"0 0 1 1"` {{ SVGAttr("viewBox") }} に結び付けられている場合と同じと考えることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
