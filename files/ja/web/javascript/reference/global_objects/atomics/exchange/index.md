---
title: Atomics.exchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/exchange
tags:
  - Atomics
  - JavaScript
  - メソッド
  - 共有メモリー
browser-compat: javascript.builtins.Atomics.exchange
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/exchange
---
{{JSRef}}

静的な **`Atomics.exchange()`** メソッドは、指定された値を配列内の指定した位置に格納し、その値を返します。これは不可分操作で、古い値を読み取ってから新しい値を書き込むまでの間に他の物が書き込まないことを保証します。

{{EmbedInteractiveExample("pages/js/atomics-exchange.html")}}

## 構文

```js
Atomics.exchange(typedArray, index, value)
```

### 引数

- `typedArray`
  - : 共有整数の型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} の何れかです。
- `index`
  - : `typedArray` で `value` と交換する位置です。
- `value`
  - : 交換する数値です。

### 返値

指定された位置 (`typedArray[index]`) にあった古い値です。

### 例外

- `typedArray` が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- `index` が `typedArray` の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

## 例

### exchange() の使用

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.exchange(ta, 0, 12); // 古い値である 0 を返す
Atomics.load(ta, 0); // 12
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.compareExchange()")}}
