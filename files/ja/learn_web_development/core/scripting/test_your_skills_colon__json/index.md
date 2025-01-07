---
title: "スキルテスト: JSON"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_JSON
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、[JSON の操作](/ja/docs/Learn_web_development/Core/Scripting/JSON)の記事を理解できたかどうかを評価することです。

> [!NOTE]
> コードをダウンロードして、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに入力することで解答を試すことができます。
> エラーがある場合、ページの結果パネルまたはブラウザーの JavaScript コンソールでログ出力するので、助けになります。
>
> もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

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

> [!CALLOUT]
>
> 自分自身でエディターやオンラインエディターで作業する場合は、[この作業の開始時点のものをダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/json1-download.html)しましょう。
