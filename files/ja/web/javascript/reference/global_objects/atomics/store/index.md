---
title: Atomics.store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
---

{{JSRef}}

静的な **`Atomics.store()`** メソッドは、指定された値を配列内の指定した位置に格納し、その値を返します。

{{EmbedInteractiveExample("pages/js/atomics-store.html")}}

## 構文

```js
Atomics.store(typedArray, index, value);
```

### 引数

- `typedArray`
  - : 整数の型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} の何れかです。
- `index`
  - : `typedArray` で `value` を格納する位置です。
- `value`
  - : 格納する値です。

### 返値

格納された値です。

### 例外

- `typedArray` が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- `index` が `typedArray` の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

## 例

### store() の使用

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.store(ta, 0, 12); // 12
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.load()")}}
