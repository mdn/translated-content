---
title: アイテムを中央揃えするには
slug: Learn/CSS/Howto/Center_an_item
l10n:
  sourceCommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{LearnSidebar}}

このガイドでは、アイテムを他の要素の中で、水平方向と垂直方向の両方にセンタリングする方法について説明します。

## ボックスの中央揃え

CSS を使用して、あるボックスを別のボックスの中に配置するには、親コンテナーで [CSS ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)プロパティを使用する必要があります。これらの配置プロパティは、ブロックやインラインレイアウトにおいてはブラウザーがまだ対応していないので、配置を使用する機能を有効にするためには、親コンテナーを[フレックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)または[グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout)にする必要があります。

下記の例では、親コンテナーに `display: flex` を指定し、水平方向に配置するために {{cssxref("justify-content")}} を center に、垂直方向に配置するために {{cssxref("align-items")}} を center に設定しています。

{{EmbedGHLiveSample("css-examples/howto/center.html", '100%', 700)}}

> **メモ:** このテクニックを使用して、1 つ以上の要素を別の要素の中に配置することができます。上の例では、{{cssxref("justify-content")}} と {{cssxref("align-items")}} の値を任意の有効な値に変更してみてください。

## 関連情報

- [フレックスボックスでのボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
- [グリッドレイアウトでのボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout)
