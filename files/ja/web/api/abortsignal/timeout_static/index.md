---
title: AbortSignal.timeout()
slug: Web/API/AbortSignal/timeout_static
---

{{APIRef("DOM")}}

静的な **`AbortSignal.timeout()`** メソッドは、指定した時間が経過すると自動的に中止する {{domxref("AbortSignal")}} を返すものです。

このシグナルは、タイムアウト時には `TimeoutError` {{domxref("DOMException")}} で、ブラウザーの停止ボタン（または他にも組み込まれた「停止」処理）を押した場合には `AbortError` {{domxref("DOMException")}} で中止されます。
これにより、通常ユーザーへの通知が必要なタイムアウトエラーと、そうでないユーザーによる中止の発生を UI で区別できます。

タイムアウトは経過時間ではなく活動時間に基づきます。コードが実行されているワーカーがサスペンドされている場合や、文書がバックフォワードキャッシュ ("[bfcache](https://web.dev/bfcache/)") にある場合は、事実上一時停止されます。

> **メモ:** 執筆時点では、複数のシグナルを組み合わせる方法はありません。
> つまり、タイムアウトシグナルを使用するか、{{domxref("AbortController.abort()")}}を呼び出してダウンロードを直接中止することはできません。

## 構文

```js-nolint
timeout(time)
```

### 引数

- `time`
  - : 返された {{domxref("AbortSignal")}} が中止するまでの「アクティブ」な時間をミリ秒単位で指定します。

### 返値

{{domxref("AbortSignal")}} です。

このシグナルはタイムアウト時に {{domxref("AbortSignal.reason")}} プロパティに `TimeoutError` {{domxref("DOMException")}} が、ユーザーによって処理が発生した場合には `AbortError` {{domxref("DOMException")}} が設定されて中断されます。

## 例

フェッチ処理に失敗した場合、5 秒後にタイムアウトする単純な例を下記に示します。
このメソッドが対応していない場合、ブラウザーの「停止」ボタンが押された場合、他にも何らかの理由で失敗する可能性があることに注意してください。

```js
const url = "https://path_to_large_file.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    console.error("Timeout: It took more than 5 seconds to get the result!");
  } else if (err.name === "AbortError") {
    console.error(
      "Fetch aborted by user action (browser stop button, closing tab, etc."
    );
  } else if (err.name === "TypeError") {
    console.error("AbortSignal.timeout() method is not supported");
  } else {
    // A network error, or some other problem.
    console.error(`Error: type: ${err.name}, message: ${err.message}`);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
