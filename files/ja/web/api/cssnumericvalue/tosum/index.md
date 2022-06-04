---
title: CSSNumericValue.toSum()
slug: Web/API/CSSNumericValue/toSum
tags:
  - API
  - CSS 型付きオブジェクトモデル API
  - CSSNumericValue
  - 実験的
  - Houdini
  - メソッド
  - リファレンス
  - toSum()
browser-compat: api.CSSNumericValue.toSum
translation_of: Web/API/CSSNumericValue/toSum
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`toSum()`** は {{domxref("CSSNumericValue")}} インターフェイスのメソッドで、 {{domxref("CSSMathSum")}} オブジェクトの値を、指定した単位の値に変換するものです。

## 構文

```js
toSum(units)
```

### 引数

- `units`
  - : 変換先の単位です。

### 返値

{{domxref('CSSNumericValue')}} です。

### 例外

- {{jsxref("TypeError")}}
  - : 無効な型がメソッドに渡された場合に発生します。

## 例

```js
let v = CSS.px("23").add(CSS.percent("4")).add(CSS.cm("3")).add(CSS.in("9"));
v.toString() // => "calc(23px + 4% + 3cm + 9in)"
v.toSum("px", "percent").toString() // => "calc(1000.39px + 4%)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
