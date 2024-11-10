---
title: CSS カスケードと継承
slug: Web/CSS/CSS_cascade
l10n:
  sourceCommit: 5f0a9e8c258072ed8146401584162c232331c77d
---

{{CSSRef}}

**CSS カスケードと継承** (CSS cascade and inheritance) モジュールは、カスケードと継承によってプロパティに値を割り当てるルールを定義します。このモジュールは、すべての要素のすべてのプロパティの指定値を探すルールを指定します。

CSS の基本設計原則の一つに、ルールのカスケードがあります。これにより、複数のスタイルシートが文書の表示に影響を与えることができます。 CSS のプロパティ値の宣言は、文書の表示方法を定義します。複数の宣言が、同じ要素とプロパティの組み合わせに異なる値を設定することができますが、どの CSS プロパティでも適用できる値は 1 つだけです。 CSS カスケードモジュールは、これらの競合をどのように解決するかを定義します。

逆のことも起こりえます。プロパティの値を定義する宣言がないこともあります。 CSS カスケードモジュールは、これらの欠落した値を、継承またはプロパティの初期値からどのように設定するかを定義します。

> [!NOTE]
> ページコンテキストとそのマージンボックスの指定値を探すルールは、[CSS ページモジュール](/ja/docs/Web/CSS/CSS_paged_media)に記述されています。

## リファレンス

### プロパティ

- {{cssxref("all")}}

### アットルール

- {{cssxref("@import")}}
- {{cssxref("@layer")}}

### キーワード

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("revert-layer")}} {{Experimental_Inline}}
- {{cssxref("unset")}}
- {{cssxref("important", "!important")}} フラグ

### インターフェイス

- {{DOMXRef("CSSLayerBlockRule")}}
- {{DOMXRef("CSSGroupingRule")}}
- {{DOMXRef("CSSLayerStatementRule")}}
- {{DOMXRef("CSSRule")}}

### 主要概念と定義

- {{cssxref("Specificity", "詳細度")}}
- [カスケードオリジンと重要性](/ja/docs/Web/CSS/Cascade)
- [値](/ja/docs/Web/CSS/Value_definition_syntax)
  - [実効値](/ja/docs/Web/CSS/actual_value)
  - [計算値](/ja/docs/Web/CSS/computed_value)
  - [初期値](/ja/docs/Web/CSS/initial_value)
  - [解決値](/ja/docs/Web/CSS/resolved_value)
  - [指定値](/ja/docs/Web/CSS/specified_value)
  - [使用値](/ja/docs/Web/CSS/used_value)
- [オリジンの種類](/ja/docs/Web/CSS/Cascade#origin_types)
  - [ユーザーエージェントオリジン](/ja/docs/Web/CSS/Cascade#user-agent_stylesheets)
  - [作者オリジン](/ja/docs/Web/CSS/Cascade#author_stylesheets)
  - [ユーザーオリジン](/ja/docs/Web/CSS/Cascade#user_stylesheets)
- [レイヤーの宣言](/ja/docs/Web/CSS/@import#importing_css_rules_into_a_cascade_layer)
  - [名前付きレイヤー](/ja/docs/Learn/CSS/Building_blocks/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
  - [無名レイヤー](/ja/docs/Learn/CSS/Building_blocks/Cascade_layers#the-layer-block-at-rule-for-named-and-anonymous-layers)
- 用語集: {{glossary("style origin", "スタイルオリジン")}}

## ガイド

- [CSS カスケード入門](/ja/docs/Web/CSS/Cascade)

  - : ユーザーエージェントが異なる元から来たプロパティ値をどのように結合するかを定義するカスケードアルゴリズムのガイドです。

- [学習: カスケード、詳細度、継承](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

  - : CSS の最も基本的な概念であるカスケード、詳細度、継承は、 CSS を HTML に適用する方法や競合を解決する方法を制御します。

- [学習: カスケードレイヤー](/ja/docs/Learn/CSS/Building_blocks/Cascade_layers)

  - : [カスケードレイヤー](/ja/docs/Web/CSS/@layer) の紹介です。 [CSS カスケード](/ja/docs/Web/CSS/Cascade)と [CSS 詳細度](/ja/docs/Web/CSS/Specificity)の基本概念の上に構築された、より高度な機能です。

- [CSS 継承](/ja/docs/Web/CSS/Inheritance)
  - : CSS 継承のガイドです。

## 関連する概念

- [要素に装着されたスタイル](/ja/docs/Web/HTML/Global_attributes/style)
- [インラインスタイルとカスケード](/ja/docs/Web/CSS/Cascade#インラインスタイル)
- [@imports の条件付きルール](/ja/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)

## 仕様書

{{Specifications}}

## 関連情報

- [CSS セレクターモジュール](/ja/docs/Web/CSS/CSS_selectors)
- [CSS 議事要素モジュール](/ja/docs/Web/CSS/CSS_pseudo-elements)
- [CSS ページ付きメディアモジュール](/ja/docs/Web/CSS/CSS_paged_media)
- [CSS 条件付きルールモジュール](/ja/docs/Web/CSS/CSS_conditional_rules)
- [CSS ネストモジュール](/ja/docs/Web/CSS/CSS_nesting)
- [一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)
