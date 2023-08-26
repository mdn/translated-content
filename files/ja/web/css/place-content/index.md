---
title: place-content
slug: Web/CSS/place-content
---

{{CSSRef}}

**`place-content`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、ブロック方向とインライン方向の内容物の配置 (すなわち {{CSSxRef("align-content")}} および {{CSSxRef("justify-content")}}) を、[グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout)や[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)などのレイアウトシステムにおいて、一度に指定することができます。

{{EmbedInteractiveExample("pages/css/place-content.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`align-content`](/ja/docs/Web/CSS/align-content)
- [`justify-content`](/ja/docs/Web/CSS/justify-content)

## 構文

```css
/* 位置による配置 */
/* align-content は left および right の値を取りません */
place-content: center start;
place-content: start center;
place-content: end left;
place-content: flex-start center;
place-content: flex-end center;

/* ベースラインによる配置 */
/* justify-content は baseline の値を取りません */
place-content: baseline center;
place-content: first baseline space-evenly;
place-content: last baseline right;

/* 均等配置 */
place-content: space-between space-evenly;
place-content: space-around space-evenly;
place-content: space-evenly stretch;
place-content: stretch space-evenly;

/* グローバル値 */
place-content: inherit;
place-content: initial;
place-content: revert;
place-content: unset;
```

最初の値は {{CSSxRef("align-content")}} プロパティの値で、2 番目の値は {{CSSxRef("justify-content")}} の値です。

> **メモ:** 2 番目の値がない場合、最初の値に両方に有効な値が設定されていれば、両方に使用されます。どちらかに無効な値であれば、値自体が無効になります。

### 値

- `start`
  - : 各アイテムは、適切な軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。
- `end`
  - : 各アイテムは、適切な軸方向で配置コンテナーの末尾側の端に向けて互いに寄せて配置されます。
- `flex-start`
  - : 各アイテムは、フレックスコンテナーに依存して、主軸または交差軸の先頭側である配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `start` のように扱われます。
- `flex-end`
  - : 各アイテムは、フレックスコンテナーに依存して、主軸または交差軸の末尾側である配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `end` のように扱われます。
- `center`
  - : 各アイテムは、配置コンテナーの中央に向けて互いに寄せて配置されます。
- `left`
  - : 各アイテムは、適切な軸方向で配置コンテナーの左側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は `start` のように動作します。
- `right`
  - : 各アイテムは、適切な軸方向で配置コンテナーの右側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は `start` のように動作します。
- `space-between`
  - : 各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムは主軸の先頭側に寄せられ、最後のアイテムは主軸の末尾側に寄せられます。
- `baseline`, `first baseline`, `last baseline`
  - : first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `first baseline` の代替配置は `start`、`last baseline` の代替配置は `end` です。
- `space-around`
  - : 各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムの前と最後のアイテムの後の余白は、隣接するアイテム同士の間隔の半分の幅になります。
- `space-evenly`
  - : 各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔、最初のアイテムの前の余白、最後のアイテムの後の余白は、まったく同じ幅になります。
- `stretch`
  - : 各アイテムの寸法の合計が配置コンテナーの寸法よりも小さい場合、寸法が `auto` のアイテムは、 {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (または同等の機能) での制約を尊重しつつ、 (比例的にではなく) 均等に引き伸ばされ、寸法の合計が配置コンテナーを満たすようになります。

## 公式定義

{{cssinfo}}

## 関連情報

{{csssyntax}}

## 例

<h3 id="Placing_content_in_a_flex_container">フレックスコンテナー内の内容物の配置</h3>

#### HTML

```html
<div id="container">
  <div class="small">Lorem</div>
  <div class="small">Lorem<br />ipsum</div>
  <div class="large">Lorem</div>
  <div class="large">Lorem<br />ipsum</div>
  <div class="large"></div>
  <div class="large"></div>
</div>
```

```html hidden
<code>writing-mode:</code
><select id="writingMode">
  <option value="horizontal-tb" selected>horizontal-tb</option>
  <option value="vertical-rl">vertical-rl</option>
  <option value="vertical-lr">vertical-lr</option>
  <option value="sideways-rl">sideways-rl</option>
  <option value="sideways-lr">sideways-lr</option></select
><code>;</code><br />
<code>direction:</code
><select id="direction">
  <option value="ltr" selected>ltr</option>
  <option value="rtl">rtl</option></select
><code>;</code><br />
<code>place-content:</code
><select id="alignContentAlignment">
  <option value="normal">normal</option>
  <option value="first baseline">first baseline</option>
  <option value="last baseline">last baseline</option>
  <option value="baseline">baseline</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly" selected>space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center">center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="safe">safe</option>
  <option value="unsafe">unsafe</option>
</select>
<select id="justifyContentAlignment">
  <option value="normal">normal</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center" selected>center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="safe">safe</option>
  <option value="unsafe">unsafe</option></select
><code>;</code>
```

```js hidden
var update = function () {
  document.getElementById("container").style.placeContent =
    document.getElementById("alignContentAlignment").value +
    " " +
    document.getElementById("justifyContentAlignment").value;
};

var alignContentAlignment = document.getElementById("alignContentAlignment");
alignContentAlignment.addEventListener("change", update);

var justifyContentAlignment = document.getElementById(
  "justifyContentAlignment",
);
justifyContentAlignment.addEventListener("change", update);

var writingM = document.getElementById("writingMode");
writingM.addEventListener("change", function (evt) {
  document.getElementById("container").style.writingMode = evt.target.value;
});
var direction = document.getElementById("direction");
direction.addEventListener("change", function (evt) {
  document.getElementById("container").style.direction = evt.target.value;
});
```

#### CSS

```css
#container {
  display: flex;
  height: 240px;
  width: 240px;
  flex-wrap: wrap;
  background-color: #8c8c8c;
  writing-mode: horizontal-tb; /* Can be changed in the live sample */
  direction: ltr; /* Can be changed in the live sample */
  place-content: flex-end center; /* Can be changed in the live sample */
}

div > div {
  border: 2px solid #8c8c8c;
  width: 50px;
  background-color: #a0c8ff;
}

.small {
  font-size: 12px;
  height: 40px;
}

.large {
  font-size: 14px;
  height: 50px;
}
```

#### 結果

{{EmbedLiveSample("Placing_content_in_a_flex_container", "370", "300")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS フレックスボックスガイド: _[フレックスコンテナー内でのアイテムの配置](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS グリッドガイド: _[CSS グリッドレイアウト内でのボックス配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)
- {{CSSxRef("align-content")}} プロパティ
- {{CSSxRef("justify-content")}} プロパティ
