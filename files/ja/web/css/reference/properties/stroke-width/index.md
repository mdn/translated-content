---
title: stroke-width
slug: Web/CSS/Reference/Properties/stroke-width
original_slug: Web/CSS/stroke-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`stroke-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[SVG](/ja/docs/Web/SVG) 図形に適用されるストロークの幅を定義します。もし存在するならば、要素の {{SVGAttr("stroke-width")}} この属性を上書きします。

このプロパティは、あらゆる SVG 図形またはテキストコンテンツ要素（完全な一覧は {{SVGAttr("stroke-width")}} を参照）に適用されますが、継承プロパティであるため、{{SVGElement("g")}} などの要素に適用された場合、子孫要素のストロークにも意図した効果が及びます。値がゼロと評価された場合は、ストロークは描画されません。

## 構文

```css
/* 長さとパーセント値 */
stroke-width: 0%;
stroke-width: 1.414px;

/* グローバル値 */
stroke-width: inherit;
stroke-width: initial;
stroke-width: revert;
stroke-width: revert-layer;
stroke-width: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : ピクセル単位は SVG 単位と同様に扱われます（上記の `<number>` 参照）。`em` などのフォントベースの長さは、要素のテキストサイズに対する SVG 値を基準に計算されます。その他の長さの単位の効果はブラウザーによって異なる場合があります。

- {{cssxref("&lt;percentage&gt;")}}
  - : パーセント値は、現在の SVG ビューポートの正規化された対角線からの相対値で、これは <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> で計算されます。

- {{cssxref("&lt;number&gt;")}} {{non-standard_inline}}
  - : 現在の単位空間によってサイズが定義する複数の SVG 単位です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 様々なストローク幅

この例は、`stroke-width` プロパティの様々な値の構文を示しています。

#### HTML

5 つの複数区間のパスを設定しました。いずれも太さ 1 の黒のストロークを使用し、塗りつぶしはありません。各パスは左側（浅い角の角度）から右側（極端な角の角度）へと、一連の山を象徴する記号を描画します。

```html
<svg viewBox="0 0 39 30" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="none">
    <path
      d="M1,5 l7   ,-3 l7   ,3
         m2,0 l3.5 ,-3 l3.5 ,3
         m2,0 l2   ,-3 l2   ,3
         m2,0 l0.75,-3 l0.75,3
         m2,0 l0.5 ,-3 l0.5 ,3" />
    <path
      d="M1,8 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,14 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,18 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,26 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
  </g>
</svg>
```

#### CSS

最初の 4 つのパスには、ストローク幅の値をペアで適用し、数値のみとピクセル値が機能的に同等であることを示してします。まず2つのパスでは、値は `.25` と `.25px` です。2 つ目以降の 2 つのパスでは、値は `1` と `1px` です。

5 番目かつ最後のパスには、`5%` の値が適用されます。これにより、ストロークの幅を SVG ビューポートの対角線の長さの 5% に設定します。

```css
path:nth-child(1) {
  stroke-width: 0.25;
}
path:nth-child(2) {
  stroke-width: 0.25px;
}
path:nth-child(3) {
  stroke-width: 1;
}
path:nth-child(4) {
  stroke-width: 1px;
}
path:nth-child(5) {
  stroke-width: 5%;
}
```

#### 結果

{{EmbedLiveSample("Various stroke widths", "400", "540")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxref("stroke")}}
- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{CSSxref("fill")}}
- SVG の {{SVGAttr("stroke-width")}} 属性
