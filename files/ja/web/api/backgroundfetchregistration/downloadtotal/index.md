---
title: BackgroundFetchRegistration.downloadTotal
slug: Web/API/BackgroundFetchRegistration/downloadTotal
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`downloadTotal`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns the total size in bytes of this download. This is set when the background fetch was registered, or `0` if not set.

## 値

A {{jsxref("number")}}.

## 例

Logging this property to the console returns the total size in bytes of this download.

```js
console.log(bgFetch.downloadTotal);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
