---
title: 最初の段落を強調表示するには
slug: Learn/CSS/Howto/Highlight_first_para
l10n:
  sourceCommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{LearnSidebar}}

このガイドでは、コンテナーの中にある最初の段落を強調表示する方法について説明します。

## 最初の段落のスタイル付け

最初の段落を大きく、太くしたいと思ったとします。最初の段落にクラスを追加して選択する方法もありますが、擬似クラスセレクターを使用した方がより柔軟です。これは、文書内の位置に基づいて段落を対象とすることができ、ソースの順序が変更された場合にクラスを手動で移動する必要がないということです。

## 擬似クラスの使用

{{cssxref("pseudo-classes", "擬似クラス")}}は、クラスを適用した時と同様に動作します。しかし、CSS はクラスセレクターを使用するのではなく、文書の構造に基づいて選択します。さまざまな擬似クラスがあり、さまざまなものを選択することができます。今回の用途では、{{cssxref(":first-child")}} を使用することにします。これは、親の最初の子である要素を選択します。

{{EmbedGHLiveSample("css-examples/howto/highlight_first_para.html", '100%', 770)}}

上のライブ例で {{cssxref(":first-child")}} を {{cssxref(":last-child")}} に変更してみると、最後の段落が選択されます。

文書内の何かを対象とする必要があるときは、利用できる{{cssxref("pseudo-classes", "擬似クラス")}}のいずれかで実現できるかどうか調べてみるとよいでしょう。

## 関連情報

- {{cssxref("pseudo-classes", "擬似クラス", "", 1)}}のリファレンスページ
- [CSS の学習: 擬似クラスと擬似要素](/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
