---
title: CSSNumericValue.max()
slug: Web/API/CSSNumericValue/max
tags:
  - API
  - CSS 型付きオブジェクトモデル API
  - CSSNumericValue
  - 実験的
  - Houdini
  - メソッド
  - リファレンス
  - max()
browser-compat: api.CSSNumericValue.max
translation_of: Web/API/CSSNumericValue/max
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`max()`** は {{domxref("CSSNumericValue")}} インターフェイスのメソッドで、渡された値の中から最も大きい値を返します。渡された値は同じ型でなければなりません。

## 構文

```js
max(number1, /* ..., */ numberN)
```

### 引数

- `number1`, …, `numberN`
  - : 数値または {{domxref('CSSNumericValue')}} です。

### 返値

A {{domxref('CSSUnitValue')}}.

### 例外

- {{jsxref("TypeError")}}
  - : 無効な型がメソッドに渡された場合に発生します。

## 例

先に述べたように、渡される値はすべて同じ型と値でなければなりません。以下のいくつかの例では、それらが異なる場合に何が起こるかを説明しています。

```js
// Prints "2cm"
console.log(CSS.cm("1").max(CSS.cm("2")).toString());

// Prints "max(1cm, 0.393701in)"
console.log(CSS.cm("1").max(CSS.in("0.393701")).toString());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
