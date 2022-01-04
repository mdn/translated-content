---
title: パンくずナビゲーション
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
tags:
  - CSS
  - ガイド
  - レイアウト
  - ナビゲーション
  - 料理帳
  - フレックスボックス
translation_of: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
---
{{CSSRef}}

パンくず (Breadcrumb) ナビゲーションは、来た道をたどって開始ページまで戻ることができるパンくずリストを提供することによって、ユーザーがウェブサイト内の自分の位置を理解するのに役立ちます。

![リンクを区切り文字を付けてインラインで表示](breadcrumb-navigation.png)

## 要件

項目は通常、個々のページ間の階層を示すために、区切り文字を付けてインラインで表示されます。

## レシピ

{{EmbedGHLiveSample("css-examples/css-cookbook/breadcrumb-navigation.html", '100%', 530)}}

> **Callout:**
>
> [この例をダウンロードする](https://github.com/mdn/css-examples/blob/master/css-cookbook/breadcrumb-navigation--download.html)

> **Note:** 上記の例では 2 つのセレクターを使用して、最初の物を除いてそれぞれの `li` の前にコンテンツを挿入しています。これは次のようにすると、 1 つのセレクターのみで実現することもできます。
>
>     .breadcrumb li:not(:first-child)::before {
>       content: "→";
>     }
>
> この解決策ではより複雑なセレクターを使用しますが、必要とするルールは少なくなります。好きな方の解決策を使用してください。

## 行った選択

このパターンは単純なフレックスレイアウトを使用してレイアウトされており、CSS の 1 行でナビゲーションがどのように行われるかを示しています。 区切り文字は CSS 生成コンテンツを使用して追加されます。 区切り文字は好きなものに変更することができます。

## アクセシビリティの考慮

[`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性および [`aria-current`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) 属性を使用して、このナビゲーションが何であるか、そして現在のページが構造のどこにあるのかをユーザーが理解できるようにしています。 詳細については関連リンクを参照してください。

## ブラウザーの互換性

レイアウト方法によってブラウザーの対応状況が異なります。使用しているプロパティの基本的な対応の詳細については、以下の表を参照してください。

### フレックスボックス

{{Compat("css.properties.flex")}}

## 関連情報

- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [パンくずリストの提供](https://www.w3.org/TR/WCAG20-TECHS/G65.html)（英語）
- [aria-current 属性の使用](https://tink.uk/using-the-aria-current-attribute/)（英語）
