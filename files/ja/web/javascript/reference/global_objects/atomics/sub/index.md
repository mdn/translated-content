---
title: Atomics.sub()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/sub
tags:
  - Atomics
  - JavaScript
  - メソッド
  - 共有メモリー
browser-compat: javascript.builtins.Atomics.sub
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/sub
---
{{JSRef}}

静的な **`Atomics.sub()`** メソッドは、配列内の指定した位置の値から減算して、その場所にあった古い値を返します。この不可分操作は、修正された値が書き戻されるまで、ほかの書き込みが発生しないことを保証します。

{{EmbedInteractiveExample("pages/js/atomics-sub.html")}}

## 構文

```js
Atomics.sub(typedArray, index, value)
```

### 引数

- `typedArray`
  - : 整数の型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, {{jsxref("BigUint64Array")}} のいずれかです。
- `index`
  - : `typedArray` で `value` を減算する位置です。
- `value`
  - : 減算する数値です。

### 返値

指定された位置 (`typedArray[index]`) にあった古い値です。

### 例外

- typedArray が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- index が typedArray の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

## 例

### sub の使用

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 48;

Atomics.sub(ta, 0, 12); // 古い値である 48 を返す
Atomics.load(ta, 0); // 36
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.add()")}}
