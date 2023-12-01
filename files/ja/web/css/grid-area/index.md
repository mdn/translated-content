---
title: grid-area
slug: Web/CSS/grid-area
---

{{CSSRef}}

**`grid-area`** は CSS の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、 {{glossary("grid", "grid")}} 内でのグリッドアイテムの寸法と位置を指定するために、線、区間、なし (自動) をグリッド配置に適用することで、{{glossary("grid areas", "グリッド領域")}}の縁を指定します。

{{EmbedInteractiveExample("pages/css/grid-area.html")}}

4 つの `<grid-line>` が指定された場合、 `grid-row-start` が最初の値に設定され、 `grid-column-start` が 2 つ目の値に設定され、 `grid-row-end` が 3 つ目の値に設定され、 `grid-column-end` が 4 つ目の値に設定されます。

`grid-column-end` が省略された場合、 `grid-column-start` が {{cssxref("&lt;custom-ident&gt;")}} であれば、 `grid-column-end` はその `<custom-ident>` に設定されます。それ以外の場合は `auto` に設定されます。

`grid-row-end` が省略された場合、 `grid-row-start` が `<custom-ident>` であれば、 `grid-row-end` はその `<custom-ident>` に設定されます。それ以外の場合は `auto` に設定されます。

`grid-column-start` が省略された場合、 `grid-row-start` が `<custom-ident>` であれば、 4 つの個別指定値はその値に設定されます。それ以外の場合は `auto` に設定されます。

grid-area プロパティは領域の名称として動作する {{cssxref("&lt;custom-ident&gt;")}} に設定することができ、これは {{cssxref("grid-template-areas")}} を用いて配置することができます。

## 構成要素のプロパティ

このプロパティは下記の CSS プロパティの一括指定です。

- [`grid-row-start`](/ja/docs/Web/CSS/grid-row-start)
- [`grid-column-start`](/ja/docs/Web/CSS/grid-column-start)
- [`grid-row-end`](/ja/docs/Web/CSS/grid-row-end)
- [`grid-column-end`](/ja/docs/Web/CSS/grid-column-end)

## 構文

```css
/* キーワード値 */
grid-area: auto;
grid-area: auto / auto;
grid-area: auto / auto / auto;
grid-area: auto / auto / auto / auto;

/* <custom-ident> 値 */
grid-area: some-grid-area;
grid-area: some-grid-area / another-grid-area;

/* <integer> && <custom-ident>? 値 */
grid-area: 4 some-grid-area;
grid-area: 4 some-grid-area / 2 another-grid-area;

/* span && [ <integer> || <custom-ident> ] 値 */
grid-area: span 3;
grid-area: span 3 / span some-grid-area;
grid-area: 2 span / another-grid-area span;

/* グローバル値 */
grid-area: inherit;
grid-area: initial;
grid-area: revert;
grid-area: unset;
```

### 値

- `auto`
  - : プロパティをグリッドアイテムの配置に影響させず、自動的に配置するか、既定の `1` とするためのキーワードです。
- `<custom-ident>`

  - : `<custom-ident>-start`/`<custom-ident>-end` という名前の付いた線がある場合、これはそのような線の最初がグリッドのアイテムの配置に関わります。

    > **メモ:** 名前付きグリッド領域、自動的にこの形で暗黙の名前付き線を生成しますので、 `grid-area: foo;` と指定すると名前付きグリッド領域の先頭/末尾側の端を選択します (その前に `foo-start`/`foo-end` という名前の線が明示的に存在しない限り)。

    そうでなければ、これは `<custom-ident>` に沿って整数の `1` が指定されたものとして扱われます。

- `<integer> && <custom-ident>?`

  - : _n_ 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。

    名前が {{cssxref("&lt;custom-ident&gt;")}} として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。

    `0` の {{cssxref("&lt;integer&gt;")}} 値は無効です。

- `span && [ <integer> || <custom-ident> ]`

  - : グリッドアイテムのグリッド領域の列側の先頭の端が末尾の端から _n_ 行になるように、グリッドアイテムの配置にグリッドスパンを設定します。

    名前が {{cssxref("&lt;custom-ident&gt;")}} として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分にない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。

    {{cssxref("&lt;integer&gt;")}} が省略された場合の既定値は `1` です。負の数や 0 は無効です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド領域の設定

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
  height: 100px;
  grid-template: repeat(4, 1fr) / 50px 100px;
}

#item1 {
  background-color: lime;
  grid-area: 2 / 2 / auto / span 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}
```

#### 結果

{{EmbedLiveSample("Setting_grid_areas", "100%", "150px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("grid-row")}}, {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-template-areas")}}
- グリッドレイアウトガイド: [CSS グリッドでの線ベースの配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- 動画チュートリアル: _[Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)_
