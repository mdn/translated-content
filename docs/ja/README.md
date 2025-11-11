# MDN ドキュメントの日本語翻訳ガイド

これは、日本語（ja）のドキュメントのための翻訳ガイドです。

この翻訳ガイドを含めて、日本語向けの MDN ドキュメントは以下の方法でメンテナンスされています。日本語ドキュメントに対するご意見がありましたら、以下に示す方法でご質問や Pull Request をお願いいたします。

## MDN ドキュメントについて質問や意見を送る

MDN 日本語コミュニティでは、日本語専用の GitHub ページを用意しています。

- [日本語コミュニティ用 GitHub ページ](https://github.com/mozilla-japan/translation/issues)

MDN の日本語ドキュメントについて質問や意見を送りたい場合は、上記リポジトリーの Issue または Discussion をお気軽に作成ください。

何か困った際の連絡先については、後述の「[困ったときは](#困ったときは)」も併せてご参照ください。

## MDN ドキュメントの概要

MDN では、英語版を主言語としてドキュメント https://developer.mozilla.org/en-US/ が作成されています。

日本を含む各国では、英語版を翻訳することでローカライズ版のドキュメント https://developer.mozilla.org/ja/ を作成しています。

そのため、日本語版ドキュメントを執筆する際には、英語版に忠実である（内容が一致している）必要があります。もし、元の文書の内容がおかしいことに気づいたら、先に英語版を修正する必要があります。

ドキュメントは以下のリポジトリーで管理されています。

- 英語版リポジトリー - https://github.com/mdn/content
- ローカライズ版リポジトリー - https://github.com/mdn/translated-content

ローカライズ版は国ごとに管理しているわけではなく、全ての国のローカライズを一つの Git リポジトリーで管理しています。そのため、リポジトリー内の Issue や Pull Request には各国のやりとりが存在することに注意してください。ただし、日本語翻訳作業に際して作成する Issue や Pull Request は、基本的に日本語メンテナー向けのものとなるため英語ではなく日本語で記述しても構いません。

## MDN ドキュメントを編集する

- 日本語版ドキュメントに誤りを見つけた
- 日本語版ドキュメントと英語版ドキュメントの内容に差があるので英語版に追従したい
- 日本語化されていないページを見つけたので新規翻訳したい
- 英語版の内容がおかしいので英語版を修正したい

こんなときは、以下のいずれかの方法でドキュメントの編集に参加できます。

### 気軽にドキュメントを編集する

必要なもの：

- GitHub アカウント

GitHub アカウントさえあれば、GitHub が提供しているブラウザー上でのファイル編集機能を用いて、ドキュメントの編集を行うことができます。

- [MDN 月例ミートアップ - 翻訳ガイド：軽微な修正を行いたい場合](https://mozilla-japan.github.io/mdn-translation-guide/misc/for-minor-change.html)

この方法は MDN のページプレビューができないため、軽微な修正を行う場合にのみ適しています。

MDN のページプレビューを伴ったドキュメントの編集方法は、次章「[本格的にドキュメントを編集する](#本格的にドキュメントを編集する)」を参照してください。

### 本格的にドキュメントを編集する

必要なもの：

- GitHub アカウント
- [Node.js, Yarn の実行環境](https://mozilla-japan.github.io/mdn-translation-guide/translation/0_preparation.html)

英語版リポジトリーとローカライズ版リポジトリーを `git clone` することで、MDN のページプレビューを伴った編集作業が行えます。

詳細な手順については、「MDN 月例ミートアップ - 翻訳ガイド」をご参照ください。

- [MDN 月例ミートアップ - 翻訳ガイド：翻訳作業の流れ](https://mozilla-japan.github.io/mdn-translation-guide/translation/)

本格的にドキュメントを編集する方法では、初めて翻訳作業をされる方には不明点が生じる可能性があります。不明点や質問がある場合は、「[困ったときは](#困ったときは)」にある Slack で質問するか、「[日本語翻訳作業の定例会に参加する](#日本語翻訳作業の定例会に参加する)」ことをご検討ください。定例会ではチューター（アドバイザー）が作業手順の案内やトラブルシューティングの対応を行っています。

## 日本語翻訳作業の定例会に参加する

日本語コミュニティでは、「みんなで MDN を翻訳しよう！翻訳コミュニティ定例ミートアップ！」と題して、月 1 回、定例ミートアップを開催しています。

定例ミートアップでは、5 時間ほどの時間の中で、集まった人達で翻訳作業を行っています。

- [定例ミートアップ：イベント開催予定](https://mozilla.doorkeeper.jp/)
- [月例ミートアップについて](https://mozilla-japan.github.io/mdn-translation-guide/meetup/)
- [タイムスケジュール](https://mozilla-japan.github.io/mdn-translation-guide/meetup/time-schedule.html)

翻訳活動を本格的に行いたい場合は、その手順の案内やレビュアーとのやりとりが直接できるため、ぜひ一度参加してみてください。

定例ミートアップに参加したい場合は、まず Japanese Mozilla community group の Slack に参加し、#translation チャンネルへご参加ください。イベント当日のやりとりは #translation チャンネル上で行います。また、イベント開催予定から参加したい日程のイベントへ参加登録をしてください。なお、参加登録していなくても、当日の飛び入り参加は可能です。

- [Japanese Mozilla community group の Slack](https://mozilla-japan.github.io/mdn-translation-guide/meetup/community-slack.html)
- [定例ミートアップ：イベント開催予定](https://mozilla.doorkeeper.jp/)

そして、定例ミートアップ当日をお待ちください！何か不明点や質問があれば Slack の #translation チャンネルでお気軽にお聞きください。

## 困ったときは

日本語ドキュメントや翻訳作業に関して何か聞きたいことがある場合は、以下の方法でご連絡ください。

- [日本語コミュニティ用 GitHub ページの Issue または Discussion](https://github.com/mozilla-japan/translation/issues)
- [Japanese Mozilla community group の Slack](https://mozilla-japan.github.io/mdn-translation-guide/meetup/community-slack.html)

英語ドキュメントや英語版メンテナーに対して質問がある場合は、GitHub の MDN Web Docs Community ページの Discussion をご利用ください。

- [MDN Web Docs Community](https://github.com/mdn/mdn-community)
