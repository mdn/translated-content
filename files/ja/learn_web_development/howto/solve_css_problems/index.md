---
title: よくある CSS の問題の解決
slug: Learn_web_development/Howto/Solve_CSS_problems
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

このページでは、CSS の一般的な問題を解決するのに役立つ質問と回答、MDN サイトで公開されている他の素材について扱っています。

## ボックスのスタイル設定

- [要素にドロップシャドウを付けるには](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow)
  - : ボックスに影を追加するには、{{cssxref("box-shadow")}} プロパティを使用します。このチュートリアルでは、その作業方法を説明し、例を示します。
- [画像を歪ませずに枠内に収めるには](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image)
  - : 縦横比の異なるボックスに画像を収める異なる方法が {{cssxref("object-fit")}} プロパティによって提供されており、その使用方法はこのチュートリアルで確認することができます。
- [ボックスを装飾するのに使える方法](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)
  - : CSS を使用してボックスをスタイル設定する際に有益な、さまざまなプロパティを紹介します。
- [要素を半透明にするには](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent)
  - : {{cssxref("opacity")}} プロパティや、アルファチャンネルのついたカラー値を使うと実現できます。いつどちらを使うかについて確認しましょう。

### ボックス装飾のレッスンとガイド

- [ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [背景と境界の装飾](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)

## CSS とテキスト

- [テキストにドロップシャドウを付けるには](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow)
  - : テキストに影を追加するには、{{cssxref("text-shadow")}} プロパティを使用します。このチュートリアルでは、その作業方法を説明し、例を示します。
- [段落の最初の行を強調するには](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_line)
  - : {{cssxref("::first-line")}} 擬似要素で段落の最初の行を対象とする方法を確認しましょう。
- [記事の最初の段落を強調するには](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para)
  - : {{cssxref(":first-child")}} 擬似クラスで最初の段落を対象とする方法を確認しましょう。
- [見出しの直後に来た段落だけを強調するには](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1)
  - : 結合子は、文書内のどこにある要素を正確に対象とするのに役立ちます。このチュートリアルでは、見出しの直後に続く段落に対して CSS を適用する方法について説明します。

### テキストのスタイル設定のレッスンとガイド

- [テキストをスタイル設定するには](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [要素のリストをカスタマイズするには](/ja/docs/Learn_web_development/Core/Text_styling/Styling_lists)
- [リンクをスタイル設定するには](/ja/docs/Learn_web_development/Core/Text_styling/Styling_links)
- [CSS セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

## CSS レイアウト

- [アイテムを中央揃えするには](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Center_an_item)
  - : ボックスの中にあるアイテムを水平方向と垂直方向にセンタリングするのは厄介なことでしたが、フレックスボックスなら簡単にできるようになりました。

### レイアウトガイド

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [CSS 段組みレイアウトの使用](/ja/docs/Web/CSS/Guides/Multicol_layout/Using)
- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [CSS 生成コンテンツ](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)

> [!NOTE]
> [CSS レイアウトの問題解決](/ja/docs/Web/CSS/How_to/Layout_cookbook)に向けた料理帳があり、良くあるレイアウトのタスクの完全に動作する例と説明が付いています。また、[実践的な位置指定の例](/ja/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples)では、位置指定を使用してタブ付きの情報ボックスやスライド式の隠しパネルを作成することができますので、調べてみてください。
