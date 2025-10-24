---
title: Atomics.wait()
short-title: wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Atomics.wait()`** 静的メソッドは、共有メモリー位置に指定された値が含まれていることを確認し、含まれている場合は、覚醒通知またはタイムアウトを待つために休眠します。メモリー位置が指定された値と一致しない場合は `"not-equal"`、 {{jsxref("Atomics.notify()")}} によって覚醒した場合は `"ok"`、タイムアウトが切れた場合は `"timed-out"` という文字列を返します。

`Atomics.wait()` と {{jsxref("Atomics.notify()")}} は、共有メモリー内の値に基づいてスレッドの同期ができるようにするために一緒に使用されます。スレッドは、同期値が変更された場合、すぐに処理を続行することも、同期ポイントに到達したときに別のスレッドからの通知を待つこともできます。

このメソッドは、{{jsxref("SharedArrayBuffer")}} のビューである {{jsxref("Int32Array")}} または {{jsxref("BigInt64Array")}} でのみ動作します。これはブロッキング操作であり、メインスレッドでは使用できません。このメソッドの非ブロック、非同期バージョンについては、{{jsxref("Atomics.waitAsync()")}} をご覧ください。

## 構文

```js-nolint
Atomics.wait(typedArray, index, value)
Atomics.wait(typedArray, index, value, timeout)
```

### 引数

- `typedArray`
  - : {{jsxref("SharedArrayBuffer")}} のビューである {{jsxref("Int32Array")}} または {{jsxref("BigInt64Array")}}
- `index`
  - : 待つ対象となる `typedArray` の中の位置。
- `value`
  - : 検査で期待される値。
- `timeout` {{optional_inline}}
  - : 待機時間（ミリ秒単位）。{{jsxref("NaN")}}（および `NaN` に変換される値、たとえば `undefined`）は {{jsxref("Infinity")}} になります。負の値は `0` になります。

### 返値

文字列で、 `"not-equal"`, `"ok"`, `"timed-out"` のいずれかです。

- 初期値 `value` が `index` に格納されている値と等しくない場合、`"not-equal"` が即座に返されます。
- `Atomics.notify()` の呼び出しによって目覚めた場合、**期待される値が変更されているかどうかに関係なく**、`"ok"` が返されます。
- `Atomics.notify()` によって目覚めなかった場合、スリープ待機が指定した `timeout` を超えたときに `"timed-out"` が返されます。

### 例外

- {{jsxref("TypeError")}}
  - : 次のいずれかの場合に発生します。
    - `typedArray` が、 {{jsxref("SharedArrayBuffer")}} のビューである {{jsxref("Int32Array")}} または {{jsxref("BigInt64Array")}} でない場合。
    - 現在のスレッドをブロックできない場合（例えば、メインスレッドであるため）。
- {{jsxref("RangeError")}}
  - : `index` が `typedArray` の範囲を超えている場合に発生します。

## 例

### wait() の使用

次のような共有された `Int32Array` があったとします。

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

読み取りスレッドは、指定された `value` が指定された `index` に格納されている値と一致するため、位置 0 で休眠して待機しています。
書き込みスレッドが、指定された `typedArray` の位置 0 で `Atomics.notify()` を呼び出すまで、読み取りスレッドは移動しません。
覚醒した後、位置 0 の値が書き込みスレッドによって変更されていない場合、読み取りスレッドは休眠状態に**戻らず**、処理を続行することに注意してください。

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
- {{jsxref("Atomics.waitAsync()")}}
- {{jsxref("Atomics.notify()")}}
