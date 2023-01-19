---
title: CSSPageRule
slug: Web/API/CSSPageRule
---

{{APIRef("CSSOM")}}

**`CSSPageRule`** は、1 個の CSS {{cssxref("@page")}} 規則を表すインターフェイスです。これは、型定数の値が `6` (`CSSRule.PAGE_RULE`) の {{domxref("CSSRule")}} インターフェイスを実装します。

## 構文

構文は、[WebIDL](http://dev.w3.org/2006/webapi/WebIDL/) 形式で記述されます。

```
interface CSSPageRule : CSSRule {
  attribute DOMString selectorText;
  readonly attribute CSSStyleDeclaration style;
};
```

## プロパティ

{{domxref("CSSRule")}} として、`CSSPageRule` は、このインターフェイスのプロパティも実装します。これは、次の固有のプロパティを持ちます:

- {{domxref("CSSPageRule.selectorText")}}
  - : アット規則に関連付けられたページセレクターのテキストを表す。
- {{domxref("CSSPageRule.style")}} {{readonlyinline}}
  - : アット規則に関連付けられた宣言ブロックを返す。

## メソッド

{{domxref("CSSRule")}} として、`CSSPageRule` は、このインターフェイスのメソッドも実装します。固有のメソッドはありません。

## 仕様

{{Specifications}}

## ブラウザーの実装状況

{{Compat("api.CSSPageRule")}}
