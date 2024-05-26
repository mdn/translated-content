---
title: "スキルテスト: グリッド"
slug: Learn/CSS/CSS_layout/Grid_skills
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}

このスキルテストの目的は、[グリッドとグリッドアイテム](/ja/docs/Learn/CSS/CSS_layout/Grids)の動作を理解しているかどうかを評価することです。今までに使用した素材のさまざまな要素を使用する、いくつかの小さな課題に取り組んでいただきます。

> **メモ:** 以下の対話型エディターで取り組むことができます。ただし、コードをダウンロードし、[CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインツールを使用して作業したほうが便利な場合もあります。
>
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題 1

この課題では、 4 つの子要素が自動配置されるグリッドを作成しましょう。グリッドは、利用できる空間を均等に共有する 3 つの段組みがあり、列と行のトラックの間には 20 ピクセルの間隔があるはずです。その後、 `grid` クラスを持つ親コンテナーの中にさらに子コンテナーを追加し、既定でどのように動作するかを試してみてください。

最終結果は下記の画像のようになるはずです。

![4 つのアイテムが配置された 3 段組み。](grid-task1.png)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid1-download.html)しましょう。

## 課題 2

この課題では、すでにグリッドを定義してあります。 2 つの子要素の CSS ルールを編集して、それぞれ複数のグリッドトラックにまたがるようにしてください。下記の画像のように、 2 つ目の項目が最初の項目の上に重なるようにしてください。

![内部に 2 つのアイテムがあり、一方がもう一方に重なっているボックス。](grid-task2.png)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid2.html", '100%', 900)}}

追加課題:

- これで、ソースの項目の順番を変えずに、最初の項目が一番上に表示されるようにすることができますか？

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid2-download.html)しましょう。

## 課題 3

この課題では、このグリッドに 4 つの直接の子供があります。この点では、自動配置を使用して表示されています。 grid-area プロパティと grid-template-areas プロパティを使用して、下記の通りアイテムを表示させましょう。

![Four items displayed in a grid.](grid-task3.png)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid3.html", '100%', 800)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid3-download.html)しましょう。

## 課題 4

この課題では、グリッドレイアウトとフレックスボックスの両方を使用して、下記画像のような例を再現してください。列と行のトラックの間隔は 10px にします。これを実現するために HTML を変更する必要はありません。

![カードが 2 行に並び、それぞれに画像とタグが設定されています。](grid-task4.png)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid4.html", '100%', 2000)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/grid/grid4-download.html)しましょう。
