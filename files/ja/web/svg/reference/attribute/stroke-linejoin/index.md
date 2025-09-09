---
title: stroke-linejoin
slug: Web/SVG/Reference/Attribute/stroke-linejoin
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`stroke-linejoin`** 属性は、描線（線）が描かれたときにパスの角に使用する形状を定義する表示属性です。

> [!NOTE]
> プレゼンテーション属性であるため、 `stroke-linejoin` には対応する CSS プロパティ {{cssxref("stroke-linejoin")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は次の SVG 要素で使用できます。

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
  <!--
  左上のパス:
  "miter" 値の効果
  -->
  <path
    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!--
  中央のパス:
  "round" 値の効果
  -->
  <path
    d="M7,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="round" />

  <!--
  右上のパス:
  "bevel" 値の効果
  -->
  <path
    d="M13,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="bevel" />

  <!--
  左下のパス:
  "miter-clip" 値の効果
  対応していない場合は "miter" に代替される
  -->
  <path
    d="M3,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!--
  右下のパス:
  "arcs" 値の効果
  対応していない場合は "miter" に代替される
  -->
  <path
    d="M9,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="arcs" />

  <!--
  次のピンクの線は、各描線のパスの位置を強調しています。
  -->
  <g id="highlight">
    <path
      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5.5" r="0.05" fill="pink" />
  </g>
  <use href="#highlight" x="6" />
  <use href="#highlight" x="12" />
  <use href="#highlight" x="2" y="6" />
  <use href="#highlight" x="8" y="6" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 400)}}

## 使用場面

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>arcs</code> | <code>bevel</code> |<code>miter</code> |
        <code>miter-clip</code> | <code>round</code>
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>miter</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>離散的</td>
    </tr>
  </tbody>
</table>

### arcs

> [!NOTE]
> `arcs` は SVG2 で導入されたものであり、まだ広く対応されていません。詳しくは下記の[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

`arcs` 値は、パスの区間同士を結合するために円弧のコーナーを使用することを示します。円弧の形状は、結合点の描線の外側の辺を、結合点の外側の辺と同じ曲率の円弧で拡張することによって形成されます。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- "arcs" 値の効果 -->
  <path
    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="arcs" />

  <!--
  次のピンクの線は、各描線のパスの位置を強調しています。
  -->
  <g id="p">
    <path
      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('arcs', '100%', 200)}}

### bevel

`bevel` 値は、パスの区間同士を結合するために面取りされたコーナーを使用することを示します。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "bevel" value -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="bevel" />

  <!--
  次のピンクの線は、各描線のパスの位置を強調しています。
  -->
  <g id="p">
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('bevel', '100%', 200)}}

### miter

`miter` 値は、パスの区間同士をつなぐために鋭いコーナーを使用することを示します。コーナーは、パスの区間同士のタンジェントで、描線の外縁を交差するまで伸ばすことで形成します。

> [!NOTE]
> これが {{SVGAttr('stroke-miterlimit')}} を超えると、結合点は `bevel` で代替されます。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "miter" value -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!-- 既定マイター制限を超えた鋭角に対する "miter" 値の効果 -->
  <path
    d="M7,5 l0.75,-3 l0.75,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!-- 以下の赤い点線は、miter 値が bevel 値に代替される位置を示す -->
  <path
    d="M0,0 h10"
    stroke="red"
    stroke-dasharray="0.05"
    stroke-width="0.025" />

  <!-- 次のピンクの線は、各描線のパスの位置を強調 -->
  <g>
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />

    <path
      d="M7,5 l0.75,-3 l0.75,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="7" cy="5" r="0.05" fill="pink" />
    <circle cx="7.75" cy="2" r="0.05" fill="pink" />
    <circle cx="8.5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('miter', '100%', 200)}}

### miter-clip

> [!NOTE]
> `miter-clip` は SVG2 で導入されたものであり、まだ広く対応されていません。詳しくは下記の[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

`miter-clip` 値は、パスの区間同士をつなぐために鋭いコーナーを使用することを示します。コーナーは、パスの区間同士のタンジェントで描線の外縁を交差するまで伸ばすことで形成します。

{{SVGAttr('stroke-miterlimit')}} を超えると、パスセグメントの交点から、{{SVGAttr('stroke-miterlimit')}} の値の半分に描線幅を掛けた距離でマイターが切り取られます。これは、とても鋭いな結合やアニメーションの場合に `miter` よりも良い描画結果になります。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- "miter-clip" 値の効果 -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!-- 既定マイター制限を超える鋭角での "miter-clip" 値の効果 -->
  <path
    d="M7,5 l0.75,-3 l0.75,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!-- 以下の赤い点線は、クリップが起こるべき場所を示す -->
  <path
    d="M0,0 h10"
    stroke="red"
    stroke-dasharray="0.05"
    stroke-width="0.025" />

  <!-- 以下のピンクの行は、各描線のパスの位置を強調しています。 -->
  <g>
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />

    <path
      d="M7,5 l0.75,-3 l0.75,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="7" cy="5" r="0.05" fill="pink" />
    <circle cx="7.75" cy="2" r="0.05" fill="pink" />
    <circle cx="8.5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('miter-clip', '100%', 200)}}

### round

`round` 値は、パス区間を接続するのに丸い角を使用することを示します。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "round" value -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="round" />

  <!--
  次のピンクの線は、各描線のパスの位置を強調しています。
  -->
  <g id="p">
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('round', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("stroke-linejoin")}} プロパティ
