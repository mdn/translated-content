---
title: "スキルテスト: 演算"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Math
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、[JavaScript での基本演算 — 数値と演算子](/ja/docs/Learn_web_development/Core/Scripting/Math)の記事を理解しているかどうかを評価することです。

> [!NOTE]
> このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターで解決策を試すことができます。
> コードにエラーがある場合、このページの結果パネルまたは JavaScript コンソールでログ出力されます。
>
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してみてください。

## 演算 1

基本演算子の知識をテストすることから始めましょう。
4 つの数値を作成し、 2 つを加算し、 1 つを減算し、結果を掛け算してください。
最後に、この値が偶数であることを証明するテストを記述することも必要ですね。

では、完成イメージを再構築するために、下記のライブコードを更新してみましょう。次の手順に従ってください。

1. 数値の変数を 4 つ作成してください。変数にわかりやすい名前を付けてください。
2. 最初の 2 つの変数を加算し、その結果を別の変数に格納してください。
3. 3 番目の変数から 4 番目の変数を減算し、その結果を別の変数に格納してください。
4. 上記の **2** および **3** の工程の結果を乗算し、 `finalResult` という変数に格納してください。
5. 最後に、`finalResult` が偶数であるかどうかをチェックする計算式を、[算術演算子](/ja/docs/Learn_web_development/Core/Scripting/Math#算術演算子)を使用して記述してください。結果を（偶数なら `0`、奇数なら `1`） `evenOddResult` という変数に格納してください。

このテストに合格するためには、 `finalResult` の値が `48` で、 `evenOddResult` の値が `0` である必要があります。

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math1.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math1-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 演算 2

2 番目の課題では、すでに結果が変数 `result` と `result2` に格納されている 2 つの計算式が提供されています。
計算を行い、掛け算を行い、結果を小数点以下 2 桁まで書式化する必要があります。

以下のライブコードを更新して、次の手順に従い、完成例を再現してみてください。

1. `result` と `result2` を乗算し、結果を `result` に代入し戻す計算式を記述してください。これは、代入演算子の短縮形を使いましょう。
2. その結果を小数第 2 位までにフォーマットし、そして `finalResult` という変数に格納する 1 行コードを記述してください。
3. `typeof` を使用して `finalResult` のデータ型をチェックしてください。実際には `string` 型であることがわかるでしょう！それを `number` 型に変換し、結果を `finalNumber` という変数に格納する 1 行コードを記述してください。

このテストに合格するためには、 `finalNumber` の値は `4633.33` にならなければいけません。

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math2.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math2-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 演算 3

この記事の最後のタスクでは、いくつかのテストを記述していきましょう。
3 つのグループがあり、それぞれが文と 2 つの変数で構成されています。
各グループについて、与えられている文を証明または反証するテストを記述してください。
これらのテスト結果を、それぞれ `weightComparison`、`heightComparison`、`pwdMatch` という変数に格納してください。

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math3.html", '100%', 550)}}

> [!CALLOUT]
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math3-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。
