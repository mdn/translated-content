---
title: CSSTransformValue.forEach()
slug: Web/API/CSSTransformValue/forEach
l10n:
  sourceCommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`CSSTransformValue.forEach()`** メソッドは、指定された関数を `CSSTransformValue` の各要素に対して一度だけ実行します。

## 構文

```js-nolint
// アロー関数
forEach((currentValue) => { /* … */ } )
forEach((currentValue, index) => { /* … */ } )
forEach((currentValue, index, array) => { /* … */ } )

// コールバック関数
forEach(callbackFn)
forEach(callbackFn, thisArg)

// インラインコールバック関数
forEach(function(currentValue) { /* … */ })
forEach(function(currentValue, index) { /* … */ })
forEach(function(currentValue, index, array) { /* … */ })
forEach(function(currentValue, index, array) { /* … */ }, thisArg)
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
