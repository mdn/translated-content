---
title: "スキルテスト: ボックスモデル"
slug: Learn/CSS/Building_blocks/Box_Model_Tasks
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}

このスキルテストの目的は、 [CSS ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/The_box_model)を理解しているかどうかを評価することです。

> **メモ:** このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターで解決策を試すことができます。
>
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してみてください。

## 課題 1

この課題では、下記の 2 種類のボックスがあり、 1 つは標準ボックスモデル、もう 1 つは代替ボックスモデルを使用しています。 `.alternate` クラスに宣言を追加して 2 つ目のボックスの幅を変更し、最初のボックスの視覚的な幅と一致するようにしましょう。

最終的には下記画像のようになるはずです。

![2 つの同じ大きさのボックス](mdn-box-model1.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/box-model/box-models.html", '100%', 1100)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/box-model/box-models-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 課題 2

この課題では、ボックスに次のものを追加してください。

- 5px、黒、点線の境界線
- 20px の上マージン
- 1em の右マージン
- 40px の下マージン
- 2em の左マージン
- すべての辺に 1em のパディング

最終的には下記画像のようになるはずです。

![点線の境界線の付いたボックス](mdn-box-model2.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/box-model/mbp.html", '100%', 600)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/box-model/mbp-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 課題 3

この課題では、インライン要素にマージン、パディング、境界線があります。しかし、上下の行が重なっています。要素をインラインに保ちつつ、マージン、パディング、境界線のサイズが他の行から尊重されるようにするには、 CSS に何を追加すればよいでしょうか？

最終的には下記画像のようになるはずです。

![インラインボックスとその周りのテキストの間に空間があります。](mdn-box-model3.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/box-model/inline-block.html", '100%', 800)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/box-model/inline-block-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。
