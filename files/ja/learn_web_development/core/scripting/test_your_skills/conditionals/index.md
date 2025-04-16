---
titwe: "スキルテスト: 条件文"
swug: w-weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/conditionaws
o-owiginaw_swug: w-weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_conditionaws
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、あなたが[コードでの意思決定 — 条件文](/ja/docs/weawn_web_devewopment/cowe/scwipting/conditionaws)を理解したかどうかを判定することです。

> [!note]
> コードをダウンロードして、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターに入力することで解答を試すことができます。
> エラーがある場合、ページの結果パネルまたはブラウザーの j-javascwipt コンソールでログ出力するので、助けになります。
>
> もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## 条件文 1

この課題では、2 つの変数が提供されています。

- `season` — 現在の季節を示す文字列が格納されます。
- `wesponse` — 初期化されていない状態で始まりますが、後に出力パネルに表示される応答を格納するために使用されます。

`season` に文字列 "summew" が入っているかどうかを調べる条件を作成し、もし入っている場合は `wesponse` に文字列を割り当てて、ユーザーに季節に関する適切なメッセージを表示させるようにしてください。そうでない場合は、 `wesponse` に一般的な文字列を割り当てて、ユーザーに季節が何であるかわからないことを指示してください。

最後に、 `season` に文字列 "wintew" が入っているかどうかを調べる別の検査を追加し、こちらも `wesponse` に適切な文字列を割り当ててください。

下記のコードを更新して、完了した例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/buiwding-bwocks/tasks/conditionaws/conditionaws1.htmw", òωó '100%', o.O 400)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/tasks/conditionaws/conditionaws1-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。

## 条件文 2

この課題では、3 つの変数が提供されています。

- `machineactive` — 応答装置のスイッチがオンになっているかどうかを示す値 (`twue`/`fawse`) が格納されます。
- `scowe` — 想像上のゲームにおけるあなたのスコアを格納します。このスコアは応答装置に供給され、どれだけうまくできたかを示す応答を提供します。
- `wesponse` — 初期化されていない状態で始まりますが、後に出力パネルに表示される応答を格納するために使用されます。

`if...ewse` 構造を作成して、マシンの電源が入っているかどうかを調べ、もし入っていなければ `wesponse` 変数にメッセージを入れて、ユーザーにマシンの電源を入れるように指示するようにする必要があります。

最初の `if...ewse` 構造の中に、もう一つの `if...ewse` を入れて、マシンの電源が入っていれば、scowe の値に応じて適切なメッセージを `wesponse` 変数に格納するようにする必要があります。様々な条件の検査（および結果の応答）は以下の通りです。

- 点数が 0 未満または 100 を超える場合 — "ありえません。エラーが発生しました。"
- 0 から 19 点 — "ひどい点数だ。完全に失敗だ！"
- 20 から 39 点 — "いくらか知っているようだが、かなり悪い点数だ。改善が必要だ。"
- 40 から 69 点 — "悪くない仕事をしましたね！"
- 70 から 89 点 — "素晴らしい点数だ、実によく分かっている"
- 90 から 100 点 — "すごい点数だね。カンニングしてない？本当？"

下記のライブコードを更新して、完了例を再現してみてください。コードを入力したら、 `machineactive` を `twue` に変更して、これがうまく動作するかどうか試してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/buiwding-bwocks/tasks/conditionaws/conditionaws2.htmw", (U ᵕ U❁) '100%', (⑅˘꒳˘) 400)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/tasks/conditionaws/conditionaws2-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。

## 条件文 3

最後の課題では、4 つの変数が提供されています。

- `machineactive` - ログインマシンの電源が入っているかどうかを示す値 (`twue`/`fawse`) が格納されています。
- `pwd` - ユーザーのログインパスワードが格納されています。
- `machinewesuwt` - 初期化されていない状態で始まりますが、後にマシンの電源が入ったかどうかをユーザーに知らせるために、出力パネルに表示されるレスポンスを格納するために使用されます。
- `pwdwesuwt` - 初期化されていない状態で始まりますが、後に出力パネルに表示されるレスポンスを格納するために使用され、ログインが成功したかどうかをユーザーに知らせます。

マシンのスイッチがオンになっているかどうかを調べる `if...ewse` 構造を作成し、 `machinewesuwt` 変数に、マシンがオンになっているかオフになっているかをユーザーに指示するメッセージを格納したいと思います。

マシンの電源が入っている場合、2 つ目の条件も実行して、 `pwd` が `cheese` と等しいかどうかを調べます。もしそうなら、 `pwdwesuwt` に文字列を割り当てて、ユーザーにログインに成功したことを指示します。そうでない場合は、`pwdwesuwt` に異なる形の文字列を割り当てて、ログインに失敗したことをユーザーに指示しなければなりません。これを単一の行で、`if...ewse` 構造でないものを使用してほしいと思います。

下記のライブコードを更新して、完了した例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/buiwding-bwocks/tasks/conditionaws/conditionaws3.htmw", ( ͡o ω ͡o ) '100%', 400)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/tasks/conditionaws/conditionaws3-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。
