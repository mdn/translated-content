---
title: BackgroundFetchRegistration.downloadTotal
slug: Web/API/BackgroundFetchRegistration/downloadTotal
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`downloadTotal`** は {{domxref("BackgroundFetchRegistration")}} インターフェイスの読み取り専用プロパティで、このダウンロード全体の容量をバイト単位で返します。このプロパティはバックグラウンドフェッチの登録時に設定されます。値が設定されなかった場合、`0` を返します。

## 値

{{jsxref("number")}}。

## 例

このプロパティをコンソールにログ出力すると、ダウンロード全体の容量(バイト単位)が出力されます。

```js
console.log(bgFetch.downloadTotal);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
