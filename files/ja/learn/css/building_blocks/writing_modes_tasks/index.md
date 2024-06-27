---
title: "スキルテスト: 書字方向と論理的プロパティ"
slug: Learn/CSS/Building_blocks/Writing_Modes_Tasks
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}

このスキルテストの目的は、 [CSS の書字方向と論理的プロパティを使用した様々なテキストの方向を扱う](/ja/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)方法を理解しているかどうかを評価することです。

> **メモ:** このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターで解決策を試すことができます。
>
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してみてください。

## 課題 1

この課題では、ボックスが横書きで表示されています。 CSS の行を追加して、右から左へ流れる縦書きを使用するように変更することができますか？

最終的には下記画像のようになるはずです。

![縦書きのボックス](mdn-writing-modes1.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/writing-modes/writing-mode.html", '100%', 800)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/writing-modes/writing-mode-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 課題 2

この課題では、ボックスを縦にしたときの縦横比を維持するために、 `width` と `height` を置き換える論理プロパティを使用してください。

最終的には下記画像のようになるはずです。

![一方は横書き、もう一方は縦書きの 2 つのボックス](mdn-writing-modes2.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/writing-modes/logical-width-height.html", '100%', 1100)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/writing-modes/logical-width-height-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 課題 3

この課題では、マージン、境界線、パディングプロパティの論理的なバージョンを使用して、ボックスの辺が上、左、下、右に続くのではなく、テキストに関連するようにしてください。

最終的には下記画像のようになるはずです。

![様々なマージン、境界、パディングを持つ、一方は横書き、一方は縦書きの 2 つのボックス](mdn-writing-modes3.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/writing-modes/logical-mbp.html", '100%', 1100)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/writing-modes/logical-mbp-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。
