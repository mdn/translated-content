---
title: BackgroundFetchRegistration.result
slug: Web/API/BackgroundFetchRegistration/result
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`result`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns a string indicating whether the background fetch was successful or failed.

If the value of this property changes, the [progress](/en-US/docs/Web/API/BackgroundFetchRegistration/progress_event) event is fired at the associated {{domxref("BackgroundFetchRegistration")}} object.

## 値

One of the following strings:

- `""`
  - : The fetch is active so there is no result.
- `"success"`
  - : The background fetch was successful.
- `"failure"`
  - : The background fetch failed. This only appears when there is no ability for the browser to retry.

## 例

Logging this property to the console returns a string indicating the status, or an empty string if the fetch is still active.

```js
console.log(bgFetch.result);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
