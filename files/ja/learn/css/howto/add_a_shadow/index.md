---
title: 要素に影を追加するには
slug: Learn/CSS/Howto/Add_a_shadow
l10n:
  sourceCommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{LearnSidebar}}

このガイドでは、ページ上の任意のボックスに影を追加する方法を紹介します。

## ボックスに影を追加

影は、ページ上で要素を目立たせるために役立つ、一般的なデザイン機能です。CSS では、要素のボックスの影は {{cssxref("box-shadow")}} プロパティを使用して作成します（テキスト自体に影を追加したい場合は {{cssxref("text-shadow")}} が必要です）。

`box-shadow` プロパティは、いくつかの値を取ります。

- X 軸上のオフセット
- Y 軸上のオフセット
- ぼかし半径
- 拡散半径
- 色
- `inset` キーワード

下記例では、X 軸と Y 軸を 5px、ぼかしを 10px、広がりを 2px に設定しています。色として半透明の黒を使用しています。異なる値でシャドウがどのように変わるか、試してみてください。

{{EmbedGHLiveSample("css-examples/howto/box-shadow-button.html", '100%', 500)}}

> **メモ:** この例では `inset` を使用していません。これは、シャドウが既定のドロップシャドウであり、シャドウの上にボックスがあることを意味しています。インセットシャドウは、コンテンツがページに押し込まれているかのように、ボックスの内側に現れます。

## 関連情報

- [ボックスの影作成ツール](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Box-shadow_generator)
- [CSS の学習: 高度な装飾効果](/ja/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
