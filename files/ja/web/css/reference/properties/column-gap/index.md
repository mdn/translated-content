---
title: column-gap
slug: Web/CSS/Reference/Properties/column-gap
original_slug: Web/CSS/column-gap
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`column-gap`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の段または列の間のすき間（{{glossary("gutters", "溝")}}）の寸法を設定します。

当初は[段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)の一部でしたが、`column-gap` の定義は複数のレイアウト方式を含めるように拡張されました。現在は[ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)の中で定義され、段組みレイアウト、フレックスボックス、グリッドレイアウトで使用されることがあります。

仕様書の初期バージョンでは、このプロパティは `grid-column-gap` と呼ばれていました。古いウェブサイトとの互換性を維持するため、ブラウザーは `grid-column-gap` を `column-gap` の別名として受け入れます。

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
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## 構文

```css
/* キーワード値 */
column-gap: normal;

/* <length> 値 */
column-gap: 3px;
column-gap: 2.5em;

/* <percentage> 値 */
column-gap: 3%;

/* グローバル値 */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: revert-layer;
column-gap: unset;
```

`column-gap` プロパティは以下に挙げた値の一つで指定します。

### 値

- `normal`
  - : 列間（段間）にはブラウザー既定の幅が使われます。段組みレイアウトでは `1em` と指定され、他の種類のレイアウトでは 0 になります。
- {{CSSxRef("&lt;length&gt;")}}
  - : 列間（段間）の寸法を {{CSSxRef("&lt;length&gt;")}} として定義します。 {{CSSxRef("&lt;length&gt;")}} のプロパティ値は負の数であってはいけません。
- {{CSSxRef("&lt;percentage&gt;")}}
  - : 列間（段間）の寸法を {{CSSxRef("&lt;percentage&gt;")}} として定義します。 {{CSSxRef("&lt;percentage&gt;")}} のプロパティ値は負の数であってはいけません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスレイアウト

この例では、フレックスコンテナーに 2 つの異なる幅（`200px` と `300px`）の 6 つのフレックスアイテムを設置し、グリッドとしてレイアウトされていないフレックスアイテムを作成しています。 `column-gap` プロパティは、隣接するフレックスアイテムの間に水平空間を追加するために使用します。

#### HTML

```html live-sample___flex_layout
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

フレックスコンテナーを作成するには、 {{cssxref("display")}} プロパティの値を `flex` に設定します。そして、一括指定の {{cssxref("flex-flow")}} プロパティを使って、 {{cssxref("flex-direction")}} を row（既定値）に、 {{cssxref("flex-wrap")}} を `wrap` に設定し、必要に応じてフレックスアイテムが新しい行に流れるようにします。既定では、フレックスアイテムはコンテナーと同じ高さに引き伸ばされます。 {{cssxref("height")}} を設定することで、空のフレックスアイテムでも `100px` の高さになります。

`column-gap` プロパティをより分かりやすく示すために、この例のフレックスアイテムには 2 つの異なる幅の値を設定しています。フレックスアイテムの幅は `<div>` のフレックスアイテム内で設定します。 {{cssxref("flex")}} 一括指定プロパティの {{cssxref("flex-basis")}} 成分を使用して、すべてのフレックスアイテムの幅を `200px` にしています。次に、 {{cssxref(":nth-of-type", ":nth-of-type(3n)")}} セレクターを使用して 3 つ目のフレックスアイテムを対象とし、幅を `300px` に広げます。

フレックスコンテナーの `column-gap` の値に `20px` を設定し、各行で隣接するフレックスアイテムの間に `20px` のギャップを作成します。

```css live-sample___flex_layout
.flexbox {
  display: flex;
  flex-flow: row wrap;
  height: 100px;
  column-gap: 20px;
}

.flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 200px;
}
div:nth-of-type(3n) {
  flex: 300px;
}
```

#### 結果

{{EmbedLiveSample("Flex_layout", "auto", "220px")}}

> [!NOTE]
> それぞれのフレックス行で隣接するフレックスアイテムの間には水平空間がありますが、行の間には空間がありません。フレックス行間の垂直空間を設定するには、 {{cssxref("row-gap")}} プロパティに 0 以外の値を指定します。 {{cssxref("gap")}} 一括指定プロパティを使用することもでき、 1 つの宣言で `row-gap` と `column-gap` の両方を、この順に設定することができます。

### グリッドレイアウト

#### HTML

```html live-sample___grid_layout
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css live-sample___grid_layout
#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  column-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### 結果

{{EmbedLiveSample("Grid_layout", "auto", "220px")}}

### 段組みレイアウト

#### HTML

```html-nolint live-sample___multi-column_layout
<p class="content-box">
  これは、CSS の `column-gap` プロパティを使用して、列のギャップを 40px に設定して作成した、段組みテキストです。面白くて期待が膨らみますね。私はそう思います！
</p>
```

#### CSS

```css live-sample___multi-column_layout
.content-box {
  column-count: 3;
  column-gap: 40px;
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
- [グリッドレイアウトの基本概念 - 溝](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#溝)
- [段組みのスタイル設定](/ja/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
