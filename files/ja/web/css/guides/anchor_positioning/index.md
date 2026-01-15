---
title: CSS アンカー位置指定
short-title: アンカー位置指定
slug: Web/CSS/Guides/Anchor_positioning
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

**CSS アンカー位置指定** (CSS anchor positioning) モジュールでは、要素を互いに結びつける機能を定義しています。特定の要素が**アンカー要素**として定義され、**アンカー位置指定要素**は、結びつけられたアンカー要素のサイズと位置に基づいて、サイズと位置を設定することができます。

さらに、この仕様では、次の機能を CSS のみで実装する方法も提供します。

- アンカー要素の代替位置のセットを指定します。既定のレンダリング位置によって、それが包含ブロックからはみ出したり、画面外に表示されたりする場合、ブラウザーは代わりに代替位置にアンカー要素をレンダリングしようとします。
- アンカー要素に結びつけることが適切ではない状況において、アンカー位置指定要素を隠す条件を宣言します。

## リファレンス

### プロパティ

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try-order")}}
- {{cssxref("position-try")}} 一括指定
- {{cssxref("position-visibility")}}

CSS アンカー位置指定モジュールでは、`anchor-scope` プロパティも導入されています。現在のところ、この機能を実装しているブラウザーはありません。

### アットルールと記述子

- {{cssxref("@position-try")}}

### 関数

- [`anchor()`](/ja/docs/Web/CSS/Reference/Values/anchor)
- [`anchor-size()`](/ja/docs/Web/CSS/Reference/Values/anchor-size)

### データ型と値

- [`anchor-center`](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)
- [`<anchor-side>`](/ja/docs/Web/CSS/Reference/Values/anchor#anchor-side)
- [`<anchor-size>`](/ja/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
- [`<position-area>`](/ja/docs/Web/CSS/Reference/Values/position-area_value)
- [`<try-size>`](/ja/docs/Web/CSS/Reference/Properties/position-try-order#try-size)
- [`<try-tactic>`](/ja/docs/Web/CSS/Reference/Properties/position-try-fallbacks#try-tactic)

### HTML 属性

- [`anchor`](/ja/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}

### インターフェイス

- {{domxref("CSSPositionTryDescriptors")}}
- {{domxref("CSSPositionTryRule")}}
- {{domxref("HTMLElement.anchorElement")}} {{non-standard_inline}}

## ガイド

- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)
  - : 基本的なアンカー位置指定の概念を紹介するガイドで、アンカーへの関連付け、位置指定、相対的なサイズ指定の方法を示します。

- [オーバーフローの扱い: 代替や条件付き非表示](/ja/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
  - : CSS アンカー位置指定で提供された、アンカーで位置指定された要素がコンテナーそのものやビューポートから溢れるのを防ぐためのメカニズムのガイドです。位置指定の代替オプションや、条件付きで要素を隠す方法などが含まれます。

## 関連概念

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)モジュール
  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-block-end")}}
  - {{cssxref("inset-inline-start")}}
  - {{cssxref("inset-inline-end")}}
  - {{cssxref("inset-block")}}
  - {{cssxref("inset-inline")}}
  - {{cssxref("inset")}} 一括指定
  - {{cssxref("inline-size")}}
  - {{cssxref("min-block-size")}}
  - {{cssxref("min-inline-size")}}
  - {{cssxref("block-size")}}
  - {{cssxref("max-block-size")}}
  - {{cssxref("max-inline-size")}}
  - {{cssxref("margin-block")}}
  - {{cssxref("margin-block-end")}}
  - {{cssxref("margin-block-start")}}
  - {{cssxref("margin-inline")}}
  - {{cssxref("margin-inline-end")}}
  - {{cssxref("margin-inline-start")}}
  - [インセットプロパティ](/ja/docs/Glossary/Inset_properties)
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール:
  - {{cssxref("top")}}
  - {{cssxref("left")}}
  - {{cssxref("bottom")}}
  - {{cssxref("right")}}
- [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュール:
  - {{cssxref("width")}}
  - {{cssxref("height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("max-height")}}
  - {{cssxref("margin")}}
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール:
  - {{cssxref("align-items")}}
  - {{cssxref("align-self")}}
  - {{cssxref("justify-items")}}
  - {{cssxref("justify-self")}}
  - {{cssxref("place-items")}}
  - {{cssxref("place-self")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS スクロール固定](/ja/docs/Web/CSS/Guides/Scroll_anchoring)モジュール
- [学習: CSS 位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)モジュール
- [CSS によるサイズ設定](/ja/docs/Learn_web_development/Core/Styling_basics/Sizing)
