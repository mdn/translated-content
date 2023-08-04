---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
---

{{JSRef}}

**`Number.isFinite()`** 方法會判斷傳入的值是否為有限數（finite number）。

{{EmbedInteractiveExample("pages/js/number-isfinite.html")}}

## 語法

```js-nolint
Number.isFinite(value)
```

### 參數

- `value`
  - : The value to be tested for finiteness.

### 回傳值

A {{jsxref("Boolean")}} indicating whether or not the given value is a finite number.

## 說明

In comparison to the global {{jsxref("isFinite", "isFinite()")}} function, this method doesn't forcibly convert the parameter to a number. This means only values of the type number, that are also finite, return `true`.

## 範例

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true

Number.isFinite("0"); // false, would've been true with
// global isFinite('0')
Number.isFinite(null); // false, would've been true with
// global isFinite(null)
```

## Polyfill

```js
Number.isFinite =
  Number.isFinite ||
  function (value) {
    return typeof value === "number" && isFinite(value);
  };
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- The {{jsxref("Number")}} object it belongs to.
- The global function {{jsxref("isFinite")}}.
