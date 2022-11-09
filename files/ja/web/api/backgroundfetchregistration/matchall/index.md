---
title: BackgroundFetchRegistration.matchAll()
slug: Web/API/BackgroundFetchRegistration/matchAll
l10n:
  sourceCommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`matchAll()`** method of the {{domxref("BackgroundFetchRegistration")}} interface returns an array of matching {{domxref("BackgroundFetchRecord")}} objects.

## 構文

```js-nolint
matchAll(request)
matchAll(request,options)
```

### 引数

- `request`
  - : The {{domxref("Request")}} for which you are attempting to find records.
    This can be a {{domxref("Request")}} object or a URL.
- `options` {{optional_inline}}

  - : An object that sets options for the `match` operation. The available
    options are:

    - `ignoreSearch`
      - : A boolean value that specifies whether to
        ignore the query string in the URL. For example, if set to
        `true` the `?value=bar` part of
        `http://foo.com/?value=bar` would be ignored when performing a match.
        It defaults to `false`.
    - `ignoreMethod`
      - : A boolean value. When `true`,
        prevents matching operations from validating the {{domxref("Request")}} `http` method.
        If `false` (the default) only `GET` and `HEAD` are allowed.
    - `ignoreVary`
      - : A boolean value. When `true` indicates that the [`VARY`](/en-US/docs/Web/HTTP/Headers/Vary)
        header should be ignored.
        It defaults to `false`.

### 返値

A {{jsxref("Promise")}} that resolves with an array of all matching {{domxref("BackgroundFetchRecord")}} objects.

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the {{domxref("BackgroundFetchRegistration.recordsAvailable","recordsAvailable")}} flag is `false`, indicating that there is no fetch in progress.

## 例

Use `matchAll()` with no parameters to return all of the records in a background fetch.

```js
const records = await bgFetch.matchAll();
console.log(records); // an array of BackgroundFetchRecord objects
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
