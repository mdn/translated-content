---
title: ナビゲーションの分割
slug: Web/CSS/Layout_cookbook/Split_Navigation
tags:
  - CSS
  - ガイド
  - レイアウト
  - ナビゲーション
  - 料理帳
  - フレックスボックス
translation_of: Web/CSS/Layout_cookbook/Split_Navigation
---
{{CSSRef}}

1 つ以上の要素が他のナビゲーション項目から分離されているナビゲーションのパターンです。

![2つのグループに分けられた項目。](split-navigation.png)

## 要件

よくあるナビゲーションのパターンとして、ある要素を他の要素から離すというものがあります。フレックスボックスを使用すると、項目を 2 つに分けて別々のフレックスコンテナーに入れることなく、これを実現することができます。

## レシピ

{{EmbedGHLiveSample("css-examples/css-cookbook/split-navigation.html", '100%', 520)}}

> **Callout:**
>
> [この例をダウンロード](https://github.com/mdn/css-examples/blob/master/css-cookbook/split-navigation--download.html)

## 行った選択

このパターンは、自動マージンとフレックスボックスを組み合わせて項目を分割します。

マージンを auto にすると、適用される方向に利用可能なすべての空間を吸収します。 これは、 auto マージンを使ってブロックを中央に配置するのと同じ方法です。ブロックの両側にすべての空間を取ろうとするので、ブロックが中央に押し込まれます。

この場合、 auto の左マージンは利用可能な空間をすべて占め、項目を右に押します。リスト内の任意の項目にクラス `push` を適用することができます。

## ブラウザーの互換性

レイアウト方法によってブラウザーの対応状況が異なります。使用しているプロパティの基本的な対応の詳細については、以下の表を参照してください。

### フレックスボックス

{{Compat("css.properties.flex")}}

## 関連情報

- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)
