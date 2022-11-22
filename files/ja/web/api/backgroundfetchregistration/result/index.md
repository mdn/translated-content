---
title: BackgroundFetchRegistration.result
slug: Web/API/BackgroundFetchRegistration/result
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`result`** は {{domxref("BackgroundFetchRegistration")}} インターフェイスの読み取り専用プロパティで、バックグラウンドフェッチが成功したか失敗したかを表す文字列を返します。

このプロパティの値が変化したとき、関連する {{domxref("BackgroundFetchRegistration")}} オブジェクトで、[progress](/ja/docs/Web/API/BackgroundFetchRegistration/progress_event) イベントが発火します。

## 値

下記文字列のいずれかの値をとります。

- `""`
  - : フェッチは進行中なので、結果は未確定です。
- `"success"`
  - : バックグラウンドのフェッチは成功しました。
- `"failure"`
  - : バックグラウンドのフェッチは失敗しました。これは、ブラウザーがリトライできないときにのみ返されます。

## 例

このプロパティをコンソールにログ出力すると、フェッチの進行中であれば空文字列が、そうでなければ結果を表す文字列が出力されます。

```js
console.log(bgFetch.result);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
