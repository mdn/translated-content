---
title: CSSGroupingRule
slug: Web/API/CSSGroupingRule
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{ APIRef("CSSOM") }}

**`CSSGroupingRule`** は [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)のインターフェイスで、内部に他のルールを持つあらゆる CSS の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには {{domxref("CSSRule")}} から継承したプロパティもあります。_

- {{domxref("CSSGroupingRule.cssRules")}} {{ReadOnlyInline}}
  - : {{domxref("CSSRuleList")}} で、このメディアルールの CSS ルールを返します。

## インスタンスメソッド

_このインターフェイスには {{domxref("CSSRule")}} から継承したメソッドもあります。_

- {{domxref("CSSGroupingRule.deleteRule")}}
  - : このスタイルシートからルールを削除します。
- {{domxref("CSSGroupingRule.insertRule")}}
  - : 現在のスタイルシートに新しいスタイルルールを挿入します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [動的なスタイル情報の使用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
