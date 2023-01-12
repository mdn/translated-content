---
title: AbortSignal.throwIfAborted()
slug: Web/API/AbortSignal/throwIfAborted
l10n:
  sourceCommit: 8d27f508bd2c6270918fb3b047d73b57e8b949d3
---

{{APIRef("DOM")}}

throwIfAborted()`**メソッドは、シグナルが中止された場合、シグナルの中止理由 ({{domxref("AbortSignal.reason", "reason")}}) の例外を発生させ、それ以外の場合は何もしません。

中止に対応させる必要がある API は、{{domxref("AbortSignal")}} オブジェクトを受け入れ、 `throwIfAborted()` を使用して [`abort`](/ja/docs/Web/API/AbortSignal/abort_event) イベントが発生するとテストして例外を発生するようにすることができます。

このメソッドは、シグナルを受け取る関数に渡すのではなく、コード内の特定の点で処理を中止するために使用することもできます。

## 構文

```js-nolint
throwIfAborted()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

下記の例は、仕様書から引用しています。

### ポーリング操作の中止

この例では、ポーリング処理を中止するために `throwIfAborted()` を使用する方法を紹介します。

非同期の `waitForCondition()` 関数が、別の非同期関数 `func`、対象となる値 `targetValue`、そして `AbortSignal` と共に呼び出される場合を考えてみます。
このメソッドでは、ループの中で `func` の結果と `targetValue` を比較し、一致したら返します。

```js
async function waitForCondition(func, targetValue, { signal } = {}) {
  while (true) {
    signal?.throwIfAborted();

    const result = await func();
    if (result === targetValue) {
      return;
    }
  }
}
```

ループを反復処理するたびに、 `throwIfAborted()` を使用して、もし処理が中止された場合にはシグナルの `reason` を例外として投げます（それ以外の場合は何もしません）。
シグナルが中止された場合、 `waitForCondition()` のプロミスが拒否されます。

### 中止可能な API の実装

中止することを対応する必要がある API は `AbortSignal` オブジェクトを受け入れ、必要なときにその状態を使用して中止シグナル処理を開始させることができます。

{{jsxref("Promise")}} ベースの API は、`AbortSignal` の中止理由 ({{domxref("AbortSignal.reason", "reason")}}) で未確定のプロミスを拒否して、中止シグナルに応答する必要があります。
例えば、シグナルを受け取ってプロミスを返す以下の `myCoolPromiseAPI` を考えてみましょう。
シグナルが既に中止されている場合、あるいは中止イベントが検出された場合、プロミスは直ちに拒否されます。
そうでなければ、プロミスは完全に終了し、プロミスを解決します。

```js
function myCoolPromiseAPI(/* … ,*/ { signal }) {
  return new Promise((resolve, reject) => {
    // If the signal is already aborted, immediately throw in order to reject the promise.
    if (signal.aborted) {
      reject(signal.reason);
    }

    // Perform the main purpose of the API
    // Call resolve(result) when done.

    // Watch for 'abort' signals
    signal.addEventListener("abort", () => {
      // Stop the main operation
      // Reject the promise with the abort reason.
      reject(signal.reason);
    });
  });
}
```

そして、 API は次のように使用されるかもしれません。
処理を中止するために {{domxref("AbortController.abort()")}} が呼び出されることに注意してください。

```js
const controller = new AbortController();
const signal = controller.signal;

startSpinner();

myCoolPromiseAPI({ /* … ,*/ signal })
  .then((result) => {})
  .catch((err) => {
    if (err.name === "AbortError") return;
    showUserErrorMessage();
  })
  .then(() => stopSpinner());

controller.abort();
```

プロミスを返さない API も同じように反応するかもしれません。
場合によっては、そのシグナルを吸収することが意味を持つかもしれません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
