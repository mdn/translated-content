---
title: CSS 論理的プロパティと値
slug: Web/CSS/CSS_logical_properties_and_values
---

{{CSSRef}}

**CSS 論理的プロパティと値** (CSS Logical Properties and Values) は [CSS](/ja/docs/Web/CSS) のモジュールの一つで、論理的プロパティと値を導入して、物理的ではなく論理的に方向や寸法をマッピングして、レイアウトを制御することができるようにします。

このモジュールは以前に CSS 2.1 で定義されたプロパティについて、論理的なプロパティと値を定義します。論理的プロパティは方向を定義し、これは対応する物理的なプロパティと相対的に等価になります。

### ブロックとインライン

論理プロパティと値は、*ブロック*と*インライン*という抽象的な用語を使用して、流れに対する方向を記述します。これらの用語の物理的な意味は、[書字方向](/ja/docs/Web/CSS/CSS_Writing_Modes)に依存します。

- ブロック方向
  - : 行内のテキストの流れとは垂直の方向、つまり、横書きでは垂直方向、縦書きでは水平方向です。標準的な英語のテキストでは、垂直方向になります。
- インライン方向
  - : 行内のテキストの流れと平行の方向、つまり、横書きでは水平方向、縦書きでは垂直方向です。標準的な英語のテキストでは、水平方向になります。

## リファレンス

### 寸法のプロパティ

- {{CSSxRef("block-size")}}
- {{CSSxRef("inline-size")}}
- {{CSSxRef("max-block-size")}}
- {{CSSxRef("max-inline-size")}}
- {{CSSxRef("min-block-size")}}
- {{CSSxRef("min-inline-size")}}

### マージン、境界、パディングのプロパティ

- {{CSSxRef("border-block")}}
- {{CSSxRef("border-block-color")}}
- {{CSSxRef("border-block-end")}}
- {{CSSxRef("border-block-end-color")}}
- {{CSSxRef("border-block-end-style")}}
- {{CSSxRef("border-block-end-width")}}
- {{CSSxRef("border-block-start")}}
- {{CSSxRef("border-block-start-color")}}
- {{CSSxRef("border-block-start-style")}}
- {{CSSxRef("border-block-start-width")}}
- {{CSSxRef("border-block-style")}}
- {{CSSxRef("border-block-width")}}
- {{CSSxRef("border-color")}}
- {{CSSxRef("border-inline")}}
- {{CSSxRef("border-inline-color")}}
- {{CSSxRef("border-inline-end")}}
- {{CSSxRef("border-inline-end-color")}}
- {{CSSxRef("border-inline-end-style")}}
- {{CSSxRef("border-inline-end-width")}}
- {{CSSxRef("border-inline-start")}}
- {{CSSxRef("border-inline-start-color")}}
- {{CSSxRef("border-inline-start-style")}}
- {{CSSxRef("border-inline-start-width")}}
- {{CSSxRef("border-inline-style")}}
- {{CSSxRef("border-inline-width")}}
- {{CSSxRef("border-start-start-radius")}}
- {{CSSxRef("border-start-end-radius")}}
- {{CSSxRef("border-end-start-radius")}}
- {{CSSxRef("border-end-end-radius")}}
- {{CSSxRef("border-style")}}
- {{CSSxRef("border-width")}}
- {{CSSxRef("margin")}} (`logical` {{Experimental_Inline}} キーワード)
- {{CSSxRef("margin-block")}}
- {{CSSxRef("margin-block-end")}}
- {{CSSxRef("margin-block-start")}}
- {{CSSxRef("margin-inline")}}
- {{CSSxRef("margin-inline-end")}}
- {{CSSxRef("margin-inline-start")}}
- {{CSSxRef("padding")}} (`logical` {{Experimental_Inline}} キーワード)
- {{CSSxRef("padding-block")}}
- {{CSSxRef("padding-block-end")}}
- {{CSSxRef("padding-block-start")}}
- {{CSSxRef("padding-inline")}}
- {{CSSxRef("padding-inline-end")}}
- {{CSSxRef("padding-inline-start")}}

### 浮動と位置指定のプロパティ

- {{CSSxRef("clear")}} (`inline-end` および `inline-start` キーワード)
- {{CSSxRef("float")}} (`inline-end` および `inline-start` キーワード)
- {{CSSxRef("inset")}}
- {{CSSxRef("inset-block")}}
- {{CSSxRef("inset-block-end")}}
- {{CSSxRef("inset-block-start")}}
- {{CSSxRef("inset-inline")}}
- {{CSSxRef("inset-inline-end")}}
- {{CSSxRef("inset-inline-start")}}

### その他のプロパティ

- {{CSSxRef("caption-side")}} (`inline-end` および `inline-start` キーワード)
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("resize")}} (`block` および `inline` キーワード)
- {{CSSxRef("text-align")}} (`end` および `start` キーワード)

### 非推奨のプロパティ

- {{CSSxRef("offset-block-end")}} {{Non-standard_Inline}} {{Deprecated_Inline}} ({{CSSxRef("inset-block-end")}} に置き換え)
- {{CSSxRef("offset-block-start")}} {{Non-standard_Inline}} {{Deprecated_Inline}} ({{CSSxRef("inset-block-start")}} に置き換え)
- {{CSSxRef("offset-inline-end")}} {{Non-standard_Inline}} {{Deprecated_Inline}} ({{CSSxRef("inset-inline-end")}} に置き換え)
- {{CSSxRef("offset-inline-start")}} {{Non-standard_Inline}} {{Deprecated_Inline}} ({{CSSxRef("inset-inline-start")}} に置き換え)

### ガイド

- [論理的プロパティと値の基本概念](/ja/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts)
- [寸法の論理的プロパティ](/ja/docs/Web/CSS/CSS_Logical_Properties/Sizing)
- [マージン、境界、パディングの論理的プロパティ](/ja/docs/Web/CSS/CSS_Logical_Properties/Margins_borders_padding)
- [浮動と位置指定の論理的プロパティ](/ja/docs/Web/CSS/CSS_Logical_Properties/Floating_and_positioning)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

完全な互換性情報は、それぞれのプロパティページを参照してください。
