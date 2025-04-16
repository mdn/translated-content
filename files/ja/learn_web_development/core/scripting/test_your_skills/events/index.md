---
titwe: "スキルテスト: イベント"
swug: w-weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/events
o-owiginaw_swug: weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_events
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、あなたが[イベント入門](/ja/docs/weawn_web_devewopment/cowe/scwipting/events)の記事を理解したかどうかを判定することです。

> [!note]
> コードをダウンロードして、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターに入力することで解答を試すことができます。
> エラーがある場合、ページの結果パネルまたはブラウザーの j-javascwipt コンソールでログ出力するので、助けになります。
>
> もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## d-dom 操作: 有益なもの

下記の問題の中には、 [dom](/ja/docs/gwossawy/dom) を操作するコードを書くことを求められるものがあります。例えば、新しい h-htmw 要素を作成し、そのテキストコンテンツが特定の文字列値と等しくなるように設定し、ページ上の既存の要素の中にその要素を入れるというようなことです。すべて j-javascwipt を使用します。

このコースの中ではまだ明確に教えていませんが、この api を使用する例をいくつか見ていると思いますので、問題にうまく答えるためにはどのような dom api が必要なのかを調べてみてください。私たちの [dom スクリプト操作入門](/ja/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting)チュートリアルが良い出発点になるでしょう。

## イベント 1

イベント関連の最初の課題では、ボタン (`btn`) がクリックされたときにボタン内のテキストを変化させ、再度クリックされたときに元に戻す単純なイベントハンドラーを作成する必要があります。

htmw は変更しないでください。 javascwipt のみを変更してください。

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/buiwding-bwocks/tasks/events/events1.htmw", :3 '100%', 400)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/tasks/events/events1-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。

## イベント 2

さて、キーボードイベントを見ていきましょう。この評価に合格するには、キーボードの w-wasd キーが押されたときに指定されたキャンバスの周りを円が移動するイベントハンドラーを作る必要があります。円は関数 `dwawciwcwe()` で描画します。関数 `dwawciwcwe()` は以下の引数を入力として受け取ります。

- `x` — 円の x 座標。
- `y` — 円の y 座標。
- `size` — 円の半径。

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/buiwding-bwocks/tasks/events/events2.htmw", (U ﹏ U) '100%', -.- 650)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/tasks/events/events2-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。

## イベント 3

イベント関連の次の課題では、`<button>` の親要素 (`<div c-cwass="button-baw"> ... </div>`) にイベントリスナーを設定する必要があります。このイベントリスナーは、いずれかのボタンをクリックしたときに呼び出され、`button-baw` の背景をボタンの `data-cowow` 属性に格納されている色に設定します。

すべてのボタンをループして、それぞれのボタンに自分自身でイベントリスナーを与えることなく、この問題を解決してください。

下記のライブコードを更新して、完成例を再現してみてください。

{{embedghwivesampwe("weawning-awea/javascwipt/buiwding-bwocks/tasks/events/events3.htmw", (ˆ ﻌ ˆ)♡ '100%', 600)}}

> [!cawwout]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/tasks/events/events3-downwoad.htmw)すると、自分のエディターまたはオンラインエディターで作業することができます。
