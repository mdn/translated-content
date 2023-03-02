---
title: "スキルテスト: 条件文"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals
l10n:
  sourceCommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{learnsidebar}}

このスキルテストの目的は、あなたが[コードでの意思決定 — 条件文](/ja/docs/Learn/JavaScript/Building_blocks/conditionals)を理解したかどうかを判定することです。

> **メモ:** 下記のインタラクティブエディターで解答を試すことができますが、コードをダウンロードして、[CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), または [Glitch](https://glitch.com/) などのオンラインツールを使用して、作業することが有益な場合があります。
>
> もし行き詰まったら、私たちに助けを求めてください。このページの下にある[評価またはさらなる支援](#assessment_or_further_help)の節をご覧ください。

> **メモ:** 下記の例では、コードにエラーがある場合、ページ上の結果パネルに出力され、答え合わせをするのに役立ちます（ダウンロード版の場合は、ブラウザーの JavaScript コンソールに出力されます）。

## 条件文 1

このタスクでは、2 つの変数が提供されます。

- `season` — 現在の季節を示す文字列が格納されます。
- `response` — 初期化されていない状態で始まりますが、後に出力パネルに表示されるレスポンスを格納するために使用されます。

私たちは、`season` が文字列 "summer" を格納しているかどうかを調べる条件を作成し、もし格納している場合は `response` に文字列を割り当てて、ユーザーに季節に関する適切なメッセージを表示させるようにしたいと考えています。そうでない場合は、 `response` に一般的な文字列を割り当てて、ユーザーに季節が何であるかわからないことを指示しなければなりません。

最後に、`season` が文字列 "winter" を格納するかどうかを調べる別のテストを追加し、再び `response` に適切な文字列を割り当てる必要があります。

下記のコードを更新して、完了した例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals1.html", '100%', 400)}}

> **注目:**
>
> [このタスクの最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals1-download.html)して、自分のエディターまたはオンラインエディターで作業してください。

## 条件文 2

このタスクでは、3 つの変数が提供されます。

- `machineActive` — 応答装置のスイッチがオンになっているかどうかのコンテナー (`true`/`false`) が格納されます。
- `score` — 想像上のゲームにおけるあなたのスコアを格納します。このスコアは応答装置に供給され、あなたがどれだけうまくできたかを示すレスポンスを提供します。
- `response` — 初期化されていない状態で始まりますが、後に出力パネルに表示されるレスポンスを格納するために使用されます。

マシンの電源が入っているかどうかを調べて、もし入っていなければ `response` 変数にメッセージを入れて、ユーザーにマシンの電源を入れるように指示する `if...else` 構造を作成する必要があります。

最初の構造の中に、もしマシンの電源が入っていれば、score の値に応じて適切なメッセージを `response` 変数に格納する `if...else if...else` を入れ子にしておく必要があります。異なる形のテスト(とその結果のレスポンス)は以下の通りです。

- 点数が 0 未満または 100 を超える場合 — "これは不可能です。エラーが発生しました"。
- 0 から 19 点 — "ひどい点数だ。完全に失敗だ！"
- 20 から 39 点 — "いくらか知っているようだが、かなり悪い点数だ。改善が必要だ。"
- 40 から 69 点 — "悪くない仕事をしましたね！"
- 70 から 89 点 — "素晴らしい点数だ、実によく分かっている"
- 90 から 100 点 — "すごい点数だね。カンニングしてない？本当？"

下記のライブコードを更新して、完了例を再現してみてください。コードを入力したら、 `machineActive` を `true` に変更して、これがうまく動作するかどうか試してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals2.html", '100%', 400)}}

> **注目:**
>
> [このタスクの最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals2-download.html)して、自分のエディターまたはオンラインエディターで作業してください。

## 条件文 3

このタスクでは、2 つ目のタスクで書いたコードを、内側の `if...else if...else` を書き換えて、代わりに `switch` 文を使用する必要があります。

下記のライブコードを更新して、完了した例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals3.html", '100%', 400)}}

> **注目:**
>
> [このタスクの最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals3-download.html)して、自分のエディターまたはオンラインエディターで作業してください。

## 条件文 4

最後のタスクでは、4 つの変数が提供されます。

- `machineActive` - ログインマシンの電源が入っているかどうかのコンテナー (`true`/`false`) が格納されています。
- `pwd` - ユーザーのログインパスワードが格納されています。
- `machineResult` - 初期化されていない状態で始まりますが、後にマシンの電源が入ったかどうかをユーザーに知らせるために、出力パネルに表示されるレスポンスを格納するために使用されます。
- `pwdResult` - 初期化されていない状態で始まりますが、後に出力パネルに表示されるレスポンスを格納するために使用され、ログインが成功したかどうかをユーザーに知らせます。

マシンのスイッチがオンになっているかどうかを調べる `if...else` 構造を作成し、 `machineResult` 変数に、マシンがオンになっているかオフになっているかをユーザーに指示するメッセージを格納したいと思います。

マシンの電源が入っている場合、2 つ目の条件も実行して、 `pwd` が `cheese` と等しいかどうかを調べます。もしそうなら、 `pwdResult` に文字列を割り当てて、ユーザーにログインに成功したことを指示します。そうでない場合は、`pwdResult` に異なる形の文字列を割り当てて、ログインに失敗したことをユーザーに指示しなければなりません。これを単一の行で、`if...else` 構造でないものを使用してほしいと思います。

下記のライブコードを更新して、完了した例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals4.html", '100%', 400)}}

> **注目:**
>
> [このタスクの最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals4-download.html)して、自分のエディターまたはオンラインエディターで作業してください。

## 評価またはさらなる支援

これらの例は、上のインタラクティブエディターで練習することができます。

もしあなたが、自分の作品を評価してほしい、あるいは行き詰っているので支援を要請したい場合。

1. [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), または [Glitch](https://glitch.com/) のようなオンライン共有エディターに あなたの作品を入れましょう。コードは自分で書いてもいいですし、上の節でリンクされている出発点のファイルを使用することもできます。
2. [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250) に、評価や支援を依頼する投稿をします。あなたの投稿には以下のものを含めてください。

   - "Assessment wanted for Conditionals 1 skill test" のような説明的なタイトル。
   - あなたがすでに試したこと、そして私たちに何をしてほしいかについての詳細（例: 行き詰まり、支援を必要とする場合、または評価を希望する場合）。
   - 評価したい、または支援が必要な例へのリンクを、オンライン共有エディター（上記の手順 1 で述べたとおり）にて提供します。これは取得するのに良い習慣です。もしあなたがコードを見ることができなければ、コーディングの問題で誰かを支援するのはとても難しいことです。
   - 実際の課題または評価ページへのリンクで、あなたが支援したい質問を探すことができます。
