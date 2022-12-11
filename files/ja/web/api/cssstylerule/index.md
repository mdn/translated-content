---
title: CSSStyleRule
slug: Web/API/CSSStyleRule
---

{{ APIRef("CSSOM") }}

**`CSSStyleRule`** は、単一の CSS スタイル規則を表します。これは、型定数の値が `1` (`CSSRule.STYLE_RULE`) の {{domxref("CSSRule")}} インターフェイスを実装します。

## プロパティ

- {{domxref("CSSStyleRule.selectorText")}}
  - : この規則のセレクターのテキスト表現を返します。例: `"h1,h2"`
- {{domxref("CSSStyleRule.style")}} {{readonlyinline}}
  - : この規則の {{domxref("CSSStyleDeclaration")}} オブジェクトを返します。
- {{domxref("CSSStyleRule.styleMap")}} {{readonlyinline}}
  - : {{domxref('StylePropertyMap')}} オブジェクトを返し、これによってこの規則のプロパティと値の組へアクセスできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.CSSStyleRule")}}
