---
title: レイアウトモード
slug: Web/CSS/Layout_mode
---

{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の**レイアウトモード** (または単に「レイアウト」) は、ボックスの位置やサイズを、兄弟要素や祖先要素のボックスとの相互作用を踏まえて決めるアルゴリズムです。複数のレイアウトモードがあります。

- _[通常フロー](/ja/docs/Web/CSS/CSS_Flow_Layout)_ — すべての要素は何かの操作をして外さない限り、通常フローの一部です。通常フローは、段落のようなボックスをレイアウトするための*ブロックレイアウト*と、テキストのような行内アイテムをレイアウトするための*インラインレイアウト*を含みます。
- [_表レイアウト_](/ja/docs/Web/CSS/CSS_Table)は、表のレイアウトのためのものです。
- *浮動レイアウト*は、アイテムを左または右に配置して、残りの部分はそれを回り込む通常フローにするためのものです。
- [_位置指定レイアウト_](/ja/docs/Web/CSS/CSS_Positioning)は、他要素とほとんど相互作用のない位置指定要素のためのものです。
- [_段組みレイアウト_](/ja/docs/Web/CSS/CSS_Columns)は、新聞のように複数の段でコンテンツをレイアウトするためのものです。
- [_フレックスボックスレイアウト_](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)は、滑らかに大きさが変更できる複雑なページのレイアウトに使われます。
- [_グリッドレイアウト_](/ja/docs/Web/CSS/CSS_Grid_Layout)は、固定グリッドを基準にした要素配置に使われます。

> **メモ:** レイアウトモードによって、使える [CSS プロパティ](/ja/docs/Web/CSS/Reference)に制限があります。多くは 1 つか 2 つのレイアウトモードで用いられ、別のレイアウトモードに関わる要素に設定しても効果がありません。

## 関連情報

- CSS の主要概念:
  - [CSS の構文](/ja/docs/Web/CSS/Syntax)
  - [アットルール](/ja/docs/Web/CSS/At-rule)
  - [コメント](/ja/docs/Web/CSS/Comments)
  - [詳細度](/ja/docs/Web/CSS/Specificity)
  - [継承](/ja/docs/Web/CSS/inheritance)
  - [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [視覚整形モデル](/ja/docs/Web/CSS/Visual_formatting_model)
  - [マージンの相殺](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - 値
    - [初期値](/ja/docs/Web/CSS/initial_value)
    - [計算値](/ja/docs/Web/CSS/computed_value)
    - [使用値](/ja/docs/Web/CSS/used_value)
    - [実効値](/ja/docs/Web/CSS/actual_value)
  - [値の定義構文](/ja/docs/Web/CSS/Value_definition_syntax)
  - [一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)
  - [置換要素](/ja/docs/Web/CSS/Replaced_element)
