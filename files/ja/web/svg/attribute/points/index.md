---
title: points
slug: Web/SVG/Attribute/points
---

{{SVGRef}}

**`points`** 属性は、点のリストを定義します。各点は、ユーザー座標系における X 座標と Y 座標を表す数値の組で定義されます。属性に奇数の座標が含まれている場合、最後の座標は無視されます。

2 つの要素がこの属性を使用しています: {{SVGElement("polyline")}}、および{{SVGElement("polygon")}}

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polylineは開いた図形となる -->
  <polyline stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />

  <!-- polygonは閉じた図形となる -->
  <polygon
    stroke="black"
    fill="none"
    transform="translate(100,0)"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  通常、XとYをカンマで、座標群をスペースで区切るのがベストプラクティスとされます。
  その方法はコードを人間にとって読みやすいものにしてくれます。
  -->
</svg>
```

{{EmbedLiveSample('topExample', '100%', 200)}}

## polyline

{{SVGElement('polyline')}}の場合、 `points` で定義された点リストはそれぞれが描きたい線の頂点を表します。各点は、ユーザー座標系の X 座標と Y 座標として定義されます。

> **メモ:** polyline は最初の点と最後の点が接続されない開いた図形となります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polylineは開いた図形となる -->
  <polyline stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

{{EmbedLiveSample('polyline', '100%', 200)}}

## polygon

{{SVGElement('polygon')}}の場合、`points` で定義された点リストはそれぞれが描きたい図形の頂点を表します。各点は、ユーザー座標系の X 座標と Y 座標として定義されます。

> **メモ:** polygon は最初の点と最後の点が接続された閉じた図形となります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polygonは閉じた図形となる -->
  <polygon stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

{{EmbedLiveSample('polygon', '100%', 200)}}

## 仕様

{{Specifications}}
