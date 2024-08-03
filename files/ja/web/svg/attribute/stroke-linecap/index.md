---
title: stroke-linecap
slug: Web/SVG/Attribute/stroke-linecap
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

**`stroke-linecap`** 属性は、開いたサブパスのストローク（線）が描画されるときに、その末端に使用する形状を定義するプレゼンテーション属性です。

> [!NOTE]
> プレゼンテーション属性であるため、`stroke-linecap` は CSS プロパティとして使用できます。

この属性は次の SVG 要素で使用できます。

- {{SVGElement('path')}}
- {{SVGElement('polyline')}}
- {{SVGElement('line')}}
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
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- （規定値である） "butt" の値の効果 -->
  <line x1="1" y1="1" x2="5" y2="1" stroke="black" stroke-linecap="butt" />

  <!-- Effect of the "round" value -->
  <line x1="1" y1="3" x2="5" y2="3" stroke="black" stroke-linecap="round" />

  <!-- Effect of the "square" value -->
  <line x1="1" y1="5" x2="5" y2="5" stroke="black" stroke-linecap="square" />

  <!--
  次のピンクの線は、各ストロークのパスの位置を強調しています。
  -->
  <path d="M1,1 h4 M1,3 h4 M1,5 h4" stroke="pink" stroke-width="0.025" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## 使用方法のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>butt</code> | <code>round</code> | <code>square</code></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>butt</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>離散的</td>
    </tr>
  </tbody>
</table>

### butt

`butt` 値は、各サブパスのストロークがその 2 つの端点を超えないことを示します。長さが 0 のサブパスでは、パスはまったく描画されません。

#### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "butt" value -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="butt" />

  <!-- Effect of the "butt" value on a zero length path -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="butt" />

  <!--
  次のピンクの線は、各ストロークのパスの位置を強調しています。
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('butt', '100%', 200)}}

### round

`round` 値は、各サブパスの終端で、ストローク幅に等しい直径の半円を描くことを示します。長さが 0 のサブパスでは、ストロークはサブパスのこの点を中心とした完全な円となります。

#### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "round" value -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="round" />

  <!-- Effect of the "round" value on a zero length path -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="round" />

  <!--
  次のピンクの線は、各ストロークのパスの位置を強調しています。
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('round', '100%', 200)}}

### square

`square` 値は、各サブパスの端において、幅がストロークの幅の半分に等しく、高さがストロークの幅に等しい長方形によってストロークが拡張されることを示します。長さがゼロのサブパスでは、ストロークは、サブパスのこの点を中心として、幅がストロークの幅に等しい正方形となります。

#### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "square" value -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="square" />

  <!-- Effect of the "square" value on a zero length path -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="square" />

  <!--
  次のピンクの線は、各ストロークのパスの位置を強調しています。
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('square', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
