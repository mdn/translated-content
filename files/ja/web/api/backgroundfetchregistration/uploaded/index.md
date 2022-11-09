---
title: BackgroundFetchRegistration.uploaded
slug: Web/API/BackgroundFetchRegistration/uploaded
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`uploaded`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns the size in bytes successfully sent, initially `0`.

If the value of this property changes, the [progress](/en-US/docs/Web/API/BackgroundFetchRegistration/progress_event) event is fired at the associated {{domxref("BackgroundFetchRegistration")}} object.

## 値

A {{jsxref("number")}}.

## 例

Logging this property to the console returns the number of bytes uploaded.

```js
console.log(bgFetch.uploaded);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
