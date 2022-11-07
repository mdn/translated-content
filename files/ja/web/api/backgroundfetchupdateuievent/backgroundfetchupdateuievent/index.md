---
title: BackgroundFetchUpdateUIEvent()
slug: Web/API/BackgroundFetchUpdateUIEvent/BackgroundFetchUpdateUIEvent
l10n:
  sourceCommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`BackgroundFetchUpdateUIEvent()`** constructor creates a new {{domxref("BackgroundFetchUpdateUIEvent")}} object. This constructor is not typically used as the browser creates these objects itself and provides them to background fetch event callbacks.

## 構文

```js-nolint
new BackgroundFetchEvent(type, options)
```

### 引数

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `backgroundfetchsuccess` or `backgroundfetchfail`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}_, has the following properties:
    - `registration`
      - : A {{domxref("BackgroundFetchRegistration")}} object.

### 返値

A new {{domxref("BackgroundFetchUpdateUIEvent")}} object.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
