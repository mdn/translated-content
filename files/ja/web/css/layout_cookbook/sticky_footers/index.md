---
title: 張りつくフッター
slug: Web/CSS/Layout_cookbook/Sticky_footers
tags:
  - CSS
  - ガイド
  - レイアウト
  - 料理帳
  - フレックスボックス
  - グリッド
  - 張りつくフッター
translation_of: Web/CSS/Layout_cookbook/Sticky_footers
---
{{CSSRef}}

張りつくフッターのパターンは、コンテンツがビューポートの高さより短い場合に、ページのフッターがビューポートの下部に「張りつく」パターンです。 このレシピでこれを作成するためのいくつかのテクニックを見ていきます。

![ボックスの底に押し込まれた張りつくフッター](https://mdn.mozillademos.org/files/16184/cookbook-footer.png)

## 要件

張りつくフッターのパターンは、次の要件を満たす必要があります。

- コンテンツが短い場合、フッターはビューポートの下部に張りつきます。
- ページのコンテンツがビューポートの下部を超えて広がっている場合、フッターは通常どおりコンテンツの下に配置されます。

## レシピ

{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer.html", '100%', 720)}}

> **Callout:**
>
> [この例をダウンロード](https://github.com/mdn/css-examples/blob/master/css-cookbook/sticky-footer--download.html)

> **Note:** この例と以下の例では、ライブ例がうまくいくように、 wrapper に `min-height: 100%` に設定して使用しています。 また、{{htmlelement("body")}} の {{cssxref("min-height")}} を `100vh` に設定し、それをグリッドコンテナーとして使用することで、ページ全体でこれを実現することもできます。

## 行った選択

上記の例では、CSS グリッドレイアウトを使用して張りつくフッターを実現しています。 `.wrapper` の最小の高さは `100%` です。 つまり、コンテナーの高さと同じ高さになります。 次に、レイアウトの各部分につき 1 行で、3 行 1 列のグリッドレイアウトを作成します。

グリッドの自動配置では、アイテムがソース順に配置されるため、ヘッダーは最初の自動サイズ調整トラックに入り、メインコンテンツは `1fr` トラックに、フッターは最後の自動サイズ調整トラックに入ります。`1fr` トラックは使用可能な空間をすべて占有するため、隙間を埋めるように大きくなります。

## 代替策

グリッドレイアウトに対応していないブラウザーとの互換性が必要な場合は、フレックスボックスを使用して張りつくフッターを作成することもできます。

{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer-flexbox.html", '100%', 720)}}

フレックスボックスの例は同じように始まりますが、`.wrapper` では `display: grid` ではなく `display: flex` を使用し、`flex-direction` を `column` に設定します。次に、メインコンテンツを `flex-grow: 1` に設定し、他の 2 つの要素を `flex-shrink: 0` に設定します。これにより、コンテンツがメイン領域いっぱいになったときに、それらが縮小されるのを防ぎます。

## ブラウザーの互換性

#### grid-template-rows

{{Compat("css.properties.grid-template-rows")}}

#### flex-direction

{{Compat("css.properties.flex-direction")}}

#### flex-grow

{{Compat("css.properties.flex-grow")}}

#### flex-shrink

{{Compat("css.properties.flex-shrink")}}

## MDN の関連資料

- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
