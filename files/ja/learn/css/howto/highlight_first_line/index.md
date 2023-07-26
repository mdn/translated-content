---
title: 段落の最初の行を強調するには
slug: Learn/CSS/Howto/Highlight_first_line
l10n:
  sourceCommit: 904cdf09c7e328b7a15a6a4db6bc6bd31f969cce
---

{{LearnSidebar}}

このガイドでは、段落の最初の行の長さがわからない場合でも、その行をハイライトする方法をご紹介します。

## テキストの最初の行のスタイル設定

段落の最初の行を大きく、太くしたいと思います。最初の行を `<span>` で囲むと、スタイル設定ができますが、ビューポートサイズが小さいために最初の行が短くなると、スタイル設定されたテキストは次の行に回り込みます。

## 擬似要素の使用

{{cssxref("pseudo-elements", "擬似要素")}}は `<span>` の代わりになります。しかし、より柔軟です。擬似要素によって選択された正確なコンテンツは、ブラウザーがコンテンツを表示した後に計算するので、ビューポートサイズが変化しても動作するようになります。

この場合、 {{cssxref("::first-line")}} 擬似要素を使用する必要があります。これは、各段落の最初の書式化された行を選択するもので、つまり、あなたが必要とするスタイルを設定することができます。

{{EmbedGHLiveSample("css-examples/howto/highlight_first_line.html", '100%', 750)}}

> **メモ:** すべての擬似要素はこのように動作します。それらは、文書内に要素を挿入したかのように振る舞いますが、実行時に表示されるコンテンツに基づいて動的にそうします。

## 擬似要素と他のセレクターの組み合わせ

上の例では、擬似要素はすべての段落の最初の行を選択します。最初の段落の最初の行だけを選択するには、他のセレクターと組み合わせてください。それはクラスにすることができますが、この例では {{cssxref(":first-child")}} {{cssxref("pseudo-classes", "擬似クラス")}}です。これにより、 `.wrapper` の最初の子の最初の行を選択することができます。

{{EmbedGHLiveSample("css-examples/howto/highlight_first_line2.html", '100%', 700)}}

## 関連情報

- {{cssxref("pseudo-elements", "擬似要素")}}のリファレンスページ
- [CSS の学習: 擬似クラスと擬似要素](/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
