---
title: justify-content
slug: Web/CSS/justify-content
tags:
  - CSS
  - CSS プロパティ
  - CSS ボックス配置
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.justify-content
translation_of: Web/CSS/justify-content
---
{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`justify-content`** プロパティは、フレックスコンテナーの{{Glossary("Main Axis", "主軸")}}およびグリッドコンテナーのインライン軸に沿って、中身のアイテムの間や周囲に間隔を配置する方法を定義します。

このデモはグリッドレイアウトを用いていくつかの値を紹介します。

{{EmbedInteractiveExample("pages/css/justify-content.html")}}

長さや自動マージンが適用された後に配置が行われることから、[フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)で {{cssxref("flex-grow")}} が `0` ではないフレックス要素が少なくとも 1 つある場合は利用可能な空間がなくなりますので、このプロパティの効果はないでしょう。

## 構文

```css
/* 位置による配置 */
justify-content: center;     /* アイテムを中央に寄せる */
justify-content: start;      /* アイテムを先頭に寄せる */
justify-content: end;        /* アイテムを末尾に寄せる */
justify-content: flex-start; /* フレックスアイテムを先頭に寄せる */
justify-content: flex-end;   /* フレックスアイテムを末尾に寄せる */
justify-content: left;       /* アイテムを左端に寄せる */
justify-content: right;      /* アイテムを右端に寄せる */

/* ベースラインによる配置 */
/* justify-content はベースラインの値を取りません */

/* 通常の配置 */
justify-content: normal;

/* 均等配置 */
justify-content: space-between; /* 各アイテムを均等に配置し
                                   最初のアイテムは先頭に寄せ、
                                   最後のアイテムは末尾に寄せる */
justify-content: space-around;  /* 各アイテムを均等に配置し
                                   各アイテムの両側に半分の大きさの
                                   間隔を置く */
justify-content: space-evenly;  /* 各アイテムを均等に配置し
                                   各アイテムの周りに同じ大きさの間隔を置く */
justify-content: stretch;       /* 各アイテムを均等に配置し
                                   サイズが 'auto' であるアイテムは、
                                   コンテナーに合わせて引き伸ばす */

/* あふれた場合の配置 */
justify-content: safe center;
justify-content: unsafe center;

/* グローバル値 */
justify-content: inherit;
justify-content: initial;
justify-content: revert;
justify-content: unset;
```

### 値


- `start`
  - : 各アイテムは、主軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。
- `end`
  - : 各アイテムは、主軸方向で配置コンテナーの末尾側の端に向けて互いに寄せて配置されます。
- `flex-start`
  - : 各アイテムは、フレックスコンテナーに依存して、主軸の先頭側である配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `start` のように扱われます。
- `flex-end`
  - : 各アイテムは、フレックスコンテナーに依存して、主軸の末尾側である配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `end` のように扱われます。
- `center`
  - : 各アイテムは、主軸方向で配置コンテナーの中央に向けて互いに寄せて配置されます。
- `left`
  - : 各アイテムは、主軸方向で配置コンテナーの左側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は `start` のように動作します。
- `right`
  - : 各アイテムは、主軸方向で配置コンテナーの右側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は `start` のように動作します。
- `normal`
  - : 各アイテムは `justify-content` の値が設定されていないかのように、既定の位置に寄せて配置されます。この値はグリッドおよびフレックスコンテナーの `stretch` として動作します。
- `baseline`, `first baseline`, `last baseline`
  - : first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `first baseline` の代替配置は `start`、`last baseline` の代替配置は `end` です。
- `space-between`
  - : 各アイテムは、配置コンテナーの中で主軸方向に均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムは主軸の先頭側に寄せられ、最後のアイテムは主軸の末尾側に寄せられます。
- `space-around`
  - : 各アイテムは、配置コンテナーの中で主軸方向に均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムの前と最後のアイテムの後の余白は、隣接するアイテム同士の間隔の半分の幅になります。
- `space-evenly`
  - : 各アイテムは、配置コンテナーの中で主軸方向に均等に配置されます。隣接するアイテム同士の間隔、最初のアイテムの前の余白、最後のアイテムの後の余白は、まったく同じ幅になります。
- `stretch`

  - : 各アイテムの主軸に沿った寸法の合計が配置コンテナーの寸法よりも小さい場合、寸法が `auto` のアイテムは、 {{cssxref("max-height")}}/{{cssxref("max-width")}} (または同等の機能) での制約を尊重しつつ、 (比例的にではなく) 均等に引き伸ばされ、主軸方向の寸法の合計が配置コンテナーを満たすようになります。

    > **Note:** `stretch` はフレキシブルボックス (フレックスボックス) は対応していません。

- `safe`
  - : 配置キーワードと共に使用します。選択されたキーワードによって、アイテムが配置コンテナーをあふれてデータの損失が発生する場合、アイテムは配置モードが `start` であったかのように配置されます。
- `unsafe`
  - : 配置キーワードと共に使用します。アイテムと配置コンテナーの相対的な寸法にかかわらず、またあふれることによってデータの損失が発生するかどうかにかかわらず、指定した値を尊重します。

## 公式定義

{{cssinfo}}

## 関連情報

{{csssyntax}}

## 例

<h3 id="Setting_flex_item_distribution">フレックスアイテムの配分の設定</h3>

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
  <option value="baseline">baseline</option>
  <option value="first baseline">first baseline</option>
  <option value="last baseline">last baseline</option>
  <option value="space-between" selected>space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
</select>
```

```js hidden
var justifyContent = document.getElementById("justifyContent");
justifyContent.addEventListener("change", function (evt) {
  document.getElementById("container").style.justifyContent =
      evt.target.value;
});
```

#### 結果

{{EmbedLiveSample("Setting_flex_item_distribution", "100%", 180)}}

## 仕様書

{{Specifications("css.properties.justify-content.grid_context")}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS フレックスボックスガイド: _[フレックスコンテナー内でのアイテムの配置](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS グリッドガイド: _[CSS グリッドレイアウト内でのボックス配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)
