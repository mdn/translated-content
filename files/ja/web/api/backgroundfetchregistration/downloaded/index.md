---
title: BackgroundFetchRegistration.downloaded
slug: Web/API/BackgroundFetchRegistration/downloaded
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`downloaded`** は {{domxref("BackgroundFetchRegistration")}} インターフェイスの読み取り専用プロパティで、 今までにダウンロードされた容量(バイト単位)を返します。初期値は `0` です。

このプロパティの値が変化したとき、関連する {{domxref("BackgroundFetchRegistration")}} オブジェクトで、[progress](/ja/docs/Web/API/BackgroundFetchRegistration/progress_event) イベントが発火します。

## 値

{{jsxref("number")}}。

## 例

このプロパティをコンソールにログ出力すると、ダウンロードされたバイト数が出力されます。

```js
console.log(bgFetch.downloaded);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
