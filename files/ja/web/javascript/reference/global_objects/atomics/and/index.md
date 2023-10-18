---
title: Atomics.and()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/and
---

{{JSRef}}

静的な **`Atomics.and()`** メソッドは、配列内の指定した位置の値に指定した値でビット単位の AND を計算し、その位置の古い値を返します。これは不可分操作で、修正された値が書き戻されるまで、他の書き込みが起こらないことを保証します。

{{EmbedInteractiveExample("pages/js/atomics-and.html")}}

## 構文

```js
Atomics.and(typedArray, index, value);
```

### 引数

- `typedArray`
  - : 共有整数の型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} の何れかです。
- `index`
  - : `typedArray` でビット単位の AND を計算する位置です。
- `value`
  - : ビット単位の AND を取る数値です。

### 返値

指定された位置 (`typedArray[index]`) にあった古い値です。

### 例外

- `typedArray` が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- `index` が `typedArray` の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

## 解説

ビット単位の AND 操作は、 `a` と `b` の両方が 1 であった場合のみ 1 を生成します。 AND 操作の真理値表を示します。

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

例えば、ビット単位の AND を `5 & 1` で行うと、結果は `0001` すなわち 10 進数で 1 となります。

```plain
5  0101
1  0001
   ----
1  0001
```

## 例

### and() の使用

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.and(ta, 0, 1); // 古い値である 5 を返す
Atomics.load(ta, 0); // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.or()")}}
- {{jsxref("Atomics.xor()")}}
