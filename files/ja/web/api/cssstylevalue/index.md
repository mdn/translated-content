---
title: CSSStyleValue
slug: Web/API/CSSStyleValue
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{SeeCompatTable}}{{APIRef("CSS Typed Object Model API")}}

**`CSSStyleValue`** は [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Object_Model#css_typed_object_model) (Typed OM API) のインターフェイスで、Typed OM API を通してアクセス可能なすべての CSS の値の基本クラスです。このクラスのインスタンスは、文字列が期待される場所であればどこでも使用することができます。

## CSSStyleValue を基底とするインターフェイス

`CSSStyleValue` インターフェイスを基底とするインターフェイスの一覧です。

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}

## インスタンスメソッド

- {{domxref("CSSStyleValue.parse()")}} {{Experimental_Inline}}
  - : 特定の CSS プロパティを指定された値に設定し、最初の値を {{domxref('CSSStyleValue')}} オブジェクトとして返します。
- {{domxref("CSSStyleValue.parseAll()")}} {{Experimental_Inline}}
  - : 出現したすべての特定の CSS プロパティを指定された値に設定し、それぞれが与えられた値の 1 つを格納した {{domxref('CSSStyleValue')}} オブジェクトの配列を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
