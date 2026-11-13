---
title: Atomics.notify()
short-title: notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Atomics.notify()`** は静的メソッドで、待ち行列で休眠状態にあるエージェントに通知します。

> [!NOTE]
> この操作は {{jsxref("SharedArrayBuffer")}} のビューである {{jsxref("Int32Array")}} または {{jsxref("BigInt64Array")}} に対してのみ動作します。
> 共有されていない `ArrayBuffer` オブジェクトでは `0` を返します。

## 構文

```js-nolint
Atomics.notify(typedArray, index, count)
```

### 引数

- `typedArray`
  - : {{jsxref("SharedArrayBuffer")}} のビューである {{jsxref("Int32Array")}} または {{jsxref("BigInt64Array")}}。
- `index`
  - : 起動する対象となる `typedArray` 中の位置。
- `count` {{optional_inline}}
  - : 通知する休眠状態のエージェントの数。既定値は {{jsxref("Infinity")}} です。

### 返値

覚醒したエージェントの数を返します。この `typedArray` が共有されていない {{jsxref("ArrayBuffer")}} のビューである場合は `0` を返します。

### 例外

- {{jsxref("TypeError")}}
  - : この `typedArray` が {{jsxref("Int32Array")}} または {{jsxref("BigInt64Array")}} のどちらでもない場合に発生します。
- {{jsxref("RangeError")}}
  - : `index` が `typedArray` の範囲を超えている場合に発生します。

## 例

### `notify` の使用

共有された `Int32Array` を用意します。

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

指定された `value` が指定された `index` に格納されている値と一致するため、読み取りスレッドは位置 0 で休眠状態で待機しています。
書き込みスレッドが、指定された `typedArray` の位置 0 で `Atomics.notify()` を呼び出すまで、読み取りスレッドは移動しません。
覚醒した後、位置 0 の値が書き込みスレッドによって変更されていない場合、読み取りスレッドは**休眠状態に戻らず**、処理を続行することに注意してください。

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

書き手のスレッドは新しい値を格納し、待機中のスレッドに通知を行います。

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.waitAsync()")}}
