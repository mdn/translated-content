---
title: BackgroundFetchRecord.responseReady
slug: Web/API/BackgroundFetchRecord/responseReady
l10n:
  sourceCommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`responseReady`** は、 {{domxref("BackgroundFetchRecord")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Response")}} によって解決される {{jsxref("Promise")}} を返します。

## 値

{{domxref("Response")}} によって解決される {{jsxref("Promise")}} 。

## 例

以下の例では、 {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}} の使用によって生成された `BackgroundFetchRecord` から `responseReady` の値を受け取り、コンソールにログ出力しています。

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("recordは見つかりませんでした");
    return;
  }

  const response = await record.responseReady;
  console.log(`応答：`, response);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
