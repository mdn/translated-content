---
title: CSSGroupingRule
slug: Web/API/CSSGroupingRule
tags:
  - API
  - CSSOM
  - インターフェイス
  - リファレンス
browser-compat: api.CSSGroupingRule
translation_of: Web/API/CSSGroupingRule
---
{{ APIRef("CSSOM") }}

**`CSSGroupingRule`** は [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)のインターフェイスで、内部に他のルールを持つあらゆる CSS の[アットルール](/ja/docs/Web/CSS/At-rule)を表します。

{{InheritanceDiagram}}

## プロパティ

_このインターフェイスには {{domxref("CSSRule")}} から継承したプロパティもあります。_

- {{domxref("CSSGroupingRule.cssRules")}}{{readonlyinline}}
  - : {{domxref("CSSRuleList")}} で、このメディアルールの CSS ルールを返します。

## メソッド

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
