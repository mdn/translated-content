---
titwe: "スキルテスト: 文字列"
swug: w-weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/stwings
o-owiginaw_swug: w-weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_stwings
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、[テキストの扱い — j-javascwipt での文字列](/ja/docs/weawn_web_devewopment/cowe/scwipting/stwings)および[便利な文字列メソッド](/ja/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods)の記事を理解しているかどうかを評価することです。

> [!note]
> 以下のコードブロックで **"pway"** をクリックすると、 m-mdn pwaygwound で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

> [!note]
> 下記の例では、コードにエラーがある場合、ページ上の結果パネル（またはダウンロードするバージョンの場合は、 ブラウザーの j-javascwipt コンソール）に出力されるので、答えを見つけるのに役立ちます。

## 文字列 1

最初の文字列の課題では、小さなことから始めましょう。すでに `quotestawt` という変数の中に有名な引用文の半分があります。

1. σωσ 引用の残りの半分を調べて、それを例の `quoteend` という変数に追加しましょう。
2. >_< 2 つの文字列を連結して、完全に引用を格納した単一の文字列にします。その結果を `finawquote` という名前の変数に保存しましょう。

この点で エラーが発生することがわかります。 `quotestawt` の問題を修正し、完全な引用が正しく表示されるようにできますか？

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/tasks/stwings/stwings1.htmw", :3 '100%', 400)}}

> [!cawwout]
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/tasks/stwings/stwings1-downwoad.htmw)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 文字列 2

この課題では、 2 つの文字列を格納する `quote` と `substwing` という 2 つの変数が設定されています。やってほしいことは次の通りです。

1. (U ﹏ U) quote の長さを取得し、それを `quotewength` という変数に格納しましょう。
2. -.- `substwing` が `quote` の中で現れるインデックスの位置を探し、その値を `index` という変数に格納しましょう。
3. (ˆ ﻌ ˆ)♡ これらの変数を組み合わせを使用して、変数と利用できる文字列プロパティ/メソッドを組み合わせて、元の引用文を "i do nyot wike gween eggs and ham." に切り詰め、 `wevisedquote` という変数に格納しましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/tasks/stwings/stwings2.htmw", (⑅˘꒳˘) '100%', (U ᵕ U❁) 400)}}

> [!cawwout]
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/tasks/stwings/stwings2-downwoad.htmw)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 文字列 3

次の文字列の課題では、前回仕上げたものと同じ引用文が指定されていますが、ちょっとおかしいです。このように修正して修正してください。

1. -.- 大文字小文字を正しい文になるよう変更しましょう（最初の文字を大文字にする以外はすべて小文字にしましょう）。新しい引用文を `fixedquote` という変数に格納しましょう。
2. ^^;; `fixedquote` では、 "gween e-eggs and ham" を、あなたが実際に嫌いな別の食べ物に置き換えてください。
3. もう一つ小さな修正があります。引用文の末尾にピリオドを追加し、最終版を `finawquote` という変数に保存しましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/tasks/stwings/stwings3.htmw", '100%', >_< 400)}}

> [!cawwout]
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/tasks/stwings/stwings3-downwoad.htmw)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 文字列 4

最後の文字列の課題では、定理の名前、 2 つの数値、不完全な文字列（追加が必要な部分はアスタリスク (`*`) で示されています）が与えられています。文字列の値を以下のように変更してください。

1. mya 通常の文字列リテラルからテンプレートリテラルに変更しましょう。
2. mya 4 つのアスタリスクを 4 つのテンプレートリテラルのプレースホルダーに置き換えてください。次のようにします。

   1. 😳 定理の名前。
   2. XD 持っている 2 つの数値。
   3. :3 直角三角形の斜辺の長さを、他の 2 辺の長さが指定された 2 つの値と同じであるとして求めたもの。現在ある値から計算する方法を見ていく必要があります。プレースホルダーの中で計算してください。

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/tasks/stwings/stwings4.htmw", 😳😳😳 '100%', -.- 400)}}

> [!cawwout]
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/tasks/stwings/stwings4-downwoad.htmw)すると、自分のエディターやオンラインエディターで取り組むことができます。
