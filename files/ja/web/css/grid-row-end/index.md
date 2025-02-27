---
title: grid-row-end
slug: Web/CSS/grid-row-end
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

**`grid-row-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、グリッド行の中におけるグリッドアイテムの末尾の位置を指定します。グリッド配置に線や区間を指定したり、何も指定しなかったり（自動）することで、{{glossary("grid areas", "グリッド領域")}}のインライン方向の末尾の端を指定します。

{{EmbedInteractiveExample("pages/css/grid-row-end.html")}}

## 構文

```css
/* キーワード値 */
grid-row-end: auto;

/* <custom-ident> 値 */
grid-row-end: some-grid-area;

/* <integer> + <custom-ident> 値 */
grid-row-end: 2;
grid-row-end: some-grid-area 4;

/* span + <integer> + <custom-ident> 値 */
grid-row-end: span 3;
grid-row-end: span some-grid-area;
grid-row-end: 5 some-grid-area span;

/* グローバル値 */
grid-row-end: inherit;
grid-row-end: initial;
grid-row-end: revert;
grid-row-end: revert-layer;
grid-row-end: unset;
```

### 値

- `auto`
  - : プロパティをグリッドアイテムの配置に影響させず、自動的に配置し、間隔を自動的に取るか、既定の `1` とするためのキーワードです。
- `<custom-ident>`

  - : `<custom-ident>-end` という名前の付いた線がある場合、これはそのような線の先頭がグリッドアイテムの配置に関わります。

    > [!NOTE]
    > 名前付きグリッド領域、自動的にこの形で暗黙の名前付き線を生成しますので、 `grid-row-end: foo;` と指定すると名前付きグリッド領域の末尾側の端を選択します (その前に `foo-end` という名前の線が明示的に存在しない限り)。

    そうでなければ、これは `<custom-ident>` に沿って整数の `1` が指定されたものとして扱われます。

    `<custom-ident>` は `span` の値を取ることができません。

- `<integer> && <custom-ident>?`

  - : n 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。

    名前が `<custom-ident>` として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。

    `0` の {{cssxref("integer")}} 値は無効です。

- `span && [ <integer> || <custom-ident> ]`

  - : グリッドアイテムのグリッド領域の行の末尾の端が先頭の端から n 本になるように、グリッドアイテムの配置にグリッドスパンを設定します。

    名前が `<custom-ident>` として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分おにない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。

    \<integer> が省略された場合の既定値は `1` です。負の数や `0` は無効です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッドアイテムの行の末尾位置の設定

#### HTML

```html live-sample___setting_row_end_for_a_grid_item
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
</div>
```

#### CSS

```css live-sample___setting_row_end_for_a_grid_item
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
```

```css hidden live-sample___setting_row_end_for_a_grid_item
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

#### 結果

{{ EmbedLiveSample('Setting_row_end_for_a_grid_item', '230', '420') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-column")}}
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- 動画: [Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)
