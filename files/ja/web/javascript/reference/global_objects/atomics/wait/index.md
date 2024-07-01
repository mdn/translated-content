---
title: Atomics.wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
---

{{JSRef}}

**`Atomics.wait()`** は静的なメソッドで、 {{jsxref("Int32Array")}} 中の指定された位置に指定された値が保存されているかどうかを検証し、検証できるまでスリープ、もしくはタイムアウトします。返値は "`ok`", "`not-equal`", "`timed-out`" のいずれかです。

> **メモ:** この操作は共有された {{jsxref("Int32Array")}} に対してのみ可能で、またメインスレッドでは実行できません。

## 構文

```js
Atomics.wait(typedArray, index, value);
Atomics.wait(typedArray, index, value, timeout);
```

### 引数

- `typedArray`
  - : 共有された {{jsxref("Int32Array")}}。
- `index`
  - : 待つ対象となる `typedArray` の中の位置。
- `value`
  - : 期待される値。
- `timeout` {{optional_inline}}
  - : ミリ秒で表した待ち時間。時間が指定されなかった場合は {{jsxref("Infinity")}}。

### 返値

文字列で、 "ok", "not-equal", or "timed-out" のいずれか。

### 例外

- typedArray が許可された整数型の何れでもない場合、{{jsxref("TypeError")}} が発生します。
- index が typedArray の範囲を超えている場合、 {{jsxref("RangeError")}} が発生します。

## 例

### wait() の使用

次のような共有された `Int32Array` があったとします。

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

読み手のスレッドはスリープし、 0 番目の値が 0 であることを期待して待ちます。これが成立している間、処理は進みません。しかし、書き手のスレッドが新しい値を格納した場合、書き手のスレッドによって通知され、新しい値 (123) が返ります。

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

書き手のスレッドは新しい値を格納し、待っているスレッドに書き込みが完了したことを知らせます。

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
- {{jsxref("Atomics.notify()")}}
