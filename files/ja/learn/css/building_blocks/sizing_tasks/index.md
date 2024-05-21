---
title: "スキルテスト: サイズ設定"
slug: Learn/CSS/Building_blocks/Sizing_tasks
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}

このスキルテストの目的は、 [CSS でのアイテムのサイズ設定](/ja/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)の様々な方法を理解しているかどうかを評価することです。

> **メモ:** このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターで解決策を試すことができます。
>
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してみてください。

## 課題 1

この課題では、 2 つのボックスがあります。最初のボックスは、コンテンツの量が少なくてその高さまで達しなくても、高さが少なくとも 100 ピクセルになるようにサイズを決めましょう。ただし、 100 ピクセルに収まるよりも多くのコンテンツがある場合は、コンテンツがはみ出さないようにし てください。 HTML からコンテンツを除去してこのボックスをテストし、コンテンツがなくても高さ 100 ピクセルのボックスが確保されることを確認してください。

2 つ目のボックスの高さは 100 ピクセルに固定し、コンテンツが多すぎるとはみ出るようにしてください。

![2 つのボックスがあり、 1 つはコンテンツがあふれている](mdn-sizing-height-min-height.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/height-min-height.html", '100%', 1000)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/values/color-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 課題 2

この課題では、別のボックスを格納しているボックスがあります。課題は、内側のボックスの幅を外側のボックスの幅の 60% にすることです。 {{cssxref("box-sizing")}} プロパティの値は `border-box` に設定されており、これは全体の幅がパディングと境界線を含んでいることを意味しています。また、幅（またはインラインサイズ）を使用して、内側のボックスに 10% のパディング値を与える必要があります。

最終的には下記画像のようになるはずです。

![別なボックスを内部に含むボックス](mdn-sizing-percentages.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/percentages.html", '100%', 800)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/sizing/percentages-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 課題 3

この課題では、箱の中に 2 つの画像があります。一方の画像はボックスより小さく、もう一方はボックスからはみ出す大きさです。もしボックスがレスポンシブで、大きくなったり小さくなったりするとしたら、どのプロパティを画像に適用すれば、大きい画像がボックスに収まるように縮む一方で、小さな画像は引き伸ばされないようになるでしょうか。

最終的には下記画像のようになるはずです。

![Two boxes with images in](mdn-sizing-max-width.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/max-width.html", '100%', 1200)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/sizing/max-width-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。
