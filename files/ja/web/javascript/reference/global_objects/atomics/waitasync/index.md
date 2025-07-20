---
title: Atomics.waitAsync()
short-title: waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Atomics.waitAsync()`** 静的メソッドは、共有メモリー位置が指定された値を含むことを確認し、メモリー位置が指定された値と一致しない場合は文字列 `"not-equal"` を含む `value` プロパティを持つオブジェクトを即座に返し、タイムアウトが 0 に設定されている場合は `"timed-out"` を返します。それ以外の場合、このメソッドは、`value` プロパティが {{jsxref("Promise")}} であるオブジェクトを返し、これは {{jsxref("Atomics.notify()")}} が呼び出されたときに `"ok"`、またはタイムアウトが切れたときに `"timed-out"` で履行されます。

`Atomics.waitAsync()` および {{jsxref("Atomics.notify()")}} を一緒に使用すると、共有メモリー内の値に基づいてスレッドの同期を有効にすることができます。スレッドは、同期値が変更された場合、すぐに処理を続行することも、同期ポイントに到達したときに別のスレッドからの通知を待つこともできます。

このメソッドは、 {{jsxref("SharedArrayBuffer")}} のビューである {{jsxref("Int32Array")}} または {{jsxref("BigInt64Array")}} でのみ動作します。これはノンブロッキングであり、{{jsxref("Atomics.wait()")}} とは異なり、メインスレッドで使用することができます。スレッド全体をブロックしないため、プロミスが決定する前に共有メモリーにアクセスしないように注意する必要があります。

## 構文

```js-nolint
Atomics.waitAsync(typedArray, index, value)
Atomics.waitAsync(typedArray, index, value, timeout)
```

### 引数

- `typedArray`
  - : {{jsxref("SharedArrayBuffer")}} のビューである {{jsxref("Int32Array")}} または {{jsxref("BigInt64Array")}}。
- `index`
  - : 待機する `typedArray` 内の位置。
- `value`
  - : 検査で期待される値。
- `timeout` {{optional_inline}}
  - : 待機時間をミリ秒単位で指定します。 {{jsxref("NaN")}} （および `NaN` に変換される値、例えば `undefined`）は {{jsxref("Infinity")}} となります。負の値は `0` となります。

### 返値

以下のプロパティを持つオブジェクト ({{jsxref("Object")}}) です。

- `async`
  - : `value` プロパティが {{jsxref("Promise")}} であるかどうかを示す論理値です。
- `value`
  - : `async` が `false` の場合、文字列 `"not-equal"` または `"timed-out"` （`timeout` 引数が `0` の場合のみ）になります。 `async` が `true` の場合、 `"ok"` または `"timed-out"` の文字列値で履行されるプロミス ({{jsxref("Promise")}}) になります。このプロミスは決して拒否されません。

### 例外

- {{jsxref("TypeError")}}
  - : `typedArray` が、 {{jsxref("SharedArrayBuffer")}} のビューである {{jsxref("Int32Array")}} または {{jsxref("BigInt64Array")}} でない場合に発生します。
- {{jsxref("RangeError")}}
  - : `index` が `typedArray` の範囲を超えている場合に発生します。

## 例

### waitAsync() の使用

共有された `Int32Array` があったとします。

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

読み取りスレッドは、0 であると思われる位置 0 で休眠して待機しています。
`result.value` はプロミスになります。

```js
const result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

読み込みスレッドまたは別のスレッドで、メモリー位置 0 が呼び出され、プロミスは `"ok"` で解決できます。

```js
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

`"ok"` に解決されない場合、共有メモリーの場所の値が期待した値ではなかったか（`value` はプロミスではなく `"not-equal"` になります）、タイムアウトに達したということです（プロミスは `"time-out"` に解決されます）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.notify()")}}
