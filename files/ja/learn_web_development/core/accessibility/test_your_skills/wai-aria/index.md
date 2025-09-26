---
title: "スキルテスト: WAI-ARIA"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
original_slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、あなたが[WAI-ARIA の基本](/ja/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)の記事を理解したかどうかを評価することです。

> [!NOTE]
> このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターで解決策を試すことができます。
>
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## WAI-ARIA 1

最初の ARIA の課題では、明らかにリストであることを意味している、意味づけされていないマークアップの節を表示します。使用する要素を変更することができないと想定して、スクリーンリーダーのユーザーにこれをリストとして認識させるにはどうすればよいでしょうか。

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria1.html", '100%', 700)}}

> [!CALLOUT]
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria1-download.html)しましょう。

## WAI-ARIA 2

2 つ目の WAI-ARIA の課題では、単純な検索形式を表示していますが、アクセシビリティを改善するためにいくつかの WAI-ARIA の機能を追加してください。

1. 検索フォームをスクリーンリーダーによってページに別個のランドマークとして呼び出されるようにし、簡単に見つけられるようにするにはどうすればよいでしょうか。
2. DOM に目に見えるテキストラベルを明示的に追加することなく、検索入力に適切なラベルを付けるにはどうすればよいでしょうか。

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria2.html", '100%', 700)}}

> [!CALLOUT]
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria2-download.html)しましょう。

## WAI-ARIA 3

最後の WAI-ARIA の課題では、前回の [CSS と JavaScript のスキルテスト](/ja/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript)で見た例を返します。前回と同様に、動物の名前のリストを表示する単純なアプリがあります。動物の名前を 1 つクリックすると、その動物の詳細な説明がリスト以下のボックスに現れます。ここでは、マウスとキーボードでアクセスできるバージョンから始めています。

ここでの問題は、 DOM が新しい説明を表示させるために変更されたとき、スクリーンリーダーは何が変更されたのかわからないということです。説明の変更がスクリーンリーダーによってアナウンスされるように更新することはできますか。

> [!CALLOUT]
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/aria/aria-js1-download.html)しましょう。
