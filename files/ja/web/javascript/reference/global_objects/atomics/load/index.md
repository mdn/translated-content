---
title: Atomics.load()
short-title: load()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/load
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

静的な **`Atomics.load()`** メソッドは、配列内の指定された位置の値を返します。

{{InteractiveExample("JavaScript デモ: Atomics.load()")}}

```js interactive-example
// バイト単位でサイズを指定して SharedArrayBuffer を作成
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

// 5 + 2 = 7
console.log(Atomics.add(uint8, 0, 2));
// 予想される結果: 5

console.log(Atomics.load(uint8, 0));
// 予想される結果: 7
```

## 構文

```js-nolint
Atomics.load(typedArray, index)
```

### 引数

- `typedArray`
  - : 整数の型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, {{jsxref("BigUint64Array")}} の何れかです。
- `index`
  - : `typedArray` の中で値を読み込む位置。

### 返値

指定された位置 (`typedArray[index]`) にある値です。

### 例外

- {{jsxref("TypeError")}}
  - : `typedArray` が許可された整数型のいずれでもない場合に発生します。
- {{jsxref("RangeError")}}
  - : `index` が `typedArray` の範囲を超えている場合に発生します。

## 例

### `load` の使用

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12);
Atomics.load(ta, 0); // 12
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.store()")}}
