---
title: CSS 表示方法
slug: Web/CSS/CSS_Display
tags:
  - CSS
  - CSS 表示方法
  - ガイド
  - 概要
  - リファレンス
translation_of: Web/CSS/CSS_Display
---
{{CSSRef}}

**CSS 表示方法** (CSS Display) は CSS のモジュールの一つで、 CSS の整形ボックスツリーがどのように文書の要素ツリーから生成されるかを定義し、制御するプロパティを定義します。

## リファレンス

### CSS プロパティ

- {{CSSxRef("display")}}

### CSS データ型

- {{CSSxRef("&lt;display-outside&gt;")}}
- {{CSSxRef("&lt;display-inside&gt;")}}
- {{CSSxRef("&lt;display-listitem&gt;")}}
- {{CSSxRef("&lt;display-box&gt;")}}
- {{CSSxRef("&lt;display-internal&gt;")}}
- {{CSSxRef("&lt;display-legacy&gt;")}}

## ガイド

- [display の新しい 2 値構文への対応](/ja/docs/Web/CSS/display/two-value_syntax_of_display)

### CSS フローレイアウト (`display: block`, `display: inline`)

- [通常フローでのブロックおよびインラインレイアウト](/ja/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [フローレイアウトとオーバーフロー](/ja/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow)
- [フローレイアウトと書字方向](/ja/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
- [整形コンテキストの紹介](/ja/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- [フロー内とフローの外](/ja/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)

### `display: flex`

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
- [主軸に沿ったフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
- [フレックスアイテムの折り返しのマスター](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
- [フレックスアイテムの並べ替え](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
- [フレックスボックスと他のレイアウト方法の関係](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
- [フレックスボックスの後方互換性](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [フレックスボックスの典型的な用途](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)

### `display: grid`

- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [グリッドレイアウトと他のレイアウト方法との関係](/ja/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [線に基づく配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [グリッドテンプレート領域](/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [名前付きグリッド線を使用したレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [グリッドレイアウトでの自動配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [グリッドと論理的な値と書字方向](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)
- [CSS グリッドレイアウトとアクセシビリティ](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS グリッドレイアウトとプログレッシブエンハンスメント](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [グリッドを使用したよくあるレイアウトの実現](/ja/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

## 仕様書

| 仕様書                                                             | 状態                      | 備考                                                                     |
| ------------------------------------------------------------------ | ------------------------- | ------------------------------------------------------------------------ |
| {{SpecName("CSS3 Display", "#the-display-properties", "display")}} | {{Spec2("CSS3 Display")}} | `run-in`, `flow`, `flow-root`, `contents` および複数のキーワード値を追加 |
| {{SpecName("CSS2.1", "visuren.html#display-prop", "display")}}     | {{Spec2("CSS2.1")}}       | テーブルモデルの値と `inline-block` を追加                               |
| {{SpecName("CSS1", "#display", "display")}}                        | {{Spec2("CSS1")}}         | 初回定義。基本的な値: `none`, `block`, `inline`, `list-item`             |

CSS Display 仕様書 Level 3 に加え、他の仕様書でも display の様々な値の動作を定義しています。

## ブラウザーの互換性

{{Compat("css.properties.display", 10)}}
