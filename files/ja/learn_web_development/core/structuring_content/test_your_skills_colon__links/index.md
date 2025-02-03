---
title: "スキルテスト: リンク"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills:_Links
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、あなたが [HTML でのハイパーリンクの実装](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links)を行う方法を理解しているかどうかを評価することです。

> [!NOTE]
> 以下の対話型エディターで解決に挑戦することができます。ただし、コードをダウンロードし、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインツールを使用して作業することが便利な場合もあります。
>
> もし行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかから私たちに連絡することができます。

## 課題 1

このタスクでは、クジラの情報ページのリンクを埋めるのを手伝っていただきます。

- 最初のリンクは、現在のページと同じディレクトリーにある `whales.html` というページにリンクされるようにします。
- また、マウスオーバーしたときに、このページにはシロナガスクジラやマッコウクジラの情報が含まれていることをユーザーに指示するツールチップを付けましょう。
- 2 つ目のリンクは、ユーザーの既定のメールアプリケーションで、受信者を "whales\@example.com" に設定してメールを開くためのリンクに変更しましょう。
- メールの件名が「クジラについての質問」と自動的に記入されるように設定すると、ボーナスポイントも得られます。

> [!NOTE]
> この例の 2 つのリンクには `target="_blank"` 属性が設定されています。これは厳密には最善の手法ではありませんが、ここではリンクが埋め込まれた `<iframe>` で開かないようにし、その過程で例のコードを削除するようにしています。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/links/links1.html", '100%', 700)}}

> [!CALLOUT]
>
> 自分のエディターやオンラインエディターで作業する場合は、[この課題の開始時点のものをダウンロード](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links1-download.html)しましょう。

## 課題 2

この課題では、4 つのリンクが適切な場所にリンクするように記入していただきます。

- 最初のリンクは、カレントディレクトリーの中の `blue` というディレクトリーにある `blue-whale.jpg` という画像にリンクするようにしましょう。
- 2 つ目のリンクは、カレントディレクトリーの 1 つ上のディレクトリーである `narwhal` というディレクトリーにある `narwhal.jpg` という画像にリンクするようにしましょう。
- 3 つ目のリンクは、UK の Google 画像検索にリンクしてください。ベース URL は `https://www.google.co.uk` で、画像検索は `imghp` というサブディレクトリーに配置されています。
- 4 つ目のリンクは、現在のページの一番下にある段落にリンクしましょう。これは `bottom` という ID が付いています。

> [!NOTE]
> この例で最初の 3 つのリンクには `target="_blank"` 属性が設定されています。これは厳密には最善の手法ではありませんが、ここではリンクが埋め込まれた `<iframe>` で開かないようにし、その過程で例のコードを削除するようにしています。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/links/links2.html", '100%', 800)}}

> [!CALLOUT]
>
> 自分のエディターやオンラインエディターで作業する場合は、[この課題の開始時点のものをダウンロード](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links2-download.html)しましょう。

## 課題 3

以下のリンクは、一角獣に関する情報ページ、対応するメールアドレス、および 4MB の PDF ファクトファイルへのリンクです。この課題では、次のことを行ってください。

- リンクテキストの書き方が悪い既存の段落を選び、良いリンクテキストがあるように書き直しましょう。
- 警告を追加する必要があるリンクには、警告を追加しましょう。

> [!NOTE]
> この例における最初と 3 つ目のリンクには `target="_blank"` 属性が設定されています。これは厳密には最善の手法ではありませんが、ここではリンクが埋め込まれた `<iframe>` で開かないようにし、その過程で例のコードを削除するようにしています。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/links/links3.html", '100%', 700)}}

> [!CALLOUT]
>
> 自分のエディターやオンラインエディターで作業する場合は、[この課題の開始時点のものをダウンロード](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links3-download.html)しましょう。
