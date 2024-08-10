---
title: パンくずナビゲーション
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
l10n:
  sourceCommit: 14924a9cc3dddbce37565d152cbb30134d314308
---

{{CSSRef}}

パンくず (Breadcrumb) ナビゲーションは、来た道をたどって開始ページまで戻ることができる{{glossary("breadcrumb", "パンくずリスト")}}を提供することによって、ユーザーがウェブサイト内の自分の位置を理解するのに役立ちます。

![リンクを区切り文字を付けてインラインで表示](breadcrumb-navigation.png)

## 要件

インラインリンクを表示することにより、サイトの階層を表示します。項目の間には区切り文字があり、個々のページ間の階層を示し、現在のページが最後に表示されます。

## レシピ

{{EmbedGHLiveSample("css-examples/css-cookbook/breadcrumb-navigation.html", '100%', 530)}}

> [!CALLOUT]
>
> [この例をダウンロードする](https://github.com/mdn/css-examples/blob/main/css-cookbook/breadcrumb-navigation--download.html)

> [!NOTE]
> 上の例では、複合セレクターを使用して、最後以外のすべての `li` の前にコンテンツを挿入しています。これは、最初の要素を除くすべての `li` 要素を対象とする複合セレクターを使用しても実現できます。
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> 好きな方の解決策を使用してください。

## 行った選択

このパターンは単純なフレックスレイアウトを使用してレイアウトされており、CSS の 1 行でナビゲーションがどのように行われるかを示しています。 区切り文字は CSS 生成コンテンツを使用して追加されます。 区切り文字は好きなものに変更することができます。

## アクセシビリティの考慮

[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性および [`aria-current`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-current) 属性を使用して、このナビゲーションが何であるか、そして現在のページが構造のどこにあるのかを支援技術のユーザーが理解できるようにしてください。 詳細については関連リンクを参照してください。

`content` で追加した矢印 `→` は、スクリーンリーダーや点字ディスプレイにも公開されるので注意してください。

## 関連情報

- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)
- [パンくずリストの提供](https://www.w3.org/TR/WCAG20-TECHS/G65.html)（英語）
- [`aria-current` 属性の使用](https://tink.uk/using-the-aria-current-attribute/)（英語）
