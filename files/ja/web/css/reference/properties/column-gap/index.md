---
title: "`column-gap` プロパティ (CSS)"
short-title: column-gap
slug: Web/CSS/Reference/Properties/column-gap
l10n:
  sourceCommit: 04dfe418f2942ae739d41592c22fafa3679fc03c
---

**`column-gap`** は [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウト、フレックスボックスレイアウト、グリッドレイアウトの要素の段または列の間の隙間（{{glossary("Gutters", "溝")}}）の寸法を設定します。

{{InteractiveExample("CSS デモ: column-gap")}}

```css interactive-example-choice
column-gap: 0;
```

```css interactive-example-choice
column-gap: 10%;
```

```css interactive-example-choice
column-gap: 1em;
```

```css interactive-example-choice
column-gap: 20px;
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
column-gap: normal;

/* <length-percentage> 値 */
column-gap: 3px;
column-gap: 2.5em;
column-gap: 3%;
column-gap: calc(3% - 6px);

/* <line-width> キーワード値 */
column-gap: thin;
column-gap: medium;
column-gap: thick;

/* グローバル値 */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: revert-layer;
column-gap: unset;
```

### 値

このプロパティは以下に挙げた値の一つで指定します。

- `normal`
  - : 段組みレイアウトでは段間が `1em` に指定され、その他のレイアウトでは `0` になります。これがデフォルト値です。
- {{cssxref("&lt;line-width&gt;")}}
  - : 列間（段間）のサイズをキーワード `thin`、`medium`、`thick` のいずれか、または正の {{cssxref("length")}} で設定します。
- {{CSSxRef("length-percentage")}}
  - : 非負の {{CSSxRef("&lt;length&gt;")}} または {{CSSxRef("&lt;percentage&gt;")}} の値を設定します。パーセント値はコンテンツボックスのインラインサイズからの相対値です。

## 解説

`column-gap` プロパティは、要素の列間（段間）のサイズを設定します。このプロパティは、コンテナー内のアイテム間に固定長の隙間を指定し、コンテナーのインライン軸上でボックスを別個のものとします。負の値は無効です。段組みのコンテナーにおける段間は、デフォルトで `1em` の幅になりますが、グリッドの列間やフレックスアイテム、行の間には隙間は追加されません。レイアウトの種類ごとの隙間に関する情報については、[CSS 隙間の定義](/ja/docs/Web/CSS/Guides/Gaps/Defining_gaps)を参照してください。

パーセント値は、[コンテンツボックス](/ja/docs/Web/CSS/Guides/Box_model/Introduction#コンテンツ領域)のサイズが確定している場合はコンテナー要素のインライン軸のサイズを基準に、そうでない場合は `0` を基準に計算されます。ただし、グリッドレイアウトの場合は例外であり、パーセント値が循環するので、{{glossary("intrinsic size", "内在サイズ")}}の寄与を決定する際には 0 を基準として処理されますが、コンテンツのレイアウトを行う際には、要素のコンテンツボックスを基準として処理されます。詳しくは、[隙間の値のパーセント値での指定](/ja/docs/Web/CSS/Guides/Gaps/Defining_gaps#specifying_gap_values_as_percentages)を参照してください。

段間・列間の隙間には、[隙間の装飾](/ja/docs/Web/CSS/Guides/Gaps)として目に見える区切り文字が含まれています。列間に罫線を描画するには、{{cssxref("column-rule")}} または {{cssxref("rule")}} の一括指定を使用します。この線は隙間の中央に現れますが、列間の隙間のサイズには影響しません。

`column-gap` プロパティは、{{cssxref("row-gap")}} プロパティとともに、{{cssxref("gap")}} の一括指定プロパティを使用して設定することもできます。この一括指定プロパティを使用すると、1 つの宣言で `row-gap` と `column-gap` の両方が、その順序で設定されます。

`column-gap` プロパティは、グリッド列間に隙間を作成するために [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)で最初に定義された `grid-column-gap` プロパティを置き換えました。`grid-column-gap` は `column-gap` の別名となりました。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスレイアウト

この例では、`column-gap` プロパティを使用して、隣接するフレックスアイテムの間に水平方向の空間を作成する方法を示しています。

#### HTML

コンテナー要素には、6 つのアイテムを設置します。

```html
<div class="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

{{cssxref("display")}} プロパティを `flex` に、{{cssxref("flex-flow")}} プロパティを `row wrap` に設定し、アイテムが横一列に並ぶフレックスコンテナーを生成します。これにより、必要に応じてアイテムが改行されて表示することができるようになります。それぞれのフレックスアイテムには、`200px` または `300px` のフレックスベースが指定されています。

{{cssxref("column-rule")}} プロパティを使用して、列間罫を定義します。フレックスコンテナーの `column-gap` 値を `20px` に設定することで、それぞれの行の隣接するフレックスアイテムの間に `20px` の隙間が生成されます。列間罫は、この隙間の中央に描画されます。

```css
.flexbox {
  display: flex;
  flex-flow: row wrap;
  column-rule: 1px solid magenta;

  column-gap: 20px;
}

.flexbox > div {
  border: 1px solid green;
  background-color: lime;
  height: 35px;
  flex: 200px;
}
div:nth-of-type(3n) {
  flex: 300px;
}
```

#### 結果

{{EmbedLiveSample("Flex_layout", "auto", "170")}}

フレックスアイテムの行間に垂直方向の空間を設定するには、{{cssxref("row-gap")}} プロパティに 0 以外の値を指定してください。必要に応じて、`row-gap` と `column-gap` の両方を `gap` 一括指定を使用して設定することもできます。

### グリッドレイアウト

この例では、グリッドレイアウトにおいて `column-gap` プロパティに `<percentage>` を指定して使用する方法を示しています。また、`column-gap` のサイズが列間罫のサイズの影響を受けないことも示しています。

#### HTML

コンテナー要素には、7 つのアイテムを設置します。

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

{{cssxref("display")}} を `grid` に、{{cssxref("width")}} を `400px` に、{{cssxref("grid-template-columns")}} を `repeat(3, 1fr)` に設定して、幅 400px、3 列、行数は必要に応じて変化するグリッドコンテナーを生成します。それぞれの行の高さは、{{cssxref("grid-auto-rows")}} プロパティで定義されている通り、`100px` です。奇数番目のグリッドアイテムは背景色が `lime` で、偶数番目のグリッドアイテムは半透明になっています。

同時に、罫線がコンテンツの背後にどのように描画されるかを示すため、幅がとても広い半透明の `column-rule` を設定しました。この場合、罫線の太さは隙間のサイズに影響を与えません。`column-gap` は `5%` に設定されており、これにより幅 `20px` の隙間が作成されます。

```css
#grid {
  display: grid;
  width: 400px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  column-rule: 30px solid #ff00ff33;

  column-gap: 5%;
}

#grid > div {
  outline: 1px solid green;
  background-color: lime;
}
#grid > div:nth-of-type(even) {
  background-color: #00ff0033;
}
```

```css hidden
@layer no-support {
  @supports not (column-gap: 5%) {
    body::before {
      content: "このブラウザーはパーセント値に対応していません";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### 結果

{{EmbedLiveSample("Grid_layout", "auto", "330")}}

列の罫線は列間の隙間よりも幅が広く、その上に描画されたアイテムが半透明である場合にのみ表示されます。

### 段組みレイアウト

この例では、段組みレイアウトにおいて、`column-gap` プロパティに `<line-width>` キーワード値を指定して使用する方法を示しています。

#### HTML

```html-nolint
<p class="content-box">
  これは、CSS の `column-gap` プロパティを使用して、列間の溝を 40px に設定して作成した、段組みテキストです。面白くて期待が膨らみますね。私はそう思います！
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  column-gap: thin;
}
```

```css hidden
@layer no-support {
  @supports not (column-gap: thick) {
    body::before {
      content: "このブラウザーは <line-width> のキーワード値に対応していません";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### 結果

{{EmbedLiveSample("Multi-column_layout", "auto", "120px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("row-gap")}}
- {{CSSxRef("gap")}}
- {{CSSxRef("column-rule")}}
- {{CSSxRef("rule")}}
- [CSS 隙間の定義](/ja/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [グリッドレイアウトの基本概念: 溝](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#溝)
- [段組みのスタイル設定](/ja/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
