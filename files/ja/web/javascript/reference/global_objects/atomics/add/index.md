---
title: Atomics.add()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/add
tags:
  - Atomics
  - JavaScript
  - メソッド
  - 共有メモリー
browser-compat: javascript.builtins.Atomics.add
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/add
---
{{JSRef}}

静的な **`Atomics.add()`** メソッドは、配列内の指定した位置の値に加算して、その位置の古い値を返します。これは不可分操作で、修正された値が書き戻されるまで、他の書き込みが起こらないことを保証します。

{{EmbedInteractiveExample("pages/js/atomics-add.html")}}

## 構文

```js
Atomics.add(typedArray, index, value)
```

### 引数

- `typedArray`
  - : 共有整数の型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} の何れかです。
- `index`
  - : `typedArray` で `value` を加算する位置です。
- `value`
  - : 加算する数値です。

### 返値

指定された位置 (`typedArray[index]`) にあった古い値です。

### 例外

- `typedArray` が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- `index` が `typedArray` の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

## 例

### add() の使用

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12); // 古い値である 0 を返す。
Atomics.load(ta, 0); // 12
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.sub()")}}
