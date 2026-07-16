---
title: CSS 位置指定レイアウト
short-title: 位置指定レイアウト
slug: Web/CSS/Guides/Positioned_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS 位置指定レイアウト** (CSS positioned layout) モジュールは、CSS で利用できる座標ベースの位置指定およびオフセット方式、ならびにウェブページ上で要素を位置指定し重ね合わせるために使用されるプロパティを定義します。このモジュールは、相対位置指定、粘着位置指定、絶対位置指定、固定位置指定といった基本的な位置指定方法を定義することで最もよく知られています。また、位置指定された要素の描画方法と重ね合わせ方についても定義し、重ね合わせの動作と視覚的な順序を明確にします。

位置指定レイアウトモジュールは、物理的、論理的、および一括指定{{glossary("inset properties", "インセットプロパティ")}}を定義しています。論理的プロパティにより、国際化とレスポンシブデザインを考慮して開発することができるようになります。

CSS のすべてのモジュールと同様に、このモジュールはそれ以外にも影響を与え、また影響を受けます。このモジュールでは、位置指定が [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)や [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)などの他のレイアウトモジュールとどのように作用するかを規定します。[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)などの他のモジュールは、このモジュールを基盤として構築され、要素を他の要素やレイヤーに対して相対的に位置指定することを可能にします。

## リファレンス

### プロパティ

- {{cssxref("bottom")}}
- {{cssxref("inset")}}
- {{cssxref("inset-block")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-inline")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}
- {{cssxref("left")}}
- {{cssxref("overlay")}}
- {{cssxref("position")}}
- {{cssxref("right")}}
- {{cssxref("top")}}

### セレクター

- {{cssxref("::backdrop")}}

### 用語集の用語と定義

- [ブロック方向](/ja/docs/Glossary/Flow_relative_values#ブロック方向)
- [包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)
- {{glossary("Flow relative values", "フロー関連値")}}
- [インライン方向](/ja/docs/Glossary/Flow_relative_values#インライン方向)
- {{glossary("Inset properties", "インセットプロパティ")}}
- [位置指定コンテキスト](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning#位置指定コンテキスト)
- [相対位置指定](/ja/docs/Web/CSS/Reference/Properties/position#相対位置指定)
- {{glossary("Stacking context", "重ね合わせコンテキスト")}}
- [静的位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning#静的位置指定)
- {{glossary("Top layer", "最上位レイヤー")}}

## ガイド

- [z-index を理解する](/ja/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
  - : 重ね合わせコンテキストの記述法と Z 順の動作方法の説明を、いくつかの例と共に紹介します。
- [`z-index` プロパティなしの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
  - : `z-index` が使用されなかったときに適用される重ね合わせルールです。
- [浮動ボックスの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
  - : 浮動ボックスが重ね合わせでどのように扱われるかです。
- [`z-index` の使用](/ja/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
  - : `z-index` を用いてデフォルトの重ね合わせを変更する方法です。
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
  - : CSS 重ね合わせコンテキスト、新しい重ね合わせコンテキストを生成する CSS 機能、入れ子の重ね合わせコンテキストについてです。
- [学習: 位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : さまざまな位置指定値とそれらの使い方です。

## 関連する概念

- {{cssxref("float")}}
- {{cssxref("clear")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-behavior")}}
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- {{htmlelement("dialog")}} 要素

- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
  - {{cssxref("position-anchor")}}
  - {{cssxref("position-area")}}
  - {{cssxref("position-try-fallbacks")}}
  - {{cssxref("position-try-order")}}
  - {{cssxref("position-try")}} 一括指定
  - {{cssxref("position-visibility")}}

- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
  - {{cssxref("transform")}}
  - {{cssxref("transform-origin")}}
  - {{cssxref("translate")}}

## 仕様書

{{Specifications}}

## 関連情報

- その他の CSS `*-position` プロパティ:
  - {{cssxref("background-position")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-position")}}
  - {{cssxref("font-synthesis-position")}}
  - {{cssxref("font-variant-position")}}
  - {{cssxref("list-style-position")}}
  - {{cssxref("mask-position")}}
  - {{cssxref("object-position")}}
  - {{cssxref("offset-position")}}
  - {{cssxref("ruby-position")}}
  - {{cssxref("text-emphasis-position")}}
  - {{cssxref("text-underline-position")}}
- 位置関連[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)
  - {{cssxref("baseline-position")}}
  - {{cssxref("content-position")}}
  - {{cssxref("overflow-position")}}
  - {{cssxref("self-position")}}
- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
  - {{glossary("Snap positions", "スナップ位置")}}
