---
title: points
slug: Web/SVG/Attribute/points
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

**`points`** 属性は、点のリストを定義します。各点は、ユーザー座標系における X 座標と Y 座標を表す数値の組で定義されます。属性に奇数の座標が含まれている場合、最後の座標は無視されます。

この属性は次の SVG 要素で使用できます。

- {{SVGElement("polyline")}}
- {{SVGElement("polygon")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polyline は開いた図形となる -->
  <polyline stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />

  <!-- polygon は閉じた図形となる -->
  <polygon
    stroke="black"
    fill="none"
    transform="translate(100,0)"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  通常、 X と Y をカンマで、座標群をスペースで区切るのが
  ベストプラクティスとされます。
  その方法はコードを人間にとって読みやすいものにしてくれます。
  -->
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## polyline

{{SVGElement('polyline')}}の場合、 `points` で定義された点リストはそれぞれが描きたい線の頂点を表します。各点は、ユーザー座標系の X 座標と Y 座標として定義されます。

> [!NOTE]
> polyline は最初の点と最後の点が接続されない開いた図形となります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polyline は開いた図形となる -->
  <polyline stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

{{EmbedLiveSample('polyline', '100%', 200)}}

## polygon

{{SVGElement('polygon')}}の場合、`points` で定義された点リストはそれぞれが描きたい図形の頂点を表します。各点は、ユーザー座標系の X 座標と Y 座標として定義されます。

> [!NOTE]
> polygon は最初の点と最後の点が接続された閉じた図形となります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polygon は閉じた図形となる -->
  <polygon stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

{{EmbedLiveSample('polygon', '100%', 200)}}

## 仕様書

{{Specifications}}
