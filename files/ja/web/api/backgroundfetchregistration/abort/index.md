---
title: BackgroundFetchRegistration.abort()
slug: Web/API/BackgroundFetchRegistration/abort
l10n:
  sourceCommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`abort()`** method of the {{domxref("BackgroundFetchRegistration")}} interface aborts an active background fetch.

## 構文

```js-nolint
abort()
```

### 引数

None.

### 返値

A {{jsxref("Promise")}} that resolves with `true` if the fetch is successfully aborted.

## 例

Use `abort()` to terminate a background fetch that is in progress.

```js
bgFetch.abort();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
