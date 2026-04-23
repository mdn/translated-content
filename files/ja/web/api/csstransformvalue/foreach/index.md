---
title: "CSSTransformValue: forEach() メソッド"
short-title: forEach()
slug: Web/API/CSSTransformValue/forEach
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSS Typed OM")}}

**`CSSTransformValue.forEach()`** メソッドは、指定された関数を `CSSTransformValue` の各要素に対して一度だけ実行します。

## 構文

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 各要素に対して実行する関数で、3 つの引数を取ります。
    - `currentValue`
      - : 現在処理中の要素の値です。
    - `index` {{optional_inline}}
      - : 現在処理中の要素の位置です。
    - `array` {{optional_inline}}
      - : `forEach()` が実行されている `CSSTransformValue` です。

- `thisArg` {{Optional_inline}}
  - : `callback` が実行されるときに **`this`** として扱われる値（すなわち、 `Object` の参照）です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

To Do

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
