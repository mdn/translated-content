---
title: BackgroundFetchRecord.responseReady
slug: Web/API/BackgroundFetchRecord/responseReady
l10n:
  sourceCommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`responseReady`** read-only property of the {{domxref("BackgroundFetchRecord")}} interface returns a {{jsxref("Promise")}} that resolves with a {{domxref("Response")}}.

## 値

A {{jsxref("Promise")}} that resolves with a {{domxref("Response")}}.

## 例

In this example an individual `BackgroundFetchRecord` is returned using {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}}. The value of `responseReady` is returned and logged to the console.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("No record found");
    return;
  }

  const response = await record.responseReady;
  console.log(`Here's the response`, response);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
