---
title: patternUnits
slug: Web/SVG/Attribute/patternUnits
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

**`patternUnits`** 属性は、 {{ SVGElement("pattern") }} 要素の幾何プロパティにどの座標系を使用するかを示します。

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement('pattern')}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- すべての幾何プロパティは、現在のユーザー空間からの相対値です。 -->
  <pattern
    id="p1"
    x="12.5"
    y="12.5"
    width="25"
    height="25"
    patternUnits="userSpaceOnUse">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- すべての幾何プロパティは、対象とするバウンディングボックスからの相対値です。 -->
  <pattern
    id="p2"
    x=".125"
    y=".125"
    width=".25"
    height=".25"
    patternUnits="objectBoundingBox">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- Left square with user space tiles -->
  <rect x="10" y="10" width="80" height="80" fill="url(#p1)" />

  <!-- Right square with bounding box tiles -->
  <rect x="110" y="10" width="80" height="80" fill="url(#p2)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## pattern

{{SVGElement('pattern')}} の場合、 `patternUnits` は要素の幾何プロパティ（{{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }}, {{ SVGAttr("height") }}）に使用する座標系を定義します。

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
  - : この値は、幾何プロパティのすべての座標が、パターンが適用されたときに定義されたユーザー座標系を参照することを示します。
- `objectBoundingBox`
  - : この値は、幾何プロパティのすべての座標が、パターンが適用される要素のバウンディングボックスの分数またはパーセント値を表します。バウンディングボックスは {{ SVGElement("pattern") }} のコンテンツが "`0 0 1 1`" {{ SVGAttr("viewBox") }} にバインドされているのと同じと考えることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
