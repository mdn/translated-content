---
title: Atomics.compareExchange()
short-title: compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Atomics.compareExchange()`** は静的メソッドで、指定された値を配列内の指定した位置に格納し、その値を返します。これは、その位置での古い値が、期待された値と同じであったかどうかを返すものです。これは不可分操作で、変更された値が書き戻されるまで、他の書き込みが行われないことが保証されます。

{{InteractiveExample("JavaScript デモ: Atomics.compareExchange()")}}

```js interactive-example
// バイト単位でサイズを指定して SharedArrayBuffer を作成
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

Atomics.compareExchange(uint8, 0, 5, 2); // Returns 5
console.log(Atomics.load(uint8, 0));
// 予想される結果: 2

Atomics.compareExchange(uint8, 0, 5, 4); // Returns 2
console.log(Atomics.load(uint8, 0));
// 予想される結果: 2
```

## 構文

```js-nolint
Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)
```

### 引数

- `typedArray`
  - : 共有整数の型付き配列です。 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, {{jsxref("BigUint64Array")}} の何れかです。
- `index`
  - : `typedArray` で `replacementValue` と交換する位置です。
- `expectedValue`
  - : 等価性をチェックする値です。
- `replacementValue`
  - : 交換する数値です。

### 返値

指定された位置 (`typedArray[index]`) にあった古い値です。返値が `expectedValue` と等しい場合、交換は成功です。それ以外の場合、交換は失敗です。

### 例外

- {{jsxref("TypeError")}}
  - : `typedArray` が許可された整数型のいずれでもない場合に発生します。
- {{jsxref("RangeError")}}
  - : `index` が `typedArray` の範囲を超えている場合に発生します。

## 例

### compareExchange() の使用

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // 古い値である 7 を返す
Atomics.load(ta, 0); // 12
```

### 返値の検査

[コンペア・アンド・スワップ](ja.wikipedia.org/wiki/コンペア・アンド・スワップ)は、新しい値を最新の情報を基に計算することを保証します。その間に別のスレッドによって値が更新されていた場合、書き込みは失敗します。したがって、 `compareExchange()` の返値を調べて失敗したかどうかを確認し、必要に応じて再試行する必要があります。

リンク先のウィキペディアの記事から引用した、不可分加算器（{{jsxref("Atomics.add()")}} と同じ機能）の一例です。

```js
function add(mem, index, a) {
  let done = false;
  while (!done) {
    const value = Atomics.load(mem, index);
    done = Atomics.compareExchange(mem, index, value, value + a) === value;
  }
  return value + a;
}
```

まず、指定された位置の値を読み込み、新しい値で更新しようとします。値が正常に更新されるまで、この処理を繰り返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
