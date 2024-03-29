---
title: "スキルテスト: フレックスボックス"
slug: Learn/CSS/CSS_layout/Flexbox_skills
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}

このスキルテストの目的は、[フレックスボックスとフレックスアイテム](/ja/docs/Learn/CSS/CSS_layout/Flexbox)がどのように動作するか理解しているかどうかを評価することです。以下にフレックスボックスを使用して作成する 4 つの一般的なデザインパターンを示します。課題はそれらを構築することです。

> **メモ:** 以下の対話型エディターで取り組むことができます。ただし、コードをダウンロードし、[CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインツールを使用して作業したほうが便利な場合もあります。
>
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題 1

この課題では、リスト項目はサイトのナビゲーションです。各アイテムの間に等しい空間の大きさで、一列に並べる必要があります。

最終結果は下記の画像のようになるはずです。

![空間を空けて並べられたフレックスアイテム。](flex-task1.png)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/flexbox/flexbox1.html", '100%', 700)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/flexbox/flexbox1-download.html)しましょう。

## 課題 2

この課題では、リストアイテムのサイズはすべて異なりますが、それぞれのアイテムにどのようなコンテンツがあっても、 3 つの等しいサイズの段組みとして表示されるようにしてください。

最終結果は下記の画像のようになるはずです。

![フレックスアイテムは、 3 つの等しい大きさの段組みでレイアウトされ、コンテンツの量が異なります。](flex-task2.png)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/flexbox/flexbox2.html", '100%', 800)}}

追加の問題です。

- これで最初のアイテムを他のアイテムの 2 倍の大きさにできますか？

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/flexbox/flexbox2-download.html)しましょう。

## 課題 3

この課題では、下記の HTML に 2 つの要素があり、クラスが `parent` の `<div>` 要素に、クラスが `child` の `<div>` 要素が格納されています。フレックスボックスを使用して、子要素を親の中央に配置してください。ここで取りうる解決策は一つではないことに注意してください。

最終結果は下記の画像のようになるはずです。

![別のボックスの中央にあるボックス。](flex-task3.png)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/flexbox/flexbox3.html", '100%', 800)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/flexbox/flexbox3-download.html)しましょう。

## 課題 4

この課題では、下記の画像のように、これらの項目を行に並べてください。

![行として表示される一連のアイテム。](flex-task4.png)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/flexbox/flexbox4.html", '100%', 1100)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/flexbox/flexbox4-download.html)しましょう。
