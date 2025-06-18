---
title: メイソンリーレイアウト
slug: Web/CSS/CSS_grid_layout/Masonry_layout
l10n:
  sourceCommit: c6e02b5aa7c12f9e64f80a62f75ede8f5cb5ec21
---

{{CSSRef}} {{SeeCompatTable}}

[CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)仕様書のレベル 3 では、 `masonry` の値が {{cssxref("grid-template-columns")}} と {{cssxref("grid-template-rows")}} に含まれています。このガイドでは、メイソンリー（組積）レイアウトとは何か、どのように使用するかについて詳しく説明します。

メイソンリーレイアウトとは、一方の軸（多くの場合は列）が一般的な厳格なグリッドレイアウトを使用し、もう一方の軸がメイソンリーレイアウトを使用するレイアウト方法です。メイソンリーレイアウトでは、短いアイテムの後に隙間ができるような厳密なグリッドではなく、次の行のアイテムが隙間を完全に埋めるように立ち上がっていきます。

## メイソンリーレイアウトの作成

最も一般的なメイソンリーレイアウトを作成するには、列がグリッドの軸、行がメイソンリーの軸になり、 `grid-template-columns` と `grid-template-rows` で定義します。
これで、このコンテナー内の子要素は、通常のグリッドレイアウトの自動配置と同様に、行に沿ってアイテムごとにレイアウトされます。

アイテムが行の新しい段に移されると、メイソンリー・アルゴリズムに従って表示されます。アイテムは最もスペースのある列に読み込まれ、厳密な行のトラックなしで、ぎっしりと詰まったレイアウトになります。

```css hidden live-sample___block-axis
* {
  box-sizing: border-box;
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

```html live-sample___block-axis
<div class="grid">
  <div class="item" style="block-size: 2em;"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 1.6em;"></div>
  <div class="item" style="block-size: 4em;"></div>
  <div class="item" style="block-size: 2.2em;"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 4.5em;"></div>
  <div class="item" style="block-size: 1em;"></div>
  <div class="item" style="block-size: 3.5em;"></div>
  <div class="item" style="block-size: 2.8em;"></div>
</div>
```

{{EmbedLiveSample("block-axis", "", "250px")}}

また、アイテムを列にして読み込むメイソンリーレイアウトも可能です。

```html hidden live-sample___inline-axis
<div class="grid">
  <div class="item" style="inline-size: 2em;"></div>
  <div class="item" style="inline-size: 3em;"></div>
  <div class="item" style="inline-size: 1.6em;"></div>
  <div class="item" style="inline-size: 4em;"></div>
  <div class="item" style="inline-size: 2.2em;"></div>
  <div class="item" style="inline-size: 3em;"></div>
  <div class="item" style="inline-size: 4.5em;"></div>
  <div class="item" style="inline-size: 1em;"></div>
  <div class="item" style="inline-size: 3.5em;"></div>
  <div class="item" style="inline-size: 2.8em;"></div>
</div>
```

```css hidden live-sample___inline-axis
* {
  box-sizing: border-box;
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

```css live-sample___inline-axis
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: masonry;
  grid-template-rows: repeat(3, 100px);
}
```

{{EmbedLiveSample("inline-axis", "", "350px")}}

## グリッド軸の制御

グリッド軸では、グリッドレイアウトで期待した通りに動作します。キーワード `span` を使えば、自動配置を維持したまま、アイテムを複数のトラックにまたがって配置することができます。また、線ベースの位置指定を使ってアイテムを配置することもできます。

### アイテムをまたがらせるメイソンリーレイアウト

この例では、 2 つのアイテムが 2 本のトラックにまたがり、組積アイテムがそれを取り囲むように配置されています。

```html live-sample___spanners
<div class="grid">
  <div class="item" style="block-size: 2em;"></div>
  <div class="item" style="block-size: 3em; grid-column-end: span 2;"></div>
  <div class="item" style="block-size: 1.6em;"></div>
  <div class="item" style="block-size: 4em;"></div>
  <div class="item" style="block-size: 2.2em; grid-column-end: span 2"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 4.5em;"></div>
  <div class="item" style="block-size: 1em;"></div>
  <div class="item" style="block-size: 3.5em;"></div>
  <div class="item" style="block-size: 2.8em;"></div>
</div>
```

```css hidden live-sample___spanners
* {
  box-sizing: border-box;
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

```css live-sample___spanners
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
```

{{EmbedLiveSample("spanners", "", "220px")}}

この例では、柱の位置が決まっているアイテムが含まれています。配置が確定しているアイテムは、メイソンリーレイアウトが行われる前に配置されます。

```html-nolint live-sample___positioned
<div class="grid">
  <div class="item" style="block-size: 2em;"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 1.6em;"></div>
  <div class="item" style="block-size: 4em;"></div>
  <div class="item positioned" style="block-size: 3.2em;">位置指定されています。</div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 4.5em;"></div>
  <div class="item" style="block-size: 1em;"></div>
  <div class="item" style="block-size: 3.5em;"></div>
  <div class="item" style="block-size: 2.8em;"></div>
</div>
```

```css hidden live-sample___positioned
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

{{EmbedLiveSample("positioned", "", "260px")}}

## メイソンリーレイアウトの代替

[組積に対応していない](#ブラウザーの互換性)ブラウザーでは、代わりに通常のグリッドの自動配置が使用されます。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("grid-auto-flow")}}: グリッドの自動配置の制御
- [Native CSS masonry layout in CSS grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)
