---
title: scale
slug: Web/SVG/Attribute/scale
---

{{SVGRef}}

**`scale`** 属性は、{{SVGElement("feDisplacementMap")}}フィルタプリミティブにおいて用いられる距離の尺度因子を定義します。その量は、{{SVGElement("filter")}}要素の{{SVGAttr("primitiveUnits")}}属性で規定される座標系で表されます。

1 つの要素のみがこの属性を用います: {{SVGElement("feDisplacementMap")}}

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="5"/>
  </filter>
  <filter id="displacementFilter2" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50"/>
  </filter>

  <circle cx="100" cy="100" r="80" style="filter: url(#displacementFilter);""/>
  <circle cx="100" cy="100" r="80" style="filter: url(#displacementFilter2); transform: translateX(240px);""/>
</svg>
```

{{EmbedLiveSample("topExample", "480", "200")}}

## 使用方法

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション可否</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

- `<number>`

  - : この値は距離に関する尺度因子をのみを定義します。

    この属性の値が`0`の場合は、元画像に対して影響しません。

## 仕様

| 仕様書                                                                                                       | 策定状況                         | コメント  |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName("Filters 1.0", "#element-attrdef-fedisplacementmap-scale", "scale")}} | {{Spec2("Filters 1.0")}} | No change |
| {{SpecName("SVG1.1", "filters.html#feDisplacementMapScaleAttribute", "scale")}}     | {{Spec2("SVG1.1")}}         | 初期定義  |

## ブラウザー実装状況

{{Compat("svg.elements.feDisplacementMap.scale")}}
