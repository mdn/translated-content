---
title: MDN コンテンツのバグ修正
slug: MDN/Community/MDN_content
original_slug: MDN/Contribute/Fixing_MDN_content_bugs
---

{{MDNSidebar}}

MDN の文書に関する問題は、[コンテンツリポジトリーの課題 (issue)](https://github.com/mdn/content/issues) として報告されます (また、以前の [sprints リポジトリー](https://github.com/mdn/sprints/issues)にも未解決の課題があります)。この記事では、あなたの専門知識と作業可能な時間に基づいて、作業するのに最適な問題を見つけ、それらを修正するための主な手順を概説します。

> **メモ:** コンテンツのバグはたくさんあります。修正するためにご協力いただけるのであれば、何でも助かります。

> **メモ:** **訳注:** この記事は原文 (英語) の記事の修正に関する案内です。そのため、下記のリンクは英語版の文書に対するリンクになっています。日本語訳の課題については [translated-content リポジトリー上の l10n-ja の課題](https://github.com/mdn/translated-content/labels/l10n-ja)や [mozilla-japan/translation リポジトリー上の課題](https://github.com/mozilla-japan/translation/issues)を参照してください。

## 協力が必要なこと

コンテンツのどの課題に取り組むべきかを選択するのに役立つよう、 GitHub のラベルを使って分類しました。

以下のラベルは、どれだけ時間があるかによってタスクを探すのに役立ちます。

| ラベル                                                                                                                                                                                                                                                                  | 説明                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [content リポジトリー上の 10 分のタスク](https://github.com/mdn/content/issues?q=is%3Aissue+is%3Aopen+label%3A%2210+minute+task%22) [sprints リポジトリー上の 10 分のタスク](https://github.com/mdn/sprints/issues?q=is%3Aissue+is%3Aopen+label%3A%2210+minute+task%22) | 本当に簡単なタスクで、おそらく 10 分以内で終わるものです。       |
| [content リポジトリー上の 30 分のタスク](https://github.com/mdn/content/issues?q=is%3Aissue+is%3Aopen+label%3A%2230+minute+task%22) [sprints リポジトリー上の 30 分のタスク](https://github.com/mdn/sprints/issues?q=is%3Aissue+is%3Aopen+label%3A%2230+minute+task%22) | 少し手間のかかる作業で、 30 分ほどかかるかもしれません。         |
| [content リポジトリー上の 1 時間のタスク](https://github.com/mdn/content/issues?q=is%3Aissue+is%3Aopen+label%3A%221+hour+task%22) [sprints リポジトリー上の 1 時間のタスク](https://github.com/mdn/sprints/issues?q=is%3Aissue+is%3Aopen+label%3A%221+hour+task%22)     | 長いタスクで、 1 時間、あるいは 2 時間ほどかかるかもしれません。 |
| [リポジトリー上の数時間のタスク](https://github.com/mdn/content/issues?q=is%3Aissue+is%3Aopen+label%3A%22multiple+hour+task%22) [リポジトリー上の数時間のタスク](https://github.com/mdn/sprints/issues?q=is%3Aissue+is%3Aopen+label%3A%22multiple+hour+task%22)         | とても奥の深い作業で、完了までに数時間かかりそうです。           |

技術のカテゴリー別にタスクを見たり選択したりしたい場合は、プロジェクトボードにまとめられた同じ課題から探すこともできます。

| プロジェクトボード                                                                                                                                                               | 説明                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [Learn docs MDN project board](https://github.com/mdn/sprints/projects/12)                                                                                                       | [Learn Web Development](/ja/docs/Learn) に関する課題。                     |
| [Content architecture MDN](https://github.com/mdn/sprints/projects/11) [project](https://github.com/mdn/sprints/projects/12) [board](https://github.com/mdn/sprints/projects/11) | 一般的なコンテンツ、ページの構成、その他の MDN 上の雑務に関する課題。      |
| [HTTP docs MDN](https://github.com/mdn/sprints/projects/10) [project](https://github.com/mdn/sprints/projects/12) [board](https://github.com/mdn/sprints/projects/10)            | [HTTP](/ja/docs/Web/HTTP) の文書に関する課題                               |
| [HTML docs MDN](https://github.com/mdn/sprints/projects/9) [project](https://github.com/mdn/sprints/projects/12) [board](https://github.com/mdn/sprints/projects/9)              | [HTML](/ja/docs/Web/HTML) の文書に関する課題                               |
| [DevTools docs MDN](https://github.com/mdn/sprints/projects/8) [project](https://github.com/mdn/sprints/projects/12) [board](https://github.com/mdn/sprints/projects/8)          | Firefox [DevTools](/ja/docs/Tools) の文書に関する課題                      |
| [WebExtensions docs MDN](https://github.com/mdn/sprints/projects/7) [project](https://github.com/mdn/sprints/projects/12) [board](https://github.com/mdn/sprints/projects/7)     | [WebExtensions](/ja/docs/Mozilla/Add-ons/WebExtensions) の文書に関する課題 |
| [CSS docs MDN](https://github.com/mdn/sprints/projects/6) [project](https://github.com/mdn/sprints/projects/12) [board](https://github.com/mdn/sprints/projects/6)               | [CSS](/ja/docs/Web/CSS/Reference) の文書に関する課題                       |
| [JavaScript docs MDN](https://github.com/mdn/sprints/projects/5) [project](https://github.com/mdn/sprints/projects/12) [board](https://github.com/mdn/sprints/projects/5)        | [JavaScript](/ja/docs/Web/JavaScript) の文書に関する課題                   |

## どんなメリットがあるのか

- MDN のコンテンツのバグを修正することは、ウェブ技術をより深く学ぶための素晴らしい方法です。問題を調査し、必要なコンテンツを作成することで、そのテーマに対する理解が深まり、自分のスキルが向上します。
- また、 MDN コミュニティに参加することで、 Mozilla のスタッフや他のコミュニティメンバーと知り合うことができ、自分が抱えている問題を助けてもらったり、自分の知名度を高めたりするための貴重なネットワークとなります。
- 問題の解決に協力することは、それだけで大きな報酬になりますが、オープンソースへの貢献の記録にもなり、自分のウェブ技術に関する専門知識を証明することになり、場合によっては進路や就職の際にも役立つでしょう。

## 必要なスキルは何か

- 手伝っていただくことにしたトピック領域 (JavaScript、CSS など) についての知識が必要です。
- 手伝っていただく例やページのほとんどは英語で書かれていますので、英語を適度に理解している必要があります。しかし、英語が完璧でなくても心配しないでください。私たちのチームは、どのように書いてもきれいに仕上げることが大好きです。

## 手伝う方法

1. 最初に、 [GitHub アカウント](https://github.com/join)をまだお持ちでなければサインアップしてください。 GitHub の課題でやり取りするのに必要です。
2. 次に、手伝いたいトピック領域を 1 つ以上選んでください。上記の一覧を使用して、より詳しい情報を得ると選択をするのに役立ちます。何を選べばよいのか分からない場合は、 [Matrix](https://wiki.mozilla.org/Matrix) の [MDN Web Docs チャットルーム](https://chat.mozilla.org/#/room/#mdn:mozilla.org)で聞いてみましょう。

### セットアップが完了したら

1. 興味のある課題を選んで、その課題に対するコメントを添えて、自分に割り当ててもらいましょう。
2. 作業中に分からないことがあったら、 [Matrix](https://wiki.mozilla.org/Matrix) の [MDN Web Docs チャットルーム](https://chat.mozilla.org/#/room/#mdn:mozilla.org)で気軽に相談してください。
3. 問題を修正したら、提出者にレビューを依頼してください。うまくいけば、さらに作業が必要だと思うかどうかを教えてくれるでしょう。必要に応じて私たちも関与します。
4. 課題が修正されたことが確認されたら、閉じることができます。課題を閉じることができる人は、元の課題の提出者か、 MDN のスタッフのどちらかです。

> **メモ:** 課題を選択して作業する際には、 [GitHub のベストプラクティス](/ja/docs/MDN/Contribute/GitHub_best_practices)や [MDN で始めよう](/ja/docs/MDN/Contribute/Getting_started)のガイドも参考になるでしょう。
