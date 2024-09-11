---
title: "Request: signal プロパティ"
short-title: signal
slug: Web/API/Request/signal
l10n:
  sourceCommit: 989453176fd8756828b34b743a677a797d897156
---

{{APIRef("Fetch API")}}

**`signal`** は {{DOMxRef("Request")}} インターフェイスの読み取り専用プロパティで、このリクエストに関連付けられた {{domxref("AbortSignal")}} を返します。

## 値

{{DOMxRef("AbortSignal")}} オブジェクトです。

## 例

```js
// 新しい中止コントローラーを作成
const controller = new AbortController();

// このコントローラーの AbortSignal オブジェクトを使用してリクエストを作成
const req = new Request("/", { signal: controller.signal });

// 中止された場合にメッセージをログ出力するイベントハンドラーを追加
req.signal.addEventListener("abort", () => {
  console.log("abort");
});

// 中止された場合は、AbortSignalの理由をログ出力
fetch(req).catch(() => {
  if (signal.aborted) {
    if (signal.reason) {
      console.log(`リクエストは ${signal.reason} が原因で中止されました。`);
    } else {
      console.log("リクエストは中止されましたが、理由は示されませんでした。");
    }
  } else {
    console.log("リクエストは中止されませんでしたが、異常終了しました。");
  }
});

// 実際にリクエストを中止
controller.abort();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
