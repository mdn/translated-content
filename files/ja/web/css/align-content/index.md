---
title: align-content
slug: Web/CSS/align-content
---

[CSS](/ja/docs/Web/CSS) の **`align-content`** プロパティは、[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)の交差軸または[グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout)のブロック軸方向の内部のアイテムの間または周囲の空間の配分方法を設定します。

下記のインタラクティブデモでは、グリッドレイアウトを使用してこのプロパティの値のいくつかを説明しています。

{{EmbedInteractiveExample("pages/css/align-content.html")}}

単一行のフレックスコンテナー (つまり、 `flex-wrap: nowrap` のもの) では、このプロパティは効果がありません。

## 構文

```css
/* 基本的な位置による配置 */
/* align-content は left および right の値を取りません */
align-content: center; /* アイテムを中央に寄せる */
align-content: start; /* アイテムを先頭に寄せる */
align-content: end; /* アイテムを末尾に寄せる */
align-content: flex-start; /* フレックスアイテムを先頭に寄せる */
align-content: flex-end; /* フレックスアイテムを末尾に寄せる */

/* 通常の配置 */
align-content: normal;

/* ベースラインの配置 */
align-content: baseline;
align-content: first baseline;
align-content: last baseline;

/* 均等配置 */
align-content: space-between; /* アイテムを均等に配置し
                                 最初のアイテムは先頭に寄せ、
                                 最後のアイテムは末尾に寄せる */
align-content: space-around; /* アイテムを均等に配置し
                                 各アイテムの両側に半分の大きさの
                                 間隔を置く */
align-content: space-evenly; /* アイテムを均等に配置し
                                 各アイテムの周りに同じ大きさの間隔を置く */
align-content: stretch; /* アイテムを均等に配置し
                                 コンテナーに合うようにサイズ「自動」の
                                 アイテムを引き伸ばす */

/* あふれた場合の配置 */
align-content: safe center;
align-content: unsafe center;

/* グローバル値 */
align-content: inherit;
align-content: initial;
align-content: revert;
align-content: unset;
```

### 値

- `start`
  - : 各アイテムは、交差軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。
- `end`
  - : 各アイテムは、交差軸方向で配置コンテナーの末尾側の端に向けて互いに寄せて配置されます。
- `flex-start`
  - : 各アイテムは、フレックスコンテナーに依存して、交差軸の先頭側である配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `start` のように扱われます。
- `flex-end`
  - : 各アイテムは、フレックスコンテナーに依存して、交差軸の末尾側である配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `end` のように扱われます。
- `center`
  - : 各アイテムは、交差軸方向で配置コンテナーの中央に互いに寄せて配置されます。
- `normal`
  - : 各アイテムは `align-content` の値が設定されていないかのように、既定の位置に寄せて配置されます。
- `baseline`, `first baseline`, `last baseline`

  - : first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。

    ![the baseline is the line upon which most letters "sit" and below which descenders extend.](410px-typography_line_terms.svg.png)

    `first baseline` の代替配置は `start`、`last baseline` の代替配置は `end` です。

- `space-between`
  - : 各アイテムは、配置コンテナーの中で交差軸方向に均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムは配置コンテナーの交差軸の先頭側に寄せられ、最後のアイテムは配置コンテナーの交差軸の末尾側に寄せられます。
- `space-around`
  - : 各アイテムは、配置コンテナーの中で交差軸方向に均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムの前と最後のアイテムの後の余白は、隣接するアイテム同士の間隔の半分の幅になります。
- `space-evenly`
  - : 各アイテムは、配置コンテナーの中で交差軸方向に均等に配置されます。隣接するアイテム同士の間隔、先頭側の端と最初のアイテムの間のの余白、末尾側の端と最後のアイテムの間の余白は、まったく同じ幅になります。
- `stretch`
  - : 各アイテムの交差軸方向の寸法の合計が配置コンテナーの寸法よりも小さい場合、寸法が `auto` のアイテムは、 {{cssxref("max-height")}}/{{cssxref("max-width")}} (または同等の機能) での制約を尊重しつつ、 (比例的にではなく) 均等に引き伸ばされ、交差軸方向の寸法の合計が配置コンテナーを満たすようになります。
- `safe`
  - : 配置キーワードと共に使用します。選択されたキーワードによって、アイテムが配置コンテナーをあふれてデータの損失が発生する場合、アイテムは配置モードが `start` であったかのように配置されます。
- `unsafe`
  - : 配置キーワードと共に使用します。アイテムの寸法と配置コンテナーとの関係、あふれることによってデータの損失が発生するかどうかにかかわらず、指定された値を尊重します。

## 公式定義

{{CSSInfo}}

## 関連情報

{{csssyntax}}

<h2 id="Examples">例</h2>

### CSS

```css
#container {
  height: 200px;
  width: 240px;
  align-content: center; /* Can be changed in the live sample */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}

div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

### HTML

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-content: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="stretch">stretch</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="space-between">space-between</option>
    <option value="space-around">space-around</option>
    <option value="space-evenly">space-evenly</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>

    <option value="baseline">baseline</option>
    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
var values = document.getElementById("values");
var display = document.getElementById("display");
var container = document.getElementById("container");

values.addEventListener("change", function (evt) {
  container.style.alignContent = evt.target.value;
});

display.addEventListener("change", function (evt) {
  container.className = evt.target.value;
});
```

### 結果

{{EmbedLiveSample("Examples", 260, 290)}}

## 仕様書

{{Specifications("css.properties.align-content.grid_context")}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS フレックスボックスガイド: _[フレックスコンテナー内でのアイテムの配置](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS グリッドガイド: _[CSS グリッドレイアウト内でのボックス配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)

{{CSSRef}}
