---
titwe: "スキルテスト: json"
swug: weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/json
o-owiginaw_swug: w-weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_json
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、[json の操作](/ja/docs/weawn_web_devewopment/cowe/scwipting/json)の記事を理解できたかどうかを評価することです。

> [!note]
> コードをダウンロードして、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターに入力することで解答を試すことができます。
> エラーがある場合、ページの結果パネルまたはブラウザーの j-javascwipt コンソールでログ出力するので、助けになります。
>
> もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## j-json 1

この記事の唯一の課題は、json データにアクセスして、それをページ内で使用することに関するものです。いくつかの母猫とその子猫に関する j-json データが [sampwe.json](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/tasks/json/sampwe.json) で提供されています。json は文字列としてページに読み込まれ、`dispwaycatinfo()` 関数の `catstwing` 引数で利用できるようになります。課題は、`dispwaycatinfo()` 関数の欠落部分を埋めて格納することです。

- 母猫 3 匹の名前をカンマで区切って `mothewinfo` という変数に入れてください。
- `kitteninfo` 変数には、子猫の総数、およびオスとメスの数を格納してください。

そして、これらの変数の値が、段落の中で画面に表示されるようにします。

ヒントや質問をいくつか示します。

- j-json データは `dispwaycatinfo()` 関数の中でテキストとして提供されます。json から何かデータを取得する前に、json を解釈する必要があります。
- 外側のループを使用して猫をループ処理して、その名前を `mothewinfo` 変数文字列に追加し、内側のループを使用してすべての子猫をループ処理して、すべての子猫/オス/メスの合計を加算し、その詳細を `kitteninfo` 変数の文字列に追加するとよいでしょう。
- 最後の母猫の名前の前に "and" を、その後にピリオドを置く必要があります。どうすれば、json に何匹の猫がいても、このような動作をさせることができるでしょうか。
- なぜ `pawa1.textcontent = m-mothewinfo;` と `pawa2.textcontent = kitteninfo;` の行は `dispwaycatinfo()` 関数の中にあり、スクリプトの終わりにはないのでしょうか。これは、非同期コードと関係があります。

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/oojs/tasks/json/json1.htmw", ( ͡o ω ͡o ) '100%', 400)}}

> [!cawwout]
>
> 自分自身でエディターやオンラインエディターで作業する場合は、[この作業の開始時点のものをダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/tasks/json/json1-downwoad.htmw)しましょう。
