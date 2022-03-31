---
title: Atomics.xor()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/xor
tags:
  - Atomics
  - JavaScript
  - メソッド
  - 共有メモリー
browser-compat: javascript.builtins.Atomics.xor
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/xor
---
{{JSRef}}

**`Atomics.xor()`** は静的メソッドで、配列内の指定した位置にある指定された値とのビット単位の XOR を計算し、その位置にあった古い値を返します。これは不可分操作であり、変更された値が書き戻されるまで他の書き込みが行われないことが保証されます。

{{EmbedInteractiveExample("pages/js/atomics-xor.html")}}

## 構文

```js
Atomics.xor(typedArray, index, value)
```

### 引数

- `typedArray`
  - : 整数の型付き配列です。 {{jsxref("Int8Array")}}、{{jsxref("Uint8Array")}}、{{jsxref("Int16Array")}}、{{jsxref("Uint16Array")}}、{{jsxref("Int32Array")}}、{{jsxref("Uint32Array")}}、{{jsxref("BigInt64Array")}}、{{jsxref("BigUint64Array")}} のいずれかです。
- `index`
  - : `typedArray` の中でビット単位の XOR を計算する位置です。
- `value`
  - : ビット単位の XOR を計算する値です。

### 返値

指定された位置にあった古い値 (`typedArray[index]`) です。

### 例外

- {{jsxref("TypeError")}}: `typedArray` が許可されている整数の型ではなかった場合に発生します。
- {{jsxref("RangeError")}}: `index` が `typedArray` の範囲を超えていた場合に発生します。

## 解説

ビット単位の XOR 演算は、 `a` と `b` が異なる場合に 1 になります。
XOR 演算の真理値表は次の通りです。

| `a` | `b` | `a ^ b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

例えば、ビット単位の XOR では `5 ^ 1` の結果が `0100`、すなわち 10 進数で 4 になります。

```plain
5  0101
1  0001
   ----
4  0100
```

## 例

### xor の使用

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.xor(ta, 0, 1); // 古い値である 5 を返す
Atomics.load(ta, 0);  // 4
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.or()")}}
