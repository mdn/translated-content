---
title: レイアウトモード
slug: Glossary/Layout_mode
original_slug: Web/CSS/Layout_mode
---

[CSS](/ja/docs/Web/CSS) の**レイアウトモード** (または単に「レイアウト」) は、ボックスの位置やサイズを、兄弟要素や祖先要素のボックスとの相互作用を踏まえて決めるアルゴリズムです。複数のレイアウトモードがあります。

- _[通常フロー](/ja/docs/Web/CSS/Guides/Display/Flow_layout)_ — すべての要素は何かの操作をして外さない限り、通常フローの一部です。通常フローは、段落のようなボックスをレイアウトするための*ブロックレイアウト*と、テキストのような行内アイテムをレイアウトするための*インラインレイアウト*を含みます。
- [_表レイアウト_](/ja/docs/Web/CSS/Guides/Table)は、表のレイアウトのためのものです。
- *浮動レイアウト*は、アイテムを左または右に配置して、残りの部分はそれを回り込む通常フローにするためのものです。
- [_位置指定レイアウト_](/ja/docs/Web/CSS/Guides/Positioned_layout)は、他要素とほとんど相互作用のない位置指定要素のためのものです。
- [_段組みレイアウト_](/ja/docs/Web/CSS/Guides/Multicol_layout)は、新聞のように複数の段でコンテンツをレイアウトするためのものです。
- [_フレックスボックスレイアウト_](/ja/docs/Web/CSS/Guides/Flexible_box_layout)は、滑らかに大きさが変更できる複雑なページのレイアウトに使われます。
- [_グリッドレイアウト_](/ja/docs/Web/CSS/Guides/Grid_layout)は、固定グリッドを基準にした要素配置に使われます。

> [!NOTE]
> レイアウトモードによって、使える [CSS プロパティ](/ja/docs/Web/CSS/Reference)に制限があります。多くは 1 つか 2 つのレイアウトモードで用いられ、別のレイアウトモードに関わる要素に設定しても効果がありません。

## 関連情報

- CSS の主要概念:
  - [CSS の構文](/ja/docs/Web/CSS/Guides/Syntax/Introduction)
  - [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)
  - [コメント](/ja/docs/Web/CSS/Guides/Syntax/Comments)
  - [詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)
  - [継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
  - [視覚整形モデル](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [マージンの相殺](/ja/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - 値
    - [初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)
    - [計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)
    - [使用値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値)
    - [実効値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#実効値)
  - [値の定義構文](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - [置換要素](/ja/docs/Web/CSS/Guides/Images/Replaced_element_properties)
