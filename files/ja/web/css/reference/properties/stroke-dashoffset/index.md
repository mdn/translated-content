---
title: stroke-dashoffset
slug: Web/CSS/Reference/Properties/stroke-dashoffset
original_slug: Web/CSS/stroke-dashoffset
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

**`stroke-dashoffset`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[SVG](/ja/docs/Web/SVG) 要素に関連付けられた[破線配列](/ja/docs/Web/CSS/Reference/Properties/stroke-dasharray)の描画開始点のオフセットを定義します。指定された場合、要素の {{SVGAttr("stroke-dashoffset")}} 属性を上書きします。

このプロパティは、あらゆる SVG 図形またはテキストコンテンツ要素（完全な一覧は {{SVGAttr("stroke-dashoffset")}} を参照）に適用されますが、継承プロパティであるため、{{SVGElement("g")}} などの要素に適用された場合、子孫要素のストロークにも意図した効果が及びます。

## 構文

```css
/* キーワード */
stroke-dashoffset: none;

/* 長さとパーセント値 */
stroke-dashoffset: 2;
stroke-dashoffset: 2px;
stroke-dashoffset: 2%;

/* グローバル値 */
stroke-dashoffset: inherit;
stroke-dashoffset: initial;
stroke-dashoffset: revert;
stroke-dashoffset: revert-layer;
stroke-dashoffset: unset;
```

### 値

- {{cssxref("&lt;number&gt;")}} {{non-standard_Inline}}
  - : SVG 単位の数値であり、現在の単位空間によって定義されたサイズです。指定された値が `0` 以外の場合、破線配列の起点をその中の別の位置に移動します。したがって、正の値を指定すると、ダッシュとすき間のパターンが後方へずれたように見え、負の値を指定すると、パターンが前方へずれたように見えます。

- {{cssxref("&lt;length&gt;")}}
  - : ピクセル単位は SVG 単位と同様に扱われます（上記の `<number>` 参照）。`em` などのフォントベースの長さは、要素のテキストサイズに対する SVG 値を基準に計算されます。その他の長さの単位の効果はブラウザーによって異なる場合があります。任意の値を指定してずらず効果は、`<number>` 値の場合と同じです（上記参照）。

- {{cssxref("&lt;percentage&gt;")}}
  - : パーセント値は、現在の SVG ビューポートの正規化された対角線からの相対値で、これは <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> で計算されます。負の値は無効です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 破線をずらす

破線をずらす方法を示すため、まず 5 つの同一のパスを設定します。これら全てに、SVG 属性 {{SVGAttr('stroke-dasharray')}} を介して、20 単位のダッシュに 3 単位のすき間が続く破線配列を指定します（これは CSS プロパティ {{CSSxref('stroke-dasharray')}} でも実現可能です）。次に、各パスに CSS を介してそれぞれの破線のオフセットを適用します。

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect x="10" y="5" width="80" height="30" fill="#eeeeee" />
  <g stroke="dodgerblue" stroke-width="2" stroke-dasharray="20,3">
    <path d="M 10,10 h 80" />
    <path d="M 10,15 h 80" />
    <path d="M 10,20 h 80" />
    <path d="M 10,25 h 80" />
    <path d="M 10,30 h 80" />
  </g>
</svg>
```

```css
path:nth-of-type(1) {
  stroke-dashoffset: 0;
}
path:nth-of-type(2) {
  stroke-dashoffset: -5;
}
path:nth-of-type(3) {
  stroke-dashoffset: 5;
}
path:nth-of-type(4) {
  stroke-dashoffset: 5px;
}
path:nth-of-type(5) {
  stroke-dashoffset: 5%;
}
```

上から順に、

1. 5 つのうち最初のパスには 0 のオフセットが与えられ、これが既定の動作です。
2. 2 番目のパスにはオフセット `-5` が与えられており、これにより配列の始点がゼロ点より 5 単位手前にシフトします。視覚的にはダッシュパターンが 5 単位分前方に押し出される効果があり、パスの始点ではダッシュの最後の 2 単位と、その後 3 単位のすき間が見えることになります。
3. 3 番目のパスにはオフセット `5` が設定されています。これは破線パターンの始点が、破線パターンの 5 単位目から始まることを意味します。視覚的には破線パターンが 5 単位分後方に押し出された効果となり、パスの始点ではダッシュの最後の 15 単位と、それに続く 3 単位のすき間が確認できます。
4. 4 番目のパスには `5px` のオフセットが設定されており、これは値 `5` と同じ効果を持ちます（上記参照）。
5. 5 番目の最後のパスは `5%` のオフセットが設定されており、これは前の 2 つの例とよく似ていますが、まったく同じではありません。パーセント値は SVG ビューポートの対角線長を基準に計算されます。そのため、ビューポートのサイズやアスペクト比によっては、とても大きく変動する可能性があります。

{{EmbedLiveSample("Dash offsetting", "500", "250")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の {{SVGAttr("stroke-dashoffset")}} 属性
- CSS の {{CSSxref("stroke-dasharray")}} プロパティ
- CSS の {{CSSxref("stroke")}} プロパティ
