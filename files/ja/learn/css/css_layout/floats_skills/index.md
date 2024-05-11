---
title: "スキルテスト: 浮動ボックス"
slug: Learn/CSS/CSS_layout/Floats_skills
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}

このスキルテストの目的は、 [CSS の浮動ボックス](/ja/docs/Learn/CSS/CSS_layout/Floats)を理解しているかを評価するために、 {{CSSxRef("float")}} と {{CSSxRef("clear")}} プロパティと値、そして浮動ボックスをクリアするその他の方法を使用することです。今までに扱った素材のさまざまな要素を使用する、 3 つの小さな課題に取り組んでいただきます。

> **メモ:** 以下の対話型エディターで取り組むことができます。ただし、コードをダウンロードし、[CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインツールを使用して作業したほうが便利な場合もあります。
>
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題 1

この課題では、クラスが `float1` と `float2` の 2 つの要素をそれぞれ左右に浮動させる必要があります。テキストは下記の画像のように 2 つのボックスの間に現れるはずです。

![テキストの左と右に表示されている 2 つのブロック。](float-task1.png)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/float/float1.html", '100%', 900)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/float/float1-download.html)しましょう。

## 課題 2

この課題では、クラスが `float` の要素を左に浮動させてください。そして、最初の行のテキストはその要素の隣に表示し、続く行のテキスト（クラス `below` を持つ）はその下に表示していただきたいです。

最終結果は下記の画像のようになるはずです。

![テキスト行の左側に表示されるボックスで、下記にもテキストが表示されます。](float-task2.png)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/float/float2.html", '100%', 800)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/float/float2-download.html)しましょう。

## 課題 3

この課題では、浮動要素があります。浮動要素とテキストを包むボックスは、浮動要素の後ろに表示されています。利用できる最新の方法を使用して、下記の画像のようにボックスの背景を浮動要素の下まで拡張させてください。

![テキストの右に表示されるブロックで、どちらも背景色のボックスで囲まれています。](float-task3.png)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/float/float3.html", '100%', 800)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/float/float3-download.html)しましょう。
