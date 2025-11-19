---
title: CSS 表示方法
slug: Web/CSS/Guides/Display
original_slug: Web/CSS/CSS_display
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

**CSS 表示方法** (CSS display) モジュールは、 CSS の整形ボックスツリーがどのように文書の要素ツリーから生成されるかを定義し、制御するプロパティを定義します。

## リファレンス

### プロパティ

- {{CSSxRef("display")}}
- {{CSSxRef("order")}}
- {{CSSxRef("visibility")}}

### データ型

- {{CSSxRef("&lt;display-outside&gt;")}}
- {{CSSxRef("&lt;display-inside&gt;")}}
- {{CSSxRef("&lt;display-listitem&gt;")}}
- {{CSSxRef("&lt;display-box&gt;")}}
- {{CSSxRef("&lt;display-internal&gt;")}}
- {{CSSxRef("&lt;display-legacy&gt;")}}

### 用語集

- {{glossary("Block/CSS", "ブロック")}}
- [ブロック整形コンテキスト (BFC)](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)
- {{glossary("Block-level content", "ブロックレベルコンテンツ")}}
- [包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)
- {{glossary("Flex", "フレックス")}}
- [フローレイアウト](/ja/docs/Web/CSS/Guides/Display/Flow_layout)
- {{glossary("Grid", "グリッド")}}
- [インライン整形コンテキスト](/ja/docs/Web/CSS/Inline_formatting_context)
- {{glossary("Inline-level content", "インラインレベルコンテンツ")}}
- [置換要素](/ja/docs/Web/CSS/Guides/Images/Replaced_element_properties)
- {{glossary("Ruby", "ルビ")}}

## ガイド

- [CSS display の複数キーワード構文の使用](/ja/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)
  - : 複数キーワード構文を説明し、この構文と古い単一キーワード値とを比較します。
- [通常フローでのブロックおよびインラインレイアウト](/ja/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
  - : 通常フローの一部である場合のブロック要素とインライン要素の基本的な動作です。
- [フローレイアウトとオーバーフロー](/ja/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
  - : 通常のフローにおけるオーバーフローの動作です。
- [フローレイアウトと書字方向](/ja/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
  - : フローレイアウトが、文書内でさまざまな書字方向で使用されている場合の動作について説明します。
- [整形コンテキストの紹介](/ja/docs/Web/CSS/Guides/Display/Formatting_contexts)
  - : ブロック、インライン、フレックスなどの整形コンテキスト、それらの動作、使用について説明します。
- [フロー内とフローの外](/ja/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)
  - : 何がフローから要素を切り離すのか、そして新しいブロック整形コンテキストを作成する効果について。

## 関連概念

### プロパティ

- {{cssxref("transition-behavior")}}
- {{cssxref("overflow")}}

### ガイド

- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
  - [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
  - [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
  - [主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - [フレックスアイテムの折り返しをマスターする](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
  - [フレックスアイテムの順序](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
  - [フレックスボックスと他のレイアウト方法の関係](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
  - [フレックスボックスの典型的な用途](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)

- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
  - [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - [グリッドレイアウトと他のレイアウト方法との関係](/ja/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
  - [線に基づく配置を使用したグリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
  - [グリッドテンプレート領域](/ja/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
  - [名前付きグリッド線を使用したレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
  - [グリッドレイアウトでの自動配置](/ja/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
  - [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
  - [グリッド、論理的な値、書字方向](/ja/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
  - [グリッドレイアウトとアクセシビリティ](/ja/docs/Web/CSS/Guides/Grid_layout/Accessibility)
  - [グリッドを使用したよくあるレイアウトの実現](/ja/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)

## 仕様書

{{Specifications}}

## 関連情報

- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
- [CSS ルビレイアウト](/ja/docs/Web/CSS/Guides/Ruby_layout)モジュール
- [CSS 表](/ja/docs/Web/CSS/Guides/Table)モジュール
- [視覚整形モデル](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model)
