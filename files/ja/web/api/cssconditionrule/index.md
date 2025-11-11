---
title: CSSConditionRule
slug: Web/API/CSSConditionRule
---

{{ APIRef("CSSOM") }}

**`CSSConditionRule`** インターフェイスを実装しているオブジェクトは、条件と文のブロックからなる単一の条件付き CSS [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を表します。

`CSSConditionRule` からは {{domxref("CSSMediaRule")}} と {{domxref("CSSSupportsRule")}} の 2 つのオブジェクトが派生しています。

{{InheritanceDiagram}}

## プロパティ

_祖先である {{domxref("CSSRule")}} および {{domxref("CSSGroupingRule")}} から継承したプロパティもあります。_

- {{domxref("CSSConditionRule.conditionText")}}
  - : ルールの条件となるテキストを表します。

## メソッド

独自のメソッドはありません。祖先である {{domxref("CSSRule")}} および {{domxref("CSSGroupingRule")}} から継承したメソッドがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [動的なスタイル情報の使用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
