---
title: dominant-baseline
slug: Web/CSS/Reference/Properties/dominant-baseline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`dominant-baseline`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ボックス内のテキストとインラインレベルのコンテンツを整列させるために使用される特定の[ベースライン](/ja/docs/Glossary/Baseline/Typography)（主要ベースライン）を指定します。また、ボックスの整列コンテキストでベースライン揃えに参加するすべてのボックスの既定の整列ベースラインも示します。存在する場合、シェイプの {{SVGAttr("dominant-baseline")}} 属性を上書きします。

ベースラインはフォントベースライン表から選択されます。指定のフォントにベースライン表がない場合、またはベースライン表に希望するベースラインの項目がない場合、ブラウザーは経験則を使用して希望するベースラインの位置を決定することがあります。

`dominant-baseline` プロパティは、変倍ベースライン表を決定または再決定するために使用します。変倍ベースライン表は、 3 つの部分からなる複合値です。

1. この主要ベースラインのベースライン識別子
2. ベースライン表
3. ベースライン表のフォントサイズ

`dominant-baseline` の値によっては、 3 つの値すべてを再決定します。他のものは、ベースライン表のフォントサイズのみを再設定します。初期値の `auto` が望ましくない結果をもたらす場合、このプロパティを使用して、望ましい変倍ベースライン表を明示的に設定することができます。

> [!NOTE]
> `dominant-baseline` プロパティは、 SVG の {{SVGElement("text")}}、{{SVGElement("textPath")}}、{{SVGElement("tspan")}} の各要素のみに効果があります。

## 構文

```css
/* 初期値 */
dominant-baseline: auto;

/* キーワード値 */
dominant-baseline: alphabetic;
dominant-baseline: central;
dominant-baseline: hanging;
dominant-baseline: ideographic;
dominant-baseline: mathematical;
dominant-baseline: middle;
dominant-baseline: text-bottom;
dominant-baseline: text-top;

/* グローバル値 */
dominant-baseline: inherit;
dominant-baseline: initial;
dominant-baseline: revert;
dominant-baseline: revert-layer;
dominant-baseline: unset;
```

### 値

- `auto`
  - : このプロパティが {{SVGElement("text")}} 要素に適用された場合、計算された値は {{SVGAttr("writing-mode")}} 属性の値に依存します。

    {{SVGAttr("writing-mode")}} が横書きの場合、 `dominant-baseline` 成分の値は `alphabetic` です。 そうではなく、 {{SVGAttr("writing-mode")}} が縦書きの場合、 `dominant-baseline` 成分の値は `central` です。

    このプロパティが {{SVGElement("tspan")}}、{{SVGElement("textPath")}} のいずれかの要素に適用された場合、 dominant-baseline と baseline-table 成分は親テキストコンテンツ要素のものと同一のままとなります。

    {{SVGAttr("baseline-shift")}} の計算値が実際にベースラインを移動させた場合、ベースライン表のフォントサイズ成分は `dominant-baseline` 属性が存在する要素の {{SVGAttr("font-size")}} 属性の値に設定されます。それ以外の場合はベースライン表のフォントサイズは要素のものと同じままです。

    親のテキストコンテンツ要素がない場合、 scaled-baseline-table の値は {{SVGElement("text")}} 要素であるかのように構築されます。

- `alphabetic`
  - : dominant-baseline のベースライン識別子は `alphabetic` に設定され、派生したベースライン表はフォント内の `alphabetic` のベースライン表を使用して構築され、ベースライン表のフォントサイズは、要素の SVG 属性である {{SVGAttr('font-size')}} の値、または設定されている場合は CSS の {{cssxref('font-size')}} の値に変更されます。
- `central`
  - : 主要ベースラインのベースライン識別子は `central` に設定されます。派生ベースラインテーブルは、フォントのベースラインテーブルで定義されたベースラインから構築されます。フォントのベースラインテーブルは、ベースラインテーブル名の `ideographic`、`alphabetic`、`hanging`、`mathematical` の優先順位で選択されます。ベースラインテーブルのフォントサイズは、要素の SVG 属性 {{SVGAttr('font-size')}} の値、または設定されている場合は CSS の {{cssxref('font-size')}} プロパティの値に変更されます。
