---
title: "スキルテスト: ループ"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Loops
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、あなたが[ループするコード](/ja/docs/Learn_web_development/Core/Scripting/Loops)を理解したかどうかを判定することです。

> [!NOTE]
> コードをダウンロードして、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに入力することで解答を試すことができます。
>
> もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## DOM 操作: 有益なもの

下記の問題の中には、 [DOM](/ja/docs/Glossary/DOM) を操作するコードを書くことを求められるものがあります。例えば、新しい HTML 要素を作成し、そのテキストコンテンツが特定の文字列値と等しくなるように設定し、ページ上の既存の要素の中にその要素を入れるというようなことです。すべて JavaScript を使用します。

このコースの中ではまだ明確に教えていませんが、この API を使用する例をいくつか見ていると思いますので、問題にうまく答えるためにはどのような DOM API が必要なのかを調べてみてください。私たちの [DOM スクリプト操作入門](/ja/docs/Learn_web_development/Core/Scripting/DOM_scripting)チュートリアルが良い出発点になるでしょう。

## ループ 1

最初のループの課題では、単純なループを作成して、指定された `myArray` の項目をすべて読み込み、リストアイテム（つまり、 [`<li>`](/ja/docs/Web/HTML/Element/li) 要素）として画面に出力し、指定された `list` に追加します。

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops1-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。

## ループ 2

この次の課題では、名前を指定されたら、名前と電話番号を保有する[オブジェクト](/ja/docs/Glossary/Object)の配列 (`phonebook`) を検索し、名前を見つけたら名前と電話番号を段落 (`para`) に出力し、ループを実行する前に終了する単純なプログラムを書いてもらいます。

オブジェクトについてまだ読んでいなくても心配しないでください。これで知る必要があるのは、メンバーと値のペアにアクセスする方法だけです。オブジェクトについては [JavaScript オブジェクトの基礎](/ja/docs/Learn_web_development/Core/Scripting/Object_basics)チュートリアルで読むことができます。

始めに 3 つの変数が与えられています。

- `name` — 検索する名前を保持します。
- `para` — 段落への参照を保持し、結果を報告するために使用します。
- `phonebook` - 検索する電話帳の項目が格納されています。

前回の課題では使用しなかった種類のループを使用しましょう。

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops2-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。

## ループ 3

この最終課題では、以下が提供されています。

- `i` — 500 の値から始まります。イテレーターとして使用することを意図しています。
- `para` — 結果を報告するために使用する段落への参照が格納されています。
- `isPrime()` — 数値を渡すと、その数値が素数であれば `true`、素数でなければ `false` を返す関数です。

ループを使用して 2 から 500 までの数を逆に読み（1 は素数として数えられません）、指定された `isPrime()` 関数を実行する必要があります。素数でないそれぞれの数について、次のループの反復処理に進みます。素数である各数値について、区切り文字とともに段落の `textContent` に追加します。

前回までの 2 つの課題では使用しなかった種類のループを使用しましょう。

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops3-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。
