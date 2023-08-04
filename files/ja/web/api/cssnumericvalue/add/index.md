---
title: CSSNumericValue.add()
slug: Web/API/CSSNumericValue/add
---

{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`add()`** は {{domxref("CSSNumericValue")}} インターフェイスのメソッドで、指定された値を `CSSNumericValue` に加算します。

## 構文

```js
add(number);
```

### 引数

- `number`
  - : 数値または {{domxref('CSSNumericValue')}} です。

### 返値

{{domxref('CSSMathSum')}} です。

### 例外

- {{jsxref("TypeError")}}
  - : 無効な型がメソッドに渡された場合に発生します。

## 例

```js
let mathSum = CSS.px("23")
  .add(CSS.percent("4"))
  .add(CSS.cm("3"))
  .add(CSS.in("9"));
// Prints "calc(23px + 4% + 3cm + 9in)"
console.log(mathSum.toString());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
