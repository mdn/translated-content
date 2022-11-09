---
title: BackgroundFetchRegistration.id
slug: Web/API/BackgroundFetchRegistration/id
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`id`** は {{domxref("BackgroundFetchRegistration")}} インターフェイスの読み取り専用プロパティで、バックグラウンドフェッチの `ID` をコピーした文字列を返します。

## 値

文字列。

## 例

このプロパティをコンソールにログ出力すると、 fetch を登録したときに設定された識別子が出力されます。今回の場合、`"my-fetch"` が出力されます。

```js
console.log(bgFetch.id); // "my-fetch"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
