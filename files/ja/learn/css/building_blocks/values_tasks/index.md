---
title: "スキルテスト: 値と単位"
slug: Learn/CSS/Building_blocks/Values_tasks
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}

このスキルテストの目的は、 [CSS プロパティで使われる様々な種類の値と単位](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)を理解しているかどうかを評価することです。

> **メモ:** このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターで解決策を試すことができます。
>
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してみてください。

## 課題 1

この課題では、最初のリストアイテムに16進カラーコードを使用して背景色が指定されています。課題は、異なる形式で同じ色を使用して CSS を完成させ、さらに最後のリストアイテムで背景を半透明にすることです。

- 2 つ目のリストアイテムには RGB 色を使用しましょう。
- 3 つ目には HSL 色を使用しましょう。
- 4 つ目には RGB 色を使用しますが、アルファチャンネルを `0.6` に設定しましょう。

[このリンク](https://convertingcolors.com/hex-color-86DEFA.html)で 16 進数の色の変換を探すことができます。その値を CSS で使用する方法を見つける必要があります。最終的には下記画像のようになるはずです。

![4 つのリストアイテム。最初の 3 つは同じ背景色で、最後の 1 つは明るい背景色です。](mdn-value-color.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/values/color.html", '100%', 1000)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/values/color-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 課題 2

この課題では、下記記述されているように、様々な項目のテキストのサイズを設定してください。

- `<h1>` 要素は 50 ピクセルにしてください。
- `<h2>` 要素は 2em にしてください。
- `<p>` 要素は 16 ピクセルにしてください。
- `<p>` 要素のうち、 `<h1>` の直後のものは 120% にしてください。

最終的には下記画像のようになるはずです。

![大きさの異なるいくつかのテキスト。](mdn-value-length.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/values/length.html", '100%', 1000)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/values/length-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 課題 3

この課題では、背景画像が水平方向の中央に配置され、ボックスの上部から 20％ になるように移動させます。

最終的には下記画像のようになるはずです。

![この課題では、背景画像が水平方向の中央に配置され、ボックスの上部から 20% になるように移動させます。](mdn-value-position.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/values/position.html", '100%', 800)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/values/position-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。
