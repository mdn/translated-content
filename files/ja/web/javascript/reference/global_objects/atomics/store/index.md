---
title: Atomics.store()
short-title: store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Atomics.store()`** は静的メソッドで、指定された値を配列内の指定した位置に格納し、その値を返します。

{{InteractiveExample("JavaScript デモ: Atomics.store()")}}

```js interactive-example
// バイト単位でサイズを指定して SharedArrayBuffer を作成
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.store(uint8, 0, 2));
// 予想される結果: 2

console.log(Atomics.load(uint8, 0));
// 予想される結果: 2
```

## 構文

```js-nolint
Atomics.store(typedArray, index, value)
```

### 引数

- `typedArray`
  - : 整数の型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, {{jsxref("BigUint64Array")}} の何れかです。
- `index`
  - : `typedArray` で `value` を格納する位置です。
- `value`
  - : 格納する値です。

### 返値

格納された値です。

### 例外

- {{jsxref("TypeError")}}
  - : `typedArray` が許可された整数型のいずれでもない場合に発生します。
- {{jsxref("RangeError")}}
  - : `index` が `typedArray` の範囲を超えている場合に発生します。

## 例

### store() の使用

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.store(ta, 0, 12); // 12
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.load()")}}
