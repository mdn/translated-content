---
title: fill-rule
slug: Web/SVG/Reference/Attribute/fill-rule
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`fill-rule`** 属性はプレゼンテーション属性で、図形の内部を決定するために使用するアルゴリズムを定義します。

> [!NOTE]
> プレゼンテーション属性であるため、 `fill-rule` には対応する CSS プロパティ {{cssxref("fill-rule")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
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
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- fill-rule の既定値 -->
  <polygon
    fill-rule="nonzero"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  図形の中心は、無限大との間に 2 つの
  パス線分（赤いストロークで表示）があります。
  したがって、図形の外側にあると見なされ、
  塗りつぶされません。
  -->
  <polygon
    fill-rule="evenodd"
    stroke="red"
    points="150,0 121,90 198,35 102,35 179,90" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>nonzero</code> | <code>evenodd</code></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>nonzero</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>離散</td>
    </tr>
  </tbody>
</table>

`fill-rule` 属性は、図形の内側（つまり塗りつぶされる領域）をどのように決定するかについて、2 つのオプションを提供しています。

### nonzero

値 `nonzero` は、その点から任意の方向に無限大まで光線を引き、図形の線分が光線と交差する位置を調べることで、図形内のこの点の「内側」を決定します。カウントを 0 から始め、パス区間が光線を左から右に交差するたびに 1 を追加し、パス区間が光線を右から左に交差するたびに 1 を減算します。交差の回数を数えた後、結果がゼロであれば、この点はパスの外側です。そうでなければ内側です。

#### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- 交差するパスの区間に対する非ゼロ塗りつぶしルールの効果 -->
  <polygon
    fill-rule="nonzero"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  パスの区間が同じ方向に移動する図形内の図形に対する、
  塗りつぶしルールが非ゼロの場合の効果（どちらの正方形も
  時計回りに描画し、「右」方向に移動する）
  -->
  <path
    fill-rule="nonzero"
    stroke="red"
    d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z" />

  <!--
  パスセグメントが反対方向に移動する図形内の図形に対する、
  塗りつぶしルールが非ゼロの場合の効果（1 つの正方形は
  時計回りに、もう一方は反時計回りに描画する）
  -->
  <path
    fill-rule="nonzero"
    stroke="red"
    d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z" />
</svg>
```

{{EmbedLiveSample('nonzero', '100%', 200)}}

### evenodd

`evenodd` の値は、この点から任意の方向に無限大まで光線を引き、指定された図形のパス区間のうち光線が横切る数を数えることで、図形内の点の「内側」を決定します。この数が奇数の場合、この点は内側とし、偶数の場合、この点は外側とします。

#### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- 交差するパスセグメントに対する偶奇塗りつぶしルールの効果 -->
  <polygon
    fill-rule="evenodd"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  パスセグメントが反対方向に移動する図形内の図形に対する、
  塗りつぶしルールが非ゼロの場合の効果（両方の正方形が
  時計回りに、「右」に描画する）
  -->
  <path
    fill-rule="evenodd"
    stroke="red"
    d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z" />

  <!--
  パスセグメントが反対方向に移動する図形内の図形に対する
  偶奇塗りつぶしルールの効果（1 つの正方形は時計回りに、
  もう一方は反時計回りに描画する）
  -->
  <path
    fill-rule="evenodd"
    stroke="red"
    d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z" />
</svg>
```

{{EmbedLiveSample('evenodd', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("fill-rule")}} プロパティ
