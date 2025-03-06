---
title: "スキルテスト: 条件文"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Conditionals
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、あなたが[コードでの意思決定 — 条件文](/ja/docs/Learn_web_development/Core/Scripting/Conditionals)を理解したかどうかを判定することです。

> [!NOTE]
> コードをダウンロードして、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに入力することで解答を試すことができます。
> エラーがある場合、ページの結果パネルまたはブラウザーの JavaScript コンソールでログ出力するので、助けになります。
>
> もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 条件文 1

この課題では、2 つの変数が提供されています。

- `season` — 現在の季節を示す文字列が格納されます。
- `response` — 初期化されていない状態で始まりますが、後に出力パネルに表示される応答を格納するために使用されます。

`season` に文字列 "summer" が入っているかどうかを調べる条件を作成し、もし入っている場合は `response` に文字列を割り当てて、ユーザーに季節に関する適切なメッセージを表示させるようにしてください。そうでない場合は、 `response` に一般的な文字列を割り当てて、ユーザーに季節が何であるかわからないことを指示してください。

最後に、 `season` に文字列 "winter" が入っているかどうかを調べる別の検査を追加し、こちらも `response` に適切な文字列を割り当ててください。

下記のコードを更新して、完了した例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals1.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals1-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。

## 条件文 2

この課題では、3 つの変数が提供されています。

- `machineActive` — 応答装置のスイッチがオンになっているかどうかを示す値 (`true`/`false`) が格納されます。
- `score` — 想像上のゲームにおけるあなたのスコアを格納します。このスコアは応答装置に供給され、どれだけうまくできたかを示す応答を提供します。
- `response` — 初期化されていない状態で始まりますが、後に出力パネルに表示される応答を格納するために使用されます。

`if...else` 構造を作成して、マシンの電源が入っているかどうかを調べ、もし入っていなければ `response` 変数にメッセージを入れて、ユーザーにマシンの電源を入れるように指示するようにする必要があります。

最初の `if...else` 構造の中に、もう一つの `if...else` を入れて、マシンの電源が入っていれば、score の値に応じて適切なメッセージを `response` 変数に格納するようにする必要があります。様々な条件の検査（および結果の応答）は以下の通りです。

- 点数が 0 未満または 100 を超える場合 — "ありえません。エラーが発生しました。"
- 0 から 19 点 — "ひどい点数だ。完全に失敗だ！"
- 20 から 39 点 — "いくらか知っているようだが、かなり悪い点数だ。改善が必要だ。"
- 40 から 69 点 — "悪くない仕事をしましたね！"
- 70 から 89 点 — "素晴らしい点数だ、実によく分かっている"
- 90 から 100 点 — "すごい点数だね。カンニングしてない？本当？"

下記のライブコードを更新して、完了例を再現してみてください。コードを入力したら、 `machineActive` を `true` に変更して、これがうまく動作するかどうか試してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals2.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals2-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。

## 条件文 3

最後の課題では、4 つの変数が提供されています。

- `machineActive` - ログインマシンの電源が入っているかどうかを示す値 (`true`/`false`) が格納されています。
- `pwd` - ユーザーのログインパスワードが格納されています。
- `machineResult` - 初期化されていない状態で始まりますが、後にマシンの電源が入ったかどうかをユーザーに知らせるために、出力パネルに表示されるレスポンスを格納するために使用されます。
- `pwdResult` - 初期化されていない状態で始まりますが、後に出力パネルに表示されるレスポンスを格納するために使用され、ログインが成功したかどうかをユーザーに知らせます。

マシンのスイッチがオンになっているかどうかを調べる `if...else` 構造を作成し、 `machineResult` 変数に、マシンがオンになっているかオフになっているかをユーザーに指示するメッセージを格納したいと思います。

マシンの電源が入っている場合、2 つ目の条件も実行して、 `pwd` が `cheese` と等しいかどうかを調べます。もしそうなら、 `pwdResult` に文字列を割り当てて、ユーザーにログインに成功したことを指示します。そうでない場合は、`pwdResult` に異なる形の文字列を割り当てて、ログインに失敗したことをユーザーに指示しなければなりません。これを単一の行で、`if...else` 構造でないものを使用してほしいと思います。

下記のライブコードを更新して、完了した例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals3.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals3-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。
