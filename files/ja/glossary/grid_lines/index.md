---
title: Grid Line (グリッド線)
slug: Glossary/Grid_Lines
l10n:
  sourceCommit: d2a9f2e26a8139d4bb270d7dc3cddd8b848719fe
---

**Grid 線**は [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout)を用いて明示的グリッドとして {{glossary("Grid tracks", "トラック")}} を定義すると作成されます。

## 例

次の例は 3 列のトラックと 2 行のトラックを含むグリッドです。この例では 4 列の線と 3 行の線が作られます。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
```

{{ EmbedLiveSample('Example', '500', '250') }}

線は線番号で指定できます。英語や日本語のように左から右方向に、列の線 1 がグリッドの左端、行の線 1 が上端となります。線番号は文書の [書字方向](/ja/docs/Web/CSS/CSS_Writing_Modes) を考慮するため、右から左へと記述する言語においては例えば列の線 1 はグリッドの右端となります。下の画像では左から右の言語でのグリッドにおける線番号を図示しています。

![Diagram showing the grid with lines numbered.](1_diagram_numbered_grid_lines.png)

明示的グリッド外にコンテンツを保持するため暗黙的トラックが作成されると暗黙的グリッド上にも線は作成されますが、それらの線は番号で指定することはできません。

## 線番号でグリッド上のアイテムの配置を指定する

グリッドを作成すると、線番号を使ってアイテムをグリッド上に配置できます。次の例では、列の線 1 から列の線 3 、行の線 1 から行の線 3 の間にアイテムを配置しています。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
```

{{ EmbedLiveSample('Placing_items_onto_the_grid_by_line_number', '500', '250') }}

## 名前付き線

明示的グリッドで生成される線には、トラックサイズの情報の前後に角括弧で囲んだ名前書くことで、名前を付けられます。次に示すように、線番号の代わりにこれらの名前を使ってアイテムを配置できます。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: [col1-start] 1fr [col2-start] 1fr [col3-start] 1fr [cols-end];
  grid-template-rows: [row1-start] 100px [row2-start] 100px [rows-end];
}
.item {
  grid-column-start: col1-start;
  grid-column-end: col3-start;
  grid-row-start: row1-start;
  grid-row-end: rows-end;
}
```

{{ EmbedLiveSample('Naming_lines', '500', '250') }}

## 関連情報

### プロパティリファレンス

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-row")}}

### より詳しい説明

- CSS グリッドレイアウトガイド: _[グリッドレイアウトの基本コンセプト](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- CSS グリッドレイアウトガイド: _[線指定による CSS グリッド位置指定](/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- CSS グリッドレイアウトガイド: _[名前付きグリッド線によるレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)_
- CSS グリッドレイアウトガイド: _[CSS グリッドと論理的な値と書字方向](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)_
- [CSS グリッドレイアウト仕様におけるグリッド線の定義](https://drafts.csswg.org/css-grid/#grid-line-concept)
