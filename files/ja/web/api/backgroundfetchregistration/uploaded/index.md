---
title: BackgroundFetchRegistration.uploaded
slug: Web/API/BackgroundFetchRegistration/uploaded
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`uploaded`** は {{domxref("BackgroundFetchRegistration")}} インターフェイスの読み取り専用プロパティで、送信に成功したバイト数を返します。初期値は `0` です。

このプロパティの値が変化したとき、関連する {{domxref("BackgroundFetchRegistration")}} オブジェクトで、[progress](/ja/docs/Web/API/BackgroundFetchRegistration/progress_event) イベントが発火します。

## 値

{{jsxref("number")}}。

## 例

このプロパティをコンソールにログ出力すると、アップロードされたバイト数が出力されます。

```js
console.log(bgFetch.uploaded);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
