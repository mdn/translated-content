---
title: CSS ガイド
short-title: ガイド
slug: Web/CSS/Guides
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

ウェブページやアプリケーションのレイアウトに使用できる手法はいくつかあります。 MDN には様々な手法の詳細なガイドがありますが、このページではその概要を紹介します。

## 通常フロー、ブロック、インラインレイアウト

フレックスレイアウトやグリッドレイアウトを使用していない場合、コンテンツは通常のフロー、またはブロックとインラインレイアウトでレイアウトされます。これらのガイドは、このレイアウトメソッドの仕組みを理解するのに役立つでしょう。

- [通常フローでのブロック及びインラインレイアウト](/ja/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
  - : 通常のフローの紹介です。
- [フロー内とフローの外](/ja/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow)
  - : フローからアイテムを外す方法、およびそれが文書内のレイアウトにどのような影響を与えるか。
- [整形コンテキストの紹介](/ja/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
  - : 新しい整形コンテキストを作成する方法の紹介です。
- [フローレイアウトと書字方向](/ja/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
  - : 縦書きなど、異なる書字方向が使用されている場合、フローレイアウトがどのように動作するかです。
- [フローレイアウトとオーバーフロー](/ja/docs/Web/CSS/CSS_display/Flow_layout_and_overflow)
  - : オーバーフローを理解し、管理する方法です。
- [CSS 基本ボックスモデル入門](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - : ボックスモデルを理解することは CSS の基本です。このガイドでは、これがどのように動作するのかを説明します。
- [マージンの相殺の習得](/ja/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - : 通常のフローでマージンが崩壊し、期待よりも少ないマージンで終わってしまう理由をいくつか探してみましょう。
- [CSS の z-index を理解する](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
  - : 絶対位置指定、フレックスボックス、グリッドはすべて、スタック（z 軸上の要素の相対位置）を `z-index` プロパティで操作できるようにします。この記事では、その管理方法について説明します。

## 段組みレイアウト

段組みレイアウトは、よく multicol とも呼ばれますが、通常のフローにあるコンテンツを段に分割します。このレイアウトメソッドの使用方法については、次のガイドで探してみてください。

- [段組みの基本概念](/ja/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : 段組みの基本機能の概要です。
- [段のスタイル付け](/ja/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : 段組みにはスタイル設定できる箇所が制限されていますが、このガイドでは、できることについて説明します。
- [段抜きと段の均衡](/ja/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : 段をまたいで要素を配置し、段組みのコンテンツのバランスを取ります。
- [段組みでのはみ出しの扱い](/ja/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : 利用できる段の空間よりもコンテンツが多い場合、何が起こるのでしょうか？
- [段組みにおけるコンテンツの分割の扱い](/ja/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : コンテンツが段組みに分割される際のコンテンツの分割の扱い方です。

## フレックスボックス

CSS フレックスボックスレイアウトは、一般的にフレックスボックスとして知られており、ユーザーインターフェイスデザインや一次元のアイテムレイアウトに最適化されたレイアウトモデルです。フレックスレイアウトモデルでは、フレックスコンテナー内で子要素を任意の方向にレイアウトすることができ、未使用の空間を埋めるために伸長したり、親要素からあふれ出ないように縮小したりすることができます。

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : フレックスボックスの機能の概要です。
- [フレックスボックスと他のレイアウト方法の関係](/ja/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
  - : フレックスボックスが他のレイアウト方法や他の CSS 仕様とどのように関連しているか。
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : ボックス配置プロパティがフレックスボックスとどのように連携して動作するのか。
- [フレックスアイテムの並べ替え](/ja/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
  - : アイテムの順序や方向を変化させるさまざまな方法について説明し、そうすることで生じる可能性のある課題に応じた方法を取り上げます。
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : `flex-grow`、`flex-shrink`、`flex-basis` プロパティについて説明します。
- [フレックスアイテムの折り返しをマスターする](/ja/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
  - : 複数の行を含むフレックスコンテナーを作成し、それらの行に沿ってアイテムの表示を制御する方法です。
- [フレックスボックスの典型的な用途](/ja/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : フレックスボックスの典型的な用途で使用されている一般的なデザインパターンです。

## グリッドレイアウト

CSS グリッドレイアウトは、 CSS に 2 次元グリッドシステムを導入します。グリッドは、ページの主要エリアにも小さなユーザーインターフェイス要素のレイアウトにも使用することができます。

- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - : グリッドレイアウトの機能概要です。
- [グリッドレイアウトと他のレイアウト方法との関係](/ja/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
  - : グリッドが、配置、サイズ、フレックスボックスといった他の方法とどのように関連しているか。
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
  - : アイテムを番号付けされた行に配置する方法。
- [グリッドテンプレート領域](/ja/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
  - : グリッドテンプレート構文を使用してアイテムの場所を指定する方法。
- [名前付きグリッド線を使用したレイアウト](/ja/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
  - : 線の名前の付け方、および数値ではなく線名でアイテムを配置する方法。
- [グリッドレイアウトでの自動配置](/ja/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
  - : 自動配置アルゴリズムを管理し、ブラウザーがアイテムをどのように配置するかを理解する方法。
- [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
  - : アイテムを配置し、グリッドの両軸に空間を分配する方法です。
- [グリッド、論理的な値、書字方向](/ja/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
  - : グリッドで物理的ではなく相対的なフロープロパティと値を使用する方法です。
- [グリッドレイアウトとアクセシビリティ](/ja/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
  - : グリッドレイアウトを使用する際のアクセシビリティに関する考慮事項。
- [グリッドを使用したよくあるレイアウトの実現](/ja/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)
  - : グリッドを使用して、いくつかの一般的なレイアウトを作成します。
- [サブグリッド](/ja/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : グリッドレベル 2 の一部であるサブグリッド値の説明です。
- [メイソンリーレイアウト](/ja/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : グリッドレベル 3 にあるメイソンリーレイアウト機能の説明です。

## 配置

- [ブロックレイアウトでのボックス配置](/ja/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
  - : ブロックおよびインラインレイアウト用の配置プロパティは定義されていますが、現時点では対応しているブラウザーはありません。
- [フレックスボックスでのボックス配置](/ja/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
  - : 配置プロパティは最初はフレックスボックスで現れました。このガイドでは、どのように動作するかを説明します。
- [グリッドレイアウトでのボックス配置](/ja/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
  - : グリッドレイアウトでアイテムを配置する方法です。
- [段組みレイアウトでのボックス配置](/ja/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
  - : 段組みで配置がどのように動作するかです。
