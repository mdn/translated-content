---
title: "スキルテスト: CSS と JavaScript のアクセシビリティ"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript
original_slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、あなたが [CSS と JavaScript のアクセシビリティのベストプラクティス](/ja/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript)の記事を理解したかどうかを評価することです。

> [!NOTE]
> このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターで解決策を試すことができます。
>
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## CSS アクセシビリティ 1

最初の課題では、リンクのリストが表示されています。しかし、そのアクセシビリティはかなり悪く、リンクであることを実に指示する方法も、ユーザーがどれに注目しているかを指示する方法もありません。

`a` セレクターを持つ既存のルールセットは CMS から提供されたもので、それを変更することはできないと想定してください。その代わりに、リンクがリンクのように見え、動作し、ユーザーがリストのどこにあるのかを指示できるように、新しいルールを作成する必要があります。

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y1.html", '100%', 700)}}

> [!CALLOUT]
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y1-download.html)しましょう。

## CSS アクセシビリティ 2

次の課題では、見出しと段落だけの単純なコンテンツが表示されています。テキストの色とサイズにアクセシビリティの課題があります。

1. 何が問題なのか、色とサイズの受け入れられる値を示すガイドラインは何なのかを説明してください。
2. 問題を修正する色とフォントサイズの新しい値を選択してください。
3. 問題を修正するために、これらの新しい値で CSS を更新します。
4. 問題が修正されたことを確認するためにコードをテストしてください。新しい値を選択し、コードをテストするために使用したツールや手法を説明してください。

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y2.html", '100%', 700)}}

> [!CALLOUT]
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y2-download.html)しましょう。

## JavaScript アクセシビリティ 1

最後の課題では、作業対象となる多少の JavaScript 処理があります。動物の名前のリストを表示している単純なアプリがあります。動物の名前の一つをクリックすると、その動物の詳細な説明がリストの下のボックスに現れます。

しかし、このアプリはとてもアクセシビリティが悪く、今の状態ではマウスでしか操作することができません。 HTML と JavaScript でキーボードからもアクセスできるように追加してほしいのです。

> [!CALLOUT]
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/js/js1-download.html)しましょう。
