---
title: "AbortSignal: throwIfAborted() メソッド"
short-title: throwIfAborted()
slug: Web/API/AbortSignal/throwIfAborted
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`throwIfAborted()`** メソッドは、シグナルが中止された場合、シグナルの中止理由 ({{domxref("AbortSignal.reason", "reason")}}) の例外を発生させ、それ以外の場合は何もしません。

中止に対応させる必要がある API は、{{domxref("AbortSignal")}} オブジェクトを受け入れ、 `throwIfAborted()` を使用して [`abort`](/ja/docs/Web/API/AbortSignal/abort_event) イベントが発生するとテストして例外を発生するようにすることができます。

このメソッドは、シグナルを受け取る関数に渡すのではなく、コード内の特定の時点で処理を中止するために使用することもできます。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
