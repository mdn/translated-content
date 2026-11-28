---
title: points
slug: Web/SVG/Reference/Attribute/points
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`points`** 属性は、点のリストを定義します。各点は、ユーザー座標系における X 座標と Y 座標を表す数値の組で定義されます。属性含まれている座標の数が奇数であった場合、最後の座標は無視されます。

この属性は次の SVG 要素で使用できます。

- {{SVGElement("polyline")}}
- {{SVGElement("polygon")}}

## polygon

{{SVGElement('polygon')}} において、`points` は描画する図形の各頂点を表す点のリストを定義します。各点は、ユーザー座標系における X 座標と Y 座標で定義します。

> [!NOTE]
> polygon は最初の点と最後の点が接続された閉じた図形となります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## polyline

{{SVGElement('polyline')}} において、`points` は描画する線の各頂点を表す点のリストを定義します。各点は、ユーザー座標系における X 座標と Y 座標で定義します。

> [!NOTE]
> polyline は開いた図形です。つまり、最後の点は最初の点に接続されません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
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
  <!-- polyline は開いた図形です -->
  <polyline stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

{{EmbedLiveSample('polyline', '100%', 200)}}

## 例

### polyline の使用例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polyline は開いた図形です -->
  <polyline stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />

  <!-- polygon は閉じた図形です -->
  <polygon
    stroke="black"
    fill="none"
    transform="translate(100,0)"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  通常、X 座標と Y 座標はカンマで区切り、
  座標の組は空白で区切ることが推奨されます。
  これにより、人間にとって読みやすくなります。
  -->
</svg>
```

{{EmbedLiveSample("Usage with polyline", '100%', 200)}}

### polygon の使用例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polygon は閉じた図形です -->
  <polygon stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

{{EmbedLiveSample('Usage with polygon', '100%', 200)}}

## 仕様書

{{Specifications}}
