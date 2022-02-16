---
title: grid-row
slug: Web/CSS/grid-row
tags:
  - CSS
  - CSS グリッド
  - CSS プロパティ
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.grid-row
translation_of: Web/CSS/grid-row
---
{{CSSRef}}

**`grid-row`** は CSS の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、グリッド行の中におけるグリッドアイテムの寸法と位置を指定し、線、区間、なし (自動) をグリッド配置に適用することで、{{Glossary("grid areas", "グリッド領域")}}の行の先頭と末尾の端を指定します。

{{EmbedInteractiveExample("pages/css/grid-row.html")}}

2 つの `<grid-line>` 値を指定する場合は、個別指定の `grid-row-start` をスラッシュの前に設定し、 `grid-row-end` をスラッシュの後に設定します。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`grid-row-end`](/ja/docs/Web/CSS/grid-row-end)
- [`grid-row-start`](/ja/docs/Web/CSS/grid-row-start)

## 構文

```css
/* キーワード値 */
grid-row: auto;
grid-row: auto / auto;

/* <custom-ident> 値 */
grid-row: somegridarea;
grid-row: somegridarea / someothergridarea;

/* <integer> + <custom-ident> 値 */
grid-row: somegridarea 4;
grid-row: 4 somegridarea / 6;

/* span + <integer> + <custom-ident> 値 */
grid-row: span 3;
grid-row: span somegridarea;
grid-row: 5 somegridarea span;
grid-row: span 3 / 6;
grid-row: span somegridarea / span someothergridarea;
grid-row: 5 somegridarea span / 2 span;

/* グローバル値 */
grid-row: inherit;
grid-row: initial;
grid-row: revert;
grid-row: unset;
```

### 値

- `auto`
  - : プロパティをグリッドアイテムの配置に影響させず、自動的に配置し、間隔を自動的に取るか、既定の `1` とするためのキーワードです。
- `<custom-ident>`

  - : `<custom-ident>-start`/`<custom-ident>-end` という名前の付いた線がある場合、これはそのような線の最初がグリッドのアイテムの配置に関わります。

    > **Note:** 名前付きグリッド領域、自動的にこの形で暗黙の名前付き線を生成しますので、 `grid-row: foo;` と指定すると名前付きグリッド領域の先頭/末尾側の端を選択します (その前に `foo-start`/`foo-end` という名前の線が明示的に存在しない限り)。

    そうでなければ、これは `<custom-ident>` に沿って整数の `1` が指定されたものとして扱われます。

- `<integer> && <custom-ident>?`

  - : n 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。

    名前が `<custom-ident>` として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。

    `0` の {{cssxref("integer")}} 値は無効です。

- `span && [ <integer> || <custom-ident> ]`

  - : グリッドアイテムのグリッド領域の列側の先頭の端が末尾の端から n 行になるように、グリッドアイテムの配置にグリッドスパンを設定します。

    名前が `<custom-ident>` として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分おにない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。

    `<integer>` が省略された場合の既定値は `1` です。負の数や 0 は無効です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド行の寸法と位置の設定

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(6, 1fr);
}

#item1 {
  background-color: lime;
}

#item2 {
  background-color: yellow;
  grid-row: 2 / 4;
}

#item3 {
  background-color: blue;
  grid-row: span 2 / 7;
}
```

#### 結果

{{EmbedLiveSample("Setting_grid_row_size_and_location", "200px", "200px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}
- グリッドレイアウトガイド: [CSS グリッドでの線ベースの配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- 動画チュートリアル: _[Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)_
