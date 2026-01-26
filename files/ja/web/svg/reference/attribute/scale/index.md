---
title: scale
slug: Web/SVG/Reference/Attribute/scale
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`scale`** 属性は、{{SVGElement("feDisplacementMap")}} フィルタープリミティブで使用する変倍率を定義します。この量は {{SVGElement("filter")}} 要素の {{SVGAttr("primitiveUnits")}} 属性で設定された座標系で表現されます。

この属性は次の SVG 要素で使用できます。

- {{SVGElement("feDisplacementMap")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="5" />
  </filter>
  <filter id="displacementFilter2" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50" />
  </filter>

  <circle cx="100" cy="100" r="80" style="filter: url(#displacementFilter);" />
  <circle
    cx="100"
    cy="100"
    r="80"
    style="filter: url(#displacementFilter2);
  transform: translateX(240px);" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## 使用方法のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : この値は距離に関する変倍率を定義します。

    この属性の値が `0` の場合は、元画像に対して影響しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
