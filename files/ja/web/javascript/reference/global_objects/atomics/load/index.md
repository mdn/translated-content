---
title: Atomics.load()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/load
tags:
  - Atomics
  - JavaScript
  - メソッド
  - 共有メモリー
browser-compat: javascript.builtins.Atomics.load
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/load
---
{{JSRef}}

静的な **`Atomics.load()`** メソッドは、配列内の指定された位置の値を返します。

{{EmbedInteractiveExample("pages/js/atomics-load.html")}}

## 構文

```js
Atomics.load(typedArray, index)
```

### 引数

- `typedArray`
  - : 整数の型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} の何れかです。
- `index`
  - : `typedArray` の中で値を読み込む位置。

### 返値

指定された位置 (`typedArray[index]`) にある値です。

### 例外

- `typedArray` が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- `index` が `typedArray` の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

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
