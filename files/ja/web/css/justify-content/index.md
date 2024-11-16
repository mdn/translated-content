---
title: justify-content
slug: Web/CSS/justify-content
l10n:
  sourceCommit: e74f78ed12aca24b14c2b47f3a170d538b56d2fc
---

{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`justify-content`** プロパティは、フレックスコンテナーの{{Glossary("Main Axis", "主軸")}}およびグリッドコンテナーのインライン軸に沿って、中身のアイテムの間や周囲に間隔を配置する方法を定義します。

このデモはグリッドレイアウトを用いていくつかの値を紹介します。

{{EmbedInteractiveExample("pages/css/justify-content.html")}}

配置は長さや auto マージンが適用された後に行われますので、[フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)で {{cssxref("flex-grow")}} が `0` ではないフレックス要素が 1 つ以上ある場合は利用可能な空間がなくなりますので、このプロパティの効果はなくなります。

## 構文

```css
/* 位置による配置 */
justify-content: center; /* アイテムを中央に寄せる */
justify-content: start; /* アイテムを先頭に寄せる */
justify-content: end; /* アイテムを末尾に寄せる */
justify-content: flex-start; /* フレックスアイテムを先頭に寄せる */
justify-content: flex-end; /* フレックスアイテムを末尾に寄せる */
justify-content: left; /* アイテムを左端に寄せる */
justify-content: right; /* アイテムを右端に寄せる */

/* ベースラインによる配置 */
/* justify-content はベースラインの値を取りません */

/* 通常の配置 */
justify-content: normal;

/* 均等配置 */
justify-content: space-between; /* 各アイテムを均等に配置し
                                   最初のアイテムは先頭に寄せ、
                                   最後のアイテムは末尾に寄せる */
justify-content: space-around; /* 各アイテムを均等に配置し
                                   先頭と末尾の間隔は、各アイテムの間隔の
                                   半分の大きさになる */
justify-content: space-evenly; /* 各アイテムを均等に配置し
                                   先頭と末尾と各アイテムの周りには、
                                   同じ大きさの間隔を置く */
justify-content: stretch; /* 各アイテムを均等に配置し
                                   サイズが 'auto' であるアイテムは、
                                   コンテナーに合わせて引き伸ばす */

/* あふれた場合の配置 */
justify-content: safe center;
justify-content: unsafe center;

/* グローバル値 */
justify-content: inherit;
justify-content: initial;
justify-content: revert;
justify-content: revert-layer;
justify-content: unset;
```

### 値

- `start`
  - : 各アイテムは、主軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。
- `end`
  - : 各アイテムは、主軸方向で配置コンテナーの末尾側の端に向けて互いに寄せて配置されます。
- `flex-start`
  - : 各アイテムは、フレックスコンテナーの主軸の先頭側を基準に、配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `start` のように扱われます。
- `flex-end`
  - : 各アイテムは、フレックスコンテナーの主軸の末尾側を基準に、配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `end` のように扱われます。
- `center`
  - : 各アイテムは、主軸方向で配置コンテナーの中央に向けて互いに寄せて配置されます。
- `left`
  - : アイテムは配置コンテナーの左端に向かって同じ高さに詰められます。プロパティの水平軸がインライン軸と平行でない場合、例えば [`flex-direction: column;`](/ja/docs/Web/CSS/flex-direction) が設定されている場合、この値は `start` のように動作します。
- `right`
  - : アイテムは、適切な軸で配置コンテナーの右端に向かって、互いに同じ高さに詰められます。このプロパティの軸が（グリッドコンテナーの）インライン軸や（フレックスボックスコンテナーの）主軸と平行でない場合、この値は `start` のように動作します。
- `normal`
  - : `stretch` として動作します。ただし、[`column-width`](/ja/docs/Web/CSS/column-width) が `auto` でない段組みコンテナーの場合、段はコンテナーいっぱいに引き延ばされるのではなく、指定した `column-width` の幅を取ります。フレックスコンテナーでは `stretch` は `start` として動作するので、`normal` も `start` として動作します。
- `space-between`
  - : 各アイテムは、配置コンテナーの中で主軸方向に均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムは主軸の先頭側に寄せられ、最後のアイテムは主軸の末尾側に寄せられます。
- `space-around`
  - : 各アイテムは、配置コンテナーの中で主軸方向に均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムの前と最後のアイテムの後の余白は、隣接するアイテム同士の間隔の半分の幅になります。
- `space-evenly`
  - : 各アイテムは、配置コンテナーの中で主軸方向に均等に配置されます。隣接するアイテム同士の間隔、最初のアイテムの前の余白、最後のアイテムの後の余白は、まったく同じ幅になります。
- `stretch`

  - : 各アイテムの主軸に沿った寸法の合計が配置コンテナーの寸法よりも小さい場合、寸法が `auto` のアイテムは、 {{cssxref("max-height")}}/{{cssxref("max-width")}} (または同等の機能) での制約を尊重しつつ、 (比例的にではなく) 均等に引き伸ばされ、主軸方向の寸法の合計が配置コンテナーを満たすようになります。

    > **メモ:** [フレックスボックス](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)では、`stretch` の値は `flex-start` または `start` として動作します。そのため、伸縮は {{CSSXref("flex-grow")}} プロパティを使用して制御します。

- `safe`
  - : アイテムが配置コンテナーをあふれる場合、そのアイテムは配置モードが `start` であるかのように配置されます。指定した配置は行われません。
- `unsafe`
  - : アイテムが配置コンテナーをあふれる場合でも、指定した配置が実行されます。あふれ防止を優先して、希望する配置を行う `safe` とは異なります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスアイテムの配分の設定

#### CSS

```css
#container {
  display: flex;
  justify-content: space-between; /* live sample で変更可能 */
}

#container > div {
  width: 100px;
  height: 100px;
  background: linear-gradient(-45deg, #788cff, #b4c8ff);
}
```

```html hidden
<div id="container">
  <div></div>
  <div></div>
  <div></div>
</div>
<select id="justifyContent">
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="center">center</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="space-between" selected>space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
</select>
```

```js hidden
const justifyContent = document.getElementById("justifyContent");
justifyContent.addEventListener("change", (evt) => {
  document.getElementById("container").style.justifyContent = evt.target.value;
});
```

#### 結果

{{EmbedLiveSample("Setting_flex_item_distribution", "100%", 180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS フレックスボックスガイド: _[フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
- CSS グリッドガイド: _[グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)_
- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_box_alignment)
