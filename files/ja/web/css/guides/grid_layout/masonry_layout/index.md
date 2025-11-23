---
title: メイソンリーレイアウト
slug: Web/CSS/Guides/Grid_layout/Masonry_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

[CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)仕様書のレベル 3 では、 `masonry` の値が {{cssxref("grid-template-columns")}} と {{cssxref("grid-template-rows")}} に含まれています。このガイドでは、メイソンリー（組積）レイアウトとは何か、どのように使用するかについて詳しく説明します。

メイソンリーレイアウトとは、一方の軸（多くの場合は列）が一般的な厳格なグリッドレイアウトを使用し、もう一方の軸がメイソンリーレイアウトを使用するレイアウト方法です。メイソンリーレイアウトでは、短いアイテムの後に隙間ができるような厳密なグリッドではなく、次の行のアイテムが隙間を完全に埋めるように立ち上がっていきます。

## メイソンリーレイアウトの作成

最も一般的なメイソンリーレイアウトを作成するには、列がグリッドの軸、行がメイソンリーの軸になり、 `grid-template-columns` と `grid-template-rows` で定義します。
これで、このコンテナー内の子要素は、通常のグリッドレイアウトの自動配置と同様に、行に沿ってアイテムごとにレイアウトされます。

アイテムが行の新しい段に移されると、メイソンリー・アルゴリズムに従って表示されます。アイテムは最もスペースのある列に読み込まれ、厳密な行のトラックなしで、ぎっしりと詰まったレイアウトになります。

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
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
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

アイテムを列に読み込む対応するレイアウトを作成することも可能です。

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
  display: grid;
  gap: 10px;
  grid-template-columns: masonry;
  grid-template-rows: repeat(3, 100px);
}
```

{{EmbedLiveSample("inline-axis", "", "450px")}}

## グリッド軸の制御

グリッド軸では、グリッドレイアウトで期待した通りに動作します。キーワード `span` を使えば、自動配置を維持したまま、アイテムを複数のトラックにまたがって配置することができます。また、線ベースの位置指定を使ってアイテムを配置することもできます。

### アイテムをまたがらせるメイソンリーレイアウト

この例では、 2 つのアイテムが 2 本のトラックにまたがり、組積アイテムがそれを取り囲むように配置されています。

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
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}

.span-2 {
  grid-column-end: span 2;
}
```

{{EmbedLiveSample("spanners", "", "270px")}}

この例では、列の位置が決まっているアイテムが含まれています。配置が確定しているアイテムは、メイソンリーレイアウトが行われる前に配置されます。

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
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}

.positioned {
  padding: 1em;
  grid-column: 2 / 4;
}
```

{{EmbedLiveSample("positioned", "", "290px")}}

## メイソンリーレイアウトの代替

[組積に対応していない](#ブラウザーの互換性)ブラウザーでは、代わりに通常のグリッドの自動配置が使用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("grid-auto-flow")}}: グリッドの自動配置の制御
- [Native CSS masonry layout in CSS grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)
