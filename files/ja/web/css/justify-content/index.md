---
title: justify-content
slug: Web/CSS/justify-content
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`justify-content`** プロパティは、フレックスコンテナーの{{Glossary("main axis", "主軸")}}、グリッドおよび段組みコンテナーの[インライン軸](/ja/docs/Glossary/Logical_properties#inline_direction)に沿って、中身のアイテムの間や周囲に間隔を配置する方法を定義します。

下記のインタラクティブな例では、グリッドレイアウトを使用して `justify-content` の値を示しています。

{{EmbedInteractiveExample("pages/css/justify-content.html")}}

## 構文

```css
/* 位置による配置 */
justify-content: center;
justify-content: start;
justify-content: end;
justify-content: flex-start;
justify-content: flex-end;
justify-content: left;
justify-content: right;

/* 通常の配置 */
justify-content: normal;

/* 分配配置 */
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
justify-content: stretch;

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

## 解説

[CSS ボックス配置](/ja/docs/Web/CSS/CSS_box_alignment)モジュールで定義する `justify-content` は、段組みコンテナー、フレックスコンテナー、グリッドコンテナーに適用されます。このプロパティはブロックコンテナーには適用されず、効果もありません。

このプロパティは {{cssxref("align-content")}} プロパティと多くのキーワード値を共有 していますが、すべてではありません。 `justify-content` はベースラインの配置には関与しないため、ベースラインの値を取りません。

[フレックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)では、このプロパティは、主軸に沿った正の自由空間を、フレックスアイテムの間や周囲に、どのように配分するかを定義します。このプロパティは行内の要素間の空間に影響し、行間の空間には影響しません。配置は、長さと auto マージンが適用された後に行われます。ということは、行の中の 1 つ以上のフレックスアイテムの {{cssxref("flex-grow")}} 係数が `0` より大きい場合、その行の方向に分配する空間がないので、このプロパティは何の効果もありません。また、主軸に沿った引き伸ばしは {{cssxref("flex")}} によって制御されるため、 `stretch` 値は `flex-start` と同じように動作します。

[グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)の場合、このプロパティはグリッドアイテムではなく、グリッド列の間や周囲に利用できる空間を分配します。グリッドコンテナーがグリッドそのものよりも大きい場合、 `justify-content` プロパティを使用して、インライン軸に沿ってグリッドを揃え、グリッドの列を配置することができます。

グリッドのトラックサイズを `auto` である（かつトラックサイズが `auto` のみである）場合は、 `align-content` と `justify-content` プロパティによって引き伸ばすことができます。したがって既定では、トラックサイズが `auto` のものは残りの空間を占めます。グリッドのインラインサイズがグリッドコンテナーのインラインサイズより小さくなければ、配置する空間がないため、このプロパティはこの場合何の効果もありません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的なグリッドの例

この例には、グリッドコンテナーよりも狭いグリッドがあります。そして、利用できる空間をグリッドの列の周りや列の間に均等に配分するために `justify-content` を使用しています。

#### HTML

{{htmlelement("section")}} コンテナーには、グリッドアイテムとなる {{htmlelement("div")}} が 16 個入っています。

```html-nolint
<section class="container">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
  <div>G</div>
  <div>H</div>
  <div>I</div>
  <div>J</div>
  <div>K</div>
  <div>L</div>
  <div>M</div>
  <div>N</div>
  <div>O</div>
  <div>P</div>
</section>
```

#### CSS

```css hidden
.container {
  margin: 5px;
  border: 1px solid;
  box-sizing: border-box;
}

div {
  line-height: 2em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
}
```

コンテナーの幅を `500px` に設定し、幅 `80px` の 3 つの列を指定します。つまり、列と列の間や周囲に利用できる空間が `260px` あるということです。そして、 `justify-content: space-evenly` を設定します。これは、各列の前後の空間が `65px` になることを意味しています。

さまざまな幅（と背景色）を設定して、列にどのように配置されるかを示しています。

```css live-sample___Basic_grid_example
.container {
  display: grid;
  grid: auto-flow / repeat(3, 80px);
  width: 500px;
  justify-content: space-evenly;
}

div {
  background-color: pink;
  width: 80px;
}

div:nth-of-type(n + 9) {
  width: 35px;
  background-color: lightgreen;
}

div:nth-last-of-type(3) {
  width: 250px;
  background-color: lightblue;
}
```

#### 結果

{{EmbedLiveSample("Basic grid example", "100%", 220)}}

`justify-contents` は列を整列させ、アイテムやグリッド領域の配置には効果を持たないことに注意してください。グリッドアイテムは、グリッドセルがオーバーフローしても、列に影響を与えません。

### safe キーワード

この例では `safe` キーワードを示しています。 4 つの中央揃えフレックスアイテムを指定しますが、これらは折り返すことができず、結果として単一のフレックスコンテナーからあふれます。`justify-content` プロパティの `center` に `safe` を追加することで、あふれたコンテンツは配置モードが `start` であるかのように動作します。

```html-nolint hidden
<p><code>justify-content: center;</code></p>
<section class="container safe">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</section>
<p><code>justify-content: safe center;</code></p>
<section class="container safe-center">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</section>
<p><code>justify-content: safe center;</code> 3 アイテムの場合</p>
<section class="container safe-center">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</section>
```

```css hidden
.container {
  margin: 5px auto;
  border: 1px dashed;
  box-sizing: border-box;
  background-color: lightblue;
}

div {
  line-height: 1em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
  background-color: pink;
}
```

コンテナーを `center` に設定し、最初のコンテナー以外のコンテナーには `safe` キーワードを追加しています。

```css
.container {
  align-items: baseline;
  display: flex;
  width: 350px;
  height: 2em;
}

.safe {
  justify-content: center;
}

.safe-center {
  justify-content: safe center;
}

div {
  flex: 0 0 100px;
}
```

#### 結果

{{EmbedLiveSample("the safe keyword", "100%", 260)}}

アイテムが配置コンテナーからあふれると、 `safe` が含まれている場合、配置モードは `start` として動作し、 `center` は実装されません。アイテムがコンテナーをあふれない場合、 `safe` キーワードは効果がありません。

### フレックスアイテムの配分の視覚化

この例には複数行の折り返しフレックスレイアウトが含まれます。 2 つ目のフレックスアイテムは正のフレックス成長係数を持ち、最初のフレックス行の利用できる自由空間をすべて消費しています。

#### CSS

```css hidden
#container {
  margin: 5px auto;
  border: 1px dashed black;
  box-sizing: border-box;
}

