---
title: "`row-gap` プロパティ"
short-title: row-gap
slug: Web/CSS/Reference/Properties/row-gap
l10n:
  sourceCommit: 04dfe418f2942ae739d41592c22fafa3679fc03c
---

**`row-gap`** は [CSS](/ja/docs/Web/CSS) のプロパティで、段組み、フレックスボックス、グリッドレイアウトにおける要素の行間の隙間（{{glossary("gutters", "溝")}}）の寸法を定義します。

{{InteractiveExample("CSS デモ: row-gap")}}

```css interactive-example-choice
row-gap: 0;
```

```css interactive-example-choice
row-gap: 1ch;
```

```css interactive-example-choice
row-gap: 1em;
```

```css interactive-example-choice
row-gap: 20px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## 構文

```css
/* キーワード値 */
row-gap: normal;

/* <length-percentage> 値 */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;
row-gap: 10%;
row-gap: calc(10% - 6px);

/* <line-width> 値 */
row-gap: thin;
row-gap: medium;
row-gap: thick;

/* グローバル値 */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

### 値

このプロパティは、次のリストのいずれかを単一の値として指定します。

- `normal`
  - : 段組みレイアウトでは `1em` に、それ以外では `0` に解決されます。これはデフォルト値です。
- {{cssxref("&lt;line-width&gt;")}}
  - : `thin`、`medium`、`thick` のキーワード、または正の {{cssxref("length")}} 値を使って隙間の大きさを設定します。
- {{CSSxRef("length-percentage")}}
  - : 負でない {{CSSxRef("&lt;length&gt;")}} または {{CSSxRef("&lt;percentage&gt;")}} 値を指定します。パーセント値はコンテナーのコンテンツボックスのブロックサイズを基準とし、そのサイズが確定していない場合は `0` を基準とします。

## 解説

`row-gap` プロパティは、要素の行間の隙間の大きさを設定します。この隙間には、隙間の装飾として可視の区切り線を含めることができます。行間罫がある場合、その線は隙間の中央に表示されますが、隙間の大きさには影響しません。{{cssxref("row-rule")}} プロパティまたは {{cssxref("rule")}} 一括指定を使用すると、通常は「空きスペース」である隙間に装飾線を追加できます。

[CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)で定義されているこのプロパティは、段組み、フレックスボックス、グリッドレイアウトで使用できます。`row-gap` と {{cssxref("column-gap")}} プロパティは、この順序で {{cssxref("gap")}} 一括指定プロパティを使って設定することもできます。`row-gap` は、[CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)に限定されていた `grid-row-gap` プロパティに置き換わるものです。現在、`grid-row-gap` は `row-gap` の別名です。

このプロパティは、コンテナー内のアイテム間に固定長の隙間を指定し、コンテナーのブロック軸に沿ってボックスを隔てます。負の値は無効です。デフォルト値の `normal` は、段組みコンテナーでは `1em` に、それ以外では `0` に解決されます。レイアウトの種類ごとの隙間について詳しくは、[CSS 隙間の定義](/ja/docs/Web/CSS/Guides/Gaps/Defining_gaps)を参照してください。

パーセント値は、コンテナー要素のブロック軸における[コンテンツボックス](/ja/docs/Web/CSS/Guides/Box_model/Introduction#content_area)のサイズが確定している場合はそのサイズを基準に解決され、それ以外の場合は `0` を基準に解決されます。ただし、グリッドレイアウトでは、循環するパーセント値は {{glossary("intrinsic size", "内在サイズ")}}への寄与を計算する際には `0` を基準に解決されますが、内容をレイアウトする際には要素のコンテンツボックスを基準に解決されます。詳しくは、[パーセント値による隙間の指定](/ja/docs/Web/CSS/Guides/Gaps/Defining_gaps#specifying_gap_values_as_percentages)を参照してください。

グリッドレイアウトでは、隙間の効果は、行間のグリッド線がこのプロパティの値と同じ太さを持つかのようになります。2 つの行を隔てるグリッドトラックは、それらを表す隙間の間の空間です。トラックのサイズ計算では、各隙間は指定されたサイズの空の固定サイズトラックとして扱われ、複数の行にまたがるグリッドアイテムはその隙間にもまたがります。サイズ計算上は空として扱われますが、作成された隙間には {{cssxref("row-rule")}} を含めることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスレイアウト

この例では、`row-gap` プロパティを使って、フレックスアイテムの隣り合う行の間に垂直方向の隙間を作成します。また、行間罫の幅が `row-gap` のサイズに影響しないことも示しています。

#### HTML

コンテナー要素に 6 つのアイテムを含めます。

```html live-sample___flex_layout
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

{{cssxref("display")}} を `flex` に、{{cssxref("flex-flow")}} を `row wrap` に設定して、必要に応じてフレックスアイテムが新しい行に折り返すフレックスコンテナーを作成し、{{cssxref("width")}} を `300px` に制限します。また、隙間の中央に幅 `30px` のマゼンタ色の破線を引く {{cssxref("row-rule")}} も追加します。

フレックスコンテナーの `row-gap` を `20px` に設定して、隣り合うフレックス行の間に `20px` の隙間を作ります。

さらに、フレックスアイテムに背景色を設定します。大半を半透明にして、行間罫が隙間よりも広い場合に、フレックスアイテムの下に線が見えることを示します。

```css live-sample___flex_layout
#flexbox {
  display: flex;
  flex-flow: row wrap;
  width: 300px;
  row-rule: 30px dashed magenta;
  row-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: #00ff0033;
  flex: 1 1 100px;
  height: 50px;
}

#flexbox > div:nth-of-type(3n-1) {
  background-color: lime;
}
```

#### 結果

{{EmbedLiveSample('Flex_layout', "auto", "400")}}

フレックスアイテム間に水平方向の隙間を設定するには、{{cssxref("column-gap")}} プロパティに 0 以外の値を指定します。`gap` 一括指定を使うと、`row-gap` と `column-gap` の両方を設定することもできます。

### グリッドレイアウト

この例では、グリッドレイアウトで `row-gap` プロパティに `<percentage>` 値を指定する方法を示します。

#### HTML

コンテナー要素に 5 つのアイテムを含めます。

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

{{cssxref("display")}} プロパティを `grid` に、{{cssxref("height")}} を `240px` に、{{cssxref("width")}} を `350px` に、{{cssxref("grid-template-rows")}} を `repeat(3, 1fr)` に設定して、幅 350px で 2 列 3 行のグリッドコンテナーを作成します。{{cssxref("grid-template-rows")}} プロパティで定義されているとおり、各行の高さは同じです。

`row-gap` は `5%` に設定します。コンテナーの高さは `240px` なので、`5%` による行間の隙間の高さは `12px` です。残りの `216px` が 3 行に分けられるため、各行の高さは `72px` になります。

```css
#grid {
  display: grid;
  height: 240px;
  width: 350px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 150px 1fr;

  row-gap: 5%;
}
```

```css hidden
body {
  padding: 1em;
}

#grid > div {
  outline: 1px solid green;
  background-color: lime;
}
@layer no-support {
  @supports not (row-gap: 5%) {
    body::before {
      content: "このブラウザーはパーセント値に対応していません。";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### 結果

{{EmbedLiveSample('Grid_layout', 'auto', 280)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("column-gap")}}
- {{CSSxRef("row-rule")}}
- {{CSSxRef("rule")}}
- {{CSSxRef("gap")}}
- [CSS 隙間の定義](/ja/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [グリッドレイアウトの基本概念 - 溝](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#溝)
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
