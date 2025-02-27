---
title: "AbortSignal: any() 静的メソッド"
short-title: any()
slug: Web/API/AbortSignal/any_static
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`AbortSignal.any()`** は静的メソッドで、中止シグナルが入った反復可能オブジェクトを受け取り、{{domxref("AbortSignal")}} を返します。返される中止シグナルは、渡された反復可能オブジェクト内の中止シグナルのいずれかが中止された時中止されます。{{domxref("AbortSignal.reason", "中止の理由","","true")}}は、中止された最初のシグナルの理由に設定されます。渡された中止シグナルのいずれかが既に中止されている場合は、既に中止と設定されている {{domxref("AbortSignal")}} を返します。

## 構文

```js-nolint
AbortSignal.any(iterable)
```

### 引数

- `iterable`
  - : 中止シグナルが入った[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) ({{jsxref("Array")}} など) です。

### 返値

以下の性質を持つ {{domxref("AbortSignal")}} です。

- 渡された中止シグナルのいずれかが既に中止されている場合、**既に中止されています**。返される {{domxref("AbortSignal")}} の理由は、既に中止されている最初の中止シグナルの {{domxref("AbortSignal.reason", "reason")}} に設定されています。
- `iterable` 内の中止シグナルのいずれかが中止された時、**非同期で中止されます**。{{domxref("AbortSignal.reason", "reason")}} は、最初に中止された中止シグナルの理由に設定されます。

## 例

### `AbortSignal.any()` の使用

この例では、{{domxref("AbortController")}} 由来のシグナルと、{{domxref("AbortSignal/timeout_static", "AbortSignal.timeout")}} 由来のタイムアウトシグナルの両方を組み合わせるデモを行います。

```js
const cancelDownloadButton = document.getElementById("cancelDownloadButton");

const userCancelController = new AbortController();

cancelDownloadButton.addEventListener("click", () => {
  userCancelController.abort();
});

// 5 分後にタイムアウトする
const timeoutSignal = AbortSignal.timeout(1_000 * 60 * 5);

// このシグナルは、ユーザーがキャンセルボタンをクリックするか、
// 5 分経過するかのいずれか早いタイミングで中止します
const combinedSignal = AbortSignal.any([
  userCancelController.signal,
  timeoutSignal,
]);

try {
  const res = await fetch(someUrlToDownload, {
    // いずれかのシグナルが中止されたら、フェッチを止める
    signal: combinedSignal,
  });
  const body = await res.blob();
  // ダウンロードした内容を処理する:
  // ...
} catch (e) {
  if (e.name === "AbortError") {
    // ユーザーがキャンセルした
  } else if (e.name === "TimeoutError") {
    // ダウンロードがタイムアウトしたことをユーザーに示す
  } else {
    // その他のエラー (ネットワークエラーなど)
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
