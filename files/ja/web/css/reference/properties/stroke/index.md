---
title: stroke
slug: Web/CSS/Reference/Properties/stroke
original_slug: Web/CSS/stroke
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

**`stroke`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のストロークを描画するために使用される色または SVG ペイントサーバーを定義します。したがって、`stroke` はストロークを付与できる要素（{{SVGElement('rect')}} や {{SVGElement('ellipse')}} など）にのみ効果があります。完全なリストについては、SVG の {{SVGAttr('stroke')}} 属性のページを参照してください。宣言された場合、CSS 値は SVG の要素の {{SVGAttr('stroke')}} 属性の値を上書きします。

> [!NOTE]
> 2017 年 4 月 4 日付の [CSS Fill and Stroke Module Level 3](https://drafts.fxtf.org/fill-stroke-3/#stroke-shorthand) 仕様草案によれば、`stroke` プロパティは他の複数のストロークプロパティの一括指定です。実際には、2024 年 8 月現在、ブラウザーは `stroke` プロパティを介した幅やダッシュパターンなどの他のストローク関連値の設定に対応しておらず、代わりに SVG の {{SVGAttr("stroke")}} 属性と直接的に同等のものとして扱っています。

## 構文

```css
/* 様々な色の値 */
stroke: rgb(153 51 102 / 1);
stroke: color-mix(in lch, var(--primaryColor) 35%, gray 15%));
stroke: dodgerblue;
stroke: currentColor;
stroke: transparent;
stroke: context-stroke;

/* グローバル値 */
stroke: inherit;
stroke: initial;
stroke: revert;
stroke: revert-layer;
stroke: unset;
```

### 値

- {{cssxref("&lt;color&gt;")}}
  - : ストロークの描画を、有効な CSS 色値で設定します。

- `<image>`
  - : ストロークの描画を、SVG で[ペイントサーバー](https://svgwg.org/svg2-draft/pservers.html)と呼ばれるもの（この文脈では SVG グラデーションまたはパターン）で設定します。CSS グラデーションは `stroke` プロパティでは使用できません。

- `context-stroke`
  - : 要素がストローク定義をその[コンテキスト要素](https://svgwg.org/svg2-draft/painting.html#TermContextElement)から「継承」するようにします。有効なコンテキスト要素が存在しない場合、この値はストロークに描画が適用されなくなります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本色のストローク

この例では、円と矩形の 2 つの異なる図形を作成します。これらは {{SVGElement("g")}} （グループ）の一部であり、既定で両図形に灰色のストローク色が適用されています。

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
</svg>
```

CSS を用いて、長方形には薄紫色を、円には赤色を適用します。

```css
rect {
  stroke: rebeccapurple;
}
circle {
  stroke: red;
}
```

{{EmbedLiveSample("Basic color stroking", "300", "180")}}

### パターンのストローク

この例では、前の例と同じグループと図形（円が少し移動されています）を使用していますが、SVGパターンも定義してあります。

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="23">
    <circle cx="150" cy="90" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
  <defs>
    <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattern>
  </defs>
</svg>
```

このパターンは、その ID を指す URL 値で CSS から参照されます。このパターンはストロークペイントとして両方の形状に適用され、結果が示されます。

```css
rect,
circle {
  stroke: url("#star");
}
```

パターンは図形の境界ボックスを基準に描画されるため、パターンの一部が透明であることから、境界ボックスが重なる部分で視覚的な干渉が生じる可能性があります。

{{EmbedLiveSample("Pattern stroking", "300", "180")}}

### SVG と CSS のグラデーションの比較

ここでは、最初の例と同じグループと図形のマークアップを再利用しますが、SVG グラデーションの定義も追加します。

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
  <defs>
    <linearGradient id="greenwhite">
      <stop offset="0%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
</svg>
```

CSS では、その SVG グラデーションを矩形に適用します。具体的には、線形グラデーションの ID を指す URL 値を使用します。円には、SVG グラデーションと同等の意図を持つ CSS 線形グラデーションを適用します。

```css
rect {
  stroke: url("#greenwhite");
}
circle {
  stroke: linear-gradient(90deg, green, white);
}
```

矩形のみがグラデーションストロークとなり、円はグループ要素で設定された灰色のストロークで代替されます。これは、CSS グラデーションが `stroke` プロパティの有効な値ではないのに対し、SVG グラデーションへの URL 参照は許可されているためです。

{{EmbedLiveSample("SVG versus CSS gradients", "300", "180")}}

### コンテキストのストローク

この場合、再びグループ要素を作成し、その内部に 2 つの矩形のパスをを定義しています。その後、線形グラデーションと SVG マーカーが定義されます。

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="4">
    <path d="M 20,20 l 180,0 0,100 -180,0 z" />
    <path d="M 100,40 l 180,0 0,100 -180,0 z" />
  </g>
  <defs>
    <linearGradient id="orangered">
      <stop offset="0%" stop-color="orange" />
      <stop offset="100%" stop-color="red" />
    </linearGradient>
    <marker
      id="circle"
      markerWidth="20"
      markerHeight="20"
      refX="10"
      refY="10"
      markerUnits="userSpaceOnUse">
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke-width="4"
        stroke="none"
        fill="none" />
    </marker>
  </defs>
</svg>
```

次に、両方のパスにマーカーを追加し、薄紫色のストロークカラーを適用する CSS を記述します。これは 2 番目のパスでは上書きされ、ストロークとしてオレンジから赤へのグラデーションを適用する URL 値が指定されます。最後に、マーカー要素内の円要素のストローク値を `context-stroke` に設定します。

```css
path {
  stroke: rebeccapurple;
  marker: url("#circle");
}
path:nth-of-type(2) {
  stroke: url("#orangered");
}
marker circle {
  stroke: context-stroke;
}
```

`stroke-context` が {{SVGElement('marker')}} 要素の子孫である要素に適用されるため、各円のコンテキスト要素は `<marker>` 要素を呼び出した要素、つまり {{SVGElement('path')}} 要素となります。その結果、最初のパスのマーカーは呼び出し元のパスの色を使用し、紫色になります。対照的に、2 番目のパスのマーカーは、そのパスが使用するオレンジから赤への SVG グラデーションをそのまま使用します。後者のケースは、SVG グラデーションが形状の各部分に個別に適用されるのではなく、単一のグラデーションとして形状全体に適用されることを示しています。

{{EmbedLiveSample("Contextual stroking", "300", "180")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("paint-order")}}
- SVG {{SVGAttr("stroke")}} 属性
