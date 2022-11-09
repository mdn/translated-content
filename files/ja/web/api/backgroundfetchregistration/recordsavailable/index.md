---
title: BackgroundFetchRegistration.recordsAvailable
slug: Web/API/BackgroundFetchRegistration/recordsAvailable
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`recordsAvailable`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns `true` if there are requests and responses to be accessed. If this returns false then {{domxref("BackgroundFetchRegistration.match()","match()")}} and {{domxref("BackgroundFetchRegistration.matchAll()","matchAll()")}} can't be used.

## 値

A {{jsxref("boolean")}}.

## 例

Logging this property to the console returns `true` or `false` to indicate if there are records.

```js
console.log(bgFetch.recordsAvailable);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
