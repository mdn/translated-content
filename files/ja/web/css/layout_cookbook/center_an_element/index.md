---
title: 要素を中央に配置
slug: Web/CSS/Layout_cookbook/Center_an_element
tags:
  - CSS
  - ガイド
  - レイアウト
  - レシピ
  - ボックス配置
  - センタリング
  - 料理帳
  - フレックスボックス
translation_of: Web/CSS/Layout_cookbook/Center_an_element
---
{{CSSRef}}

このレシピでは、あるボックスを別のボックスの中央に配置する方法がわかります。 フレックスボックスを使用する前は、水平方向と垂直方向の両方の中央に配置することは困難でしたが、ボックス配置プロパティを使用できるようになり簡単になりました。

![大きなボックスの中央に配置された要素](cookbook-center.png)

## 要件

アイテムを別のボックスの縦横の中央に配置する。

## レシピ

{{EmbedGHLiveSample("css-examples/css-cookbook/center.html", '100%', 720)}}

> **Callout:**
>
> [この例をダウンロード](https://github.com/mdn/css-examples/blob/master/css-cookbook/center--download.html)

## 行った選択

あるボックスを別のボックスの中央に配置するには、コンテナーをフレックスコンテナーにします。 次に、ブロック軸の中央に配置するために {{cssxref("align-items")}} を `center` に設定し、インライン軸の中央に配置するために {{cssxref("justify-content")}} を `center` に設定します。

ここで使用されているボックス配置プロパティは、ブロックレイアウトにも適用されるように指定されているため、将来的には親をフレックスコンテナーに変える必要なしに要素を中央に配置できるようになるかもしれません。ただし、今のところブロックレイアウトでのボックス配置プロパティの対応は制限されているため、現在は、フレックスボックスを使用して中央に配置するのが最も確実な方法です。

## ブラウザーの互換性

レイアウト方法によってブラウザーの対応状況が異なります。使用しているプロパティの基本的な対応の詳細については、以下の表を参照してください。

#### align-items

{{Compat("css.properties.align-items")}}

#### justify-content

{{Compat("css.properties.justify-content")}}

## MDN の関連資料

- [フレックスボックスでのボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
- [CSS ボックス配置のガイド](/ja/docs/Web/CSS/CSS_Box_Alignment)
