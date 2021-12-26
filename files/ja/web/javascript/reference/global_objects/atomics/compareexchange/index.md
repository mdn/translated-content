---
title: Atomics.compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
tags:
  - Atomics
  - JavaScript
  - メソッド
  - 共有メモリー
browser-compat: javascript.builtins.Atomics.compareExchange
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
---
{{JSRef}}

静的な **`Atomics.compareExchange()`** メソッドは、指定された値を配列内の指定した位置に格納し、その値を返します。これは、その位置での古い値が、期待された値と同じであったかどうかを返すものです。これは不可分操作で、変更された値が書き戻されるまで、他の書き込みが行われないことが保証されます。

{{EmbedInteractiveExample("pages/js/atomics-compareexchange.html")}}

## 構文

```js
Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)
```

### 引数

- `typedArray`
  - : 共有整数の型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} の何れかです。
- `index`
  - : `typedArray` で `value` と交換する位置です。
- `expectedValue`
  - : 等価性をチェックする値です。
- `replacementValue`
  - : 交換する数値です。

### 返値

指定された位置 (`typedArray[index]`) にあった古い値です。

### 例外

- `typedArray` が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- `index` が `typedArray` の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

## 例

### compareExchange() の使用

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // returns 7, the old value
Atomics.load(ta, 0); // 12
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
