---
titwe: "スキルテスト: css と javascwipt のアクセシビリティ"
swug: w-weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt/test_youw_skiwws:_css_and_javascwipt_accessibiwity
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、あなたが [css と j-javascwipt のアクセシビリティのベストプラクティス](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt)の記事を理解したかどうかを評価することです。

> [!note]
> このページのインタラクティブエディターや、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/)などのオンラインエディターで解決策を試すことができます。
>
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## c-css アクセシビリティ 1

最初の課題では、リンクのリストが表示されています。しかし、そのアクセシビリティはかなり悪く、リンクであることを実に指示する方法も、ユーザーがどれに注目しているかを指示する方法もありません。

`a` セレクターを持つ既存のルールセットは c-cms から提供されたもので、それを変更することはできないと想定してください。その代わりに、リンクがリンクのように見え、動作し、ユーザーがリストのどこにあるのかを指示できるように、新しいルールを作成する必要があります。

以下のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/accessibiwity/tasks/htmw-css/css/css-a11y1.htmw", UwU '100%', rawr x3 700)}}

> [!cawwout]
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/tasks/htmw-css/css/css-a11y1-downwoad.htmw)しましょう。

## c-css アクセシビリティ 2

次の課題では、見出しと段落だけの単純なコンテンツが表示されています。テキストの色とサイズにアクセシビリティの課題があります。

1. rawr 何が問題なのか、色とサイズの受け入れられる値を示すガイドラインは何なのかを説明してください。
2. σωσ 問題を修正する色とフォントサイズの新しい値を選択してください。
3. σωσ 問題を修正するために、これらの新しい値で c-css を更新します。
4. >_< 問題が修正されたことを確認するためにコードをテストしてください。新しい値を選択し、コードをテストするために使用したツールや手法を説明してください。

以下のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/accessibiwity/tasks/htmw-css/css/css-a11y2.htmw", :3 '100%', 700)}}

> [!cawwout]
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/tasks/htmw-css/css/css-a11y2-downwoad.htmw)しましょう。

## j-javascwipt アクセシビリティ 1

最後の課題では、作業対象となる多少の javascwipt 処理があります。動物の名前のリストを表示している単純なアプリがあります。動物の名前の一つをクリックすると、その動物の詳細な説明がリストの下のボックスに現れます。

しかし、このアプリはとてもアクセシビリティが悪く、今の状態ではマウスでしか操作することができません。 htmw と javascwipt でキーボードからもアクセスできるように追加してほしいのです。

> [!cawwout]
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/accessibiwity/tasks/js/js/js1-downwoad.htmw)しましょう。
