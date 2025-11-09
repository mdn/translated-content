---
title: CSS 構文
slug: Web/CSS/Guides/Syntax
original_slug: Web/CSS/CSS_syntax
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS 構文**モジュールは、一般的な用語として、カスケーディングスタイルシート (CSS) の構造と構文について記述しています。 CSS は、ウェブや他の場所での構造化文書（HTML や XML など）のレンダリングを記述するための言語として定義されています。

このモジュールはプロパティ、[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)、[関数](/ja/docs/Web/CSS/Reference/Values/Functions)、[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を定義していません。むしろ、これらの機能すべてがどのように定義されるべきか、そしてユーザーエージェントがどのように CSS を構文解析すべきかを詳しく説明しています。

### アットルール

- なし

> [!NOTE]
> このモジュールは、 {{cssxref("@charset")}} は実際のアットルールではなく、スタイルシートが文法チェックされるときに省略されるべき認識されない古いルールであると明示しています。 `@charset` の有効な使用法は、スタイルシートの先頭部分のみです。ここでは、コンテンツの処理前に、特別なバイト列として解釈されます。

## リファレンス

### 主要概念

- {{cssxref("at-rule", "アットルール")}}
- [文字エスケープ](/ja/docs/Web/CSS/Reference/Values/custom-ident#エスケープ文字)
- [CSS コメント](/ja/docs/Web/CSS/Guides/Syntax/Comments)
- [CSS 宣言](/ja/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS 宣言ブロック](/ja/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS 関数](/ja/docs/Web/CSS/Reference/Values/Functions)
- [無効なもの](/ja/docs/Web/CSS/Guides/Syntax/Error_handling)
- [スタイルルール](/ja/docs/Web/API/CSSStyleRule)

### 用語集の用語

- {{glossary("CSS_Descriptor", "CSS 記述子")}}
- {{glossary("parse", "構文解析")}}
- {{glossary("stylesheet", "スタイルシート")}}
- {{glossary("whitespace", "ホワイトスペース")}}

## ガイド

- [CSS 構文の概要: 宣言、ルールセット、文](/ja/docs/Web/CSS/Guides/Syntax/Introduction)
  - : CSS の全体的な構文、および宣言、宣言ブロック、ルールセット、文がスタイルルールを形成する方法について説明します。

- [値の定義構文](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - : CSS プロパティと関数の有効な値を定義するための正式な文法を、意味づけ制約とともに説明します。 CSS の成分値の型、結合子、乗算子を理解するためのガイドです。

- [CSS のエラー処理](/ja/docs/Web/CSS/Guides/Syntax/Error_handling)
  - : ブラウザーが不正な CSS を処理する方法の概要。

- [CSS 第一歩の学習: CSS の構文](/ja/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_の構文)
  - : CSS の構文入門を含む CSS 入門ガイドです。

## 関連概念

[CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール:

- [CSS 詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)

[CSS カスケード](/ja/docs/Web/CSS/Guides/Cascade)モジュール:

- {{cssxref("@import")}} アットルール
- {{cssxref("important")}} フラグ
- [初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)
- [計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)
- [使用値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値)
- [実効値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#実効値)
- [CSS 継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)
- {{Glossary("Property/CSS", "CSS プロパティ")}}

[変数のカスケードのための CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables)モジュール:

- [カスタムプロパティ (`--*`)](/ja/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("var")}} 関数

[CSS 条件付きルール](/ja/docs/Web/CSS/Guides/Conditional_rules) モジュール:

- {{cssxref("@media")}} アットルール
- {{cssxref("@supports")}} アットルール

[CSS オブジェクトモデル (CSSOM)](/ja/docs/Web/API/CSS_Object_Model) API:

- {{domxref("CSSValue.cssText", "cssText")}} プロパティ
- {{domxref("CSSStyleSheet.insertRule()", "insertRule(rule)")}} メソッド
- {{domxref("CSSStyleSheet.replace()", "replace(text)")}} メソッド

[WHATWG](/ja/docs/Glossary/WHATWG) 仕様書:

- {{HTMLElement("style")}} 要素
- {{HTMLElement("link")}} 要素
- [`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class) 属性
- [`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel#stylesheet) 属性

## 仕様書

{{Specifications}}

## 関連情報

- [CSS アットルール関数](/ja/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
- [CSS 値と単位](/ja/docs/Web/CSS/Guides/Values_and_units)モジュール
