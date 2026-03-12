---
title: CSSStyleValue
slug: Web/API/CSSStyleValue
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("CSS Typed Object Model API")}}

**`CSSStyleValue`** は [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Object_Model#css_型付きオブジェクトモデル) (Typed OM API) のインターフェイスで、Typed OM API を通してアクセス可能なすべての CSS の値の基本クラスです。このクラスのインスタンスは、文字列が期待される場所であればどこでも使用することができます。

## CSSStyleValue を基底とするインターフェイス

`CSSStyleValue` インターフェイスを基底とするインターフェイスの一覧です。

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}

## 静的メソッド

- [`CSSStyleValue.parse()`](/ja/docs/Web/API/CSSStyleValue/parse_static)
  - : 特定の CSS プロパティを指定された値に設定し、最初の値を `CSSStyleValue` オブジェクトとして返します。
- [`CSSStyleValue.parseAll()`](/ja/docs/Web/API/CSSStyleValue/parseAll_static)
  - : 出現したすべての特定の CSS プロパティを指定された値に設定し、それぞれが与えられた値の 1 つを格納した `CSSStyleValue` オブジェクトの配列を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
