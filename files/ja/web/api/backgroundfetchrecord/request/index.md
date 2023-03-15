---
title: BackgroundFetchRecord.request
slug: Web/API/BackgroundFetchRecord/request
l10n:
  sourceCommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`request`** は {{domxref("BackgroundFetchRecord")}} インターフェイスの読み取り専用プロパティで、フェッチするリソースの詳細を返します。

## 値

{{domxref("Request")}} 。

## 例

以下の例では、 {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}} の使用によって生成された `BackgroundFetchRecord` から `request` の値を受け取り、コンソールにログ出力しています。

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("recordは見つかりませんでした");
    return;
  }

  console.log(`リクエスト：`, record.request);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