div {
  line-height: 2em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
}
```

```css
#container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between; /* ライブサンプルで変更可能 */
  width: 510px;
}

div {
  line-height: 2em;
  flex: 0 0 120px;
  background-color: pink;
}

div:nth-of-type(2) {
  flex-grow: 1;
  background-color: yellow;
}

div:nth-of-type(n + 9) {
  flex: 0 0 35px;
  background-color: lightgreen;
}
div:last-of-type {
  flex: 0 0 300px;
  background-color: lightblue;
}
```

```html-nolint hidden
<section id="container">
  <div>A</div>
  <div>GROW</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
  <div>G</div>
  <div>H</div>
  <div>I</div>
  <div>J</div>
  <div>K</div>
  <div>L</div>
  <div>M</div>
  <div>N</div>
  <div>O</div>
  <div>P</div>
</section>
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

{{EmbedLiveSample("Visualizing_flex_item_distribution", "100%", 180)}}

ドロップダウンメニューからさまざまなキーワードを選択すると、さまざまな `justify-content` キーワード値が視覚化されます。最初の行には成長可能なアイテムがあるため、その行には `justify-content` プロパティが分配するために利用できる空間がありません。 `space-between` 値では、それぞれの行の最初のアイテムは主軸の先頭側に寄せられ、最後のアイテムは主軸の末尾側に寄せられます。その結果、フレックス行にアイテムが 1 つしかない場合、そのアイテムは（最終行に見られるように）主軸の先頭側に配置されます。その他の `space-*` の値、例えば `space-evenly` や `space-around` では、のような他のの値では、このようなことは起こりません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS フレックスボックスガイド: _[フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
- CSS グリッドガイド: _[グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)_
- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_box_alignment)
