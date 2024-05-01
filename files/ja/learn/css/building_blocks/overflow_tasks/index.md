---
title: "スキルテスト: オーバーフロー"
slug: Learn/CSS/Building_blocks/Overflow_Tasks
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}

このスキルテストの目的は、 [CSS のオーバーフローとその管理方法](/ja/docs/Learn/CSS/Building_blocks/Overflowing_content)方法を理解しているかどうかを評価することです。

> **メモ:** このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターで解決策を試すことができます。
>
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してみてください。

## 課題 1

この課題では、高さが固定されているため、コンテンツがボックスからはみ出しています。高さは維持したまま、オーバーフローを発生させるのに十分なテキストがある場合にのみ、ボックスにスクロールバーを表示させるようにしてください。 HTML からテキストの一部を除去し、テキストが少量しかなくオーバーフローがなくなった場合、スクロールバーが現れないことをテストしてください。

![境界線と垂直スクロールバーのある小さなボックス。](mdn-overflow1.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/overflow/overflow-scroll.html", '100%', 1000)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/overflow/overflow-scroll-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 課題 2

この課題では、ボックスの中に、ボックスの寸法よりも大きい画像があり、それが目に見えるほどはみ出しています。ボックスの外側の画像は隠れるように変更してください。

最終的には下記画像のようになるはずです。

![画像は枠いっぱいに表示されますが、枠からはみ出てはいません。](mdn-overflow2.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/overflow/overflow-hidden.html", '100%', 1200)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/overflow/overflow-hidden-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。
