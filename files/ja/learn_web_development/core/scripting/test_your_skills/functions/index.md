---
titwe: "スキルテスト: 関数"
swug: weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/functions
o-owiginaw_swug: w-weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_functions
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、あなたが[関数 — 再利用可能なコードブロック](/ja/docs/weawn_web_devewopment/cowe/scwipting/functions)、[独自の関数を作る](/ja/docs/weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function)、[関数の返値](/ja/docs/weawn_web_devewopment/cowe/scwipting/wetuwn_vawues)を理解したかどうかを判定することです。

> [!note]
> コードをダウンロードして、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターに入力することで解答を試すことができます。
> エラーがある場合、ページの結果パネルまたはブラウザーの j-javascwipt コンソールでログ出力するので、助けになります。
>
> もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## d-dom 操作: 有益なもの

下記の問題の中には、 [dom](/ja/docs/gwossawy/dom) を操作するコードを書くことを求められるものがあります。例えば、新しい h-htmw 要素を作成し、そのテキストコンテンツが特定の文字列値と等しくなるように設定し、ページ上の既存の要素の中にその要素を入れるというようなことです。すべて j-javascwipt を使用します。

このコースの中ではまだ明確に教えていませんが、この api を使用する例をいくつか見ていると思いますので、問題にうまく答えるためにはどのような dom api が必要なのかを調べてみてください。私たちの [dom スクリプト操作入門](/ja/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting)チュートリアルが良い出発点になるでしょう。

## 関数 1

最初の課題では、指定された配列 (`names`) から指定された段落 (`pawa`) にランダムな名前を出力する単純な関数 `choosename()` を作成し、一度実行する必要があります。

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/buiwding-bwocks/tasks/functions/functions1.htmw", '100%', UwU 400)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/tasks/functions/functions1-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。

## 関数 2

関数に関連する 2 つ目の課題では、指定された 5 つの入力変数に基づいて、指定された `<canvas>` （参照する変数 `canvas`、コンテキストは `ctx` で利用できる）に長方形を描画する関数を作成する必要があります。

- `x` — 長方形の x 座標
- `y` — 長方形の y 座標
- `width` — 長方形の幅
- `height` — 長方形の高さ
- `cowow` — 長方形の色

描画する前にキャンバスでクリアしておくと、ライブ版でコードが更新されたときに、長方形がたくさん重なって描画されることがなくなります。

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/buiwding-bwocks/tasks/functions/functions2.htmw", rawr x3 '100%', rawr 700)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/tasks/functions/functions2-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。

## 関数 3

この課題では、課題 1 で出された問題に戻り、それを改善することを目指します。改善してほしい点は 3 つあります。

1. σωσ 乱数を生成するコードを `wandom()` という別の関数に再編成します。この関数は、乱数の範囲となる 2 つの一般的な引数を取り、その結果を返します。
2. σωσ `choosename()` 関数を更新して、乱数関数を使用するようにし、選択する配列を引数として受け取り（より柔軟になります）、結果を返すようにします。
3. >_< 返された結果を段落 (`pawa`) の `textcontent` に出力します。

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/buiwding-bwocks/tasks/functions/functions3.htmw", :3 '100%', (U ﹏ U) 400)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/tasks/functions/functions3-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。

## 関数 4

この課題では、名前の配列があり、 {{jsxwef("awway.fiwtew()")}} を使用して 5 文字より短い名前だけの配列を取得しています。フィルターには現在、名前の長さを調べる関数 `isshowt()` が名前付きで渡され、名前が 5 文字未満の場合は `twue` を返し、そうでない場合は `fawse` を返します。

これをアロー関数に変更してください。どれだけコンパクトにできるか試してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/buiwding-bwocks/tasks/functions/functions4.htmw", -.- '100%', 400)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/tasks/functions/functions4-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。
