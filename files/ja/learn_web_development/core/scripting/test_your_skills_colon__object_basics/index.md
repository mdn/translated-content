---
title: "スキルテスト: オブジェクトの基本"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Object_basics
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、[JavaScript オブジェクトの基本](/ja/docs/Learn_web_development/Core/Scripting/Object_basics)の理解度をテストすることです。

> [!NOTE]
> このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) のようなオンラインエディターを使って課題の解決を試すことができます。
> コードにエラーがある場合、このページの結果パネルまたは JavaScript コンソールにログ出力されます。
>
> もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## オブジェクトの基本 1

この課題では、オブジェクトリテラルが与えられています。課題は次の通りです。

- `catName` 変数に、ブラケット記法を用いて、 `name` プロパティの値を保存する
- ドット記法を用いて、 `greeting()` メソッドを実行する（これはブラウザーのコンソールに挨拶をログ出力します）
- `color` プロパティを `black` に変更する

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics1.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics1-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。

## オブジェクトの基本 2

次の課題では、お気に入りのバンドの 1 つを表す、自分だけのオブジェクトリテラルを作成してみましょう。必要な要素は次のとおりです。

- `name`: バンドの名前を表す文字列
- `nationality`: バンドの出身国を表す文字列
- `genre`: バンドが演奏する音楽の種類
- `members`: バンドのメンバー数を表す数字
- `formed`: バンドが結成した年を表す数字
- `split`: バンドが解散した年を表す数字、まだ活動している場合は`false`
- `albums`: そのバンドによってリリースされたアルバムを表す配列。それぞれの配列の要素は、下記の要素を含んだオブジェクトであること

  - `name`: アルバムの名前を表す文字列
  - `released`: リリースされた年を表す数字

`albums` 配列には、少なくとも 2 つのアルバムを含めること。

これを実行したら、変数 `bandInfo` に文字列を書き込む必要があります。この文字列には、バンド名、国籍、活動年数、スタイル設定、最初のアルバムのタイトルとリリース日などの詳細な略歴を格納します。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics2.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics2-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。

## オブジェクトの基本 3

この課題では、課題 1 の `cat` オブジェクトリテラルに戻りましょう。 `greeting()` メソッドを、 `"Hello, said Bertie the Cymric."` とログ出力されるように、書き直してください。 ブラウザーの開発者ツールのコンソールにアクセスしますが、名前や品種に関係なく、同じ構造のすべての `cat` オブジェクトで機能します。

完了したら、 `cat2` という独自のオブジェクトを作成します。このオブジェクトは、同じ構造、まったく同じ `greeting()` メソッドを持ちますが、名前、品種、色が異なります。

両方の `greeting()` メソッドを呼び出して、適切なあいさつがコンソールに記録されることを確認します。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics3.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics3-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。

## オブジェクトの基本 4

課題 3 で書いたコードでは、 `greeting()` メソッドが 2 回定義されています。それぞれが猫 1 匹分です。これは理想的ではありません（仕様上、 [DRY](https://ja.wikipedia.org/wiki/Don%27t_repeat_yourself) または "Don't Repeat Yourself" と呼ばれる原則に違反しています）。

この課題では、コードを改善して `greeting()` を一度だけ定義し、すべての `cat` インスタンスが自分自身で `greeting()` メソッドを取得するようにしていただきたいのです。ヒント: JavaScript のコンストラクターを使用して、`cat` のインスタンスを作成するようにしましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics4.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics4-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。
