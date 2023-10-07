---
title: grid-auto-flow
slug: Web/CSS/grid-auto-flow
---

{{CSSRef}}

**`grid-auto-flow`** は CSS のプロパティで、自動配置のアルゴリズムの動作を制御し、自動配置されたアイテムがどのようにグリッドに流れ込むかを正確に指定するものです。

{{EmbedInteractiveExample("pages/css/grid-auto-flow.html")}}

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

  - : 「dense」パッキングアルゴリズムは、小さいアイテムが後で出てきた場合、グリッドの早い段階で穴を埋めようとします。そのため、より大きなアイテムが残した穴を埋めるために、アイテムが順番通りに表示されないことがあります。

    これを省略すると、「sparse」アルゴリズムが使用され、配置アルゴリズムはアイテムを配置するときにグリッド内を「前に進む」だけで、穴を埋めるために後ろに戻ることはありません。これにより、自動配置されたアイテムはすべて「順番通り」に表示され、たとえ後から配置したアイテムで埋められるはずの穴が残っていたとしても、確実に埋められるようになります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッドの自動配置を設定する

#### HTML

```html
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

```css
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

```js hidden
function changeGridAutoFlow() {
  var grid = document.getElementById("grid");
  var direction = document.getElementById("direction");
  var dense = document.getElementById("dense");
  var gridAutoFlow = direction.value === "row" ? "row" : "column";

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

{{EmbedLiveSample("Setting_grid_auto-placement", "200px", "230px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid")}}
- グリッドレイアウトガイド: _[グリッドレイアウトにおける自動配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)_
- 動画チュートリアル: _[グリッドの自動配置と順序の紹介](http://gridbyexample.com/video/series-auto-placement-order/)_
