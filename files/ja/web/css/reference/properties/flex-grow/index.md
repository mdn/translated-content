---
title: flex-grow
slug: Web/CSS/Reference/Properties/flex-grow
original_slug: Web/CSS/flex-grow
l10n:
  sourceCommit: a9280d06d6e78ec8fc35d3a7a0f7f98d921370e0
---

**`flex-grow`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フレックスコンテナー内の[**正の余白**](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)のうち、フレックスアイテムの[主軸長](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox#フレックスモデル)に割り当てる量を指定するフレックス成長率を設定します。

フレックスコンテナーの主軸長が、そのフレックスアイテムの主軸長を結合した長さよりも長い場合、この正の余白はフレックスアイテム間で分配され、各フレックスアイテムが伸長する大きさは、コンテナーのすべてのアイテムのフレックス伸長係数の合計の割合で按分した値になります。

{{InteractiveExample("CSS デモ: flex-grow")}}

```css interactive-example-choice
flex-grow: 1;
```

```css interactive-example-choice
flex-grow: 2;
```

```css interactive-example-choice
flex-grow: 3;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">I grow</div>
  <div>Item Two</div>
  <div>Item Three</div>
</section>
```

```css interactive-example
.default-example {
  border: 1px solid #c5c5c5;
  width: auto;
  max-height: 300px;
  display: flex;
}

.default-example > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}
```

## 構文

```css
/* <number> 値 */
flex-grow: 3;
flex-grow: 0.6;

/* グローバル値 */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: revert-layer;
flex-grow: unset;
```

`flex-grow` プロパティは単一の `<number>` として指定します。

### 値

- `<number>`
  - : {{cssxref("&lt;number&gt;")}} をご覧ください。負の値は無効です。既定値は 0 あり、フレックスアイテムは伸長しません。

## 解説

このプロパティは、フレックスコンテナー内の残りの空間のうち、どれだけがそのアイテムに割り当てられるか (フレックス伸長係数) を設定します。

[主軸長](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox#フレックスモデル)は、 {{cssxref("flex-direction")}} の値によって、アイテムの幅または高さのどちらかになります。

残りの空間または「正の余白」とは、フレックスコンテナーの寸法からすべてのフレックスアイテムの寸法を引いたものです。すべての兄弟アイテムが同じフレックス伸長係数であった場合、すべてのアイテムには残りの空間が等しく割り当てられます。一般的には `flex-grow: 1` と設定しますが、すべてのフレックスアイテムのフレックス伸長率を `88`、`100`、`1.2` など、 `0` よりも大きな任意の値に設定しても、同じ結果が得られます。この値は比率です。

`flex-grow` の値が異なる場合は、正の余白は、それぞれのフレックス伸長係数で定義された比率に従って分配されます。 兄弟フレックスアイテムの `flex-grow` 値はすべて合計されます。フレックスコンテナー内の正の余白がある場合は、その合計で除算されます。 `flex-grow` の値が `0` より大きい各フレックスアイテムの主軸長は、この商に自身の伸長係数を掛けた値だけ伸長します。

例えば、 4 つの `100px` のフレックスアイテムが `700px` のコンテナー内にあり、それぞれのフレックスアイテムの伸長係数に `0`、`1`、`2`、`3` が設定されている場合、 4 つのアイテムの主軸長の合計は `400px` となり、 `300px` の正の余白が分配されることになります。 4 つの伸長係数の合計 (0 + 1 + 2 + 3 = 6) は 6 に等しくなります。したがって、伸長係数の単位は `50px` `(300px / 6 )` に等しくなります。それぞれのフレックスアイテムには、余白分の 50px に伸長係数 (`flex-grow`) を掛けたものが与えられます。つまり、それぞれ `0`、`50px`、`100px`、`150px` となります。フレックスアイテムのサイズ全体は、それぞれ `100px`、`150px`、`200px`、`250px` となります。

`flex-grow` は普通、他のフレックスプロパティである {{cssxref("flex-shrink")}} や {{cssxref("flex-basis")}} とともに、 {{cssxref("flex")}} 一括指定プロパティで使用されます。 `flex` 一括指定プロパティは、すべての値が設定されることが保証されるのでお勧めです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスアイテムの伸長係数の設定

この例では、 6 つのフレックスアイテムに合計 8 の伸長係数が配分されており、伸長係数 1 あたり余白の `12.5%` になります。

#### HTML

```html
<h1>これは <code>flex-grow</code> の例です</h1>
<p>
  A、B、C、F は <code>flex-grow: 1</code> が設定されています。 D と E は
  <code>flex-grow: 2</code> が設定されています。
</p>
<div id="content">
  <div class="small" style="background-color:red;">A</div>
  <div class="small" style="background-color:lightblue;">B</div>
  <div class="small" style="background-color:yellow;">C</div>
  <div class="double" style="background-color:brown;">D</div>
  <div class="double" style="background-color:lightgreen;">E</div>
  <div class="small" style="background-color:brown;">F</div>
</div>
```

#### CSS

```css
#content {
  display: flex;
}

div > div {
  border: 3px solid rgb(0 0 0 / 20%);
}

.small {
  flex-grow: 1;
}

.double {
  flex-grow: 2;
  border: 3px solid rgb(0 0 0 / 20%);
}
```

#### 結果

{{EmbedLiveSample('Setting flex item grow factor')}}

6 つのフレックスアイテムがコンテナーの主軸方向に配置されている場合、それらのフレックスアイテムの内容の主要部分の合計がコンテナーの主軸のサイズよりも小さいと、余分なスペースはサイズのフレックスアイテムに分配され、`A`、`B`、`C`、`F` はそれぞれ残りの空間の `12.5%`、 `D` と `E` はそれぞれ残りの空間の `25%` となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("flex")}} 一括指定プロパティ
- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [`flex-grow` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) (CSS-Tricks, 2017)
