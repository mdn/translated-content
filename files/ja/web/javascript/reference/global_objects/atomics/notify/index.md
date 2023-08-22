---
title: Atomics.notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
---

{{JSRef}}

静的メソッドである **`Atomics.notify()`** は、待ち行列で休眠状態にあるエージェントに通知します。

> **メモ:** この操作は共有された {{jsxref("Int32Array")}} に対してのみ動作します。
> 共有されていない `ArrayBuffer` オブジェクトでは `0` を返します。

## 構文

```js
Atomics.notify(typedArray, index, count);
```

### 引数

- `typedArray`
  - : 共有された {{jsxref("Int32Array")}}。
- `index`
  - : 起動する対象となる `typedArray` 中の位置。
- `count` {{optional_inline}}
  - : 通知する休眠状態のエージェントの数。既定値は {{jsxref("Infinity", "+Infinity")}} です。

### 返値

- 起動したエージェントの数を返します。
- 共有されていない {{jsxref("ArrayBuffer")}} オブジェクトが使用された場合は、 `0`
  を返します。

### 例外

- `typedArray` が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- `index` が `typedArray` の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

## 例

### `notify` の使用

共有された `Int32Array` を用意します。

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

読み手のスレッドは、0 番目の値が 0 であることを期待して休眠状態になります。それが満たされている間は処理が進みません。しかし、書き手のスレッドが新しい値を格納した場合、読み手のスレッドは書き手のスレッドによって起動され、新しい値 (123) を取得します。

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
