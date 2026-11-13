---
title: "AbortSignal: timeout() 静的メソッド"
short-title: timeout()
slug: Web/API/AbortSignal/timeout_static
l10n:
  sourceCommit: 58163fc9e99e2ea7eb6c2b698f02343009351dd9
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`AbortSignal.timeout()`** は静的メソッドで、指定した時間が経過すると自動的に中止する {{domxref("AbortSignal")}} を返すものです。

このシグナルは、タイムアウト時には `TimeoutError` {{domxref("DOMException")}} で中止されます。

タイムアウトは経過時間ではなく活動時間に基づきます。コードが実行されているワーカーがサスペンドされている場合や、文書がバックフォワードキャッシュ ("[bfcache](https://web.dev/articles/bfcache)") にある場合は、事実上一時停止されます。

複数のシグナルを組み合わせるには、{{domxref("AbortSignal/any_static", "AbortSignal.any()")}} を使用することができます。例えば、タイムアウトシグナルまたは {{domxref("AbortController.abort()")}} を呼び出してダウンロードを直接中止させることができます。

## 構文

```js-nolint
AbortSignal.timeout(time)
```

### 引数

- `time`
  - : 返された {{domxref("AbortSignal")}} が中止するまでの「アクティブ」な時間をミリ秒単位で指定します。
    この値は 0 と {{jsxref("Number.MAX_SAFE_INTEGER")}} の間でなければなりません。

### 返値

{{domxref("AbortSignal")}} です。

このシグナルはタイムアウト時に {{domxref("AbortSignal.reason")}} プロパティに `TimeoutError` {{domxref("DOMException")}} が、ユーザーによって処理が発生した場合には `AbortError` {{domxref("DOMException")}} が設定されて中断されます。

## 例

フェッチ処理に失敗した場合、5 秒後にタイムアウトする例を下記に示します。
このメソッドが対応していない場合、ブラウザーの「停止」ボタンが押された場合、他にも何らかの理由で失敗する可能性があることに注意してください。

```js
const url = "https://path_to_large_file.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    // この例外は、中止シグナルによるもの
    console.error("タイムアウト: 結果を取得するまで 5 秒以上かかりました。");
  } else if (err.name === "AbortError") {
    // この例外はフェッチ処理そのものから発生した
    console.error(
      "ユーザー操作（ブラウザーの停止ボタン、タブの閉じなど）によりフェッチが中止されました。",
    );
  } else if (err.name === "TypeError") {
    console.error("AbortSignal.timeout() メソッドに対応していません");
  } else {
    // ネットワークエラー、またはその他の問題
    console.error(`Error: type: ${err.name}, message: ${err.message}`);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