- `hanging`
  - : 主要ベースラインのベースライン識別子を `hanging` に設定し、派生ベースライン表をそのフォントの `hanging` ベースライン表を用いて構築し、ベースライン表のフォントサイズを、この要素の SVG 属性 {{SVGAttr('font-size')}} の値、または設定されている場合は CSS の {{cssxref('font-size')}} プロパティの値に変更されます。
- `ideographic`
  - : 主要ベースラインのベースライン識別子を `ideographic` に設定し、派生ベースライン表をそのフォントの `ideographic` ベースライン表を用いて構築し、ベースライン表のフォントサイズを、この要素の SVG 属性 {{SVGAttr('font-size')}} の値、または設定されている場合は CSS の {{cssxref('font-size')}} プロパティの値に変更されます。
- `mathematical`
  - : 主要ベースラインのベースライン識別子を `mathematical` に設定し、派生ベースライン表をそのフォントの `mathematical` ベースライン表を用いて構築し、ベースライン表のフォントサイズを、この要素の SVG 属性 {{SVGAttr('font-size')}} の値、または設定されている場合は CSS の {{cssxref('font-size')}} プロパティの値に変更されます。
- `middle`
  - : 主要ベースラインのベースライン識別子は `middle` に設定されます。派生ベースラインテーブルは、フォントのベースラインテーブルで定義されたベースラインから構築されます。フォントのベースラインテーブルは、ベースラインテーブル名の `ideographic`、`alphabetic`、`hanging`、`mathematical` の優先順位で選択されます。ベースラインテーブルのフォントサイズは、要素の SVG 属性 {{SVGAttr('font-size')}} の値、または設定されている場合は CSS の {{cssxref('font-size')}} プロパティの値に変更されます。
- `text-bottom`
  - : _line-under_ の辺がベースラインとして使用されます。これはふつう、フォントの em ボックスの下辺です。
- `text-top`
  - : _line-over_ の辺がベースラインとして使用されます。これはふつう、フォントの em ボックスの上辺です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

```html
<svg viewBox="0 0 450 160" width="700" height="200">
  <text x="50" y="20">alphabetic</text>
  <text x="50" y="60">central</text>
  <text x="50" y="100">hanging</text>
  <text x="50" y="140">ideographic</text>
  <text x="250" y="20">mathematical</text>
  <text x="250" y="60">middle</text>
  <text x="250" y="100">text-bottom</text>
  <text x="250" y="140">text-top</text>
  <path
    d="M   0,20 l 400,0
       m -400,40 l 400,0
       m -400,40 l 400,0
       m -400,40 l 400,0"
    stroke="grey" />
  <text x="0" y="20" fill="red">auto</text>
  <text x="0" y="60" fill="red">auto</text>
  <text x="0" y="100" fill="red">auto</text>
  <text x="0" y="140" fill="red">auto</text>
</svg>
```

```css
text {
  font-size: 20px;
}
text:nth-of-type(1) {
  dominant-baseline: alphabetic;
}
text:nth-of-type(2) {
  dominant-baseline: central;
}
text:nth-of-type(3) {
  dominant-baseline: hanging;
}
text:nth-of-type(4) {
  dominant-baseline: ideographic;
}
text:nth-of-type(5) {
  dominant-baseline: mathematical;
}
text:nth-of-type(6) {
  dominant-baseline: middle;
}
text:nth-of-type(7) {
  dominant-baseline: text-bottom;
}
text:nth-of-type(8) {
  dominant-baseline: text-top;
}
```

{{EmbedLiveSample("Example", "750", "220")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('alignment-baseline')}}
- {{cssxref('text-anchor')}}
- {{cssxref('vertical-align')}}
- SVG の {{SVGAttr('dominant-baseline')}} 属性
