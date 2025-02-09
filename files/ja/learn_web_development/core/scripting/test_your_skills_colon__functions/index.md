---
title: "スキルテスト: 関数"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Functions
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、あなたが[関数 — 再利用可能なコードブロック](/ja/docs/Learn_web_development/Core/Scripting/Functions)、[独自の関数を作る](/ja/docs/Learn_web_development/Core/Scripting/Build_your_own_function)、[関数の返値](/ja/docs/Learn_web_development/Core/Scripting/Return_values)を理解したかどうかを判定することです。

> [!NOTE]
> コードをダウンロードして、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに入力することで解答を試すことができます。
> エラーがある場合、ページの結果パネルまたはブラウザーの JavaScript コンソールでログ出力するので、助けになります。
>
> もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## DOM 操作: 有益なもの

下記の問題の中には、 [DOM](/ja/docs/Glossary/DOM) を操作するコードを書くことを求められるものがあります。例えば、新しい HTML 要素を作成し、そのテキストコンテンツが特定の文字列値と等しくなるように設定し、ページ上の既存の要素の中にその要素を入れるというようなことです。すべて JavaScript を使用します。

このコースの中ではまだ明確に教えていませんが、この API を使用する例をいくつか見ていると思いますので、問題にうまく答えるためにはどのような DOM API が必要なのかを調べてみてください。私たちの [DOM スクリプト操作入門](/ja/docs/Learn_web_development/Core/Scripting/DOM_scripting)チュートリアルが良い出発点になるでしょう。

## 関数 1

最初の課題では、指定された配列 (`names`) から指定された段落 (`para`) にランダムな名前を出力する単純な関数 `chooseName()` を作成し、一度実行する必要があります。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions1.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions1-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。

## 関数 2

関数に関連する 2 つ目の課題では、指定された 5 つの入力変数に基づいて、指定された `<canvas>` （参照する変数 `canvas`、コンテキストは `ctx` で利用できる）に長方形を描画する関数を作成する必要があります。

- `x` — 長方形の X 座標
- `y` — 長方形の Y 座標
- `width` — 長方形の幅
- `height` — 長方形の高さ
- `color` — 長方形の色

描画する前にキャンバスでクリアしておくと、ライブ版でコードが更新されたときに、長方形がたくさん重なって描画されることがなくなります。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions2.html", '100%', 700)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions2-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。

## 関数 3

この課題では、課題 1 で出された問題に戻り、それを改善することを目指します。改善してほしい点は 3 つあります。

1. 乱数を生成するコードを `random()` という別の関数に再編成します。この関数は、乱数の範囲となる 2 つの一般的な引数を取り、その結果を返します。
2. `chooseName()` 関数を更新して、乱数関数を使用するようにし、選択する配列を引数として受け取り（より柔軟になります）、結果を返すようにします。
3. 返された結果を段落 (`para`) の `textContent` に出力します。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions3.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions3-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。

## 関数 4

この課題では、名前の配列があり、 {{jsxref("Array.filter()")}} を使用して 5 文字より短い名前だけの配列を取得しています。フィルターには現在、名前の長さを調べる関数 `isShort()` が名前付きで渡され、名前が 5 文字未満の場合は `true` を返し、そうでない場合は `false` を返します。

これをアロー関数に変更してください。どれだけコンパクトにできるか試してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions4.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions4-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。
