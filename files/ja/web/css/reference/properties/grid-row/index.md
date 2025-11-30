---
title: grid-row
slug: Web/CSS/Reference/Properties/grid-row
original_slug: Web/CSS/grid-row
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

**`grid-row`** は CSS の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、{{glossary("grid row", "グリッド行")}}の中におけるグリッドアイテムの寸法と位置を指定します。グリッド配置に線や区間を指定したり、何も指定しなかったり（自動）することで、{{glossary("grid areas", "グリッド領域")}}のインライン方向の先頭と末尾の端を指定します。

{{InteractiveExample("CSS デモ: grid-row")}}

```css interactive-example-choice
grid-row: 1;
```

```css interactive-example-choice
grid-row: 1 / 3;
```

```css interactive-example-choice
grid-row: 2 / -1;
```

```css interactive-example-choice
grid-row: 1 / span 2;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">One</div>
    <div>Two</div>
    <div>Three</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-gap: 10px;
  width: 200px;
}

.example-container > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}

#example-element {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`grid-row-end`](/ja/docs/Web/CSS/Reference/Properties/grid-row-end)
- [`grid-row-start`](/ja/docs/Web/CSS/Reference/Properties/grid-row-start)

## 構文

```css
/* キーワード値 */
grid-row: auto;
grid-row: auto / auto;

/* <custom-ident> 値 */
grid-row: some-grid-area;
grid-row: some-grid-area / some-other-grid-area;

/* <integer> + <custom-ident> 値 */
grid-row: some-grid-area 4;
grid-row: 4 some-grid-area / 6;

/* span + <integer> + <custom-ident> 値 */
grid-row: span 3;
grid-row: span some-grid-area;
grid-row: 5 some-grid-area span;
grid-row: span 3 / 6;
grid-row: span some-grid-area / span some-other-grid-area;
grid-row: 5 some-grid-area span / 2 span;

/* グローバル値 */
grid-row: inherit;
grid-row: initial;
grid-row: revert;
grid-row: revert-layer;
grid-row: unset;
```

このプロパティは 1 つまたは 2 つの `<grid-line>` の値で指定します。

2 つの `<grid-line>` 値を指定する場合は、個別指定の `grid-row-start` をスラッシュの前に設定し、 `grid-row-end` をスラッシュの後に設定します。

それぞれの `<grid-line>` の値は以下の何れかを指定することができます。

- `auto` キーワード
- `<custom-ident>` 値
- `<integer>` 値
- `<custom-ident>` および `<integer>` を空白で区切ったもの
- `span` キーワードと `<custom-ident>` または `<integer>` またはその両方。

### 値

- `auto`
  - : プロパティをグリッドアイテムの配置に影響させず、自動的に配置し、間隔を自動的に取るか、既定の `1` とするためのキーワードです。
- `<custom-ident>`
  - : `<custom-ident>-start`/`<custom-ident>-end` という名前の付いた線がある場合、これはそのような線の最初がグリッドのアイテムの配置に関わります。

    > [!NOTE]
    > 名前付きグリッド領域、自動的にこの形で暗黙の名前付き線を生成しますので、 `grid-row: foo;` と指定すると名前付きグリッド領域の先頭/末尾側の端を選択します (その前に `foo-start`/`foo-end` という名前の線が明示的に存在しない限り)。

    そうでなければ、これは `<custom-ident>` に沿って整数の `1` が指定されたものとして扱われます。

- `<integer> && <custom-ident>?`
  - : n 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。

    名前が `<custom-ident>` として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。

    `0` の {{cssxref("integer")}} 値は無効です。

- `span && [ <integer> || <custom-ident> ]`
  - : グリッドアイテムのグリッド領域の列側の先頭の端が末尾の端から n 行になるように、グリッドアイテムの配置にグリッドスパンを設定します。

    名前が `<custom-ident>` として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分にない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。

    `<integer>` が省略された場合の既定値は `1` です。負の数や 0 は無効です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド行の寸法と位置の設定

#### HTML

```html live-sample___setting_grid_row_size_and_location
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

#### CSS

```css live-sample___setting_grid_row_size_and_location
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

- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- 動画: [Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)
