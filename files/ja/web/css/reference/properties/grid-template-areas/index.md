---
title: grid-template-areas
slug: Web/CSS/Reference/Properties/grid-template-areas
original_slug: Web/CSS/grid-template-areas
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

**`grid-template-areas`** は [CSS](/ja/docs/Web/CSS) のプロパティで、グリッド内でセルを確立し、名前を割り当てることにより、名前付きの {{glossary("grid areas", "グリッド領域")}} を指定します。

{{InteractiveExample("CSS デモ: grid-template-areas")}}

```css interactive-example-choice
grid-template-areas:
  "a a a"
  "b c c"
  "b c c";
```

```css interactive-example-choice
grid-template-areas:
  "b b a"
  "b b c"
  "b b c";
```

```css interactive-example-choice
grid-template-areas:
  "a a ."
  "a a ."
  ". b c";
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One (a)</div>
      <div>Two (b)</div>
      <div>Three (c)</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-gap: 10px;
  width: 200px;
}

#example-element :nth-child(1) {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  grid-area: a;
}

#example-element :nth-child(2) {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
  grid-area: b;
}

#example-element :nth-child(3) {
  background-color: rgba(94, 255, 0, 0.2);
  border: 3px solid green;
  grid-area: c;
}
```

これらの領域は、特定のグリッドアイテムに関連付けられていませんが、グリッド配置プロパティである {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}} およびそれらの一括指定プロパティ {{cssxref("grid-row")}}, {{cssxref("grid-column")}}, {{cssxref("grid-area")}} で参照することができます。

## 構文

```css
/* キーワード値 */
grid-template-areas: none;

/* <string> 値 */
grid-template-areas: "a b";
grid-template-areas:
  "a b ."
  "a c d";

/* グローバル値 */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: revert;
grid-template-areas: revert-layer;
grid-template-areas: unset;
```

### 値

- `none`
  - : グリッドコンテナーは名前付きのグリッド領域を定義しません。
- `{{cssxref("&lt;string&gt;")}}+`
  - : リストのすべての文字列ごとに行が生成され、文字列内の各セルごとに列が生成されます。行の中や行をまたがって同じ名前のセルトークンが複数あると、対応するグリッドセルにまたがる単一の名前付きグリッド領域を生成します。これらのセルが長方形にならないと、宣言は無効になります。

    グリッド内のすべての無名の領域は、ヌルセルトークンを使用して参照することができます。ヌルセルトークンは、 1 つ以上の `.` (U+002E FULL STOP) 文字の並び、例えば、`.`、`...`、`.....` などです。ヌルセルトークンは、グリッド内に空欄を作成するために使用することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きグリッド領域の指定

#### HTML

```html live-sample___specifying_named_grid_areas
<div id="page">
  <header>ヘッダー</header>
  <nav>ナビゲーション</nav>
  <main>メイン領域</main>
  <footer>フッター</footer>
</div>
```

#### CSS

```css live-sample___specifying_named_grid_areas
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas:
    "head head"
    "nav  main"
    ".  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```

上記のコードでは、グリッドコンテナー内に名前のない領域を作成するために、ヌルトークン (`.`) が使用されています。この領域を使用して、グリッドの左下隅に空の空間を作成しました。

#### 結果

{{EmbedLiveSample("Specifying_named_grid_areas", "100%", "285px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template")}}
- [グリッドテンプレート領域](/ja/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- 動画: [Grid template areas](https://gridbyexample.com/video/grid-template-areas/)
