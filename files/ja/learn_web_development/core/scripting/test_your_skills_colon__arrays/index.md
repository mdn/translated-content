---
title: "スキルテスト: 配列"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Arrays
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、[配列](/ja/docs/Learn_web_development/Core/Scripting/Arrays)の記事を理解しているかどうかを評価することです。

> [!NOTE]
> このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターで解決策を試すことができます。
>
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 配列 1

まずは配列の基礎から始めましょう。この課題では、 3 つの要素を含む配列を作成し、 `myArray` という変数に格納します。要素は何でも構いません。好きな食べ物やバンドにしてはいかがでしょうか？

次に、単純な括弧の記法による代入で、最初の 2 つの要素を変更しましょう。そのあと、配列の先頭に新しい要素を追加しましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays1.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays1-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 配列 2

さて、別の課題に移りましょう。ここでは、取り組むべき文字列が与えられています。すべきことは次の通りです。

1. 文字列を配列に変換してください。その過程で、 `+` という文字を取り除きます。結果を `myArray` という変数に格納しましょう
2. 配列の要素数を、 `arrayLength` という変数に格納しましょう。
3. 配列の末尾の要素を、 `lastItem` という変数に格納しましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays2.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays2-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 配列 3

このタスクでは、用意した配列を出発点として、やや逆行する作業を行います。具体的には、

1. 配列の末尾の要素を削除しましょう。
2. 配列の末尾に新たに 2 つの名前を追加しましょう。
3. 配列の各要素を調べて、要素のインデックス番号を丸括弧で囲み、名前の後ろに追記しましょう。例: `Ryu (0)`。 なお、このやり方は配列の記事では教えていませんので、自分で調べる必要があるでしょう。
4. 最後に、配列の各要素を "`-`" で区切って 1 つの文字列に結合し、 `myString` という変数に格納しましょう。

完成例を再現するために、以下のライブコードを更新してみてください。

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays3.html", '100%', 400)}}

> [!CALLOUT]
>
> [このタスクのための準備済みファイルをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays3-download.html) して、自分のエディターまたはオンラインエディターで動かせるようにしましょう。

## 配列 4

このタスクでは、出発点として鳥の名前を列挙した配列が与えられています。

- `"Eagles"` 要素のインデックスを特定し、そのインデックスを用いて `"Eagles"` 要素を削除しましょう。
- この配列から、名前が "E" で始まる鳥だけを含む `eBirds` という名前の新しい配列を作成しましょう。ちなみに、 {{jsxref("String.prototype.startsWith()", "startsWith()")}} は文字列が特定の文字で始まるかどうかを調べるのにとても役立ちます。

`"Emus,Egrets"` と表示されたら成功です。

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays4.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays4-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。
