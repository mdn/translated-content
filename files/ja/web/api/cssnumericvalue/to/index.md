---
title: CSSNumericValue.to()
slug: Web/API/CSSNumericValue/to
tags:
  - API
  - CSS 型付きオブジェクトモデル API
  - CSSNumericValue
  - 実験的
  - Houdini
  - メソッド
  - リファレンス
  - to()
browser-compat: api.CSSNumericValue.to
translation_of: Web/API/CSSNumericValue/to
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`to()`** は {{domxref("CSSNumericValue")}} インターフェイスのメソッドで、数値をある単位から他の単位へ変換します。

## 構文

```js
to(unit)
```

### 引数

- `unit`
  - : 変換先の単位です。

### 返値

{{domxref('CSSMathSum')}} です。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 無効な型がメソッドに渡された場合に発生します。
- {{jsxref("TypeError")}}
  - : 渡された値が加算できない場合に発生します。

## 例

```js
// Prints "0.608542cm"
console.log(CSS.px("23").to("cm").toString());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
