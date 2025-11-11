---
title: "PeriodicSyncEvent: tag プロパティ"
slug: Web/API/PeriodicSyncEvent/tag
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

{{domxref("PeriodicSyncEvent")}} インターフェイスの読み取り専用プロパティ **`tag`** は、{{domxref('PeriodicSyncEvent')}} 用の開発者定義の識別子を返します。これは、{{domxref('PeriodicSyncManager')}} インターフェイスの {{domxref('PeriodicSyncManager.register()')}} メソッドを呼ぶ際に指定されます。ウェブアプリケーションは、異なる定期的なタスクを異なる頻度で実行するため、複数のタグを使用できます。

## 値

定義された識別子を表す {{jsxref('String')}} を返します。

## 例

以下の例は、サービスワーカーで定期的な同期イベントを受け取り、`tag` プロパティにアクセスするデモを行います。

```js
self.addEventListener("periodicsync", (event) => {
  console.log(event.tag); // イベントのタグを記録する
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
