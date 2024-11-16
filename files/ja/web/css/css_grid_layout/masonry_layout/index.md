---
title: メイソンリーレイアウト
slug: Web/CSS/CSS_grid_layout/Masonry_layout
l10n:
  sourceCommit: 57e2ca7a291bd2e90cb208b1bf8b2cd3ae2a8a81
---

{{CSSRef}} {{SeeCompatTable}}

[CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)仕様書の Level 3 では、 `masonry` の値が {{cssxref("grid-template-columns")}} と {{cssxref("grid-template-rows")}} に含まれています。このガイドでは、メイソンリー（組積）レイアウトとは何か、どのように使用するかについて詳しく説明します。

メイソンリーレイアウトとは、一方の軸（多くの場合は列）が一般的な厳格なグリッドレイアウトを使用し、もう一方の軸がメイソンリーレイアウトを使用するレイアウト方法です。メイソンリーレイアウトでは、短いアイテムの後に隙間ができるような厳密なグリッドではなく、次の行のアイテムが隙間を完全に埋めるように立ち上がっていきます。

## メイソンリーレイアウトの作成

最も一般的なメイソンリーレイアウトを作成するには、列がグリッドの軸、行が組積の軸になります。このレイアウトは `grid-template-columns` と `grid-template-rows` で定義します。

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
```

このコンテナーの子要素は、通常のグリッドレイアウトの自動配置と同じように、アイテムごとに行に沿って配置されます。しかし、新しい行に移動すると、アイテムは組積アルゴリズムに従って表示されます。アイテムは最も余裕のある列に配置されるため、厳密な行のトラックがなくてもぎっしりとしたレイアウトになります。

{{EmbedGHLiveSample("css-examples/grid/masonry/block-axis.html", '100%', 800)}}

また、アイテムを列にして読み込むメイソンリーレイアウトも可能です。

{{EmbedGHLiveSample("css-examples/grid/masonry/inline-axis.html", '100%', 1000)}}

## グリッド軸の制御

グリッド軸では、グリッドレイアウトで期待した通りに動作します。キーワード `span` を使えば、自動配置を維持したまま、アイテムを複数のトラックにまたがって配置することができます。また、線ベースの位置指定を使ってアイテムを配置することもできます。

### アイテムをまたがらせるメイソンリーレイアウト

この例では、 2 つのアイテムが 2 本のトラックにまたがり、組積アイテムがそれを取り囲むように配置されています。

{{EmbedGHLiveSample("css-examples/grid/masonry/spanners.html", '100%', 800)}}

この例では、柱の位置が決まっているアイテムが含まれています。配置が確定しているアイテムは、メイソンリーレイアウトが行われる前に配置されます。

{{EmbedGHLiveSample("css-examples/grid/masonry/positioned.html", '100%', 1000)}}

## 組積軸の制御

組積軸は、通常のグリッドの自動配置ルールではなく、組積のレイアウトルールに従っているため、異なるルールで動作します。この軸を制御するために、グリッド Level 3 仕様で定義されている 3 つの追加プロパティ {{cssxref("align-tracks")}}、{{cssxref("justify-tracks")}}、{{cssxref("masonry-auto-flow")}} があります。

### masonry-auto-flow

`masonry-auto-flow` プロパティでは、組積アルゴリズムの動作を変更することができます。`next` という値を与えると、アイテムは空きスペースのあるトラックに入るのではなく、グリッド軸上に順番に表示されます。また、`positioned` という値を与えると、配置が確定しているアイテムを無視して、order で変更した文書順でアイテムを配置します。

{{EmbedGHLiveSample("css-examples/grid/masonry/masonry-auto-flow.html", '100%', 1000)}}

### align-tracks

`align-tracks` プロパティは、グリッドコンテナー内のアイテムをブロック軸の組積で整列させることができます。このプロパティは、フレックスレイアウトの動作と同じように、トラック内のアイテムを整列させます。このプロパティは `align-content` と同じ値を取りますが、複数の値を指定して、グリッド軸のトラックごとに異なる整列値を設定することができます。

トラックよりも多くの値を指定すると、追加の値は無視されます。値よりもトラックの数が多い場合、追加のトラックは最後に指定した値を使用します。

{{EmbedGHLiveSample("css-examples/grid/masonry/align-tracks.html", '100%', 1000)}}

### justify-tracks

`justify-tracks` プロパティは、 align-tracks と同じように動作しますが、組積の軸がインライン軸の場合に使用されます。

{{EmbedGHLiveSample("css-examples/grid/masonry/justify-tracks.html", '100%', 1000)}}

## 代替

[組積に対応していない](#ブラウザーの互換性)ブラウザーでは、代わりに通常のグリッドの自動配置が使用されます。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Native CSS Masonry Layout In CSS Grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)
