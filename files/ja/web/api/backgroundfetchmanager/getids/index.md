---
title: BackgroundFetchManager.getIds()
slug: Web/API/BackgroundFetchManager/getIds
page-type: web-api-instance-method
l10n:
  sourceCommit: 23aea0fbb04893c64890c89a634250283e2beb71
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`getIds()`** method of the {{domxref("BackgroundFetchManager")}} interface returns the IDs of all registered background fetches.

## 構文

```js-nolint
getIds()
```

### 引数

None.

### 返値

A {{jsxref("Promise")}} that resolves with an {{jsxref('Array')}} of {{jsxref('String', 'strings')}}.

### 例外

None.

## 例

The following examples shows how to retrieve the IDs of all registered background fetches. With an active {{domxref('ServiceWorker', 'service worker')}}, use the {{domxref('ServiceWorkerRegistration.backgroundFetch')}} property to access the `BackgroundFetchManager` object and call its `get()` method.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const ids = await swReg.backgroundFetch.getIds();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
