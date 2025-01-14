---
title: "スキルテスト: イベント"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Events
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、あなたが[イベント入門](/ja/docs/Learn_web_development/Core/Scripting/Events)の記事を理解したかどうかを判定することです。

> [!NOTE]
> コードをダウンロードして、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに入力することで解答を試すことができます。
> エラーがある場合、ページの結果パネルまたはブラウザーの JavaScript コンソールでログ出力するので、助けになります。
>
> もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## DOM 操作: 有益なもの

下記の問題の中には、 [DOM](/ja/docs/Glossary/DOM) を操作するコードを書くことを求められるものがあります。例えば、新しい HTML 要素を作成し、そのテキストコンテンツが特定の文字列値と等しくなるように設定し、ページ上の既存の要素の中にその要素を入れるというようなことです。すべて JavaScript を使用します。

このコースの中ではまだ明確に教えていませんが、この API を使用する例をいくつか見ていると思いますので、問題にうまく答えるためにはどのような DOM API が必要なのかを調べてみてください。私たちの [DOM スクリプト操作入門](/ja/docs/Learn_web_development/Core/Scripting/DOM_scripting)チュートリアルが良い出発点になるでしょう。

## イベント 1

イベント関連の最初の課題では、ボタン (`btn`) がクリックされたときにボタン内のテキストを変化させ、再度クリックされたときに元に戻す単純なイベントハンドラーを作成する必要があります。

HTML は変更しないでください。 JavaScript のみを変更してください。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events1.html", '100%', 400)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events1-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。

## イベント 2

さて、キーボードイベントを見ていきましょう。この評価に合格するには、キーボードの WASD キーが押されたときに指定されたキャンバスの周りを円が移動するイベントハンドラーを作る必要があります。円は関数 `drawCircle()` で描画します。関数 `drawCircle()` は以下の引数を入力として受け取ります。

- `x` — 円の X 座標。
- `y` — 円の Y 座標。
- `size` — 円の半径。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events2.html", '100%', 650)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events2-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。

## イベント 3

イベント関連の次の課題では、`<button>` の親要素 (`<div class="button-bar"> ... </div>`) にイベントリスナーを設定する必要があります。このイベントリスナーは、いずれかのボタンをクリックしたときに呼び出され、`button-bar` の背景をボタンの `data-color` 属性に格納されている色に設定します。

すべてのボタンをループして、それぞれのボタンに自分自身でイベントリスナーを与えることなく、この問題を解決してください。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events3.html", '100%', 600)}}

> [!CALLOUT]
>
> [この課題の最初の状態をダウンロード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events3-download.html)すると、自分のエディターまたはオンラインエディターで作業することができます。
