---
title: "スキルテスト: JSON"
slug: Learn/JavaScript/Objects/Test_your_skills:_JSON
l10n:
  sourceCommit: 4def230f85756724b59660e3cd9de363db724ef8
---

{{learnsidebar}}

このスキルテストの目的は、[JSON の操作](/ja/docs/Learn/JavaScript/Objects/JSON)の記事を理解できたかどうかを評価することです。

> **メモ:** 下記のインタラクティブエディターで解答を試すことができますが、コードをダウンロードして、[CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), [Glitch](https://glitch.com/) などのオンラインツールを使用して作業すると便利です。
>
> もし行き詰まった場合は、このページの下にある「評価またはさらなる支援」(#評価またはさらなる支援)の節を参照して、私たちに支援を要求してください。

> **メモ:** 下記の例では、コードにエラーがある場合、ページ上の結果パネルに出力されるので、答え合わせをするのに役立ちます（ダウンロードした場合には、ブラウザーの JavaScript コンソールに出力されます）。

## JSON 1

この記事の唯一の課題は、JSON データにアクセスして、それをページ内で使用することに関するものです。いくつかの母猫とその子猫に関する JSON データが [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) で提供されています。JSON は文字列としてページに読み込まれ、`displayCatInfo()` 関数の `catString` 引数で利用できるようになります。課題は、`displayCatInfo()` 関数の欠落部分を埋めて格納することです。

- 母猫 3 匹の名前をカンマで区切って `motherInfo` という変数に入れてください。
- `kittenInfo` 変数には、子猫の総数、およびオスとメスの数を格納してください。

そして、これらの変数の値が、段落の中で画面に表示されるようにします。

ヒントや質問をいくつか示します。

- JSON データは `displayCatInfo()` 関数の中でテキストとして提供されます。JSON から何かデータを取得する前に、JSON を解釈する必要があります。
- 外側のループを使用して猫をループ処理して、その名前を `motherInfo` 変数文字列に追加し、内側のループを使用してすべての子猫をループ処理して、すべての子猫/オス/メスの合計を加算し、その詳細を `kittenInfo` 変数の文字列に追加するとよいでしょう。
- 最後の母猫の名前の前に "and" を、その後にピリオドを置く必要があります。どうすれば、JSON に何匹の猫がいても、このような動作をさせることができるでしょうか。
- なぜ `para1.textContent = motherInfo;` と `para2.textContent = kittenInfo;` の行は `displayCatInfo()` 関数の中にあり、スクリプトの終わりにはないのでしょうか。これは、非同期コードと関係があります。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/json/json1.html", '100%', 400)}}

> **注目:**
>
> 自分自身でエディターやオンラインエディターで作業する場合は、[この作業の開始時点のものをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/json1-download.html)しましょう。

## 評価とさらなる支援

これらの例は、上記のインタラクティブエディターで練習することができます。

自分の作品を評価してほしい、行き詰っているので相談したい方は、次のようにしましょう。

1. [MDN Discourse フォーラムの Learning カテゴリー](https://discourse.mozilla.org/c/mdn/learn/250)に、評価や支援を求める投稿を（英語で）書き込んでください。投稿には次のことを書いてください。

   - "Assessment wanted for JSON skill test" のような、説明的なタイトル。
   - すでに試したことの詳細と、私たちに何をしてほしいか（例: 行き詰まり、助けが必要な場合、または評価が必要な場合）。
   - コード。
   - 実際の課題または評価ページへのリンクにより、助けを求めている問題を見つけることができます。
