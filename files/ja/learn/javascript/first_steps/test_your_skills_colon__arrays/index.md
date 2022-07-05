---
title: 'あなたのスキルをテストしよう: 配列'
slug: Learn/JavaScript/First_steps/Test_your_skills:_Arrays
tags:
  - Arrays
  - Beginner
  - JavaScript
  - Learn
  - test your skills
---
{{learnsidebar}}

このスキルテストの目的は、[配列](/ja/docs/Learn/JavaScript/First_steps/Arrays) の記事を理解しているかどうかを評価することです。

> **Note:** 下記のインタラクティブエディターで回答を試すことができますが、コードをダウンロードし、 [CodePen](https://codepen.io/)、 [jsFiddle](https://jsfiddle.net/)、 [Glitch](https://glitch.com/) などのオンラインツールを利用すると、タスクに取り組むのに役立つかもしれません。
>
> 行き詰まったなら、私たちに助けを求めてください。 — このページの下部の [評価またはさらなる支援](#評価またはさらなる支援) セクションを参照

> **Note:** 下記の作成では、あなたのコードにエラーがあれば、このページの結果パネル（または、ダウンロード可能なバージョンでは、ブラウザーの JavaScript コンソール）に出力され、答えにたどり着くための助けとなります。

## 配列 1

まずは配列の基礎から始めましょう。このタスクでは、3つの要素を含む配列を作成し、`myArray`という変数に格納します。要素は何でも構いません。好きな食べ物やバンドにしてはいかがでしょうか？

次に、単純な括弧の記法による代入で、最初の2つの要素を変更してください。そのあと、配列の先頭に新しい要素を追加します。

完成例を再現するために、以下のライブコードを更新してみてください:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays1.html", '100%', 400)}}

> **Callout:**
>
> [このタスクのための準備済みファイルをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays1-download.html) して、自身のエディターまたはオンラインエディターで動かせるようにしましょう。

## 配列 2

さて、別のタスクに移りましょう。ここでは、あなたが取り組むべき文字列が与えられています。あなたにやってもらいたいことは:

1. 文字列を配列に変換してください。その過程で、`+`という文字を取り除きます。結果を`myArray`という変数に格納します。
2. 配列の要素数を、`arrayLength`という変数に格納します。
3. 配列の末尾の要素を、`lastItem`という変数に格納します。

完成例を再現するために、以下のライブコードを更新してみてください:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays2.html", '100%', 400)}}

> **Callout:**
>
> [このタスクのための準備済みファイルをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays2-download.html) して、自身のエディターまたはオンラインエディターで動かせるようにしましょう。

## 配列 3

このタスクでは、我々が用意した配列を出発点として、やや逆行する作業を行います。具体的には:

1. 配列の末尾の要素を削除します。
2. 配列の末尾に新たに2つの名前を追加します。
3. 配列の各要素を調べて、要素のインデックス番号を丸括弧で囲み、名前の後ろに追記します。例:`Ryu (0)`。 なお、このやり方は配列の記事では教えていませんので、自分で調べる必要があるでしょう。
4. 最後に、配列の各要素を"` - `"で区切って1つの文字列に結合し、`myString`という変数に格納します。

完成例を再現するために、以下のライブコードを更新してみてください:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays3.html", '100%', 400)}}

> **Callout:**
>
> [このタスクのための準備済みファイルをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays3-download.html) して、自身のエディターまたはオンラインエディターで動かせるようにしましょう。

## 配列 4

このタスクでは、出発点として鳥の名前を列挙した配列が与えられています。

- `"Eagles"` 要素のインデックスを特定し、そのインデックスを用いて`"Eagles"` 要素を削除してください。
- この配列から、名前が"E"で始まる鳥だけを含む`eBirds`という名前の新しい配列を作成してください。ちなみに、 {{jsxref("String.prototype.startsWith()", "startsWith()")}} は文字列が特定の文字で始まるかどうかを調べるのにとても役立ちます。.

`"Emus,Egrets"`が表示されたら成功です。

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays4.html", '100%', 400)}}

> **Callout:**
>
> [このタスクのための準備済みファイルをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays4-download.html) して、自身のエディターまたはオンラインエディターで動かせるようにしましょう。

## 評価またはさらなる支援

上記のインタラクティブエディターで、これらの例を練習することができます。

あなたの制作物を評価してもらいたい、または行き詰まって助けを求めたい場合:

1. あなたの制作物を、[CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), または [Glitch](https://glitch.com/). のような共有可能なオンラインエディターに置いてください。いちから自身でコードを記述することもできますし、上記のセクションでリンク付けされている準備済みファイルを利用するのもよいでしょう。
2. [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250) で評価を希望したり、助けを求める投稿をしてください。投稿には以下を含みましょう:

    - "Assessment wanted for Variables 1 skill test"のような説明的なタイトル
    - あなたがこれまで試したことの詳細、そしてあなたが私たちに何をしてほしいか。例えば、行き詰まって助けが必要だとか、評価をしてほしいなど。
    - 評価してほしかったり、助けが必要な制作物へのリンク。共有可能なオンラインエディター（上記ステップ 1 で述べたもの）を使って。これは分かりやすくするためのよい手法です — コードが見れない状態で、コーディングの問題を抱えている人を助けることはとても難しいですよね。
    - 実際のタスクまたは評価ページのリンク。そうすれば、あなたがどの質問に助けが必要かがわかります。
