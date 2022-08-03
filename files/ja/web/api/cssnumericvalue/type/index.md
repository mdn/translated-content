---
title: CSSNumericValue.type()
slug: Web/API/CSSNumericValue/type
tags:
  - API
  - CSS 型付きオブジェクトモデル API
  - CSSNumericValue
  - 実験的
  - Houdini
  - メソッド
  - リファレンス
  - Type
browser-compat: api.CSSNumericValue.type
translation_of: Web/API/CSSNumericValue/type
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`type()`** は {{domxref("CSSNumericValue")}} インターフェイスのメソッドで、 `CSSNumericValue` の型をf `angle`, `flex`,
`frequency`, `length`, `resolution`,
`percent`, `percentHint`, `time` の何れかで返します。

## 構文

```js
type()
```

### 引数

なし。

### 返値

{{domxref('CSSNumericType')}} オブジェクトです。

### 例外

なし。

## 例

```js
let mathSum = CSS.px("23").sub(CSS.percent("4")).sub(CSS.cm("3")).sub(CSS.in("9"));
// Returns an object with the structure: {length: 1, percentHint: "length"}
let cssNumericType = mathSum.type();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
