---
title: BackgroundFetchRegistration.recordsAvailable
slug: Web/API/BackgroundFetchRegistration/recordsAvailable
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`recordsAvailable`** は {{domxref("BackgroundFetchRegistration")}} インターフェイスの読み取り専用プロパティで、アクセス可能なリクエストや応答が存在するとき、`true` を返します。この値が `false` のとき、{{domxref("BackgroundFetchRegistration.match()","match()")}} と {{domxref("BackgroundFetchRegistration.matchAll()","matchAll()")}} は使用できません。

## 値

{{jsxref("boolean")}}。

## 例

このプロパティをコンソールにログ出力すると、`true` または `false` を出力し、record が存在するかどうかを示します。

```js
console.log(bgFetch.recordsAvailable);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
