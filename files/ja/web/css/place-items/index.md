---
title: place-items
slug: Web/CSS/place-items
---

{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`place-items`** は[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、アイテムのブロック軸およびインライン軸に沿ったアイテムの配置 (すなわち {{CSSxRef("align-items")}} および {{CSSxRef("justify-items")}} プロパティ) を、[グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout)や[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)などのレイアウトシステムにおいて、一度に指定することができます。2 番目の値が設定されていない場合、最初の値がそちらにも使用されます。

{{EmbedInteractiveExample("pages/css/place-items.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`align-items`](/ja/docs/Web/CSS/align-items)
- [`justify-items`](/ja/docs/Web/CSS/justify-items)

## 構文

```css
/* キーワード値 */
place-items: auto center;
place-items: normal start;

/* 位置による配置 */
place-items: center normal;
place-items: start auto;
place-items: end normal;
place-items: self-start auto;
place-items: self-end normal;
place-items: flex-start auto;
place-items: flex-end normal;
place-items: left auto;
place-items: right normal;

/* ベースラインによる配置 */
place-items: baseline normal;
place-items: first baseline auto;
place-items: last baseline normal;
place-items: stretch auto;

/* グローバル値 */
place-items: inherit;
place-items: initial;
place-items: revert;
place-items: unset;
```

### 値

- `auto`
  - : 使用される値は、ボックスに親があれば、親ボックスの `justify-items` プロパティ、そうでなければ絶対位置であり、このような場合、 `auto` は `normal` を表します。
- `normal`

  - : このキーワードの効果は、現在のレイアウトモードに依存します。

    - ブロックレベルレイアウトでは、このキーワードは `start` の別名です。
    - 絶対位置のレイアウトでは、このキーワードは*置換*の絶対位置ボックスには `start` のように動作し、*その他*の絶対位置ボックスには `stretch` のように動作します。
    - 表のセルレイアウトでは、このキーワードは意味を持たず、*無視*されます。
    - フレキシブルボックスのレイアウトでは、このキーワードは意味を持たず、*無視*されます。
    - グリッドレイアウトでは、このキーワードは `stretch` のうちの一つと似た動作をしますが、アスペクト比や固有の寸法を持つボックスは `start` のように振舞います。

- `start`
  - : 各アイテムは、適切な軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。
- `end`
  - : 各アイテムは、適切な軸方向で配置コンテナーの末尾側の端に向けて互いに寄せて配置されます。
- `flex-start`
  - : アイテムは、配置コンテナーの主軸または交差軸の先頭側の端に向けて、互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `start` のように扱われます。
- `flex-end`
  - : アイテムは、配置コンテナーの主軸または交差軸の末尾側の端に向けて、互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `end` のように扱われます。
- `self-start`
  - : アイテムは適切な軸で、アイテムの開始側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。
- `self-end`
  - : アイテムは適切な軸で、アイテムの終端側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。
- `center`
  - : 各アイテムは、配置コンテナーの中央に向けて互いに寄せて配置されます。
- `left`
  - : 各アイテムは、適切な軸方向で配置コンテナーの左側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は `start` のように動作します。
- `right`
  - : 各アイテムは、適切な軸方向で配置コンテナーの右側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は `start` のように動作します。
- `baseline`, `first baseline`, `last baseline`
  - : first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `first baseline` の代替配置は `start`、`last baseline` の代替配置は `end` です。
- `stretch`
  - : 各アイテムの寸法の合計が配置コンテナーの寸法よりも小さい場合、寸法が `auto` のアイテムは、 {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (または同等の機能) での制約を尊重しつつ、 (比例的にではなく) 均等に引き伸ばされ、寸法の合計が配置コンテナーを満たすようになります。

## 公式定義

{{cssinfo}}

## 関連情報

{{csssyntax}}

## 例

<h3 id="Placing_items_in_a_flex_container">フレックスコンテナー内でのアイテムの配置</h3>

フレックスボックスでは、主軸のアイテムがグループとして扱われるため、{{cssxref("justify-self")}} や {{cssxref("justify-items")}} したがって、2 番目の値は無視されます。

```css hidden
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
  font-size: 2em;
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
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

```html hidden
<div id="container">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
</div>

<div class="row">
  <label for="values">place-items: </label>
  <select id="values">
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
let values = document.getElementById("values");
let container = document.getElementById("container");

values.addEventListener("change", function (evt) {
  container.style.placeItems = evt.target.value;
});
```

#### CSS

```css
#container {
  height: 200px;
  width: 240px;
  place-items: stretch; /* You can change this value by selecting another option in the list */
  background-color: #8c8c8c;
  display: flex;
}
```

#### 結果

{{EmbedLiveSample("Placing_items_in_a_flex_container", 260, 290)}}

<h3 id="Placing_items_in_a_grid_container">グリッドコンテナーでのアイテムの配置</h3>

以下のグリッドコンテナーのアイテムは、配置されるグリッド領域よりも小さいため、`place-items` はブロック方向とインライン方向にアイテムを移動します。

```css hidden
div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
  font-size: 2em;
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
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

```html hidden
<div id="gridcontainer">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
</div>

<div class="row">
  <label for="gridvalues">place-items: </label>
  <select id="gridvalues">
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
let values = document.getElementById("gridvalues");
let container = document.getElementById("gridcontainer");

values.addEventListener("change", function (evt) {
  container.style.placeItems = evt.target.value;
});
```

#### CSS

```css
#gridcontainer {
  height: 200px;
  width: 240px;
  place-items: stretch; /* You can change this value by selecting another option in the list */
  background-color: #8c8c8c;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#gridcontainer > div {
  width: 50px;
}
```

#### 結果

{{EmbedLiveSample("Placing_items_in_a_grid_container", 260, 290)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS フレックスボックスガイド: _[フレックスコンテナー内でのアイテムの配置](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS グリッドガイド: _[CSS グリッドレイアウト内でのボックス配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)
- {{CSSxRef("align-items")}} プロパティ
- {{CSSxRef("align-self")}} プロパティ
- {{CSSxRef("justify-items")}} プロパティ
- {{CSSxRef("justify-self")}} プロパティ
