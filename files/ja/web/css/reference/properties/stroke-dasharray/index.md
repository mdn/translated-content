---
title: stroke-dasharray
slug: Web/CSS/Reference/Properties/stroke-dasharray
original_slug: Web/CSS/stroke-dasharray
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`stroke-dasharray`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[SVG](/ja/docs/Web/SVG) 図形のストローク描画に使用されるダッシュ（線）とすき間のパターンを定義します。指定された場合、要素の {{SVGAttr("stroke-dasharray")}} 属性を上書きします。

このプロパティは、あらゆる SVG 図形またはテキストコンテンツ要素（完全な一覧は {{SVGAttr("stroke-dasharray")}} を参照）に適用されますが、継承プロパティであるため、{{SVGElement("g")}} などの要素に適用された場合、子孫要素のストロークにも意図した効果が及びます。

## 構文

```css
/* キーワード */
stroke-dasharray: none;

/* 数値、長さ、パーセント値 */
stroke-dasharray: 2px, 5px;
stroke-dasharray: 20%, 50%;
stroke-dasharray: 2, 5;

/* 以下の 2 つのルールは同等 */
stroke-dasharray: 2, 5, 3;
stroke-dasharray: 2, 5, 3, 2, 5, 3;

/* グローバル値 */
stroke-dasharray: inherit;
stroke-dasharray: initial;
stroke-dasharray: revert;
stroke-dasharray: revert-layer;
stroke-dasharray: unset;
```

### 値

値は、カンマやホワイトスペースで区切られた `<number>`、`<length>`、`<percentage>` の値のリストであり、交互に現れるダッシュとすき間の長さを指定します。またはキーワード `none` を指定します。奇数の値が指定された場合、偶数の値を設定するために値全体が繰り返されます。

- `none`
  - : ストロークは破線なしで描画されます。既定値です。

- {{cssxref("&lt;number&gt;")}}
  - : SVG 単位の数値であり、現在の単位空間によって定義されたサイズです。負の値は無効です。

- {{cssxref("&lt;length&gt;")}}
  - : ピクセル単位は SVG 単位と同様に扱われます（上記の `<number>` 参照）。`em` などのフォントベースの長さは、要素のテキストサイズに対する SVG 値を基準に計算されます。その他の長さの単位の効果はブラウザーによって異なる場合があります。負の値は無効です。

- {{cssxref("&lt;percentage&gt;")}}
  - : パーセント値は、現在の SVG ビューポートの正規化された対角線からの相対値で、これは <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> で計算されます。負の値は無効です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な破線の配列

この例は、空白区切りの `<number>` 値を使用した `stroke-dasharray` プロパティの基本的な使用法を示しています。

#### HTML

まず、基本的な SVG の矩形の図形を設定します。この矩形には、幅 `2` の赤いストロークが適用されます。

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect
    x="10"
    y="10"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
</svg>
```

#### CSS

ストロークの破線パターンを、10 単位のダッシュに続いて 5 単位のすき間として定義します。これはダッシュ間のすき間がダッシュ自体の半分の長さになることを意味します。

```css
rect {
  stroke-dasharray: 10 5;
}
```

#### 結果

{{EmbedLiveSample("Basic dash array", "500", "250")}}

ストロークが角を曲がる際、パターンはそのまま引き継がれたような状態になります。左上隅では、ストロークの始点と終点が交わる地点で、10 単位の長さの先頭ダッシュが、経路の末尾で見られるダッシュパターンの一部と結合しているように見え、10 単位より長い線が角を曲がって伸びているように見えます。

### 破線の配列の繰り返し

この例では、奇数個のカンマ区切りの `<number>` 値があり、奇数個の値が与えられた場合には、偶数個の値を設定するために値が繰り返される様子を示しています。

#### HTML

この場合、2 つの矩形を定義します。

```html
<svg viewBox="0 0 100 100" width="500" height="500">
  <rect
    x="10"
    y="10"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
  <rect
    x="10"
    y="60"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
</svg>
```

#### CSS

最初の矩形には、ダッシュが 5、すき間が 5、ダッシュが 1 の破線配列 `5, 5, 1` を定義しています。ただし、これは数値が奇数個であるため、一連の数値全体が繰り返され、結果として 2 番目の矩形に適用された値と同一の値が生成されます。

```css
rect:nth-of-type(1) {
  stroke-dasharray: 5, 5, 1;
}
rect:nth-of-type(2) {
  stroke-dasharray: 5, 5, 1, 5, 5, 1;
}
```

#### 結果

{{EmbedLiveSample("Dash array repetition", "500", "500")}}

偶数の数字が必要な理由は、すべての破線配列がダッシュで始まり、すき間で終わるためです。したがって、定義されたパターンは、5 単位のダッシュ、5 単位のすき間、1 単位のダッシュ、5 単位のすき間、5 単位のダッシュ、そして1 単位のすき間となります。結果のストロークでは、5 単位のダッシュ 2 つの間に 1 単位のすき間が存在する各箇所が、ダッシュ配列が再始動する位置を示しています。

### パーセント値とピクセル値

この例は、`stroke-dasharray` プロパティ値内で `<percentage>` および `<length>` 値を使用する方法を示しています。

#### HTML

前の例と同様に、2 つの矩形を定義しています。

```html
<svg viewBox="0 0 100 100" width="500" height="500">
  <rect
    x="10"
    y="10"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
  <rect
    x="10"
    y="60"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
</svg>
```

#### CSS

今回は、単なる数値の羅列ではなく、ピクセル単位とパーセント値を使用します。

```css
rect:nth-of-type(1) {
  stroke-dasharray: 5px, 5px, 1px;
}
rect:nth-of-type(2) {
  stroke-dasharray: 5%, 5%, 1%;
}
```

#### 結果

{{EmbedLiveSample("Percentage and pixel values", "500", "500")}}

結果は、前の例の結果と本質的に区別がつきません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("stroke")}}
- SVG の {{SVGAttr("stroke-dasharray")}} 属性
