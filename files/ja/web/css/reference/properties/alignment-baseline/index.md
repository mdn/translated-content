---
title: alignment-baseline
slug: Web/CSS/Reference/Properties/alignment-baseline
original_slug: Web/CSS/alignment-baseline
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

**`alignment-baseline`** は [CSS](/ja/docs/Web/CSS) のプロパティは、ボックスのテキストおよびインラインレベルのコンテンツの配置に使用する特定の[ベースライン](/ja/docs/Glossary/Baseline/Typography)を指定します。**ベースライン配置**とは、配置コンテキスト内の複数の配置対象物のベースライン間の関係です。ベースライン配置を実行する場合、 `alignment-baseline` プロパティの値は、ボックスのどのベースラインが、その配置コンテキストの対応するベースラインに配置されるかを指定します。

> [!NOTE]
> `alignment-baseline` プロパティは、インラインレベルボックス、フレックスアイテム、グリッドアイテム、表セル、および SVG の {{SVGElement("text")}}、{{SVGElement("textPath")}}、{{SVGElement("tspan")}} 要素にのみ効果があります。存在する場合、シェイプの {{SVGAttr("alignment-baseline")}} 属性を上書きします。

インライン整形コンテキストでは、インラインレベルのボックスフラグメントおよびグリフは、その親インラインボックスフラグメントによってそのインライン軸に沿って確立された配置コンテキストを共有します。SVG テキストレイアウトでは、これらの値は、代わりに SVG の現在のテキスト位置に整列されるベースラインを指定します。

## 構文

```css
/* 初期値 */
alignment-baseline: baseline;

/* キーワード値 */
alignment-baseline: alphabetic;
alignment-baseline: central;
alignment-baseline: ideographic;
alignment-baseline: mathematical;
alignment-baseline: middle;
alignment-baseline: text-bottom;
alignment-baseline: text-top;

/* 対応付けられた値 */
alignment-baseline: text-before-edge; /* text-top */
alignment-baseline: text-after-edge; /* text-bottom */

/* 非推奨の値 */
alignment-baseline: auto;
alignment-baseline: before-edge;
alignment-baseline: after-edge;
alignment-baseline: hanging;

/* グローバル値 */
alignment-baseline: inherit;
alignment-baseline: initial;
alignment-baseline: revert;
alignment-baseline: revert-layer;
alignment-baseline: unset;
```

### 値

- `baseline`
  - : 親の {{cssxref("dominant-baseline")}} 値を使用します。

- `alphabetic`
  - : ラテン文字、キリル文字、ギリシャ文字、およびその他の多くの文字体系の記述に使用されます。ボックスのアルファベットのベースラインを、その親要素のアルファベットのベースラインと一致させます。これは、ほとんどの文字の下端に対応しますが、すべての文字ではありません。

- `central`
  - : ボックスの中央のベースラインを、その親の中央のベースラインと一致させます。これは、漢字などの表意文字のベースラインと、表意文字のオーバーベースラインの中間にある表意文字のベースラインに対応します。

- `ideographic`
  - : ボックスの表意文字のフォントフェイス下辺のベースラインを、その親のベースラインと一致させます。フォントの表意文字ベースラインテーブルを使用して、派生ベースラインテーブルが構築されます。

- `mathematical`
  - : ボックスの数式ベースラインを、その親ボックスの数式ベースラインと一致させます。これは、数式文字が設計されている中心のベースラインに対応します。

- `middle`
  - : ボックスの垂直方向の中心を、親ボックスのベースラインと親ボックスの x 高さの半分を加えた位置に揃えます。 x-middle ベースラインを使用します。ただし、 [`text-orientation: upright;`](/ja/docs/Web/CSS/Reference/Properties/text-orientation) （アルファベットと x 高さのベースラインが本質的に意味を持たない場合）の場合は、代わりに `central` ベースラインを使用します。

- `text-bottom`
  - : インラインコンテンツボックスの下端を使用して、ボックスの下端を親コンテンツ領域の上端に一致させます。

- `text-top`
  - : ボックスの上部を親コンテンツ領域の上部に一致させます。インラインコンテンツボックスの行の上端です。

> [!NOTE]
> SVG2 では、`auto`、`before-edge`、`after-edge` は非推奨となり、 `text-before-edge` は `text-top` の別名、 `text-after-edge` は `text-bottom` の別名となりました。これらのキーワードは、 {{cssxref("vertical-align")}} 一括指定プロパティの一部として使用しないでください。ブラウザーは、 `auto` を `baseline` および `hanging` の同義語として対応しています。この場合、配置されるオブジェクトの配置点は、親テキストコンテンツ要素の "hanging" ベースラインに配置されますが、どちらも仕様の一部ではありません。

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
  <text x="0" y="20" fill="red">baseline</text>
  <text x="0" y="60" fill="red">baseline</text>
  <text x="0" y="100" fill="red">baseline</text>
  <text x="0" y="140" fill="red">baseline</text>
</svg>
```

```css
text {
  font-size: 20px;
  alignment-baseline: baseline;
}
text:nth-of-type(1) {
  alignment-baseline: alphabetic;
}
text:nth-of-type(2) {
  alignment-baseline: central;
}
text:nth-of-type(3) {
  alignment-baseline: hanging;
}
text:nth-of-type(4) {
  alignment-baseline: ideographic;
}
text:nth-of-type(5) {
  alignment-baseline: mathematical;
}
text:nth-of-type(6) {
  alignment-baseline: middle;
}
text:nth-of-type(7) {
  alignment-baseline: text-bottom;
}
text:nth-of-type(8) {
  alignment-baseline: text-top;
}
```

{{EmbedLiveSample("Example", "750", "220")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("dominant-baseline")}}
- SVG の {{SVGAttr("alignment-baseline")}} 属性
- [CSS インラインレイアウト](/ja/docs/Web/CSS/Guides/Inline_layout)モジュール
- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール
