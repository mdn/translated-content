---
title: テキストに影を追加するには
slug: Learn/CSS/Howto/Add_a_text_shadow
l10n:
  sourceCommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{LearnSidebar}}

このガイドでは、ページ上の任意のテキストに影を追加する方法を紹介します。

## テキストに影を追加

[ボックスに影を追加するガイド](/ja/docs/Learn/CSS/Howto/Add_a_shadow)では、ページ上の任意の要素に影を追加する方法を紹介しています。しかし、そのテクニックは、要素の周囲のボックスにのみ影を追加するものです。ボックス内のテキストにドロップシャドウを追加するには、異なる CSS プロパティ {{cssxref("text-shadow")}} が必要です。

`text-shadow` プロパティはいくつかの値を取ります。

- X 軸上のオフセット
- Y 軸上のオフセット
- ぼかし半径
- 色

下記の例では、X 軸のオフセットを 2px、Y 軸のオフセットを 4px、ぼかし半径を 4px、色を半透明の青に設定しています。さまざまな値を使って、影がどう変わるか試してみてください。

{{EmbedGHLiveSample("css-examples/howto/text-shadow.html", '100%', 500)}}

> **メモ:** テキストシャドウを使用すると、簡単にテキストを読みづらくなる場合があります。低コントラストのテキストを読むことが困難な閲覧者のために、選択した色が読みやすく、十分な[色コントラスト](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)になっていることを確認しておいてください。
