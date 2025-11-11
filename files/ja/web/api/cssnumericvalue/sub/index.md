---
title: CSSNumericValue.sub()
slug: Web/API/CSSNumericValue/sub
---

{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`sub()`** は {{domxref("CSSNumericValue")}} インターフェイスのメソッドで、この `CSSNumericValue` から指定された値を減算します。

## 構文

```js
sub(number);
```

### 引数

- `number`
  - : 数値または {{domxref('CSSMathSum')}} です。

### 返値

{{domxref('CSSMathSum')}} です。

### 例外

- {{jsxref("TypeError")}}
  - : 無効な型がメソッドに渡された場合に発生します。

## 例

```js
let mathSum = CSS.px("23")
  .sum(CSS.percent("4"))
  .sum(CSS.cm("3"))
  .sum(CSS.in("9"));
// Prints "calc(23px - 4% - 3cm - 9in)"
console.log(mathSum.toString());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
