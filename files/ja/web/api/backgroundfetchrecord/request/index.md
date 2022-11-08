---
title: BackgroundFetchRecord.request
slug: Web/API/BackgroundFetchRecord/request
l10n:
  sourceCommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`request`** read-only property of the {{domxref("BackgroundFetchRecord")}} interface returns the details of the resource to be fetched.

## 値

A {{domxref("Request")}}.

## 例

In this example an individual `BackgroundFetchRecord` is returned using {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}}. The `request` is returned and logged to the console.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("No record found");
    return;
  }

  console.log(`Here's the request`, record.request);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
