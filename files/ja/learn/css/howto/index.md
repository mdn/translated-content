---
title: CSS を使ってよくある問題を解決する
slug: Learn/CSS/Howto
l10n:
  sourceCommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{LearnSidebar}}

このページでは、CSS の一般的な問題を解決するのに役立つ質問と回答、MDN サイトで公開されている他の素材について扱っています。

## ボックスのスタイル付け

- [要素にドロップシャドウを付けるには](/ja/docs/Learn/CSS/Howto/Add_a_shadow)
  - : ボックスに影を追加するには、{{cssxref("box-shadow")}} プロパティを使用します。このチュートリアルでは、その作業方法を説明し、例を示します。
- [画像を歪ませずに枠内に収めるには](/ja/docs/Learn/CSS/Howto/Fill_a_box_with_an_image)
  - : 縦横比の異なるボックスに画像を収める異なる方法が {{cssxref("object-fit")}} プロパティによって提供されており、その使用方法はこのチュートリアルで確認することができます。
- [ボックスを装飾するのに使える方法](/ja/docs/Learn/CSS/Howto/create_fancy_boxes)
  - : CSS を使用してボックスをスタイル設定する際に有益な、さまざまなプロパティを紹介します。
- [要素を半透明にするには](/ja/docs/Learn/CSS/Howto/Make_box_transparent)
  - : {{cssxref("opacity")}} プロパティや、アルファチャンネルのついたカラー値を使うと実現できます。いつどちらを使うかについて確認しましょう。

### ボックス装飾のレッスンとガイド

- [ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/The_box_model)
- [背景と境界の装飾](/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)

## CSS とテキスト

- [テキストにドロップシャドウを付けるには](/ja/docs/Learn/CSS/Howto/Add_a_text_shadow)
  - : テキストに影を追加するには、{{cssxref("text-shadow")}} プロパティを使用します。このチュートリアルでは、その作業方法を説明し、例を示します。
- [段落の最初の行を強調するには](/ja/docs/Learn/CSS/Howto/Highlight_first_line)
  - : {{cssxref("::first-line")}} 擬似要素で段落の最初の行を対象とする方法を確認しましょう。
- [記事の最初の段落を強調するには](/ja/docs/Learn/CSS/Howto/Highlight_first_para)
  - : {{cssxref(":first-child")}} 擬似クラスで最初の段落を対象とする方法を確認しましょう。
- [見出しの直後に来た段落だけを強調するには](/ja/docs/Learn/CSS/Howto/Highlight_para_after_h1)
  - : 結合子は、文書内のどこにある要素を正確に対象とするのに役立ちます。このチュートリアルでは、見出しの直後に続く段落に対して CSS を適用する方法について説明します。

### テキスト装飾のレッスンとガイド

- [テキストを装飾するには](/ja/docs/Learn/CSS/Styling_text/Fundamentals)
- [要素のリストをカスタマイズするには](/ja/docs/Learn/CSS/Styling_text/Styling_lists)
- [リンクを装飾するには](/ja/docs/Learn/CSS/Styling_text/Styling_links)
- [CSS セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)

## CSS レイアウト

- [アイテムを中央揃えするには](/ja/docs/Learn/CSS/Howto/Center_an_item)
  - : ボックスの中にあるアイテムを水平方向と垂直方向にセンタリングするのは厄介なことでしたが、フレックスボックスなら簡単にできるようになりました。

### レイアウトガイド

- [CSS フレックスボックスの使用](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [CSS 段組みレイアウトの使用](/ja/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts)
- [CSS グリッドレイアウトの使用](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [CSS 生成コンテンツ](/ja/docs/Learn/CSS/Howto/Generated_content)

> **メモ:** [CSS レイアウトの問題解決](/ja/docs/Web/CSS/Layout_cookbook)に向けた料理帳があり、良くあるレイアウトのタスクの完全に動作する例と説明が付いています。
