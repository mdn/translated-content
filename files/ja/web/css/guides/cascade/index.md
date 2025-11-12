---
title: CSS カスケードと継承
slug: Web/CSS/Guides/Cascade
original_slug: Web/CSS/CSS_cascade
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

**CSS カスケードと継承** (CSS cascading and inheritance) モジュールは、カスケードと継承によってプロパティに値を割り当てるルールを定義します。このモジュールは、すべての要素のすべてのプロパティの指定値を探すルールを指定します。

CSS の基本設計原則の一つに、ルールのカスケードがあります。これにより、複数のスタイルシートが文書の表示に影響を与えることができます。 CSS のプロパティ値の宣言は、文書の表示方法を定義します。複数の宣言が、同じ要素とプロパティの組み合わせに異なる値を設定することができますが、どの CSS プロパティでも適用できる値は 1 つだけです。 CSS カスケードモジュールは、これらの競合をどのように解決するかを定義します。

逆のことも起こりえます。プロパティの値を定義する宣言がないこともあります。 CSS カスケードモジュールは、これらの欠落した値を、継承またはプロパティの初期値からどのように設定するかを定義します。

> [!NOTE]
> ページコンテキストとそのマージンボックスの指定値を探すルールは、[CSS ページモジュール](/ja/docs/Web/CSS/Guides/Paged_media)に記述されています。

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
- {{cssxref("revert-layer")}}
- {{cssxref("unset")}}
- {{cssxref("important", "!important")}} フラグ

### インターフェイス

- {{DOMXRef("CSSLayerBlockRule")}}
- {{DOMXRef("CSSGroupingRule")}}
- {{DOMXRef("CSSLayerStatementRule")}}
- {{DOMXRef("CSSRule")}}

### 用語集と定義

- [実効値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#実効値)
- [無名レイヤー](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#名前付きまたは無名レイヤーのための_layer_ブロックのアットルール)
- [作成者オリジン](/ja/docs/Web/CSS/Guides/Cascade/Introduction#作成者スタイルシート)
- [カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)
- [計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)
- [初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)
- [名前付きレイヤー](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#名前付きレイヤーのための_layer_文のアットルール)
- [解決値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#解決値)
- [一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)
- [指定値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#指定値)
- {{glossary("style origin", "スタイルオリジン")}}
- [使用値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値)
- [ユーザーオリジン](/ja/docs/Web/CSS/Guides/Cascade/Introduction#ユーザースタイルシート)
- [ユーザーエージェントオリジン](/ja/docs/Web/CSS/Guides/Cascade/Introduction#ユーザーエージェントスタイルシート)

## ガイド

- [CSS カスケード入門](/ja/docs/Web/CSS/Guides/Cascade/Introduction)
  - : ユーザーエージェントが異なる元から来たプロパティ値をどのように結合するかを定義するカスケードアルゴリズムのガイドです。

- [CSS の継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)
  - : CSS の継承のガイドです。

- [学習: 競合の処理](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : CSS の最も基本的な概念であるカスケード、詳細度、継承は、 CSS を HTML に適用する方法や競合を解決する方法を制御します。

- [学習: カスケードレイヤー](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : [カスケードレイヤー](/ja/docs/Web/CSS/Reference/At-rules/@layer) の紹介です。 [CSS カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)と [CSS 詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)の基本概念の上に構築された、より高度な機能です。

## 関連概念

- [要素に装着されたスタイル](/ja/docs/Web/HTML/Reference/Global_attributes/style)
- [インラインスタイルとカスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction#インラインスタイル)
- [@imports の条件付きルール](/ja/docs/Web/CSS/Reference/At-rules/@import#条件付きで_css_ルールをインポート)
- [値定義構文](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

## 仕様書

{{Specifications}}

## 関連情報

- [CSS セレクターモジュール](/ja/docs/Web/CSS/Guides/Selectors)
- [CSS 議事要素モジュール](/ja/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS ページ付きメディアモジュール](/ja/docs/Web/CSS/Guides/Paged_media)
- [CSS 条件付きルールモジュール](/ja/docs/Web/CSS/Guides/Conditional_rules)
- [CSS ネストモジュール](/ja/docs/Web/CSS/Guides/Nesting)
- [一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
