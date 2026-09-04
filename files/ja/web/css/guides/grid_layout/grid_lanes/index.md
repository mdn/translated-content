---
title: グリッドレーンレイアウト
slug: Web/CSS/Guides/Grid_layout/Grid_lanes
l10n:
  sourceCommit: b02c4fe0f8c485fa3fd0af10005310aaecef64ca
---

{{SeeCompatTable}}

[CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)仕様書のレベル 3 では、**グリッドレーンレイアウト**を定義し提案す。これは {{cssxref("display")}} の値に `grid-lanes` や `inline-grid-lanes` を指定することによりアクセスできます。このガイドでは、グリッドレーンレイアウトがどのように動作するか、どのように使用するかについて説明します。

グリッドレーンレイアウトとは、一方の軸（多くの場合は列）が一般的な厳格なグリッドレイアウトを使用し、もう一方の軸が積み重ねアルゴリズムを使用する方法です。積み重ね軸においては、短いアイテムの後に隙間を残すような厳格なグリッドにこだわるのとは異なり、次の行のアイテムがその隙間を埋めるように上に積み上がっていきます。

## グリッドレーンレイアウトの作成

最も一般的はグリッドレーンレイアウト（列がグリッド上に配置され、行がグリッドレーンレイアウトアルゴリズムを用いて詰め込まれるレイアウト）を作成するには、**`display: grid-lanes`** を {{cssxref("grid-template-columns")}} と組み合わせて使用します。

このコンテナーの子要素は、グリッドレーンレイアウトアルゴリズムに従って、積み重ね軸に沿ってアイテムごとに配置されます。それぞれのアイテムの各行は、最も余地の多い列に配置されるため、厳密な行トラックがない状態で、要素がぎっしりと詰め込まれたレイアウトになります。

```css hidden live-sample___block-axis live-sample___inline-axis live-sample___spanners live-sample___positioned
* {
  box-sizing: border-box;
}

body {
  font: 1.2em sans-serif;
}

.grid {
  padding: 10px;
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}
```

```css live-sample___block-axis
.grid {
  display: grid-lanes;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
```

```html live-sample___block-axis live-sample___inline-axis
<div class="grid">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```js live-sample___block-axis live-sample___spanners live-sample___positioned
// prettier-ignore
const itemSizes = [
  "2em", "3em", "1.6em", "4em", "3.2em",
  "3em", "4.5em", "1em", "3.5em", "2.8em",
];
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  items[i].style.blockSize = itemSizes[i];
}
```

{{EmbedLiveSample("block-axis", "", "250px")}}

同時に、アイテムが行ごとに読み込まれるグリッドレーンレイアウトを作成することもできます。

```js live-sample___inline-axis
// prettier-ignore
const itemSizes = [
  "2em", "3em", "1.6em", "4em", "2.2em",
  "3em", "4.5em", "1em", "3.5em", "2.8em",
];
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  items[i].style.inlineSize = itemSizes[i];
}
```

```css live-sample___inline-axis
.grid {
  display: grid-lanes;
  gap: 10px;
  grid-template-rows: repeat(3, 100px);
}
```

{{EmbedLiveSample("inline-axis", "", "450px")}}

## グリッド軸の制御

グリッド軸では、グリッドレイアウトで期待した通りに動作します。キーワード `span` を使えば、自動配置を維持したまま、アイテムを複数のトラックにまたがって配置することができます。また、線ベースの位置指定を使ってアイテムを配置することもできます。

### またがったアイテムのあるグリッドレーンレイアウト

この例では、2 つのアイテムが 2 つのトラックにまたがっており、残りのアイテムはグリッドレーンレイアウトアルゴリズムによってそれらの周囲に配置されます。

```html live-sample___spanners
<div class="grid">
  <div class="item"></div>
  <div class="item span-2"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item span-2"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css live-sample___spanners
.grid {
  display: grid-lanes;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

.span-2 {
  grid-column-end: span 2;
}
```

{{EmbedLiveSample("spanners", "", "270px")}}

この例では、列の位置が決まっているアイテムが含まれています。配置が確定しているアイテムは、グリッドレーンレイアウトのアルゴリズムが実行される前に配置されます。

```html-nolint live-sample___positioned
<div class="grid">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item positioned">位置指定されています。</div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css live-sample___positioned
.grid {
  display: grid-lanes;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

.positioned {
  padding: 1em;
  grid-column: 2 / 4;
}
```

{{EmbedLiveSample("positioned", "", "290px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("grid-auto-flow")}}: グリッドの自動配置の制御
