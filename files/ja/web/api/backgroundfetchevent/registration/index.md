---
title: BackgroundFetchEvent.registration
slug: Web/API/BackgroundFetchEvent/registration
l10n:
  sourceCommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`registration`** は {{domxref("BackgroundFetchEvent")}} インターフェイスの読み取り専用プロパティで、 {{domxref("BackgroundFetchRegistration")}} オブジェクトを返します。

## 値

{{domxref("BackgroundFetchRegistration")}}。

## 例

以下の例では、ユーザーがダウンロードの進捗表示のUIをクリックすると、 `onbackgroundfetchclick` イベントが発火します。 `event.registration` を呼び出すと、現在の {{domxref("BackgroundFetchRegistration")}} が返されます。

```js
addEventListener("backgroundfetchclick", (event) => {
  console.log(event.registration);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
