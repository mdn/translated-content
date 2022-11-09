---
title: BackgroundFetchRegistration.id
slug: Web/API/BackgroundFetchRegistration/id
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`id`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns a copy of the background fetch's `ID`.

## 値

A string.

## 例

Logging the this part to the console returns the identifier set when registering the fetch. In this case, `"my-fetch"`.

```js
console.log(bgFetch.id); // "my-fetch"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
