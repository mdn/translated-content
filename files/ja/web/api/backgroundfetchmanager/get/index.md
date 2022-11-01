---
title: BackgroundFetchManager.get()
slug: Web/API/BackgroundFetchManager/get
page-type: web-api-instance-method
l10n:
  sourceCommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`get()`** method of the {{domxref("BackgroundFetchManager")}} interface returns a {{jsxref("Promise")}} that resolves with the {{domxref("BackgroundFetchRegistration")}} associated with the provided `id` or {{jsxref("undefined")}} if the `id` is not found.

## 構文

```js-nolint
get(id)
```

### 引数

- `id`
  - : the ID of a {{domxref("backgroundFetchRegistration")}} defined by calling {{domxref("BackgroundFetchRegistration.fetch","fetch()")}}.

### 返値

A {{jsxref("Promise")}} that resolves with a {{domxref("BackgroundFetchRegistration")}} or {{jsxref("undefined")}}.

## 例

The following examples shows how to use `get()` to retrieve a {{domxref("BackgroundFetchRegistration")}}. With an active {{domxref('ServiceWorker', 'service worker')}}, use the {{domxref('ServiceWorkerRegistration.backgroundFetch')}} to access the `BackgroundFetchManager` object and call its `get()` method.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.get("my-fetch");
});
// my code block
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
