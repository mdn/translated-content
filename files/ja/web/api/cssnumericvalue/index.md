---
title: CSSNumericValue
slug: Web/API/CSSNumericValue
tags:
  - API
  - CSS 型付きオブジェクトモデル API
  - CSSNumericValue
  - 実験的
  - Houdini
  - インターフェイス
  - リファレンス
browser-compat: api.CSSNumericValue
translation_of: Web/API/CSSNumericValue
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`CSSNumericValue`** は [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Object_Model#css_typed_object_model)のインターフェイスで、すべての数値型が実行することができる操作を表します。

{{InheritanceDiagram}}

## CSSNumericValue ベースのインターフェイス

以下は、 CSSNumericValue インターフェイスをベースとするインターフェイスの一覧です。

- {{domxref('CSSMathClamp')}}
- {{domxref('CSSMathInvert')}}
- {{domxref('CSSMathMax')}}
- {{domxref('CSSMathMin')}}
- {{domxref('CSSMathNegate')}}
- {{domxref('CSSMathProduct')}}
- {{domxref('CSSMathSum')}}
- {{domxref('CSSMathValue')}}
- {{domxref('CSSNumericArray')}}
- {{domxref('CSSUnitValue')}}

## プロパティ

なし。

## メソッド

### インスタンスメソッド

- {{domxref('CSSNumericValue.add')}}
  - : 提供された数値を `CSSNumericValue` へ加算します。
- {{domxref('CSSNumericValue.sub')}}
  - : 提供された数値を `CSSNumericValue` から減算します。
- {{domxref('CSSNumericValue.mul')}}
  - : `CSSNumericValue` に提供された数値を乗算します。
- {{domxref('CSSNumericValue.div')}}
  - : `CSSNumericValue` を提供された数値で除算します。
- {{domxref('CSSNumericValue.min')}}
  - : 渡された最小値を返します。
- {{domxref('CSSNumericValue.max')}}
  - : 渡された最大値を返します。
- {{domxref('CSSNumericValue.equals')}}
  - : すべての値がまったく同じ型と値で、同じ順序であれば _true_ です。そうでなければ、_false_ です。
- {{domxref('CSSNumericValue.to')}}
  - : `value` を指定された単位に変換します。
- {{domxref('CSSNumericValue.toSum')}}
  - : 既存の `CSSNumericValue` を指定された単位の値の {{domxref("CSSMathSum")}} オブジェクトへ変換します。
- {{domxref('CSSNumericValue.type')}}
  - : `CSSNumericValue` の型を、 `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint`, `time` の何れかから返します。

### 静的メソッド

- {{domxref('CSSNumericValue.parse')}}
  - : `CSSNumericValue` を CSS の文字列から直接構築します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}
