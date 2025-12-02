---
title: grid-auto-flow
slug: Web/CSS/Reference/Properties/grid-auto-flow
original_slug: Web/CSS/grid-auto-flow
l10n:
  sourceCommit: 5ced6d0b9636a1b904474d1546674b305346daa0
---

**`grid-auto-flow`** は [CSS](/ja/docs/Web/CSS) のプロパティで、自動配置のアルゴリズムの動作を制御し、自動配置されたアイテムがどのようにグリッドに流れ込むかを正確に指定するものです。

{{InteractiveExample("CSS デモ: grid-auto-flow")}}

```css interactive-example-choice
grid-auto-flow: row;
```

```css interactive-example-choice
grid-auto-flow: column;
```

```css interactive-example-choice
grid-auto-flow: row dense;
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-gap: 10px;
  width: 220px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}

#example-element > div:nth-child(1) {
  grid-column: auto / span 2;
}

#example-element > div:nth-child(2) {
  grid-column: auto / span 2;
}
```

> [!NOTE]
> `masonry-auto-flow` プロパティは、CSS の[メイソンリーレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)にありましたが、 `grid-auto-flow` に取って代わられ、廃止されました。
> 詳細は [csswg-drafts #10231](https://github.com/w3c/csswg-drafts/issues/10231) をご覧ください。

## 構文

```css
/* キーワード値 */
grid-auto-flow: row;
grid-auto-flow: column;
grid-auto-flow: dense;
grid-auto-flow: row dense;
grid-auto-flow: column dense;

/* グローバル値 */
grid-auto-flow: inherit;
grid-auto-flow: initial;
grid-auto-flow: revert;
grid-auto-flow: revert-layer;
grid-auto-flow: unset;
```

このプロパティは、次のいずれかの形態を取ることができます。

- 単一のキーワード: `row`、 `column`、 `dense` のうち 1 つ
- 2 つのキーワード: `row dense` または `column dense`

### 値

- `row`
  - : アイテムは、各行を順番に埋めていき、必要に応じて新しい行を追加していくことで配置されます。 `row` と `column` のどちらも指定されなかった場合は、 `row` とみなされます。
- `column`
  - : アイテムは、各列を順番に埋めていき、必要に応じて新しい列を追加していくことで配置されます。
- `dense`
  - : "dense" パッキングアルゴリズムは、小さいアイテムが後で出てきた場合、グリッドの早い段階で穴を埋めようとします。そのため、より大きなアイテムが残した穴を埋めるために、アイテムが順番通りに表示されないことがあります。

    これを省略すると、 "sparse" アルゴリズムが使用され、配置アルゴリズムはアイテムを配置するときにグリッド内を「前に進む」だけで、穴を埋めるために後ろに戻ることはありません。これにより、自動配置されたアイテムはすべて「順番通り」に表示され、たとえ後から配置したアイテムで埋められるはずの穴が残っていたとしても、確実に埋められるようになります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッドの自動配置を設定する

#### HTML

```html live-sample___setting_grid_auto-placement
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
  <div id="item4"></div>
  <div id="item5"></div>
</div>
<select id="direction">
  <option value="column">column</option>
  <option value="row">row</option>
</select>
<input id="dense" type="checkbox" />
<label for="dense">dense</label>
```

#### CSS

```css live-sample___setting_grid_auto-placement
#grid {
  height: 200px;
  width: 200px;
  display: grid;
  gap: 10px;
  grid-template: repeat(4, 1fr) / repeat(2, 1fr);
  grid-auto-flow: column; /* or 'row', 'row dense', 'column dense' */
}

#item1 {
  background-color: lime;
  grid-row-start: 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}

#item4 {
  grid-column-start: 2;
  background-color: red;
}

#item5 {
  background-color: aqua;
}
```

```js hidden live-sample___setting_grid_auto-placement
function changeGridAutoFlow() {
  const grid = document.getElementById("grid");
  const direction = document.getElementById("direction");
  const dense = document.getElementById("dense");
  let gridAutoFlow = direction.value === "row" ? "row" : "column";

  if (dense.checked) {
    gridAutoFlow += " dense";
  }

  grid.style.gridAutoFlow = gridAutoFlow;
}

const selectElem = document.querySelector("select");
const inputElem = document.querySelector("input");
selectElem.addEventListener("change", changeGridAutoFlow);
inputElem.addEventListener("change", changeGridAutoFlow);
```

#### 結果

{{EmbedLiveSample("Setting_grid_auto-placement", "200px", "260px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid")}}
- [グリッドレイアウトでの自動配置](/ja/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- 動画: [Introducing grid auto-placement and order](https://gridbyexample.com/video/series-auto-placement-order/)
